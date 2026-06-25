import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Milestone {
  year: number;
  yearLabel?: string;
  title: string;
  description: string;
  achievements: string[];
  image: string;
}

const milestones: Milestone[] = [
  {
    year: 0,
    yearLabel: "SGK",
    title: "Что такое Smart Group Kazakhstan",
    description:
      "Инженерная компания, которая проектирует, строит и обслуживает интеллектуальные системы управления зданиями и пространствами. Мы создаём технологии, которые работают так хорошо, что о них не нужно думать.",
    achievements: [
      "Полный цикл: проект → монтаж → программирование → сервис",
      "Прямые партнёрства с KNX, Crestron, Control4, Lutron",
      "450+ реализованных объектов в Казахстане и Центральной Азии",
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
  },
  {
    year: 2004,
    title: "Основание компании",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    achievements: [
      "Открытие первого офиса в Алматы",
      "Формирование инженерного ядра команды",
      "Первые пилотные проекты автоматизации",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    year: 2007,
    title: "Первые крупные проекты",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    achievements: [
      "Реализация 15+ коммерческих объектов",
      "Получение статуса KNX Partner",
      "Внедрение первых BMS-систем",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    year: 2010,
    title: "Расширение команды",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    achievements: [
      "Штат вырос до 30 специалистов",
      "Открытие офиса в Астане",
      "Запуск сервисного подразделения 24/7",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  },
  {
    year: 2013,
    title: "Выход на новые рынки",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    achievements: [
      "Первые международные проекты",
      "Партнёрство с Crestron и Lutron",
      "Сертификация ISO 9001",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    year: 2016,
    title: "Запуск новых направлений",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    achievements: [
      "Направление «Умный отель» и hospitality",
      "Интеграция IoT-платформ и аналитики",
      "Портфель 200+ реализованных объектов",
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
  },
  {
    year: 2019,
    title: "Технологическая модернизация",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    achievements: [
      "Переход на открытые протоколы и стандарты",
      "Собственная R&D лаборатория",
      "Интеграция AI-решений в BMS",
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
  {
    year: 2022,
    title: "Масштабирование бизнеса",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    achievements: [
      "Штат 60+ инженеров и проектировщиков",
      "Выручка выросла в 4 раза за 3 года",
      "450+ объектов в портфеле компании",
    ],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    year: 2026,
    title: "Новый этап развития",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    achievements: [
      "Запуск платформы нового поколения",
      "Экспансия в страны Центральной Азии",
      "Курс на устойчивое строительство и ESG",
    ],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
  },
];

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export function CompanyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileActive, setMobileActive] = useState(0);
  const navigatingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const activeRef = useRef(activeIndex);
  activeRef.current = activeIndex;

  const total = milestones.length;
  const milestone = milestones[activeIndex];
  const progress = (activeIndex / (total - 1)) * 100;

  const goTo = useCallback(
    (index: number) => {
      if (navigatingRef.current || index < 0 || index >= total || index === activeRef.current)
        return;
      navigatingRef.current = true;
      setContentVisible(false);
      setTimeout(() => {
        setActiveIndex(index);
        activeRef.current = index;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setContentVisible(true);
            setTimeout(() => {
              navigatingRef.current = false;
            }, 600);
          });
        });
      }, 400);
    },
    [total],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isVisible) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(activeRef.current - 1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(activeRef.current + 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible, goTo]);

  useEffect(() => {
    if (isPaused || !isVisible || activeIndex >= total - 1) return;
    timerRef.current = setTimeout(() => {
      goTo(activeIndex + 1);
    }, 7000);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, isPaused, isVisible, total, goTo]);

  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!track) return;
        const card = track.firstElementChild as HTMLElement | null;
        if (!card) {
          ticking = false;
          return;
        }
        const idx = Math.round(track.scrollLeft / (card.offsetWidth + 16));
        setMobileActive(Math.max(0, Math.min(idx, total - 1)));
        ticking = false;
      });
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [total]);

  function scrollToMobileCard(index: number) {
    const track = mobileTrackRef.current;
    if (!track || !track.children[index]) return;
    (track.children[index] as HTMLElement).scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <section
      ref={sectionRef}
      id="company-timeline"
      className={`section-dark tl-section ${isVisible ? "tl-visible" : ""}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="История компании"
    >
      <div
        className="tl-ambient tl-desktop-only"
        aria-hidden="true"
        style={{ left: `${15 + progress * 0.7}%`, top: "35%" }}
      />
      <div
        className="max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col"
        style={{ minHeight: "92vh" }}
      >
        {/* Header */}
        <div className="tl-entrance" style={{ transitionDelay: "100ms" }}>
          <div className="flex items-start md:items-center justify-between pt-24 md:pt-32 pb-8 md:pb-12 gap-6 flex-wrap">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-4">
                Наша история
              </div>
              <h2 className="font-hero text-[clamp(32px,5.5vw,72px)] leading-[1.05] text-white max-w-[18ch]">
                Более 20 лет развития и{"\u00a0"}инноваций
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="tl-counter">
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                className="tl-arrow"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Предыдущий этап"
              >
                <ArrowLeft className="size-[18px]" />
              </button>
              <button
                className="tl-arrow"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === total - 1}
                aria-label="Следующий этап"
              >
                <ArrowRight className="size-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div
          className="tl-desktop-only tl-entrance flex-1 flex items-center pb-4"
          style={{ transitionDelay: "250ms" }}
        >
          <div className="grid grid-cols-12 gap-8 lg:gap-14 w-full items-center">
            <div
              className={`col-span-12 lg:col-span-5 tl-text ${contentVisible ? "tl-show" : "tl-hide"}`}
            >
              <div className="tl-year-display" aria-hidden="true">
                {milestone.yearLabel || milestone.year}
              </div>
              <div className="tl-divider" />
              <h3 className="text-[24px] md:text-[28px] lg:text-[36px] font-bold text-white leading-[1.15] tracking-tight mb-5">
                {milestone.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#a1a1a6] mb-6 max-w-[44ch]">
                {milestone.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {milestone.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[14px] text-[#a1a1a6] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-[7px] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary-dark text-[13px]">
                Читать подробнее <ArrowRight className="size-3.5" />
              </button>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className={`tl-image-wrap ${contentVisible ? "tl-show" : "tl-hide"}`}>
                <img src={milestone.image} alt={milestone.title} loading="lazy" />
                <div className="tl-image-overlay" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Track */}
        <div
          className="tl-desktop-only tl-entrance pb-10 md:pb-14"
          style={{ transitionDelay: "400ms" }}
        >
          <div
            className="tl-track-inner"
            role="tablist"
            aria-label="Годы истории"
            style={
              {
                "--tl-count": total,
                "--tl-progress": activeIndex / (total - 1),
              } as React.CSSProperties
            }
          >
            <div className="tl-track-progress" />
            {milestones.map((m, i) => (
              <button
                key={m.year}
                className={`tl-node ${i === activeIndex ? "active" : ""} ${i < activeIndex ? "past" : ""}`}
                onClick={() => goTo(i)}
                onMouseEnter={() => preloadImage(m.image)}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`${m.yearLabel || m.year} — ${m.title}`}
              >
                <span className="tl-node-dot" />
                <span className="tl-node-label">{m.yearLabel || m.year}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div
          className="tl-mobile-only tl-entrance flex-1 flex flex-col pb-8"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="tl-m-years">
            {milestones.map((m, i) => (
              <button
                key={m.year}
                className={`tl-m-year ${i === mobileActive ? "active" : ""}`}
                onClick={() => scrollToMobileCard(i)}
              >
                {m.yearLabel || m.year}
              </button>
            ))}
          </div>
          <div ref={mobileTrackRef} className="tl-m-track">
            {milestones.map((m) => (
              <article key={m.year} className="tl-m-card">
                <div className="tl-m-card-img">
                  <img src={m.image} alt={m.title} loading="lazy" />
                </div>
                <div className="tl-m-card-body">
                  <div className="tl-m-card-year" aria-hidden="true">
                    {m.yearLabel || m.year}
                  </div>
                  <h3 className="tl-m-card-title">{m.title}</h3>
                  <p className="tl-m-card-desc">{m.description}</p>
                  <ul className="tl-m-card-achievements">
                    {m.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                  <button className="btn-secondary-dark text-[13px]">
                    Читать подробнее <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
