import { Link } from "@tanstack/react-router";
import { solutions } from "@/lib/solutions";

export function Footer() {
  return (
    <footer className="section-dark relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-[#0071e3]" />
              <span className="font-bold tracking-[0.06em] text-[15px]">SMART GROUP</span>
            </Link>
            <p className="mt-5 text-[14px] text-[#a1a1a6] max-w-[32ch] leading-relaxed">
              Создаём интеллектуальные системы для пространств, которые отвечают человеку.
            </p>
            <div className="mt-8 flex gap-5">
              {[
                { name: "Instagram", href: "https://instagram.com" },
                { name: "YouTube", href: "https://youtube.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-[12px] uppercase tracking-[0.16em] text-[#a1a1a6] hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#a1a1a6] mb-5">
              Решения
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.route}
                    className="text-[13px] text-white/85 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#a1a1a6] mb-5">
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
                    className="text-[13px] text-white/85 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#a1a1a6] mb-5">
              Контакты
            </div>
            <div className="space-y-2 text-[13px]">
              <div className="text-white/85">Астана, пр. Мангилик Ел, 55</div>
              <a
                href="tel:+77000000000"
                className="block text-white/85 hover:text-white transition-colors"
              >
                +7 (700) 000 00 00
              </a>
              <a
                href="mailto:hello@smartgroup.kz"
                className="block text-white/85 hover:text-white transition-colors"
              >
                hello@smartgroup.kz
              </a>
              <a
                href="https://wa.me/77000000000"
                className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-[0.18em] hover:bg-white/10 hover:border-white/40 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[11px] uppercase tracking-[0.2em] text-[#a1a1a6]">
          <span>© {new Date().getFullYear()} Smart Group Kazakhstan</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
