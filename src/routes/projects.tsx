import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Проекты — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "Портфолио реализованных проектов умного дома и автоматизации зданий в Казахстане: резиденции, отели, ЖК, ТЦ, клиники, школы, заводы.",
      },
      { property: "og:title", content: "Проекты Smart Group" },
      { property: "og:description", content: "Резиденции, отели, ЖК, ТЦ и производства." },
    ],
  }),
  component: Projects,
});

type P = {
  city: string;
  type: string;
  title: string;
  area: string;
  scope: string[];
  image: string;
  span?: "tall" | "wide";
};

const projects: P[] = [
  {
    city: "Астана",
    type: "Резиденция",
    title: "Резиденция Мангилик Ел",
    area: "1 200 м²",
    scope: ["Свет KNX", "Климат", "Мультирум", "Охрана"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    span: "tall",
  },
  {
    city: "Алматы",
    type: "Вилла",
    title: "Вилла в Бутаковке",
    area: "2 400 м²",
    scope: ["Инженерия", "Ландшафт", "Периметр"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  {
    city: "Астана",
    type: "Апарт-отель",
    title: "Апарт-отель Esentai Park",
    area: "32 000 м²",
    scope: ["Mobile key", "PMS", "BMS", "Энергоучёт"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  },
  {
    city: "Шымкент",
    type: "ЖК",
    title: "ЖК Aura Residence",
    area: "78 000 м²",
    scope: ["Доступ", "Приложение жителя", "Инженерия"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    span: "tall",
  },
  {
    city: "Алматы",
    type: "БЦ",
    title: "Бизнес-центр Almaty Tower",
    area: "45 000 м²",
    scope: ["BMS", "Освещение", "Видеонаблюдение"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    city: "Астана",
    type: "Клиника",
    title: "Многопрофильная клиника",
    area: "18 000 м²",
    scope: ["Чистые помещения", "Доступ", "Мониторинг"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
  },
  {
    city: "Алматы",
    type: "Ресторан",
    title: "Ресторан Auyl Hall",
    area: "1 800 м²",
    scope: ["Сценарии зала", "Кухня", "Видео"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  },
  {
    city: "Туркестан",
    type: "Школа",
    title: "Международная школа",
    area: "12 000 м²",
    scope: ["Климат", "Доступ", "Расписание"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
    span: "tall",
  },
  {
    city: "Караганда",
    type: "Завод",
    title: "Производственный комплекс",
    area: "26 000 м²",
    scope: ["SCADA", "Энергоучёт", "Безопасность"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  },
  {
    city: "Кызылорда",
    type: "Агро",
    title: "Тепличный комплекс",
    area: "8 га",
    scope: ["Климат теплиц", "Полив", "Хранение"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
  },
];

const filters = [
  "Все",
  "Резиденция",
  "Вилла",
  "Апарт-отель",
  "ЖК",
  "БЦ",
  "Клиника",
  "Ресторан",
  "Школа",
  "Завод",
  "Агро",
];

function Projects() {
  const [f, setF] = useState("Все");
  const list = useMemo(() => projects.filter((p) => f === "Все" || p.type === f), [f]);

  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Портфолио · 1000+ объектов
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,160px)] leading-[0.92] text-white max-w-[18ch]"
          >
            Объекты, которые работают уже сегодня.
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="section-white sticky top-[64px] md:top-[68px] z-30 border-b border-black/8 nav-glass-light">
        <div className="max-w-[1400px] mx-auto px-2 md:px-10 py-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center min-w-max">
            {filters.map((x) => (
              <button
                key={x}
                onClick={() => setF(x)}
                className={`filter-chip ${f === x ? "active" : ""}`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="section-white py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {list.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 3) * 80}
                variant="fade"
                className={`image-card group rounded-2xl ${
                  p.span === "tall" ? "md:row-span-2 aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <Link to="/contact" className="block size-full relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="image-card-overlay" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4]">
                        {p.city} · {p.type}
                      </span>
                      <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl md:text-2xl leading-tight mb-2">
                        {p.title}
                      </h3>
                      <div className="text-[13px] text-white/85 mb-4">{p.area}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.scope.map((sys) => (
                          <span
                            key={sys}
                            className="text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-full bg-white/15 backdrop-blur-md"
                          >
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <div className="text-center py-20 text-[#6e6e73]">Нет проектов в этой категории.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-mid py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal
            as="h2"
            className="font-hero text-[clamp(36px,6vw,96px)] leading-[1.02] text-[#1d1d1f] max-w-[20ch] mx-auto"
          >
            Хотите такой же — или сложнее?
          </Reveal>
          <Reveal delay={150} className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Обсудить ваш объект
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
