import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Group Kazakhstan — Дом, который понимает вас" },
      {
        name: "description",
        content:
          "Премиальные системы умного дома и автоматизации зданий. Smart Group Kazakhstan — 12 лет опыта, 450+ объектов в Казахстане.",
      },
      { property: "og:title", content: "Smart Group Kazakhstan" },
      { property: "og:description", content: "Дом, который понимает вас." },
    ],
  }),
  component: Index,
});

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80";

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
    title: "Резиденция Мангилик Ел",
    city: "Астана",
    type: "Резиденция",
    area: "420 м²",
    systems: ["Свет KNX", "Климат", "Безопасность", "Мультирум"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    title: "Esentai Park Apart-Hotel",
    city: "Алматы",
    type: "Апарт-отель",
    area: "12 500 м²",
    systems: ["Mobile key", "Управление номером", "BMS", "PMS-интеграция"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  },
  {
    title: "БЦ Almaty Tower",
    city: "Алматы",
    type: "Бизнес-центр",
    area: "18 000 м²",
    systems: ["BMS", "Доступ", "Энергоучёт", "Видеоаналитика"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
];

const devices = [
  {
    label: "Touch-панели",
    title: "Один экран. Любая сцена.",
    body: "Сенсорные панели KNX и Crestron — управление светом, климатом, мультимедиа без приложений.",
    image: "https://images.unsplash.com/photo-1558618047-f4b30c5e5bae?w=1000&q=80",
  },
  {
    label: "Сенсоры",
    title: "Здание чувствует людей.",
    body: "Присутствие, CO₂, влажность, шум — данные, которые делают климат и свет точными.",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=1000&q=80",
  },
  {
    label: "Шкафы автоматики",
    title: "Сердце системы.",
    body: "Промышленные контроллеры BACnet, KNX, Modbus — собранные под ваш объект щиты управления.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80",
  },
];

const blogPosts = [
  {
    eyebrow: "Резиденция",
    title: "Почему свет — это первое, что чувствует гость",
    excerpt: "Один из главных эффектов в премиальной резиденции создаётся не мебелью, а светом.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
  },
  {
    eyebrow: "Hospitality",
    title: "Mobile key и тишина вестибюля",
    excerpt: "Как отказ от стойки сокращает заезд до десяти секунд и меняет рейтинг отеля.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
  },
  {
    eyebrow: "BMS",
    title: "Где здание тратит лишний киловатт",
    excerpt:
      "Шесть точек, в которых OPEX уходит впустую — и где автоматизация даёт мгновенный эффект.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
];

function Index() {
  return (
    <main className="relative">
      {/* HERO — dark photo background */}
      <section className="section-dark relative min-h-screen flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
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
                className="font-hero text-[clamp(56px,11vw,180px)] leading-[0.88] text-white text-balance max-w-[14ch]"
              >
                Дом, который
                <br />
                понимает вас.
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
            <Stat to={450} suffix="+" label="Объектов" />
            <Stat to={12} label="Лет опыта" />
            <Stat to={40} suffix="+" label="Интеграций" />
            <Stat value="24/7" label="Поддержка" />
          </Reveal>
        </div>
      </section>

      {/* WHAT WE AUTOMATE — light gray */}
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

      {/* PROCESS — white, horizontal timeline */}
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

      {/* DEVICES — dark */}
      <section className="section-dark py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-6">
            Оборудование
          </Reveal>
          <Reveal
            as="h2"
            delay={120}
            className="font-hero text-[clamp(40px,7vw,104px)] leading-[0.98] text-white max-w-[18ch] mb-20"
          >
            Технологии, которые вы не видите.
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {devices.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 90}
                variant="breathe"
                className="rounded-2xl overflow-hidden bg-[#2a2a2c]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-3">
                    {d.label}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl text-white mb-3 tracking-tight">
                    {d.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#a1a1a6]">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES — light gray */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <Reveal
              as="h2"
              className="md:col-span-7 font-hero text-[clamp(40px,6vw,88px)] leading-[1]"
            >
              Почему Smart Group.
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

      {/* FEATURED PROJECTS — white */}
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

      {/* BLOG — light gray */}
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

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
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
      </section>

      {/* CONTACT FORM — white */}
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

      {/* FINAL CTA — dark */}
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
