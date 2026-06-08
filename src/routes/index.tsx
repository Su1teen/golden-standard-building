import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ContactForm } from "@/components/ContactForm";
import { ProductCarousel } from "@/components/ProductCarousel";
import heroImage from "@/assets/hero_image.png";
import esilImg from "@/assets/esil.jpg";
import milleniumImg from "@/assets/millenium.jpg";
import greenparkImg from "@/assets/greenpark.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Group Kazakhstan — Технологии незаметного комфорта." },
      {
        name: "description",
        content:
          "Премиальные системы умного дома и автоматизации зданий. Smart Group Kazakhstan — 17 лет опыта, 450+ объектов в Казахстане.",
      },
      { property: "og:title", content: "Smart Group Kazakhstan" },
      { property: "og:description", content: "Технологии незаметного комфорта.." },
    ],
  }),
  component: Index,
});


const advantages = [
  {
    n: "01",
    title: "Своя инженерия",
    body: "Не интегратор-посредник. Собственный отдел проектирования, программирования и сервиса.",
  },
  {
    n: "02",
    title: "Прямые контракты",
    body: "Поставки напрямую от KNX, Crestron, Control4, Lutron, BACnet-производителей.",
  },
  {
    n: "03",
    title: "Открытая архитектура",
    body: "Никаких облачных замков. Ваша система остаётся вашей — навсегда.",
  },
  {
    n: "04",
    title: "Один партнёр на всё",
    body: "Проект, монтаж, программирование, сервис — внутри одной команды.",
  },
  {
    n: "05",
    title: "Сервис на годы",
    body: "Договоры обслуживания, удалённая диагностика, выезд по SLA.",
  },
  {
    n: "06",
    title: "Опыт всех масштабов",
    body: "От квартиры 80 м² до промышленных комплексов и сетей зданий.",
  },
];

const processSteps = [
  { n: "01", t: "Брифинг", d: "Слушаем задачу. Смотрим объект. Понимаем людей." },
  { n: "02", t: "Концепция", d: "Сценарии. Логика. Бюджет. Архитектура решения." },
  { n: "03", t: "Проект", d: "Инженерные схемы, кабельные журналы, согласование." },
  { n: "04", t: "Поставка", d: "Прямые поставки оборудования, сборка щитов." },
  { n: "05", t: "Монтаж и пуск", d: "Кабель, оборудование, программирование, обучение." },
  { n: "06", t: "Сервис", d: "Поддержка, развитие, обновления — на всю жизнь системы." },
];

const featuredProjects = [
  {
    title: "ЖК Esil Riverside",
    city: "Астана",
    type: "Жилой комплекс",
    area: "32 000 м²",
    systems: ["Свет KNX", "Климат", "Безопасность", "Видеонаблюдение"],
    image: esilImg,
  },
  {
    title: "ЖК Миллениум Парк",
    city: "Астана",
    type: "Жилой комплекс",
    area: "48 500 м²",
    systems: ["BMS", "Управление входом", "Мультирум", "Энергоучёт"],
    image: milleniumImg,
  },
  {
    title: "ЖК Green Park",
    city: "Астана",
    type: "Жилой комплекс",
    area: "27 000 м²",
    systems: ["KNX", "Доступ", "Климат", "Видеоаналитика"],
    image: greenparkImg,
  },
];

// YouTube videos from SmartGKaz channel
const youtubeVideos = [
  {
    videoId: "2JsF2lNOh40",
    eyebrow: "Умный дом",
    title: "Как мы автоматизировали загородную виллу: KNX + Iridium",
    excerpt:
      "Полный обзор реализованного проекта — интеграция KNX, мультирум Sonos, управление климатом и освещением из единого интерфейса Iridium.",
    url: "https://www.youtube.com/watch?v=2JsF2lNOh40",
    thumbnail: "https://i.ytimg.com/vi/2JsF2lNOh40/maxresdefault.jpg",
  },
  {
    videoId: "flO7x2v995M",
    eyebrow: "BMS",
    title: "BMS для бизнес-центра: как управлять 18 000 м² с одного экрана",
    excerpt:
      "Разбираем архитектуру системы BMS на реальном объекте — диспетчеризация инженерных систем, энергомониторинг и удалённый доступ.",
    url: "https://www.youtube.com/watch?v=flO7x2v995M",
    thumbnail: "https://i.ytimg.com/vi/flO7x2v995M/maxresdefault.jpg",
  },
  {
    videoId: "lXV5hnQ3gy8",
    eyebrow: "Hospitality",
    title: "Mobile key в отеле: как забыть о пластиковых картах навсегда",
    excerpt:
      "Показываем интеграцию SALTO KS + PMS для апарт-отеля Esentai Park: безключевой заезд, управление номером с телефона, автоматический checkout.",
    url: "https://www.youtube.com/watch?v=lXV5hnQ3gy8",
    thumbnail: "https://i.ytimg.com/vi/lXV5hnQ3gy8/maxresdefault.jpg",
  },
];

