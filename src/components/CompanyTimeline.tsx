import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import media from "@/assets/timeline-webp/manifest.json";
import { companyFoundedYear } from "@/lib/company";
import { milestones } from "@/lib/company-history";

const webp = import.meta.glob<string>("@/assets/timeline-webp/*.webp", {
  eager: true,
  import: "default",
  query: "?no-inline",
});

const imageSizes = [
  "(min-width: 80rem) 646px",
  "(min-width: 60rem) calc(56vw - 74px)",
  "(min-width: 40rem) calc(100vw - 66px)",
  "calc(100vw - 34px)",
].join(", ");

type Photo = {
  name: string;
  widths: number[];
  height: number;
  contain?: boolean;
  alt?: string;
};

function photoUrl(photo: Photo, width: number) {
  return webp[`/src/assets/timeline-webp/${photo.name}-${width}.webp`];
}

function HistoryGallery({
  photos,
  title,
  priority,
}: {
  photos: Photo[];
  title: string;
  priority: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const hasChanged = useRef(false);
  const photo = photos[current];
  const width = photo.widths[photo.widths.length - 1];
  const srcSet = photo.widths.map((size) => `${photoUrl(photo, size)} ${size}w`).join(", ");

  function move(step: number) {
    hasChanged.current = true;
    setCurrent((index) => (index + step + photos.length) % photos.length);
  }

  return (
    <figure className="company-history__gallery">
      <div className="company-history__photo">
        <img
          width={width}
          height={photo.height}
          alt={photo.alt ?? `${title}, фото ${current + 1}`}
          sizes={imageSizes}
          srcSet={srcSet}
          src={photoUrl(photo, width)}
          loading={priority || current !== 0 ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          draggable={false}
          data-contain={photo.contain ? "" : undefined}
          onLoad={({ currentTarget }) => {
            if (
              hasChanged.current &&
              !window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
              currentTarget.animate([{ opacity: 0.5 }, { opacity: 1 }], {
                duration: 260,
                easing: "ease-out",
              });
            }
          }}
        />
      </div>
      {photos.length > 1 && (
        <div className="company-history__controls" role="group" aria-label={`Фото: ${title}`}>
          <button type="button" onClick={() => move(-1)} aria-label="Предыдущее фото">
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Следующее фото">
            <ArrowRight aria-hidden="true" size={18} />
          </button>
          <span role="status">
            Фото {current + 1} из {photos.length}
          </span>
        </div>
      )}
    </figure>
  );
}

export function CompanyTimeline() {
  const router = useRouter();
  const touchStart = useRef<{ id: number; x: number; y: number } | null>(null);
  const wheelGesture = useRef({ lastEvent: -Infinity, distance: 0, advanced: false });
  const [stage, setStage] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const activeIndex = stage ?? 0;

  useEffect(() => {
    const showLinkedStage = () => {
      const index = milestones.findIndex(({ id }) => window.location.hash === `#history-${id}`);
      setStage((current) => (index < 0 ? (current ?? 0) : index));
    };
    showLinkedStage();
    window.addEventListener("popstate", showLinkedStage);
    window.addEventListener("hashchange", showLinkedStage);
    return () => {
      window.removeEventListener("popstate", showLinkedStage);
      window.removeEventListener("hashchange", showLinkedStage);
    };
  }, []);

  function goToStage(index: number) {
    setAnimate(true);
    setStage(Math.max(0, Math.min(index, milestones.length - 1)));
  }

  return (
    <section
      id="company-timeline"
      className="company-history"
      aria-labelledby="company-history-heading"
      tabIndex={-1}
    >
      <div className="company-history__inner">
        <header>
          <p className="company-history__eyebrow">С {companyFoundedYear} года</p>
          <h2 id="company-history-heading" className="company-history__heading">
            Наша история
          </h2>
        </header>

        <nav className="company-history__nav" aria-label="Этапы истории компании">
          <ul>
            {milestones.map(({ id, year, navigationLabel, title }, index) => {
              const stageHash = `history-${id}`;
              const label = year
                ? [year, navigationLabel].filter(Boolean).join(" · ")
                : (navigationLabel ?? "О компании");
              return (
                <li key={id}>
                  <a
                    href={`#${stageHash}`}
                    aria-label={`${label} — ${title}`}
                    aria-current={index === activeIndex ? "step" : undefined}
                    onClick={(event) => {
                      if (
                        event.button ||
                        event.metaKey ||
                        event.ctrlKey ||
                        event.shiftKey ||
                        event.altKey
                      ) {
                        return;
                      }
                      event.preventDefault();
                      goToStage(index);
                      if (window.location.hash !== `#${stageHash}`) {
                        void router.navigate({
                          to: ".",
                          hash: stageHash,
                          resetScroll: false,
                          hashScrollIntoView: false,
                        });
                      }
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="company-history__stage-nav">
          <p className="company-history__position" role="status">
            Этап {activeIndex + 1} из {milestones.length}
          </p>
          <div className="company-history__controls" role="group" aria-label="Смена этапа">
            <button
              type="button"
              aria-label="Предыдущий этап"
              aria-controls="company-history-stories"
              disabled={activeIndex === 0}
              onClick={() => goToStage(activeIndex - 1)}
            >
              <ArrowLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              aria-label="Следующий этап"
              aria-controls="company-history-stories"
              disabled={activeIndex === milestones.length - 1}
              onClick={() => goToStage(activeIndex + 1)}
            >
              <ArrowRight aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        <div
          id="company-history-stories"
          className="company-history__stories"
          data-enhanced={stage !== null ? "" : undefined}
          role="region"
          aria-label="Просмотр этапов"
          tabIndex={0}
          onWheel={(event) => {
            const unit =
              event.deltaMode === 1
                ? 16
                : event.deltaMode === 2
                  ? event.currentTarget.clientWidth
                  : 1;
            if (event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

            const gesture = wheelGesture.current;
            if (event.timeStamp - gesture.lastEvent > 180) {
              gesture.distance = 0;
              gesture.advanced = false;
            }
            gesture.lastEvent = event.timeStamp;
            if (gesture.advanced) return;

            gesture.distance += event.deltaX * unit;
            if (Math.abs(gesture.distance) >= 48) {
              gesture.advanced = true;
              goToStage(activeIndex + Math.sign(gesture.distance));
            }
          }}
          onPointerDown={(event) => {
            if (event.pointerType !== "touch" || !event.isPrimary) return;
            if (event.target instanceof Element && event.target.closest("a, button")) return;
            touchStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
          }}
          onPointerCancel={() => {
            touchStart.current = null;
          }}
          onPointerUp={(event) => {
            const start = touchStart.current;
            if (!start || start.id !== event.pointerId) return;
            touchStart.current = null;
            const horizontal = event.clientX - start.x;
            const vertical = event.clientY - start.y;
            if (Math.abs(horizontal) >= 44 && Math.abs(horizontal) > 1.25 * Math.abs(vertical)) {
              goToStage(activeIndex + (horizontal < 0 ? 1 : -1));
            }
          }}
          onKeyDown={(event) => {
            if (event.target instanceof Element && event.target.closest("a, button")) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              goToStage(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
        >
          <div
            className="company-history__strip"
            data-animate={animate ? "" : undefined}
            style={stage === null ? undefined : { transform: `translateX(${-stage * 100}%)` }}
          >
            {milestones.map(({ id, year, title, description, achievements }, index) => (
              <article
                key={id}
                id={`history-${id}`}
                className="company-history__story"
                aria-labelledby={`history-title-${id}`}
                tabIndex={-1}
                inert={stage !== null && index !== stage}
              >
                <header className="company-history__story-heading">
                  {year ? (
                    <time className="company-history__year" dateTime={String(year)}>
                      {year}
                    </time>
                  ) : (
                    <span className="company-history__year">{id === "sgk" ? "SGK" : "Архив"}</span>
                  )}
                  <h3 id={`history-title-${id}`} className="company-history__title">
                    {title}
                  </h3>
                </header>
                <HistoryGallery photos={media[id]} title={title} priority={index === 0} />
                <div className="company-history__copy">
                  <p>{description}</p>
                  <ul className="company-history__points">
                    {achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
