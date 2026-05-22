import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/lib/solutions";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import apartmentRender from "@/assets/render-apartment.png";
import villaRender from "@/assets/render-villa.png";
import officeRender from "@/assets/render-office.png";
import residentialRender from "@/assets/render-residential.png";
import buildingRender from "@/assets/render-hospital.png";
import mallRender from "@/assets/render-retail.png";
import hotelRender from "@/assets/render-hospitality.png";
import restaurantRender from "@/assets/render-restaurant.png";
import hospitalRender from "@/assets/render-healthcare.png";
import schoolRender from "@/assets/render-school.png";
import factoryRender from "@/assets/render-industry.png";
import agricultureRender from "@/assets/render-agriculture.png";

const renders: Record<string, string> = {
  "render-apartment.png": apartmentRender,
  "render-villa.png": villaRender,
  "render-office.png": officeRender,
  "render-residential.png": residentialRender,
  "render-hospital.png": buildingRender,
  "render-retail.png": mallRender,
  "render-hospitality.png": hotelRender,
  "render-restaurant.png": restaurantRender,
  "render-healthcare.png": hospitalRender,
  "render-school.png": schoolRender,
  "render-industry.png": factoryRender,
  "render-agriculture.png": agricultureRender,
};

export function SolutionPage({ s }: { s: Solution }) {
  return (
    <main className="relative">
      {/* Hero */}
      <section
        className={`relative min-h-[92vh] flex flex-col justify-end overflow-hidden ${s.gradientClass}`}
      >
        <div className="absolute inset-0 hero-grad opacity-60 pointer-events-none" />
        <div className="ambient-glow ambient-glow--hero" />
        <img
          src={renders[s.render]}
          alt=""
          aria-hidden="true"
          className="floating-render solution-hero-render"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-40 pb-24 w-full">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-8">
            {s.eyebrow} · {s.index}
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="text-[clamp(48px,9vw,160px)] font-extrabold tracking-tighter leading-[0.88] text-balance max-w-[18ch]"
          >
            {s.hero}
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
        <div className="ambient-glow ambient-glow--left" />
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-8">
            Опыт
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight text-balance"
          >
            {s.story}
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-32 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="ambient-glow ambient-glow--right" />
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-20 gap-10">
            <Reveal
              as="h2"
              className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-[16ch]"
            >
              Что эта система делает на самом деле
            </Reveal>
            <Reveal className="hidden md:block text-[11px] font-mono uppercase tracking-[0.3em] text-mute">
              {s.capabilities.length} ключевых способностей
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {s.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="bg-[#161617] p-10 md:p-12 hover-lift">
                <div className="font-mono text-[11px] text-silver mb-6">0{i + 1}</div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                  {c.title}
                </h3>
                <p className="text-mute leading-relaxed max-w-[36ch]">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="relative py-32 px-6 md:px-10 overflow-hidden">
        <div className="ambient-glow ambient-glow--left" />
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-8">
            Для кого
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight text-balance"
          >
            {s.audience}
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative py-32 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="ambient-glow ambient-glow--right" />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {s.numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 100}>
              <div className="text-[10vw] md:text-[6vw] font-extrabold tracking-tighter text-silver leading-none">
                {n.value.match(/^-?\d+\.?\d*$/) ? (
                  <Counter to={Number(n.value)} decimals={n.value.includes(".") ? 1 : 0} />
                ) : (
                  n.value
                )}
              </div>
              <div className="mt-4 text-[11px] font-mono uppercase tracking-[0.3em] text-mute">
                {n.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
        <div className="ambient-glow ambient-glow--hero" />
        <div className="max-w-[1400px] mx-auto text-center">
          <Reveal
            as="h2"
            className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance max-w-[16ch] mx-auto"
          >
            Спроектируем {s.title.toLowerCase()} под вас.
          </Reveal>
          <Reveal delay={150} className="mt-12 flex justify-center">
            <Link
              to="/contact"
              className="premium-button group inline-flex items-center gap-4 px-8 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs"
            >
              {s.cta}
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