// Static blog posts (editorial content)
const editorialPosts = [
  {
    eyebrow: "Резиденция",
    title: "Почему свет — это первое, что чувствует гость",
    excerpt:
      "Один из главных эффектов в премиальной резиденции создаётся не мебелью, а светом. Разбираем сценарии Lutron для жилых пространств.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    slug: "light-in-residence",
  },
  {
    eyebrow: "BMS",
    title: "Где здание тратит лишний киловатт",
    excerpt:
      "Шесть точек, в которых OPEX уходит впустую — и где автоматизация даёт мгновенный эффект.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    slug: "building-energy-waste",
  },
];

function Index() {
  return (
    <main className="relative">
      {/* ─── HERO ─── */}
      <section className="section-dark relative min-h-screen flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
                Smart Group Kazakhstan
              </Reveal>
              <Reveal
                as="h1"
                delay={120}
                className="font-hero text-[clamp(42px,8.25vw,135px)] leading-[0.88] text-white text-balance max-w-[14ch]"
              >
                Технологии{" "}
                незаметного{" "}
                <br />
                комфорта.
              </Reveal>
              <Reveal
                as="p"
                delay={300}
                className="mt-8 max-w-[52ch] text-[17px] md:text-[19px] leading-[1.55] text-[#a1a1a6]"
              >
                Премиальные системы умного дома и автоматизации зданий. Инженерия, которая
                становится незаметной — и поэтому идеальной.
              </Reveal>

              <Reveal delay={450} className="mt-12 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Обсудить проект
                  <ArrowRight className="size-4" />
                </Link>
                <Link to="/projects" className="btn-secondary-dark">
                  Смотреть проекты
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Stats row */}
          <Reveal
            delay={600}
            className="mt-20 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4"
          >
            <Stat to={150} suffix="+" label="Объектов" />
            <Stat to={17} label="Лет опыта" />
            <Stat to={40} suffix="+" label="Интеграций" />
            <Stat value="24/7" label="Поддержка" />
          </Reveal>
        </div>
      </section>

      {/* ─── WHAT WE AUTOMATE ─── */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <Reveal
              as="h2"
              className="md:col-span-7 font-hero text-[clamp(40px,7vw,104px)] leading-[0.98] text-[#1d1d1f]"
            >
              Пространство, которое работает на человека.
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="md:col-span-5 self-end text-[17px] leading-relaxed text-[#6e6e73] max-w-[44ch]"
            >
              От квартиры до завода. 12 направлений, в которых мы строим системы — и сотни сценариев
              внутри каждого.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {solutions.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 4) * 70}
                variant="fade"
                className="image-card aspect-[3/4] group"
              >
                <Link to={s.route} className="block size-full relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="image-card-overlay" />
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] tracking-[0.22em] uppercase opacity-80">
                        {s.index}
                      </span>
                      <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.22em] uppercase text-[#86a8c4] mb-1">
                        {s.eyebrow}
                      </div>
                      <div className="font-bold text-lg md:text-xl leading-tight">{s.title}</div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-white py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            Наш процесс · 6 этапов
          </Reveal>
          <Reveal
            as="h2"
            delay={120}
            className="font-hero text-[clamp(40px,6vw,88px)] leading-[1] text-[#1d1d1f] max-w-[18ch] mb-20"
          >
            От первого звонка до жизни в системе.
          </Reveal>

          <div className="hidden md:grid grid-cols-6 gap-px bg-black/8 relative">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 80}
                className="bg-white p-8 pt-10 relative hover:bg-[#fafafa] transition-colors"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#0071e3] mb-6 font-mono">
                  {step.n}
                </div>
                <div className="font-bold text-[18px] tracking-tight text-[#1d1d1f] mb-3">
                  {step.t}
                </div>
                <p className="text-[13px] leading-relaxed text-[#6e6e73]">{step.d}</p>
              </Reveal>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80} className="timeline-step">
                <span className="dot" />
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#0071e3] mb-2 font-mono">
                  {step.n}
                </div>
                <div className="font-bold text-lg text-[#1d1d1f] mb-2">{step.t}</div>
                <p className="text-[14px] leading-relaxed text-[#6e6e73]">{step.d}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/process" className="btn-secondary-light">
              Подробно о процессе
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DEVICES / PRODUCT CAROUSEL ─── */}
      <section className="section-dark py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-6">
            Оборудование
          </Reveal>
          <Reveal
            as="h2"
            delay={120}
            className="font-hero text-[clamp(40px,7vw,104px)] leading-[0.98] text-white max-w-[18ch] mb-4"
          >
            Технологии, которые вы не видите.
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="text-[17px] leading-relaxed text-[#a1a1a6] max-w-[56ch] mb-16"
          >
            Интерактивный каталог оборудования — выберите категорию и изучите устройства, которые
            делают пространство умным.
          </Reveal>

          <Reveal delay={280} variant="breathe">
            <ProductCarousel />
          </Reveal>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <Reveal
              as="h2"
              className="md:col-span-7 font-hero text-[clamp(40px,6vw,88px)] leading-[1]"
            >
              Почему Smart Group Kazakhstan.
            </Reveal>
            <Reveal
              delay={140}
              className="md:col-span-5 self-end text-[16px] leading-relaxed text-[#6e6e73] max-w-[44ch]"
            >
              Не маркетинговые обещания. Шесть инженерных причин, по которым нам доверяют объекты от
              квартиры до промышленного комплекса.
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8">
            {advantages.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 70}
                className="bg-[#f5f5f7] p-8 md:p-10 hover:bg-white transition-colors"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#0071e3] mb-6 font-mono">
                  {a.n}
                </div>
                <h3 className="font-bold text-xl tracking-tight text-[#1d1d1f] mb-3">{a.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#6e6e73] max-w-[36ch]">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="section-white py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
                Проекты · избранное
              </Reveal>
              <Reveal
                as="h2"
                delay={120}
                className="font-hero text-[clamp(40px,6vw,88px)] leading-[1] text-[#1d1d1f] max-w-[16ch]"
              >
                Объекты, которые работают тихо.
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link to="/projects" className="btn-secondary-light">
                Все проекты
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                variant="fade"
                className="image-card aspect-[3/4] group"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="size-full object-cover"
                  loading="lazy"
                />
                <div className="image-card-overlay" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-2">
                    {p.city} · {p.type}
                  </div>
                  <div className="font-bold text-xl md:text-2xl leading-tight mb-1">{p.title}</div>
                  <div className="text-[13px] text-white/80 mb-4">{p.area}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.systems.map((sys) => (
                      <span
                        key={sys}
                        className="text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-full bg-white/15 backdrop-blur-md"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG — YouTube Videos + Editorial ─── */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
                Журнал
              </Reveal>
              <Reveal
                as="h2"
                delay={120}
                className="font-hero text-[clamp(36px,5.5vw,80px)] leading-[1] text-[#1d1d1f] max-w-[18ch]"
              >
                Истории, в которых инженерия работает.
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link to="/blog" className="btn-secondary-light">
                Все статьи
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          {/* YouTube video grid */}
          <div className="mb-8">
            <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#0071e3] mb-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#ff0000]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube · SmartGKaz
              </span>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {youtubeVideos.map((v, i) => (
                <Reveal key={v.videoId} delay={i * 80} className="group">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`yt-video-${v.videoId}`}
                    className="block"
                    aria-label={`Смотреть видео: ${v.title}`}
                  >
                    <div className="yt-thumbnail-wrap aspect-video rounded-2xl overflow-hidden mb-5 relative">
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault not available
                          const target = e.currentTarget;
                          if (target.src.includes("maxresdefault")) {
                            target.src = `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`;
                          }
                        }}
                      />
                      <div className="yt-play-overlay">
                        <div className="yt-play-btn">
                          <Play className="size-6 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="yt-badge">YouTube</span>
                      </div>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                      {v.eyebrow}
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#1d1d1f] mb-3 leading-snug group-hover:text-[#0071e3] transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#6e6e73]">{v.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-[#0071e3]">
                      Смотреть видео
                      <ArrowUpRight className="size-3.5" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Editorial posts separator */}
          <div className="border-t border-black/8 pt-12">
            <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-8">
              Статьи · редакция
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {editorialPosts.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="group">
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                    {p.eyebrow}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#1d1d1f] mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#6e6e73]">{p.excerpt}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="section-white py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
              Связаться
            </div>
            <h2 className="font-hero text-[clamp(36px,5vw,72px)] leading-[1.02] text-[#1d1d1f] mb-6">
              Поговорим о вашем объекте.
            </h2>
            <p className="text-[16px] leading-relaxed text-[#6e6e73] max-w-[36ch]">
              Опишите задачу — мы перезвоним в течение рабочего дня и согласуем встречу.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-dark py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal
            as="h2"
            className="font-hero text-[clamp(44px,8vw,140px)] leading-[0.96] text-white max-w-[16ch] mx-auto"
          >
            Спроектируем умное пространство под вас.
          </Reveal>
          <Reveal delay={180} className="mt-12 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">
              Спроектировать проект
              <ArrowRight className="size-4" />
            </Link>
            <Link to="/solutions" className="btn-secondary-dark">
              Все решения
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Stat({
  to,
  value,
  suffix,
  label,
}: {
  to?: number;
  value?: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="stat-divider py-4 md:py-0 md:pr-6">
      <div className="font-hero text-[clamp(44px,5vw,76px)] leading-none text-white">
        {typeof to === "number" ? <Counter to={to} suffix={suffix} /> : value}
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[#a1a1a6]">{label}</div>
    </div>
  );
}
