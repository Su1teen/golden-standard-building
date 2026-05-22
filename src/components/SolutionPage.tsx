import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/lib/solutions";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function SolutionPage({ s }: { s: Solution }) {
  return (
    <main className="relative">
      {/* Hero — dark with photo background */}
      <section className="section-dark relative min-h-[88vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-40 pb-20 w-full z-10">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-8">
            {s.eyebrow} · {s.index}
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,8vw,128px)] leading-[0.92] text-balance max-w-[18ch] text-white"
          >
            {s.hero}
          </Reveal>
        </div>
      </section>

      {/* Story — light gray, two-column */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">Опыт</div>
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="md:col-span-9 text-2xl md:text-4xl font-medium leading-[1.18] tracking-tight text-balance text-[#1d1d1f]"
          >
            {s.story}
          </Reveal>
        </div>
      </section>

      {/* Capabilities — white, 2x2 grid */}
      <section className="section-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <Reveal
              as="h2"
              className="font-hero text-[clamp(36px,5vw,72px)] leading-[1.02] max-w-[18ch]"
            >
              Что эта система делает
            </Reveal>
            <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] md:pb-2">
              {s.capabilities.length} ключевых способностей
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8">
            {s.capabilities.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 90}
                className="bg-white p-8 md:p-12 hover:bg-[#fafafa] transition-colors"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">
                  {c.title}
                </h3>
                <p className="text-[#6e6e73] leading-relaxed max-w-[40ch] text-[15px]">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience — light gray */}
      <section className="section-mid py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-6">
            Для кого
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight text-balance"
          >
            {s.audience}
          </Reveal>
        </div>
      </section>

      {/* Numbers — dark */}
      <section className="section-dark py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {s.numbers.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 100}
              className={`stat-divider md:pr-10 ${i < s.numbers.length - 1 ? "" : ""}`}
            >
              <div className="font-hero text-[clamp(56px,8vw,120px)] leading-none text-white">
                {n.value.match(/^-?\d+\.?\d*$/) ? (
                  <Counter to={Number(n.value)} decimals={n.value.includes(".") ? 1 : 0} />
                ) : (
                  n.value
                )}
              </div>
              <div className="mt-5 text-[12px] uppercase tracking-[0.22em] text-[#a1a1a6]">
                {n.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — white */}
      <section className="section-white py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal
            as="h2"
            className="font-hero text-[clamp(40px,6vw,96px)] leading-[1.02] text-balance text-[#1d1d1f] max-w-[18ch] mx-auto"
          >
            Спроектируем {s.title.toLowerCase()} под вас.
          </Reveal>
          <Reveal delay={150} className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-primary">
              {s.cta}
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
