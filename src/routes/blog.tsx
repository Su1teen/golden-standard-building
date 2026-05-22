import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Журнал — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "Заметки об интеллектуальной инженерии, BMS, hospitality и опыте жизни в умном пространстве.",
      },
      { property: "og:title", content: "Журнал Smart Group" },
      { property: "og:description", content: "Статьи о смарт-инженерии и опыте пользователя." },
    ],
  }),
  component: Blog,
});

const cats = ["Все", "Резиденция", "Hospitality", "BMS", "Retail", "Industry"];

const featured = {
  cat: "Резиденция",
  title: "Тихая инженерия: почему лучшие системы — те, которых не видно",
  excerpt:
    "Шесть принципов, по которым мы проектируем дома, где автоматизация перестаёт быть техникой и становится средой.",
  date: "20 мая 2026",
  read: "9 мин",
};

const posts = [
  {
    cat: "Резиденция",
    title: "Свет как первое впечатление",
    excerpt: "Сценарии освещения, которые формируют ощущение пространства за первые секунды.",
    date: "12 мая 2026",
    read: "6 мин",
  },
  {
    cat: "Hospitality",
    title: "Mobile key и тишина вестибюля",
    excerpt: "Как отказ от стойки сокращает заезд до 10 секунд и поднимает рейтинг отеля.",
    date: "5 мая 2026",
    read: "5 мин",
  },
  {
    cat: "BMS",
    title: "Где здание тратит лишний киловатт",
    excerpt: "Шесть типичных точек, где OPEX уходит вникуда.",
    date: "29 апр 2026",
    read: "7 мин",
  },
  {
    cat: "Industry",
    title: "SCADA, которая помогает, а не пугает",
    excerpt: "Принципы UI для диспетчерских пультов производств.",
    date: "21 апр 2026",
    read: "8 мин",
  },
  {
    cat: "Резиденция",
    title: "Звук в каждой комнате — и тишина, когда нужно",
    excerpt: "Подходы к мультируму без хаоса проводов и пультов.",
    date: "14 апр 2026",
    read: "6 мин",
  },
  {
    cat: "Hospitality",
    title: "Энергопотребление отеля можно снизить на 42%",
    excerpt: "Как и почему — на примере проекта в Алматы.",
    date: "9 апр 2026",
    read: "7 мин",
  },
  {
    cat: "Retail",
    title: "ТЦ, в котором задерживаются на 18% дольше",
    excerpt: "Влияние сценариев света и климата на поведение посетителей.",
    date: "2 апр 2026",
    read: "6 мин",
  },
  {
    cat: "BMS",
    title: "Открытые протоколы против вендорского замка",
    excerpt: "Почему мы строим архитектуру, которая переживёт смену подрядчика.",
    date: "26 мар 2026",
    read: "8 мин",
  },
  {
    cat: "Резиденция",
    title: "Климат без сквозняков и без шума",
    excerpt: "Что мы изменили в подходе к вентиляции в премиальном жилье.",
    date: "18 мар 2026",
    read: "6 мин",
  },
  {
    cat: "Industry",
    title: "Энергоучёт по сменам: что выясняется в первые две недели",
    excerpt: "Несколько неочевидных историй из проектов.",
    date: "10 мар 2026",
    read: "7 мин",
  },
];

const featuredImage = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80";
const postImages = [
  "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=1200&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=1200&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=1200&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
];

function Blog() {
  const [c, setC] = useState("Все");
  const filtered = c === "Все" ? posts : posts.filter((p) => p.cat === c);
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${featuredImage})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Журнал
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,140px)] leading-[0.92] text-white max-w-[18ch]"
          >
            Заметки об инженерии и опыте.
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="section-white py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: "tihaya-injeneriya" }}
              className="image-card group rounded-3xl block aspect-[16/9] md:aspect-[21/9]"
            >
              <img
                src={featuredImage}
                alt={featured.title}
                className="size-full object-cover"
                loading="lazy"
              />
              <div className="image-card-overlay" />
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between text-white">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4]">
                  {featured.cat} · Featured
                </div>
                <div>
                  <h2 className="font-hero text-[clamp(28px,4.5vw,72px)] leading-[1.02] max-w-[24ch]">
                    {featured.title}
                  </h2>
                  <div className="mt-6 flex items-center gap-4 text-[12px] text-white/80">
                    <span>{featured.date}</span>
                    <span className="size-1 rounded-full bg-white/60" />
                    <span>{featured.read}</span>
                    <span className="size-1 rounded-full bg-white/60" />
                    <span className="inline-flex items-center gap-1">
                      Читать <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="section-white sticky top-[64px] md:top-[68px] z-30 border-y border-black/8 nav-glass-light">
        <div className="max-w-[1400px] mx-auto px-2 md:px-10 py-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center min-w-max">
            {cats.map((x) => (
              <button
                key={x}
                onClick={() => setC(x)}
                className={`filter-chip ${c === x ? "active" : ""}`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-mid py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.title.toLowerCase().replace(/\s+/g, "-").slice(0, 24) }}
                className="group block"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#f5f5f7]">
                  <img
                    src={postImages[i % postImages.length]}
                    alt={p.title}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                  {p.cat}
                </div>
                <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#1d1d1f] mb-3 leading-snug group-hover:text-[#0071e3] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#6e6e73] mb-5">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-[11px] text-[#6e6e73] uppercase tracking-[0.18em]">
                  <span>{p.date}</span>
                  <span className="size-1 rounded-full bg-[#6e6e73]" />
                  <span>{p.read}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
