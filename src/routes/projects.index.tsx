import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

import imgOnlyMoon from "@/assets/projects/onlymoon.jpg";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Проекты — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "Портфолио реализованных проектов умного дома и автоматизации зданий в Казахстане: ЖК, коттеджи, апартаменты и другие объекты.",
      },
      { property: "og:title", content: "Проекты Smart Group" },
      { property: "og:description", content: "ЖК, коттеджи, апартаменты и другие объекты." },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{
            backgroundImage: `url(${imgOnlyMoon})`,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Портфолио · 500+ объектов
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

      {/* 500+ projects banner */}
      <section className="section-white py-16 md:py-20 px-6 md:px-10 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <Reveal>
            <span className="font-hero text-[clamp(56px,8vw,120px)] leading-none text-[#1d1d1f]">500+</span>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg md:text-xl text-[#6e6e73] mt-4 max-w-[600px] mx-auto leading-relaxed">
              реализованных проектов по всему Казахстану. Мы работаем на широком рынке — от частных
              резиденций до крупных жилых комплексов. Ниже лишь некоторые из наших объектов.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-white py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 3) * 80}
                variant="fade"
                className={`image-card group rounded-2xl ${
                  p.span === "tall" ? "md:row-span-2 aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="block size-full relative"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="image-card-overlay" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                    <div>
                      <h3 className="font-bold text-xl md:text-2xl leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
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
