import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ContactForm } from "@/components/ContactForm";
import apartmentRender from "@/assets/render-apartment.png";
import villaRender from "@/assets/render-villa.png";
import officeRender from "@/assets/render-office.png";
import residentialRender from "@/assets/render-residential.png";
import buildingRender from "@/assets/render-hospital.png";
import mallRender from "@/assets/render-retail.png";
import hotelRender from "@/assets/render-hospitality.png";
import restaurantRender from "@/assets/render-restaurant.png";
import hospitalRender from "@/assets/render-healthcare.png";
import schoolRender from "@/assets/render-school.png";
import factoryRender from "@/assets/render-industry.png";
import agricultureRender from "@/assets/render-agriculture.png";

const renders: Record<string, string> = {
  "render-apartment.png": apartmentRender,
  "render-villa.png": villaRender,
  "render-office.png": officeRender,
  "render-residential.png": residentialRender,
  "render-hospital.png": buildingRender,
  "render-retail.png": mallRender,
  "render-hospitality.png": hotelRender,
  "render-restaurant.png": restaurantRender,
  "render-healthcare.png": hospitalRender,
  "render-school.png": schoolRender,
  "render-industry.png": factoryRender,
  "render-agriculture.png": agricultureRender,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Group Kazakhstan — Дом, который понимает вас" },
      {
        name: "description",
        content:
          "Интеллектуальные системы для квартир, вилл, офисов, отелей, ЖК и производств в Казахстане.",
      },
      { property: "og:title", content: "Smart Group Kazakhstan" },
      { property: "og:description", content: "Дом, который понимает вас." },
    ],
  }),
  component: Index,
});

const advantages = [
  {
    title: "Своя инженерия",
    body: "Не интегратор-посредник. Собственный отдел проектирования, программирования и сервиса.",
  },
  {
    title: "Прямые контракты",
    body: "Поставки напрямую от KNX, Crestron, Control4, Lutron, BACnet-производителей.",
  },
  {
    title: "Открытая архитектура",
    body: "Никаких облачных замков. Ваша система остаётся вашей — навсегда.",
  },
  {
    title: "Один партнёр на всё",
    body: "Проект, монтаж, программирование, сервис — внутри одной команды.",
  },
  {
    title: "Сервис на годы",
    body: "Договоры обслуживания, удалённая диагностика, выезд по SLA.",
  },
  {
    title: "Опыт всех масштабов",
    body: "От квартиры 80 м² до промышленных комплексов и сетей зданий.",
  },
];

const steps = [
  { t: "Брифинг", d: "Слушаем задачу. Смотрим объект. Понимаем людей." },
  { t: "Концепция", d: "Сценарии. Логика. Бюджет. Архитектура решения." },
  { t: "Проект", d: "Инженерные схемы, кабельные журналы, согласование." },
  { t: "Поставка", d: "Прямые поставки оборудования, сборка щитов." },
  { t: "Монтаж и пуск", d: "Кабель, оборудование, программирование, обучение." },
  { t: "Сервис", d: "Поддержка, развитие, обновления — на всю жизнь системы." },
];

const blog = [
  {
    eyebrow: "Резиденция",
    title: "Почему свет — это первое, что чувствует гость",
    excerpt: "Один из главных эффектов в премиальной резиденции создаётся не мебелью, а светом.",
  },
  {
    eyebrow: "Hospitality",
    title: "Mobile key и тишина вестибюля",
    excerpt: "Как отказ от стойки сокращает заезд до десяти секунд и меняет рейтинг отеля.",
  },
  {
    eyebrow: "BMS",
    title: "Где здание тратит лишний киловатт",
    excerpt:
      "Шесть точек, в которых OPEX уходит вникуда — и где автоматизация даёт мгновенный эффект.",
  },
];

