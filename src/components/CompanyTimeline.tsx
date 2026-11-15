import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useHistoryScroll } from "./useHistoryScroll";
import media from "@/assets/timeline-webp/manifest.json";
import { companyFoundedYear } from "@/lib/company";
import { milestones } from "@/lib/company-history";

const webp = import.meta.glob<string>("@/assets/timeline-webp/*.webp", {
  eager: true,
  import: "default",
  query: "?no-inline",
});

const imageSizes = [
  "(min-width: 84rem) 647px",
  "(min-width: 60rem) calc(51vw - 70px)",
  "(min-width: 40rem) calc(95vw - 68px)",
  "calc(100vw - 62px)",
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
  active,
  nearby,
}: {
  photos: Photo[];
  title: string;
  priority: boolean;
  active: boolean;
  nearby: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [loadedPhoto, setLoadedPhoto] = useState<string>();
  const hasChanged = useRef(false);
  const photo = photos[current];
  const width = photo.widths[photo.widths.length - 1];
  const srcSet = photo.widths.map((size) => `${photoUrl(photo, size)} ${size}w`).join(", ");

  function move(step: number) {
    hasChanged.current = true;
    setLoadedPhoto(undefined);
    setCurrent((index) => (index + step + photos.length) % photos.length);
  }

  return (
    <figure className="company-history__gallery">
      <div className="company-history__photo">
        {nearby && (
          <img
            width={width}
            height={photo.height}
            alt={photo.alt ?? `${title}, фото ${current + 1}`}
            sizes={imageSizes}
            srcSet={srcSet}
            src={photoUrl(photo, width)}
            loading={priority || active || current !== 0 ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
            draggable={false}
            data-contain={photo.contain ? "" : undefined}
            data-photo-loaded={photo.name === loadedPhoto ? "" : undefined}
            onLoad={() => {
              if (hasChanged.current) setLoadedPhoto(photo.name);
            }}
          />
        )}
      </div>
      {photos.length > 1 && (
        <div className="company-history__controls" role="group" aria-label={`Фото: ${title}`}>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Предыдущее фото"
            tabIndex={active ? 0 : -1}
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Следующее фото"
            tabIndex={active ? 0 : -1}
          >
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
  const { viewportRef, progressRef, rangeRef, activeIndex, first, scrollToStage } =
    useHistoryScroll();

  useEffect(() => {
    let frame = 0;
    const showLinkedStage = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          const index = milestones.findIndex(({ id }) => window.location.hash === `#history-${id}`);
          if (index >= 0) scrollToStage(index, false);
        });
      });
    };
    showLinkedStage();
    window.addEventListener("popstate", showLinkedStage);
    window.addEventListener("hashchange", showLinkedStage);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("popstate", showLinkedStage);
      window.removeEventListener("hashchange", showLinkedStage);
    };
  }, [scrollToStage]);

  return (
    <section
      id="company-timeline"
      className="company-history"
      aria-labelledby="company-history-heading"
      tabIndex={-1}
    >
      <div className="company-history__inner">
        <header className="company-history__header">
          <div>
            <p className="company-history__eyebrow">С {companyFoundedYear} года</p>
            <h2 id="company-history-heading" className="company-history__heading">
              Наша история
            </h2>
          </div>
          <p className="company-history__hint" id="company-history-hint">
            Листайте историю <ArrowRight aria-hidden="true" size={16} />
          </p>
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
                      scrollToStage(index);
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
          <a className="company-history__skip" href="#company-history-end">
            К следующему разделу
          </a>
          <div className="company-history__controls" role="group" aria-label="Смена этапа">
            <button
              type="button"
              aria-label="Предыдущий этап"
              aria-controls="company-history-stories"
              disabled={activeIndex === 0}
              onClick={() => scrollToStage(activeIndex - 1)}
            >
              <ArrowLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              aria-label="Следующий этап"
              aria-controls="company-history-stories"
              disabled={activeIndex === milestones.length - 1}
              onClick={() => scrollToStage(activeIndex + 1)}
            >
              <ArrowRight aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          id="company-history-stories"
          className="company-history__stories"
          role="region"
          aria-label="Просмотр этапов"
          aria-describedby="company-history-hint"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target instanceof Element && event.target.closest("a, button")) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              scrollToStage(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
        >
          <div className="company-history__strip">
            <div className="company-history__frame">
              {milestones.map(({ id, year, title, description, achievements }, index) => (
                <article
                  key={id}
                  id={`history-${id}`}
                  className="company-history__story"
                  aria-labelledby={`history-title-${id}`}
                  data-active={index === activeIndex ? "" : undefined}
                  inert={first >= 0 && index !== activeIndex}
                  tabIndex={-1}
                >
                  <header className="company-history__story-heading">
                    {year ? (
                      <time className="company-history__year" dateTime={String(year)}>
                        {year}
                      </time>
                    ) : (
                      <span className="company-history__year">
                        {id === "sgk" ? "SGK" : "Архив"}
                      </span>
                    )}
                    <h3 id={`history-title-${id}`} className="company-history__title">
                      {title}
                    </h3>
                  </header>
                  <HistoryGallery
                    photos={media[id]}
                    title={title}
                    priority={index === 0}
                    active={index === activeIndex}
                    nearby={first < 0 || (index >= first - 1 && index <= first + 2)}
                  />
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
        <div className="company-history__progress" ref={progressRef}>
          <span aria-hidden="true" />
          <input
            ref={rangeRef}
            type="range"
            min={0}
            max={milestones.length - 1}
            step={0.01}
            defaultValue={0}
            aria-label="Позиция в истории"
            aria-valuetext={`Этап ${activeIndex + 1} из ${milestones.length}`}
            onInput={(event) => scrollToStage(event.currentTarget.valueAsNumber, false)}
          />
        </div>
      </div>
      <div id="company-history-end" className="company-history__end" tabIndex={-1} />
    </section>
  );
}
