import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CompanyTimeline } from "@/components/CompanyTimeline";
import { PartnersMarquee } from "@/components/PartnersMarquee";

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
      <section className="section-dark relative min-h-[96vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.48)_48%,rgba(0,0,0,0.2)_100%)]" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16 md:pb-24">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            О компании · 20+ лет
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,150px)] leading-[0.92] text-white max-w-[16ch]"
          >
            20+ лет. 450+ объектов. Одна цель.
          </Reveal>
          <Reveal
            as="div"
            delay={240}
            className="mt-12 max-w-[920px] rounded-[28px] border border-white/12 bg-black/30 p-6 md:p-9 backdrop-blur-xl"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-5">
              Миссия
            </div>
            <h2 className="font-hero text-[clamp(34px,5vw,72px)] leading-[1.02] text-white max-w-[16ch] mb-6">
              Создавать невидимую цифровую архитектуру
            </h2>
            <div className="grid md:grid-cols-2 gap-5 md:gap-8 text-[16px] md:text-[17px] leading-[1.62] text-white/72">
              <p>
                Компания родилась из понимания: современные здания перегружены хаотичными системами.
                Они требуют слишком много внимания, ручного контроля и ресурсов.
              </p>
              <p>
                Инженерия не должна требовать внимания — она должна создавать условия для жизни и
                бизнеса. Smart Group Kazakhstan объединяет сложные инженерные процессы в чистые,
                интуитивные интерфейсы. Мы убираем всё лишнее, оставляя только безупречную
                функциональность, безопасность и комфорт.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats — dark */}

      {/* Timeline — dark */}
      <CompanyTimeline />

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
          <PartnersMarquee />
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
