import { useState } from "react";
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
  const photo = photos[current];
  const width = photo.widths[photo.widths.length - 1];
  const srcSet = photo.widths.map((size) => `${photoUrl(photo, size)} ${size}w`).join(", ");

  function move(step: number) {
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
          data-contain={photo.contain ? "" : undefined}
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
            {milestones.map(({ id, year, navigationLabel, title }) => {
              const label = year
                ? [year, navigationLabel].filter(Boolean).join(" · ")
                : (navigationLabel ?? "О компании");
              return (
                <li key={id}>
                  <a href={`#history-${id}`} aria-label={`${label} — ${title}`}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="company-history__stories">
          {milestones.map(({ id, year, title, description, achievements }, index) => (
            <article
              key={id}
              id={`history-${id}`}
              className="company-history__story"
              aria-labelledby={`history-title-${id}`}
              tabIndex={-1}
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

        <a className="company-history__back" href="#company-timeline">
          К списку этапов
        </a>
      </div>
    </section>
  );
}
