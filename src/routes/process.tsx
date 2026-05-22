import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Как мы работаем — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "Шесть этапов от первого звонка до сервиса. Прозрачный процесс с фиксированными сроками.",
      },
      { property: "og:title", content: "Процесс Smart Group" },
      {
        property: "og:description",
        content: "Шесть этапов: брифинг, концепция, проект, поставка, монтаж, сервис.",
      },
    ],
  }),
  component: Process,
});

const steps = [
  {
    t: "Брифинг",
    d: "Слушаем задачу. Изучаем объект, людей и контекст. Формируем цели и ограничения.",
  },
  {
    t: "Концепция",
    d: "Сценарии управления, логика, архитектура решения, диапазон бюджета и сроков.",
  },
  {
    t: "Проект",
    d: "Рабочая документация: схемы, кабельные журналы, спецификации, программная архитектура.",
  },
  {
    t: "Поставка",
    d: "Прямые поставки от производителей. Сборка щитов автоматизации в собственной мастерской.",
  },
  {
    t: "Монтаж и пуск",
    d: "Кабельные сети, оборудование, программирование сценариев, обучение пользователей.",
  },
  {
    t: "Сервис",
    d: "Договор обслуживания, удалённая диагностика, выезд по SLA, развитие системы.",
  },
];

const faq = [
  {
    q: "Сколько времени занимает проект?",
    a: "Квартира — 1.5 месяца. Вилла — 2–4 месяца. ЖК и BMS — от 4 месяцев. Сроки фиксируются в договоре.",
  },
  {
    q: "Можно ли начать с одной системы и расширять?",
    a: "Да. Мы проектируем масштабируемо: начните со света и климата, добавьте безопасность и мультимедиа позже.",
  },
  {
    q: "Что с гарантией?",
    a: "2 года на работы, 3 года на оборудование, 10 лет на ядро системы. Сервис — на всю жизнь.",
  },
  {
    q: "Работаете в регионах?",
    a: "Да. Команда работает по всему Казахстану — от Алматы и Астаны до Шымкента, Атырау и Усть-Каменогорска.",
  },
  {
    q: "Используете облако?",
    a: "По умолчанию — нет. Управление локальное. Облако подключаем только по запросу и с шифрованием.",
  },
  {
    q: "Можно интегрировать существующее оборудование?",
    a: "Да. Поддерживаем KNX, BACnet, Modbus, MQTT, Crestron, Control4, Lutron, Apple Home, Google Home.",
  },
  {
    q: "Что входит в обучение?",
    a: "Очное обучение хозяев и/или техперсонала, видео-инструкции, руководство пользователя на русском.",
  },
  {
    q: "Сколько стоит проект?",
    a: "От 3 500 USD за квартиру под ключ. Точную смету формируем после брифинга и концепции.",
  },
];

function Process() {
  return (
    <main className="pt-32">
      <section className="relative px-6 md:px-10 hero-grad pb-32 pt-20 overflow-hidden">
        <div className="ambient-glow ambient-glow--hero" />
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            Процесс
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="text-[clamp(48px,10vw,180px)] font-extrabold tracking-tighter leading-[0.85] max-w-[18ch]"
          >
            От первого звонка до жизни в системе.
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/24 via-white/10 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80} className="relative pl-20 pb-20 last:pb-0">
              <div className="absolute left-0 top-1 size-12 rounded-full bg-[#1d1d1f] ring-1 ring-white/18 flex items-center justify-center font-mono text-[12px] text-silver shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
                0{i + 1}
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4">{s.t}</h3>
              <p className="text-lg md:text-xl text-mute leading-relaxed max-w-[52ch]">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            Вопросы
          </Reveal>
          <Reveal
            as="h2"
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-20 max-w-[14ch]"
          >
            Что обычно спрашивают.
          </Reveal>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faq.map((f, i) => (
              <Faq key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-10 text-center">
        <Reveal
          as="h2"
          className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-[16ch] mx-auto"
        >
          Готовы начать?
        </Reveal>
        <Reveal delay={120} className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="premium-button group inline-flex items-center gap-4 px-8 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs"
          >
            Записаться на брифинг{" "}
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

function Faq({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-8 flex items-center justify-between gap-6 text-left group"
      >
        <span className="text-xl md:text-2xl font-bold tracking-tight">{q}</span>
        <span className="size-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-white/70 group-hover:text-silver transition-colors">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-500 ease-out overflow-hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-8 text-mute text-base md:text-lg leading-relaxed max-w-[60ch]">{a}</p>
        </div>
      </div>
    </div>
  );
}
