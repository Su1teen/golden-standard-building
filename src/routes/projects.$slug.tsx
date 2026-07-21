import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { getProjectBySlug, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = getProjectBySlug(params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Smart Group Kazakhstan` : "Проект — Smart Group" },
        {
          name: "description",
          content: p?.description ?? "Детали проекта Smart Group Kazakhstan.",
        },
        { property: "og:title", content: p?.title ?? "Проект Smart Group" },
        { property: "og:description", content: p?.description ?? "" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    throw notFound();
  }

  const [activeImg, setActiveImg] = useState(0);

  // Find adjacent projects for navigation
  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIdx > 0 ? projects[currentIdx - 1] : null;
  const nextProject = currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null;

  return (
    <main>
      {/* Hero — full-width cover image */}
      <section className="section-dark relative min-h-[75vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{ backgroundImage: `url(${project.images[activeImg]})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Все проекты
            </Link>
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,8vw,128px)] leading-[0.92] text-white max-w-[18ch]"
          >
            {project.title}
          </Reveal>
        </div>
      </section>

      {/* Description */}
      <section className="section-mid py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">О проекте</div>
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="md:col-span-9 text-2xl md:text-4xl font-medium leading-[1.18] tracking-tight text-balance text-[#1d1d1f]"
          >
            {project.description}
          </Reveal>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="section-white py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                Фотографии
              </div>
              <h2 className="font-hero text-[clamp(32px,4vw,56px)] leading-[1.05] text-[#1d1d1f]">
                Галерея проекта
              </h2>
            </div>
            {project.images.length > 1 && (
              <span className="text-[13px] text-[#6e6e73]">
                {project.images.length} фото
              </span>
            )}
          </Reveal>

          {/* Main image */}
          <Reveal delay={80}>
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-[#f5f5f7]">
              <img
                src={project.images[activeImg]}
                alt={`${project.title} — фото ${activeImg + 1}`}
                className="size-full object-cover transition-opacity duration-500"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImg((i) => (i - 1 + project.images.length) % project.images.length)
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/40 backdrop-blur-md text-white/90 hover:bg-black/60 flex items-center justify-center transition-all"
                    aria-label="Предыдущее фото"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImg((i) => (i + 1) % project.images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/40 backdrop-blur-md text-white/90 hover:bg-black/60 flex items-center justify-center transition-all"
                    aria-label="Следующее фото"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[12px]">
                    {activeImg + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </Reveal>

          {/* Thumbnails grid */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 mt-4">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImg
                      ? "border-[#0071e3] opacity-100 ring-2 ring-[#0071e3]/30"
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={img} alt="" className="size-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA with contact form */}
      <section className="section-dark py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <Reveal>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#86a8c4] mb-6">
                  Ваш проект
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-hero text-[clamp(36px,5vw,72px)] leading-[1.02] text-white mb-6">
                  Хотите такой же результат?
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-[#a1a1a6] leading-relaxed max-w-[40ch]">
                  Мы реализовали более 500 проектов по всему Казахстану.
                  Расскажите нам о вашем объекте — спроектируем и реализуем интеллектуальную
                  систему точно под ваши задачи.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <ContactForm variant="dark" compact />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prevProject || nextProject) && (
        <section className="section-white border-t border-black/5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2">
            {prevProject ? (
              <Link
                to="/projects/$slug"
                params={{ slug: prevProject.slug }}
                className="group flex items-center gap-4 p-8 md:p-12 hover:bg-[#f5f5f7] transition-colors border-r border-black/5"
              >
                <ArrowLeft className="size-5 text-[#6e6e73] group-hover:text-[#1d1d1f] transition-colors shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-1">
                    Предыдущий
                  </div>
                  <div className="font-bold text-[#1d1d1f] truncate">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                to="/projects/$slug"
                params={{ slug: nextProject.slug }}
                className="group flex items-center justify-end gap-4 p-8 md:p-12 hover:bg-[#f5f5f7] transition-colors text-right"
              >
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-1">
                    Следующий
                  </div>
                  <div className="font-bold text-[#1d1d1f] truncate">{nextProject.title}</div>
                </div>
                <ArrowRight className="size-5 text-[#6e6e73] group-hover:text-[#1d1d1f] transition-colors shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}
    </main>
  );
}
