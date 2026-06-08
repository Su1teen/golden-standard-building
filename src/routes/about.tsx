import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О компании — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "Smart Group Kazakhstan — команда инженеров с 12-летним опытом интеграции систем умного дома и BMS в Казахстане.",
      },
      { property: "og:title", content: "О Smart Group Kazakhstan" },
      { property: "og:description", content: "Инженерия, которая исчезает в пользу человека." },
    ],
  }),
  component: About,
});

const values = [
  {
    n: "01",
    t: "Точность",
    d: "Каждый кабель, каждый сценарий, каждое касание интерфейса — выверены до миллиметра.",
  },
  {
    n: "02",
    t: "Сдержанность",
    d: "Технология должна служить, а не доказывать своё существование. Хорошая система — невидима.",
  },
  {
    n: "03",
    t: "Открытость",
    d: "Никаких облачных замков. Система остаётся вашей собственностью. Открытые протоколы.",
  },
  {
    n: "04",
    t: "Долговечность",
    d: "Мы проектируем на десятилетия, а не на следующий релиз. 10 лет гарантии на ядро.",
  },
];

const team = [
  {
    name: "Аскар Жумабеков",
    role: "Основатель, CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Динара Сатпаева",
    role: "Главный инженер",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    name: "Ержан Айдаров",
    role: "Руководитель проектов",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Алия Бекенова",
    role: "Архитектор систем",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
];

const partners = [
  "KNX",
  "Crestron",
  "Loxone",
  "Lutron",
  "ABB",
  "Siemens",
  "Schneider Electric",
  "Control4",
];

const certificates = [
  { t: "KNX Certified Partner", d: "Сертификация по полному стеку KNX, 2017" },
  { t: "Crestron Certified Programmer", d: "Программирование Crestron Pyng/Home, 2019" },
  { t: "ISO 9001:2015", d: "Система менеджмента качества, действует с 2020" },
  { t: "BACnet International", d: "Член ассоциации с 2021 года" },
];

function About() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-20">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            О компании · 17 лет
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,160px)] leading-[0.92] text-white max-w-[16ch]"
          >
            17 лет. 450+ объектов. Одна цель.
          </Reveal>
        </div>
      </section>

      {/* Mission — light gray */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-6" variant="breathe">
            <div className="image-card aspect-[4/5] rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Команда Smart Group Kazakhstan"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="md:col-span-6 space-y-6">
            <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">
              Миссия
            </Reveal>
            <Reveal
              as="h2"
              delay={100}
              className="font-hero text-[clamp(36px,5vw,80px)] leading-[1.02] text-[#1d1d1f]"
            >
              Создавать невидимую цифровую архитектуру
            </Reveal>
            <Reveal
              as="p"
              delay={180}
              className="text-[17px] leading-[1.6] text-[#6e6e73] max-w-[52ch]"
            >
              Компания родилась из понимания: современные здания перегружены хаотичными системами. Они требуют слишком много внимания, ручного контроля и ресурсов.
            </Reveal>
            <Reveal
              as="p"
              delay={240}
              className="text-[17px] leading-[1.6] text-[#6e6e73] max-w-[52ch]"
            >
              Инженерия не должна требовать внимания — она должна создавать условия для жизни и бизнеса. Smart Group Kazakhstan объединяет сложные инженерные процессы в чистые, интуитивные интерфейсы. Мы убираем всё лишнее, оставляя только безупречную функциональность, безопасность и комфорт.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats — dark */}
      <section className="section-dark py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: 17, s: "", l: "Лет работы" },
            { v: 450, s: "+", l: "Объектов" },
            { v: 60, s: "", l: "Инженеров" },
            { v: 24, s: "/7", l: "Сервис" },
          ].map((x, i) => (
            <Reveal key={x.l} delay={i * 80} className="stat-divider md:pr-6">
              <div className="font-hero text-[clamp(44px,5vw,76px)] leading-none text-white">
                <Counter to={x.v} suffix={x.s} />
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[#a1a1a6]">
                {x.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values — light gray */}
      <section className="section-mid py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            Ценности
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="font-hero text-[clamp(40px,6vw,88px)] leading-[1] text-[#1d1d1f] mb-16 max-w-[16ch]"
          >
            Во что мы верим.
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
            {values.map((v, i) => (
              <Reveal
                key={v.t}
                delay={i * 80}
                className="bg-[#f5f5f7] p-8 md:p-10 hover:bg-white transition-colors min-h-[280px]"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#0071e3] font-mono mb-6">
                  {v.n}
                </div>
                <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#1d1d1f] mb-4">
                  {v.t}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#6e6e73]">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team — white 
      <section className="section-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            Команда
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="font-hero text-[clamp(40px,6vw,88px)] leading-[1] text-[#1d1d1f] mb-16 max-w-[16ch]"
          >
            Люди, которые строят систему.
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 80} variant="fade">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-[#f5f5f7]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="size-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="font-bold text-[17px] text-[#1d1d1f] mb-1 tracking-tight">
                  {person.name}
                </div>
                <div className="text-[13px] text-[#6e6e73]">{person.role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Partners — light gray */}
      <section className="section-mid py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            Партнёры
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="font-hero text-[clamp(36px,5vw,72px)] leading-[1.02] text-[#1d1d1f] mb-14 max-w-[20ch]"
          >
            Работаем с лидерами индустрии.
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/8">
            {partners.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 50}
                className="bg-[#f5f5f7] hover:bg-white transition-colors aspect-[3/2] flex items-center justify-center"
              >
                <span className="font-bold text-xl md:text-2xl tracking-tight text-[#1d1d1f]">
                  {p}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates — white 
      <section className="section-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            Сертификаты
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="font-hero text-[clamp(36px,5vw,72px)] leading-[1.02] text-[#1d1d1f] mb-14 max-w-[18ch]"
          >
            Документы, которые подтверждают.
          </Reveal>
          <div className="border-t border-black/10">
            {certificates.map((c, i) => (
              <Reveal
                key={c.t}
                delay={i * 60}
                className="border-b border-black/10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div className="font-medium text-lg md:text-xl text-[#1d1d1f] tracking-tight">
                  {c.t}
                </div>
                <div className="text-[14px] text-[#6e6e73]">{c.d}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA */}
      <section className="section-dark py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal
            as="h2"
            className="font-hero text-[clamp(40px,7vw,120px)] leading-[1] text-white max-w-[18ch] mx-auto"
          >
            Хотите работать с нами?
          </Reveal>
          <Reveal delay={150} className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Связаться с командой
              <ArrowRight className="size-4" />
            </Link>
            <Link to="/projects" className="btn-secondary-dark">
              Посмотреть проекты
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
