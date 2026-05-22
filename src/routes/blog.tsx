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

function Blog() {
  const [c, setC] = useState("Все");
  const filtered = c === "Все" ? posts : posts.filter((p) => p.cat === c);
  return (
    <main className="pt-32">
      <section className="relative px-6 md:px-10 pb-16 overflow-hidden">
        <div className="ambient-glow ambient-glow--hero" />
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-8">
            Журнал
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="text-[clamp(48px,9vw,160px)] font-extrabold tracking-tighter leading-[0.88]"
          >
            Заметки об инженерии
            <br />и опыте.
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: "tihaya-injeneriya" }}
              className="group block relative overflow-hidden rounded-3xl cinematic-card border border-white/5 hover:border-white/20 transition-colors aspect-[16/9] md:aspect-[21/9]"
            >
              <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-between">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-silver">
                  {featured.cat} · Featured
                </div>
                <div>
                  <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] max-w-[22ch]">
                    {featured.title}
                  </h2>
                  <div className="mt-6 flex items-center gap-4 text-xs text-mute">
                    <span>{featured.date}</span>
                    <span className="size-1 rounded-full bg-mute" />
                    <span>{featured.read}</span>
                    <span className="size-1 rounded-full bg-mute" />
                    <span className="text-silver inline-flex items-center gap-1">
                      Читать <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2 border-y border-white/5 py-6">
          {cats.map((x) => (
            <button
              key={x}
              onClick={() => setC(x)}
              className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${
                c === x ? "premium-button" : "text-mute hover:text-fg"
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.title.toLowerCase().replace(/\s+/g, "-").slice(0, 24) }}
                className="bg-[#161617] p-8 md:p-10 block h-full hover-lift border border-transparent hover:border-white/20 transition-colors"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-silver mb-8">
                  {p.cat}
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight leading-tight mb-4">
                  {p.title}
                </h3>
                <p className="text-mute text-sm leading-relaxed mb-8">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-[11px] text-mute">
                  <span>{p.date}</span>
                  <span className="size-1 rounded-full bg-mute" />
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
