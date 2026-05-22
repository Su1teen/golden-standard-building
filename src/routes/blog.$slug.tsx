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
  {
    t: "Свет как первое впечатление",
    c: "Резиденция",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
  },
  {
    t: "Mobile key и тишина вестибюля",
    c: "Hospitality",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
  },
  {
    t: "Где здание тратит лишний киловатт",
    c: "BMS",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
];

const HERO = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1920&q=80";

function Post() {
  const { slug } = Route.useParams();
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[64vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${HERO})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[900px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Резиденция · 9 мин
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(36px,6vw,96px)] leading-[0.96] text-white max-w-[22ch]"
          >
            Тихая инженерия: почему лучшие системы — те, которых не видно.
          </Reveal>
          <Reveal
            delay={240}
            className="mt-8 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.2em] text-[#a1a1a6]"
          >
            <span>20 мая 2026</span>
            <span className="size-1 rounded-full bg-[#a1a1a6]" />
            <span>Автор: команда Smart Group</span>
            <span className="size-1 rounded-full bg-[#a1a1a6]" />
            <span className="font-mono normal-case tracking-normal text-[#86a8c4]">/{slug}</span>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="section-white py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-12">
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-28">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-5">
                Содержание
              </div>
              <ul className="space-y-3 text-[13px]">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="text-[#6e6e73] hover:text-[#0071e3] transition-colors"
                    >
                      {t.t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="col-span-12 lg:col-span-9 space-y-8 text-[17px] md:text-[19px] leading-[1.7] text-[#1d1d1f]/85">
            <p id="intro">
              Хорошая инженерия в доме похожа на хорошую кухню в ресторане — её не видно, но без неё
              ничего не работает. Мы собрали шесть принципов, которые лежат в основе наших проектов
              в Алматы, Астане и за их пределами.
            </p>

            <Reveal variant="breathe" className="image-card aspect-[16/9] rounded-2xl my-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
                alt="Тихая инженерия"
                className="size-full object-cover"
                loading="lazy"
              />
            </Reveal>

            <h2
              id="principle-1"
              className="font-hero text-[clamp(28px,3.5vw,52px)] leading-[1.05] pt-6 text-[#1d1d1f]"
            >
              Принцип 1. Тишина
            </h2>
            <p>
              Любое уведомление, индикатор, щелчок реле, мигающая лампа — это шум. Шум отвлекает,
              шум раздражает, шум обесценивает технологию. Мы убираем шум там, где можем.
            </p>

            <blockquote className="border-l-2 border-[#0071e3] pl-8 my-12 font-hero text-[clamp(24px,3vw,40px)] leading-[1.15] text-[#1d1d1f]">
              «Технология должна служить человеку — а не доказывать ему своё существование».
            </blockquote>

            <h2
              id="principle-2"
              className="font-hero text-[clamp(28px,3.5vw,52px)] leading-[1.05] pt-6 text-[#1d1d1f]"
            >
              Принцип 2. Отклик
            </h2>
            <p>
              Время от касания до результата — главный показатель качества. Если выключатель
              реагирует через секунду, человек теряет доверие к системе. Мы держим отклик до 400
              миллисекунд.
            </p>

            <h2
              id="principle-3"
              className="font-hero text-[clamp(28px,3.5vw,52px)] leading-[1.05] pt-6 text-[#1d1d1f]"
            >
              Принцип 3. Сценарий
            </h2>
            <p>
              Удобство в умном доме — это не количество кнопок, а количество ненужных кнопок.
              Сценарий — это то, что превращает три действия в одно.
            </p>

            <h2
              id="principle-4"
              className="font-hero text-[clamp(28px,3.5vw,52px)] leading-[1.05] pt-6 text-[#1d1d1f]"
            >
              Принцип 4. Открытость
            </h2>
            <p>
              Мы не делаем систем, привязанных к одному поставщику или одному облаку. Через десять
              лет должна остаться возможность заменить любой узел — и заменить нас, если
              потребуется.
            </p>

            <h2
              id="principle-5"
              className="font-hero text-[clamp(28px,3.5vw,52px)] leading-[1.05] pt-6 text-[#1d1d1f]"
            >
              Принцип 5. Долговечность
            </h2>
            <p>
              Дом проектируется на тридцать лет. Система автоматизации обязана прожить столько же —
              а это значит выбор оборудования промышленного класса даже для частных резиденций.
            </p>

            <h2
              id="outro"
              className="font-hero text-[clamp(28px,3.5vw,52px)] leading-[1.05] pt-6 text-[#1d1d1f]"
            >
              Финал
            </h2>
            <p>
              Если эти принципы вам близки — мы говорим на одном языке. Напишите нам, расскажем, как
              они работают на конкретном объекте.
            </p>

            <div className="pt-8">
              <Link to="/contact" className="btn-primary">
                Обсудить проект
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      <section className="section-mid py-24 md:py-28 px-6 md:px-10 border-t border-black/8">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-10">
            По теме
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {related.map((r, i) => (
              <Reveal key={r.t} delay={i * 80}>
                <Link to="/blog" className="group block">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                    <img
                      src={r.image}
                      alt={r.t}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                    {r.c}
                  </div>
                  <h3 className="font-bold text-xl text-[#1d1d1f] mb-3 tracking-tight group-hover:text-[#0071e3] transition-colors">
                    {r.t}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-[#0071e3] text-xs uppercase tracking-[0.2em] font-bold">
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
