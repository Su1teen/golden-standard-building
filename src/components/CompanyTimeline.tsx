import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Image glob imports
const defaultImgsObj = import.meta.glob('@/assets/timeline/default/*.{jpg,jpeg,png,HEIC,heic,JPG}', { eager: true, import: 'default' });
const imgs2017Obj = import.meta.glob('@/assets/timeline/2017/*.{jpg,jpeg,png,HEIC,heic,JPG}', { eager: true, import: 'default' });
const imgs2021Obj = import.meta.glob('@/assets/timeline/2021/*.{jpg,jpeg,png,HEIC,heic,JPG}', { eager: true, import: 'default' });
const imgs2023Obj = import.meta.glob('@/assets/timeline/2023/*.{jpg,jpeg,png,HEIC,heic,JPG}', { eager: true, import: 'default' });
const imgs2024Obj = import.meta.glob('@/assets/timeline/2024/*.{jpg,jpeg,png,HEIC,heic,JPG}', { eager: true, import: 'default' });

const defaultImgs = Object.values(defaultImgsObj) as string[];
const imgs2017 = Object.values(imgs2017Obj) as string[];
const imgs2021 = Object.values(imgs2021Obj) as string[];
const imgs2023 = Object.values(imgs2023Obj) as string[];
const imgs2024 = Object.values(imgs2024Obj) as string[];

function ImageSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartRef = useRef(0);
  const touchDeltaRef = useRef(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    touchDeltaRef.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchDeltaRef.current = e.touches[0].clientX - touchStartRef.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const delta = touchDeltaRef.current;
    if (Math.abs(delta) > 40) {
      setCurrent((c) => {
        if (delta < 0) return (c + 1) % images.length;
        return (c - 1 + images.length) % images.length;
      });
    }
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-[#1d1d1f]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          loading="lazy"
          draggable={false}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 md:gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-5 md:w-2 h-1.5 md:h-2 bg-white"
                  : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/40"
              }`}
              aria-label={`Show image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface Milestone {
  year: number;
  yearLabel?: string;
  title: string;
  description: string;
  achievements: string[];
  images: string[];
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
      "Работаем с лидерами индустрии, и имеем доступ ко всем современным инженерным протоколам и решениям.",
      "450+ реализованных объектов в Казахстане и Центральной Азии",
    ],
    images: defaultImgs.length > 0 ? defaultImgs : ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"],
  },
  {
    year: 2009,
    title: "Основание и первые проекты",
    description:
      "Официальная регистрация бренда SGK. Год, когда мы заложили фундамент нашего подхода к инженерии. Мы открыли первый шоурум, где клиенты могли вживую оценить выставку наших технологий и концепт по-настоящему умного пространства.",
    achievements: [
      "Регистрация бренда Smart Group Kazakhstan",
      "Открытие первого флагланского шоурума",
      "Успешная реализация первых коммерческих проектов",
    ],
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"],
  },
  {
    year: 2014,
    title: "Масштабирование и крупные партнеры",
    description:
      "Презентация наших комплексных решений для BI Group и других ведущих застройщиков региона. Мы перешли от частных объектов к системной работе на корпоративном и девелоперском уровне, доказав надежность наших инженерных стандартов.",
    achievements: [
      "Презентация технологий для BI Group",
      "Выход на рынок крупных девелоперских проектов",
      "Разработка стандартов массового внедрения BMS",
    ],
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"],
  },
  {
    year: 2017,
    title: "Международные стандарты",
    description:
      "Важный этап в признании наших компетенций — мы стали официальным участником ассоциации KNX. В этом же году состоялось открытие нового офиса в Астане для управления еще более масштабными и амбициозными проектами в столице.",
    achievements: [
      "Вступление в международную ассоциацию KNX",
      "Открытие представительства в Астане",
      "Реализация знаковых архитектурных проектов",
    ],
    images: imgs2017.length > 0 ? imgs2017 : ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"],
  },
  {
    year: 2021,
    title: "Новые горизонты",
    description:
      "Наш опыт и стандарты качества оказались востребованы за пределами страны — мы успешно завершили наш первый крупный проект в Санкт-Петербурге. В этом же году мы представили свои инновации на выставке Kazbuild и открыли новый современный шоурум.",
    achievements: [
      "Первый международный проект в Санкт-Петербурге",
      "Участие в крупнейшей выставке Kazbuild в Алматы",
      "Открытие обновленного шоурума",
    ],
    images: imgs2021.length > 0 ? imgs2021 : ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"],
  },
  {
    year: 2023,
    title: "Международная экспансия",
    description:
      "Переход на глобальный уровень. Открытие офиса в Дубае стало логичным шагом в развитии компании, позволив нам применять и обогащать наш инженерный опыт на одном из самых технологичных и требовательных рынков мира.",
    achievements: [
      "Открытие офиса в Дубае (ОАЭ)",
      "Интеграция международного опыта в казахстанские проекты",
      "Участие в проектах премиум-класса на Ближнем Востоке",
    ],
    images: imgs2023.length > 0 ? imgs2023 : ["https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80"],
  },
  {
    year: 2024,
    title: "Наука и инновации",
    description:
      "Технологии требуют фундаментального подхода. Открытие офиса в технопарке Назарбаев Университета позволило нам начать полноценные вклады в прикладную науку. Мы объединили академические знания с практическим опытом автоматизации зданий.",
    achievements: [
      "Открытие R&D офиса в Назарбаев Университете",
      "Инвестиции в научные исследования",
      "Разработка собственных аппаратно-программных комплексов",
    ],
    images: imgs2024.length > 0 ? imgs2024 : ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"],
  },
  {
    year: 2026,
    title: "Эра собственного производства",
    description:
      "Новый масштаб и независимость. Мы запускаем собственное производство оборудования и открываем самый крупный учебный центр и шоурум умного дома в Центральной Азии. Параллельно мы выходим на европейский рынок с открытием офиса в ЕС.",
    achievements: [
      "Запуск собственного инженерного производства",
      "Крупнейший учебный центр и шоурум УД в ЦА",
      "Открытие нового офиса в Европейском Союзе",
    ],
    images: ["https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80"],
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

    let delay = 5000;
    if (activeIndex === 0) delay = 1500;
    else if (activeIndex === 1) delay = 3000;

    timerRef.current = setTimeout(() => {
      goTo(activeIndex + 1);
    }, delay);
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
        className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-10 flex flex-col"
        style={{ minHeight: "min(92vh, 900px)" }}
      >
        {/* Header */}
        <div className="tl-entrance" style={{ transitionDelay: "100ms" }}>
          <div className="flex items-start md:items-center justify-between pt-16 sm:pt-20 md:pt-32 pb-6 sm:pb-8 md:pb-12 gap-4 sm:gap-6 flex-wrap">
            <div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-3 sm:mb-4">
                Наша история
              </div>
              <h2 className="font-hero text-[clamp(28px,7vw,72px)] leading-[1.05] text-white max-w-[18ch]">
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
                <ImageSlideshow images={milestone.images} />
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
                onMouseEnter={() => preloadImage(m.images[0])}
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
          className="tl-mobile-only tl-entrance flex-1 flex flex-col pb-6"
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
                  <ImageSlideshow images={m.images} />
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
