import { Link } from "@tanstack/react-router";
import { solutions } from "@/lib/solutions";

export function Footer() {
  return (
    <footer className="relative bg-[#161617] border-t border-white/5 overflow-hidden">
      <div className="ambient-glow ambient-glow--right" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-[#f5f5f7]" />
              <span className="font-extrabold tracking-tighter">SMART GROUP</span>
            </Link>
            <p className="mt-5 text-sm text-mute max-w-[28ch] leading-relaxed">
              Создаём интеллектуальные системы для пространств, которые отвечают человеку.
            </p>
            <div className="mt-8 flex gap-3">
              {["Instagram", "YouTube", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[11px] font-mono uppercase tracking-[0.2em] text-mute hover:text-fg transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-5">
              Решения
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.route}
                    className="text-[13px] text-fg/80 hover:text-fg transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-5">
              Компания
            </div>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "О нас" },
                { to: "/projects", label: "Проекты" },
                { to: "/process", label: "Процесс" },
                { to: "/blog", label: "Блог" },
                { to: "/contact", label: "Контакты" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[13px] text-fg/80 hover:text-fg transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-5">
              Контакты
            </div>
            <div className="space-y-2 text-[13px]">
              <div>Астана, пр. Мангилик Ел, 55</div>
              <a
                href="tel:+77000000000"
                className="block text-fg/80 hover:text-fg transition-colors"
              >
                +7 (700) 000 00 00
              </a>
              <a
                href="mailto:hello@smartgroup.kz"
                className="block text-fg/80 hover:text-fg transition-colors"
              >
                hello@smartgroup.kz
              </a>
              <a
                href="https://wa.me/77000000000"
                className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full border border-white/20 text-fg text-[11px] uppercase tracking-[0.2em] hover:bg-white/8 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-mute">
          <span>© {new Date().getFullYear()} Smart Group Kazakhstan</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-fg">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-fg">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
