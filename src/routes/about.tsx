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
          "Манифест Smart Group Kazakhstan: команда, ценности, подход к интеллектуальным системам.",
      },
      { property: "og:title", content: "О Smart Group Kazakhstan" },
      { property: "og:description", content: "Инженерия, которая исчезает в пользу человека." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Точность", d: "Каждый кабель, каждый сценарий, каждое касание интерфейса — выверены." },
  { t: "Сдержанность", d: "Технология должна служить, а не доказывать своё существование." },
  { t: "Открытость", d: "Никаких облачных замков. Система остаётся вашей собственностью." },
  { t: "Долговечность", d: "Мы проектируем на десятилетия, а не на следующий релиз." },
];

function About() {
  return (
    <main className="pt-32">
      <section className="relative px-6 md:px-10 hero-grad pb-32 pt-20 overflow-hidden">
        <div className="ambient-glow ambient-glow--hero" />
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            О компании
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="text-[clamp(48px,10vw,180px)] font-extrabold tracking-tighter leading-[0.85] max-w-[16ch]"
          >
            Инженерия, которая исчезает.
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto space-y-10 text-2xl md:text-3xl leading-[1.2] tracking-tight">
          <Reveal as="p">
            Smart Group Kazakhstan родилась из одного вопроса: почему здания такие громкие?
          </Reveal>
          <Reveal as="p" delay={120}>
            Они шумят кондиционерами, мигают индикаторами, требуют внимания к каждой мелочи. Мы
            поверили, что правильная инженерия должна быть тихой. И начали строить её — для квартир,
            вилл, отелей, заводов и больниц по всему Казахстану.
          </Reveal>
          <Reveal as="p" delay={240}>
            Сегодня в нашей команде проектировщики, программисты KNX и Crestron, инженеры BMS,
            сервисные специалисты и дизайнеры интерфейсов. Один партнёр на весь жизненный цикл
            объекта.
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { v: 12, s: "", l: "Лет работы" },
            { v: 450, s: "+", l: "Объектов" },
            { v: 38, s: "", l: "Инженеров" },
            { v: 24, s: "/7", l: "Сервис" },
          ].map((x, i) => (
            <Reveal key={x.l} delay={i * 80}>
              <div className="text-6xl md:text-7xl font-extrabold tracking-tighter text-silver leading-none">
                <Counter to={x.v} suffix={x.s} />
              </div>
              <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.3em] text-mute">
                {x.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            Ценности
          </Reveal>
          <Reveal
            as="h2"
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-20 max-w-[16ch]"
          >
            Во что мы верим.
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100} className="bg-[#161617] p-10 md:p-14">
                <div className="font-mono text-silver text-xs mb-6">0{i + 1}</div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">{v.t}</h3>
                <p className="text-mute text-lg leading-relaxed max-w-[36ch]">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-10 text-center">
        <Reveal
          as="h2"
          className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-[16ch] mx-auto"
        >
          Хотите работать с нами?
        </Reveal>
        <Reveal delay={120} className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="premium-button group inline-flex items-center gap-4 px-8 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs"
          >
            Связаться{" "}
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