function Index() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center hero-grad px-6 md:px-10 pt-32 pb-24 overflow-hidden">
        <div className="ambient-glow ambient-glow--hero" />
        <div className="max-w-[1400px] mx-auto w-full">
          <Reveal className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            <span className="size-1.5 rounded-full bg-[#f5f5f7] shadow-[0_0_18px_rgba(245,245,247,0.22)] animate-pulse" />
            Smart Group Kazakhstan
          </Reveal>
          <Reveal
            as="h1"
            delay={100}
            className="text-[clamp(56px,11vw,200px)] font-extrabold tracking-tighter leading-[0.85] text-balance max-w-[16ch]"
          >
            Дом, который
            <br />
            понимает вас.
          </Reveal>
          <Reveal
            as="p"
            delay={300}
            className="mt-10 max-w-[44ch] text-lg md:text-xl text-mute leading-relaxed"
          >
            Премиальные системы умного дома и автоматизации зданий. Инженерия, которая становится
            незаметной — и поэтому идеальной.
          </Reveal>

          <Reveal delay={450} className="mt-14 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="premium-button group inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px]"
            >
              Обсудить проект
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 glass-strong px-7 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white/10 transition-colors"
            >
              Смотреть проекты
            </Link>
          </Reveal>

          <Reveal
            delay={600}
            className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-10"
          >
            <Stat to={450} suffix="+" label="Объектов сдано" />
            <Stat to={12} label="Лет опыта" />
            <Stat to={40} suffix="+" label="Интеграций" />
            <Stat value="24/7" label="Поддержка" />
          </Reveal>
        </div>
      </section>

      {/* Solutions bento */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="ambient-glow ambient-glow--right" />
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">
            <Reveal>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-6">
                Решения · 12
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-[14ch]">
                Среды, которые отвечают человеку.
              </h2>
            </Reveal>
            <Reveal delay={150} className="max-w-[44ch] text-mute leading-relaxed">
              От квартиры до завода. Везде, где пространство встречается с людьми и должно работать
              на них — мы строим систему, которая знает свою задачу.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {solutions.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 60}
                className="bg-[#161617] overflow-visible"
                variant="fade"
              >
                <Link
                  to={s.route}
                  className="bento-card solution-card group block min-h-[320px] p-6 md:p-8 border border-transparent"
                >
                  <img
                    src={renders[s.render]}
                    alt=""
                    aria-hidden="true"
                    className="floating-render solution-card-render"
                    style={{ animationDelay: `${(i % 4) * 0.45}s` }}
                  />
                  <div className="h-full flex flex-col justify-between relative z-10">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] text-mute tracking-widest">
                        {s.index}
                      </span>
                      <ArrowUpRight className="size-4 text-mute group-hover:text-fg group-hover:rotate-12 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[12px] text-mute">{s.short}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About split */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
        <div className="ambient-glow ambient-glow--left" />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-6">
              О компании
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95]">
              Инженерия,
              <br />
              которая исчезает.
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:pt-6 space-y-8 text-lg md:text-xl leading-relaxed text-fg/85">
            <Reveal delay={120} as="p">
              Smart Group Kazakhstan — команда инженеров, проектировщиков и программистов, которая
              делает одно: превращает здание в среду, которая работает на человека.
            </Reveal>
            <Reveal delay={220} as="p">
              Мы строим системы, которые вы не замечаете — потому что они делают именно то, что
              нужно, именно тогда, когда нужно. Без перегрузки, без облаков, без посредников.
            </Reveal>
            <Reveal delay={320}>
              <Link
                to="/about"
                className="story-link inline-flex items-center gap-3 text-fg font-bold uppercase tracking-[0.2em] text-xs"
              >
                Подробнее о нас <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-32 md:py-48 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            Почему мы
          </Reveal>
          <Reveal
            as="h2"
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-24 max-w-[18ch]"
          >
            Шесть причин, которые слышно через год после сдачи.
          </Reveal>
          <div className="space-y-24">
            {advantages.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 80}
                className="grid grid-cols-12 gap-6 items-start border-t border-white/10 pt-10"
              >
                <div className="col-span-12 md:col-span-2 font-mono text-silver text-sm">
                  0{i + 1}
                </div>
                <h3 className="col-span-12 md:col-span-5 text-3xl md:text-5xl font-extrabold tracking-tighter">
                  {a.title}
                </h3>
                <p className="col-span-12 md:col-span-5 text-lg md:text-xl text-mute leading-relaxed">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="ambient-glow ambient-glow--right" />
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            Как мы работаем
          </Reveal>
          <Reveal
            as="h2"
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-24 max-w-[16ch]"
          >
            От первого звонка
            <br />
            до жизни в системе.
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 100} className="relative">
                <div className="relative z-10 size-12 rounded-full bg-[#1d1d1f] ring-1 ring-white/18 flex items-center justify-center font-mono text-[12px] text-silver shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                  0{i + 1}
                </div>
                <h3 className="mt-6 text-lg font-extrabold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400} className="mt-16">
            <Link
              to="/process"
              className="story-link inline-flex items-center gap-3 text-fg font-bold uppercase tracking-[0.2em] text-xs"
            >
              Подробно о процессе <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Blog */}
      <section className="py-32 md:py-48 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-16 gap-10">
            <Reveal>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-6">
                Журнал
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                Свежее в блоге.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/blog"
                className="story-link text-fg font-bold uppercase tracking-[0.2em] text-xs"
              >
                Все статьи
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {blog.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link
                  to="/blog"
                  className="block bg-[#161617] p-8 md:p-10 hover-lift border border-transparent hover:border-white/20 transition-colors h-full"
                >
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-silver mb-8">
                    {p.eyebrow}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-mute text-sm leading-relaxed">{p.excerpt}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-fg text-xs uppercase tracking-[0.2em] font-bold">
                    Читать <ArrowUpRight className="size-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="ambient-glow ambient-glow--left" />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5 md:sticky md:top-32">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-6">
              Свяжитесь
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95]">
              Начнём с разговора.
            </h2>
            <p className="mt-8 text-mute text-lg max-w-[36ch] leading-relaxed">
              Звонок 20 минут — и у вас есть понимание масштаба, бюджета и сроков.
            </p>
            <div className="mt-12 space-y-3">
              <a href="tel:+77000000000" className="block text-lg story-link">
                +7 (700) 000 00 00
              </a>
              <a href="mailto:hello@smartgroup.kz" className="block text-lg story-link">
                hello@smartgroup.kz
              </a>
              <div className="text-mute text-sm">Астана, пр. Мангилик Ел, 55</div>
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  to,
  suffix,
  label,
  value,
}: {
  to?: number;
  suffix?: string;
  label: string;
  value?: string;
}) {
  return (
    <div>
      <div className="text-5xl md:text-6xl font-extrabold tracking-tighter text-fg leading-none">
        {value ?? <Counter to={to ?? 0} suffix={suffix} />}
      </div>
      <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.3em] text-mute">{label}</div>
    </div>
  );
}
