import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Контакты — Smart Group Kazakhstan" },
      {
        name: "description",
        content: "Свяжитесь со Smart Group Kazakhstan: телефон, email, WhatsApp, офис в Астане.",
      },
      { property: "og:title", content: "Контакты Smart Group Kazakhstan" },
      {
        property: "og:description",
        content: "Звонок 20 минут — и есть понимание масштаба, бюджета и сроков.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      {/* Hero — dark with photo */}
      <section className="section-dark relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="hero-image-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-40 pb-16">
          <Reveal className="text-[11px] uppercase tracking-[0.24em] text-[#86a8c4] mb-8">
            Контакты
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="font-hero text-[clamp(48px,9vw,140px)] leading-[0.92] text-white max-w-[14ch]"
          >
            Начнём с разговора.
          </Reveal>
        </div>
      </section>

      {/* Contact split */}
      <section className="section-mid py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-12">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                Прямая связь
              </div>
              <a
                href="tel:+77078004444"
                className="block font-hero text-[clamp(28px,4vw,52px)] leading-[1.02] text-[#1d1d1f] story-link"
              >
                +7 (707) 800 44 44
              </a>
              <a
                href="mailto:info@smartgroup.kz"
                className="block mt-3 text-lg md:text-xl text-[#6e6e73] hover:text-[#0071e3] transition-colors"
              >
                info@smartgroup.kz
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-3">
                Офис
              </div>
              <p className="text-[17px] leading-relaxed text-[#1d1d1f]">
                Астана, БЦ Talan Towers
                <br />
                Достык, 16
              </p>
              <p className="mt-2 text-[#6e6e73] text-sm">Пн–Пт 10:00 — 19:00 · Сб по записи</p>
            </Reveal>

            <Reveal delay={200} className="space-y-1">
              <Item
                icon={<Phone className="size-4" />}
                title="Телефон"
                v="+7 (707) 800 44 44"
                href="tel:+77078004444"
              />
              <Item
                icon={<Mail className="size-4" />}
                title="Email"
                v="info@smartgroup.kz"
                href="mailto:info@smartgroup.kz"
              />
              <Item
                icon={<MessageCircle className="size-4" />}
                title="WhatsApp"
                v="Написать в WhatsApp"
                href="https://wa.me/77078004444"
              />
              <Item
                icon={<MapPin className="size-4" />}
                title="Адрес"
                v="Астана, БЦ Talan Towers"
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder 
      <section className="section-white py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal variant="breathe">
            <div className="aspect-[21/9] rounded-3xl relative overflow-hidden bg-[#f5f5f7] border border-black/8">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
                alt="Карта офиса"
                className="size-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center bg-white/85 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e6e73] mb-2">
                    Офис в Астане
                  </div>
                  <div className="font-hero text-2xl md:text-3xl text-[#1d1d1f]">
                    пр. Мангилик Ел, 55
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>*/}
    </main>
  );
}

function Item({
  icon,
  title,
  v,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  v: string;
  href?: string;
}) {
  const className = "flex items-center gap-4 py-3 border-b border-black/8 group";
  const content = (
    <>
      <span className="size-10 rounded-full border border-black/15 grid place-items-center text-[#1d1d1f] group-hover:border-[#0071e3] group-hover:text-[#0071e3] transition-colors">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-[#6e6e73]">{title}</div>
        <div className="text-[15px] text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
          {v}
        </div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
