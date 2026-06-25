import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";

const navLinks = [
  { to: "/about", label: "О нас" },
  { to: "/solutions", label: "Решения" },
  { to: "/projects", label: "Проекты" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const baseColor = scrolled ? "text-[#1d1d1f]" : "text-white";
  const navBg = scrolled ? "nav-glass-light" : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg} ${baseColor}`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-[68px] flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Smart Group Kazakhstan"
          >
            <span
              className={`inline-block size-1.5 rounded-full transition-colors ${
                scrolled ? "bg-[#0071e3]" : "bg-white"
              }`}
            />
            <span className="font-bold tracking-[0.06em] text-[14px] md:text-[15px]">
              SMART GROUP KAZAKHSTAN
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
            {navLinks.map((l) =>
              l.to === "/solutions" ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"
                    activeProps={{ className: "opacity-100" }}
                  >
                    {l.label}
                    <ChevronDown className="size-3.5 opacity-70" />
                  </Link>
                  {solutionsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]">
                      <div className="bg-white text-[#1d1d1f] rounded-2xl p-5 grid grid-cols-2 gap-1 shadow-[0_24px_60px_rgba(0,0,0,0.16)] border border-black/5">
                        {solutions.map((s) => (
                          <Link
                            key={s.slug}
                            to={s.route}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-[#f5f5f7] transition-colors group"
                          >
                            <div>
                              <div className="text-[13px] font-medium">{s.title}</div>
                              <div className="text-[11px] text-[#6e6e73]">{s.short}</div>
                            </div>
                            <span className="font-mono text-[10px] text-[#6e6e73] opacity-0 group-hover:opacity-100 transition-opacity">
                              {s.index}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  activeProps={{ className: "opacity-100" }}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary hidden md:inline-flex !py-2.5 !px-5 !text-[12px]"
            >
              Обсудить проект
              <ArrowRight className="size-3.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden size-10 grid place-items-center rounded-full border border-current/20"
              aria-label="Меню"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-[#1d1d1f] text-white flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-[#0071e3]" />
              <span className="font-bold tracking-[0.06em]">SMART GROUP</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="size-10 grid place-items-center"
              aria-label="Закрыть"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-10 flex flex-col gap-3">
            {navLinks.map((l) =>
              l.to === "/solutions" ? (
                <div key={l.to}>
                  <Link
                    to="/solutions"
                    onClick={() => setOpen(false)}
                    className="text-3xl font-bold tracking-tight"
                  >
                    {l.label}
                  </Link>
                  <div className="grid grid-cols-2 gap-1 pl-1 my-4">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.route}
                        onClick={() => setOpen(false)}
                        className="py-2 text-[13px] text-white/70 hover:text-white"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold tracking-tight"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>
          <div className="px-5 py-5 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Обсудить проект
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
