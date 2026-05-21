import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { solutions } from "@/lib/solutions";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/projects", label: "Проекты" },
  { to: "/process", label: "Процесс" },
  { to: "/blog", label: "Блог" },
  { to: "/about", label: "О нас" },
  { to: "/contact", label: "Контакты" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-[1400px] px-5 md:px-8 flex items-center justify-between ${
            scrolled ? "glass rounded-full" : ""
          } transition-all duration-500`}
          style={scrolled ? { padding: "10px 18px" } : undefined}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-block size-2 rounded-full bg-[#C5A059] shadow-[0_0_18px_rgba(197,160,89,0.6)]" />
            <span className="font-extrabold tracking-tighter text-[15px] md:text-base">
              SMART GROUP
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.2em] text-mute">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="hover:text-[#C5A059] transition-colors story-link">
                Решения
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]">
                  <div className="glass-strong rounded-2xl p-6 grid grid-cols-2 gap-1">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.route}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors group"
                      >
                        <div>
                          <div className="text-[13px] tracking-normal normal-case text-fg font-medium">
                            {s.title}
                          </div>
                          <div className="text-[11px] tracking-normal normal-case text-mute">
                            {s.short}
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">
                          {s.index}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-[#C5A059] transition-colors story-link"
                activeProps={{ className: "text-[#C5A059]" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#C5A059] text-[#050505] text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Обсудить проект
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden size-10 grid place-items-center rounded-full glass"
              aria-label="Меню"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col">
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-[#C5A059]" />
              <span className="font-extrabold tracking-tighter">SMART GROUP</span>
            </Link>
            <button onClick={() => setOpen(false)} className="size-10 grid place-items-center" aria-label="Закрыть">
              <X className="size-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-10">
            <div className="space-y-1">
              {navLinks.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="reveal in block py-3 text-3xl font-extrabold tracking-tighter"
                  style={{ animationDelay: `${i * 60}ms` } as React.CSSProperties}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A059] mb-4">
                Решения
              </div>
              <div className="grid grid-cols-1 gap-1">
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.route}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2.5 border-b border-white/5"
                  >
                    <span className="text-base">{s.title}</span>
                    <span className="font-mono text-[10px] text-mute">{s.index}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex w-full justify-center bg-[#C5A059] text-[#050505] py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
