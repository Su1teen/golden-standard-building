import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Статья — Smart Group Kazakhstan` },
      { name: "description", content: "Материал из журнала Smart Group Kazakhstan." },
      { property: "og:title", content: `Статья · ${params.slug}` },
      { property: "og:description", content: "Заметка об интеллектуальной инженерии." },
    ],
  }),
  component: Post,
});

const toc = [
  { id: "intro", t: "Вступление" },
  { id: "principle-1", t: "Принцип 1. Тишина" },
  { id: "principle-2", t: "Принцип 2. Отклик" },
  { id: "principle-3", t: "Принцип 3. Сценарий" },
  { id: "principle-4", t: "Принцип 4. Открытость" },
  { id: "principle-5", t: "Принцип 5. Долговечность" },
  { id: "outro", t: "Финал" },
];

const related = [
  { t: "Свет как первое впечатление", c: "Резиденция" },
  { t: "Mobile key и тишина вестибюля", c: "Hospitality" },
  { t: "Где здание тратит лишний киловатт", c: "BMS" },
];

function Post() {
  const { slug } = Route.useParams();
  return (
    <main className="pt-32">
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A059] mb-8">
            Резиденция · 9 мин
          </Reveal>
          <Reveal as="h1" delay={120} className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-[0.95]">
            Тихая инженерия: почему лучшие системы — те, которых не видно.
          </Reveal>
          <Reveal delay={240} className="mt-10 flex items-center gap-4 text-xs text-mute">
            <span>20 мая 2026</span>
            <span className="size-1 rounded-full bg-mute" />
            <span>Автор: команда Smart Group</span>
            <span className="size-1 rounded-full bg-mute" />
            <span className="font-mono uppercase tracking-[0.2em]">/{slug}</span>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12">
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-32">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A059] mb-4">Содержание</div>
              <ul className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-mute hover:text-[#C5A059] transition-colors">{t.t}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="col-span-12 lg:col-span-9 space-y-10 text-lg md:text-xl leading-[1.7] text-fg/85">
            <p id="intro">
              Хорошая инженерия в доме похожа на хорошую кухню в ресторане — её не видно, но
              без неё ничего не работает. Мы собрали шесть принципов, которые лежат в основе
              наших проектов в Алматы, Астане и за их пределами.
            </p>

            <Reveal variant="breathe" className="cinematic-card aspect-[16/9] rounded-2xl" />

            <h2 id="principle-1" className="text-3xl md:text-5xl font-extrabold tracking-tighter pt-6">Принцип 1. Тишина</h2>
            <p>
              Любое уведомление, индикатор, щелчок реле, мигающая лампа — это шум. Шум отвлекает,
              шум раздражает, шум обесценивает технологию. Мы убираем шум там, где можем.
            </p>

            <blockquote className="border-l-2 border-[#C5A059] pl-8 my-12 text-2xl md:text-4xl font-extrabold tracking-tighter leading-[1.15]">
              «Технология должна служить человеку — а не доказывать ему своё существование».
            </blockquote>

            <h2 id="principle-2" className="text-3xl md:text-5xl font-extrabold tracking-tighter pt-6">Принцип 2. Отклик</h2>
            <p>
              Время от касания до результата — главный показатель качества. Если выключатель
              реагирует через секунду, человек теряет доверие к системе. Мы держим отклик до 400 миллисекунд.
            </p>

            <h2 id="principle-3" className="text-3xl md:text-5xl font-extrabold tracking-tighter pt-6">Принцип 3. Сценарий</h2>
            <p>
              Удобство в умном доме — это не количество кнопок, а количество ненужных кнопок.
              Сценарий — это то, что превращает три действия в одно.
            </p>

            <h2 id="principle-4" className="text-3xl md:text-5xl font-extrabold tracking-tighter pt-6">Принцип 4. Открытость</h2>
            <p>
              Мы не делаем систем, привязанных к одному поставщику или одному облаку. Через десять
              лет должна остаться возможность заменить любой узел — и заменить нас, если потребуется.
            </p>

            <h2 id="principle-5" className="text-3xl md:text-5xl font-extrabold tracking-tighter pt-6">Принцип 5. Долговечность</h2>
            <p>
              Дом проектируется на тридцать лет. Система автоматизации обязана прожить столько же —
              а это значит выбор оборудования промышленного класса даже для частных резиденций.
            </p>

            <h2 id="outro" className="text-3xl md:text-5xl font-extrabold tracking-tighter pt-6">Финал</h2>
            <p>
              Если эти принципы вам близки — мы говорим на одном языке. Напишите нам, расскажем,
              как они работают на конкретном объекте.
            </p>

            <div className="pt-10">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#C5A059] text-[#050505] px-6 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-xs">
                Обсудить проект <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32 border-t border-white/5 pt-20">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A059] mb-8">По теме</Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {related.map((r, i) => (
              <Reveal key={r.t} delay={i * 80}>
                <Link to="/blog" className="block bg-[#050505] p-8 hover-lift border border-transparent hover:border-[#C5A059]/30 transition-colors h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A059] mb-6">{r.c}</div>
                  <h3 className="text-xl font-extrabold tracking-tight">{r.t}</h3>
                  <div className="mt-8 inline-flex items-center gap-2 text-[#C5A059] text-xs uppercase tracking-[0.2em] font-bold">
                    Читать <ArrowUpRight className="size-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
