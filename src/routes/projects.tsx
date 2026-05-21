import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Проекты — Smart Group Kazakhstan" },
      { name: "description", content: "Портфолио реализованных проектов умного дома и автоматизации зданий в Казахстане." },
      { property: "og:title", content: "Проекты Smart Group" },
      { property: "og:description", content: "Резиденции, отели, ЖК, ТЦ и производства." },
    ],
  }),
  component: Projects,
});

type P = { city: string; type: string; title: string; area: string; scope: string; grad: string };

const projects: P[] = [
  { city: "Астана", type: "Резиденция", title: "Резиденция на Мангилик Ел", area: "1 200 м²", scope: "Свет, климат, мультирум, охрана", grad: "cinematic-card" },
  { city: "Алматы", type: "Вилла", title: "Вилла в Бутаковке", area: "2 400 м²", scope: "Инженерия, ландшафт, охрана периметра", grad: "cinematic-card-2" },
  { city: "Астана", type: "Апарт-отель", title: "Апарт-отель Esentai Park", area: "32 000 м²", scope: "Mobile key, PMS, BMS, энергоучёт", grad: "cinematic-card-3" },
  { city: "Шымкент", type: "ЖК", title: "ЖК Aura Residence", area: "78 000 м²", scope: "Доступ, приложение жителя, инженерия", grad: "cinematic-card" },
  { city: "Алматы", type: "БЦ", title: "Бизнес-центр Almaty Tower", area: "45 000 м²", scope: "BMS, освещение, видеонаблюдение", grad: "cinematic-card-2" },
  { city: "Астана", type: "Клиника", title: "Многопрофильная клиника", area: "18 000 м²", scope: "Чистые помещения, доступ, мониторинг", grad: "cinematic-card-3" },
  { city: "Алматы", type: "Ресторан", title: "Ресторан Auyl Hall", area: "1 800 м²", scope: "Сценарии зала, кухня, видео", grad: "cinematic-card" },
  { city: "Туркестан", type: "Школа", title: "Международная школа", area: "12 000 м²", scope: "Климат, доступ, расписание", grad: "cinematic-card-2" },
  { city: "Караганда", type: "Завод", title: "Производственный комплекс", area: "26 000 м²", scope: "SCADA, энергоучёт, безопасность", grad: "cinematic-card-3" },
  { city: "Кызылорда", type: "Агро", title: "Тепличный комплекс", area: "8 га", scope: "Климат теплиц, полив, хранение", grad: "cinematic-card" },
];

const filters = ["Все", "Резиденция", "Вилла", "Апарт-отель", "ЖК", "БЦ", "Клиника", "Ресторан", "Школа", "Завод", "Агро"];

function Projects() {
  const [f, setF] = useState("Все");
  const list = projects.filter((p) => f === "Все" || p.type === f);
  return (
    <main className="pt-32">
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A059] mb-8">Портфолио</Reveal>
          <Reveal as="h1" delay={120} className="text-[clamp(48px,9vw,160px)] font-extrabold tracking-tighter leading-[0.88] max-w-[18ch]">
            Объекты, которые работают тихо.
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2 border-y border-white/5 py-6">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${
                f === x ? "bg-[#C5A059] text-[#050505]" : "text-mute hover:text-fg"
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} variant="fade">
              <Link
                to="/contact"
                className={`group block aspect-[4/5] relative overflow-hidden rounded-2xl ${p.grad} border border-white/5 hover:border-[#C5A059]/40 transition-colors`}
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A059]">
                      {p.city} · {p.type}
                    </div>
                    <ArrowUpRight className="size-4 text-mute group-hover:text-[#C5A059] group-hover:rotate-12 transition-all" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter leading-tight mb-4">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-mute">
                      <span>{p.area}</span>
                      <span className="size-1 rounded-full bg-mute" />
                      <span>{p.scope}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
