import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Процесс — Smart Group Kazakhstan" },
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
    n: "01",
    t: "Брифинг и аудит",
    d: "Слушаем задачу. Изучаем объект, людей и контекст. Формируем цели и ограничения. Понимаем, что должна делать система — и чего она делать не должна.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    duration: "1–2 недели",
  },
  {
    n: "02",
    t: "Проектирование системы",
    d: "Сценарии управления, логика, архитектура решения, диапазон бюджета. Рабочая документация: схемы, кабельные журналы, спецификации, программная архитектура.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
    duration: "2–4 недели",
  },
  {
    n: "03",
    t: "Подбор оборудования",
    d: "Прямые поставки от производителей KNX, Crestron, Control4, Lutron, ABB. Сборка щитов автоматизации в собственной мастерской под маркировкой и тестами.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    duration: "2–6 недель",
  },
  {
    n: "04",
    t: "Монтаж и пуско-наладка",
    d: "Кабельные сети, оборудование, монтаж сенсорных панелей и шкафов. Сертифицированная бригада, скрытые работы, аккуратные перфорации, чистая сдача.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    duration: "4–10 недель",
  },
  {
    n: "05",
    t: "Программирование и тестирование",
    d: "Создаём сценарии, привязываем датчики, отлаживаем интеграции с PMS, МИС, SCADA. Тестируем каждый сценарий — день, ночь, отсутствие, гости, аварии.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    duration: "2–4 недели",
  },
  {
    n: "06",
    t: "Обучение и поддержка 24/7",
    d: "Очное обучение хозяев и техперсонала, видео-инструкции, руководство на русском. Договор обслуживания, удалённая диагностика, выезд по SLA — на всю жизнь системы.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    duration: "На всю жизнь системы",
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
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1920&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Процесс · 6 этапов
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,160px)] leading-[0.92] text-white max-w-[18ch]"
          >
            От первого звонка до жизни в системе.
          </Reveal>
          <Reveal
            as="p"
            delay={300}
            className="mt-8 text-[17px] text-[#a1a1a6] max-w-[54ch] leading-[1.55]"
          >
            Фиксированные сроки и зоны ответственности. Команда инженеров, проектировщиков,
            программистов и сервиса — внутри одной компании.
          </Reveal>
        </div>
      </section>

      {/* 6 Stages alternating layout */}
      {steps.map((s, i) => {
        const isOdd = i % 2 === 1;
        const surface = i % 2 === 0 ? "section-white" : "section-mid";
        return (
          <section key={s.n} className={`${surface} py-20 md:py-28 px-6 md:px-10`}>
            <div className="max-w-[1400px] mx-auto">
              <div
                className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                  isOdd ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="md:col-span-6" variant="breathe">
                  <div className="image-card aspect-[4/3] rounded-2xl">
                    <img
                      src={s.image}
                      alt={s.t}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Reveal>

                <div className="md:col-span-6">
                  <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#0071e3] font-mono mb-5">
                    Этап {s.n}
                  </Reveal>
                  <Reveal
                    as="h2"
                    delay={100}
                    className="font-hero text-[clamp(34px,4.5vw,68px)] leading-[1.02] text-[#1d1d1f] mb-6"
                  >
                    {s.t}.
                  </Reveal>
                  <Reveal
                    as="p"
                    delay={180}
                    className="text-[17px] leading-[1.55] text-[#6e6e73] max-w-[52ch] mb-8"
                  >
                    {s.d}
                  </Reveal>
                  <Reveal delay={250} className="card-badge">
                    {s.duration}
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQ — white */}
      <section className="section-white py-24 md:py-32 px-6 md:px-10 border-t border-black/8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            FAQ
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="font-hero text-[clamp(36px,5vw,80px)] leading-[1.02] text-[#1d1d1f] mb-14 max-w-[18ch]"
          >
            Что обычно спрашивают.
          </Reveal>
          <div className="border-t border-black/10">
            {faq.map((f, i) => (
              <Faq key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal
            as="h2"
            className="font-hero text-[clamp(40px,7vw,120px)] leading-[1] text-white max-w-[18ch] mx-auto"
          >
            Готовы начать?
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-8 text-[17px] text-[#a1a1a6] max-w-[44ch] mx-auto"
          >
            Один звонок — и вы поймёте, как будет устроена ваша система. Без техжаргона, по делу.
          </Reveal>
          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Записаться на брифинг
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Faq({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <Reveal delay={i * 60} className="border-b border-black/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group"
      >
        <span className="text-[18px] md:text-[22px] font-medium tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
          {q}
        </span>
        <span className="shrink-0 size-9 rounded-full border border-black/15 flex items-center justify-center text-[#1d1d1f] group-hover:border-[#0071e3] group-hover:text-[#0071e3] transition-colors">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] md:text-[16px] text-[#6e6e73] leading-relaxed max-w-[68ch]">
            {a}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
