import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Решения — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "12 направлений автоматизации — от квартиры до промышленного комплекса. Системы умного дома, BMS, hospitality и agritech.",
      },
    ],
  }),
  component: SolutionsPage,
});

const HERO_BG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80";

function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-20">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Решения · 12 направлений
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,156px)] leading-[0.92] text-white max-w-[18ch]"
          >
            От квартиры до завода. Везде свой подход.
          </Reveal>
          <Reveal
            as="p"
            delay={300}
            className="mt-8 max-w-[58ch] text-[17px] md:text-[19px] leading-[1.55] text-[#a1a1a6]"
          >
            Двенадцать направлений, каждое со своей инженерной логикой, нормативами и сценариями.
            Один партнёр на проект, монтаж, программирование и сервис.
          </Reveal>
        </div>
      </section>

      {/* 12 full-width alternating sections */}
      {solutions.map((s, i) => {
        const isOdd = i % 2 === 1;
        const surface =
          i % 3 === 0 ? "section-white" : i % 3 === 1 ? "section-mid" : "section-white";
        return (
          <section
            key={s.slug}
            className={`${surface} py-20 md:py-28 px-6 md:px-10 border-t border-black/5`}
          >
            <div className="max-w-[1400px] mx-auto">
              <div
                className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                  isOdd ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="md:col-span-6" variant="breathe">
                  <div className="image-card aspect-[4/3] md:aspect-[5/4] rounded-2xl">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Reveal>

                <div className="md:col-span-6">
                  <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#0071e3] font-mono mb-5">
                    {s.index} · {s.eyebrow}
                  </Reveal>
                  <Reveal
                    as="h2"
                    delay={100}
                    className="font-hero text-[clamp(34px,4.5vw,64px)] leading-[1.02] text-[#1d1d1f] mb-6"
                  >
                    {s.title}.
                  </Reveal>
                  <Reveal
                    as="p"
                    delay={180}
                    className="text-[17px] leading-relaxed text-[#6e6e73] max-w-[52ch] mb-8"
                  >
                    {s.story}
                  </Reveal>
                  <Reveal delay={250}>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-10 max-w-[44ch]">
                      {s.capabilities.map((c) => (
                        <li
                          key={c.title}
                          className="text-[14px] text-[#1d1d1f] py-2 border-t border-black/8 flex items-center gap-2"
                        >
                          <span className="size-1 rounded-full bg-[#0071e3]" />
                          {c.title}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={320}>
                    <Link to={s.route} className="btn-primary">
                      {s.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="section-dark py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal
            as="h2"
            className="font-hero text-[clamp(40px,7vw,120px)] leading-[1] text-white max-w-[18ch] mx-auto"
          >
            Не нашли свой сегмент?
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-8 text-[17px] text-[#a1a1a6] max-w-[44ch] mx-auto"
          >
            Расскажите задачу — мы соберём решение под объект, даже если оно не подходит ни под одну
            из 12 категорий.
          </Reveal>
          <Reveal delay={200} className="mt-12 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Обсудить нестандартную задачу
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
