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
      { property: "og:title", content: "Контакты Smart Group" },
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
    <main className="pt-32">
      <section className="relative px-6 md:px-10 pb-20 hero-grad pt-20 overflow-hidden">
        <div className="ambient-glow ambient-glow--hero" />
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-10">
            Контакты
          </Reveal>
          <Reveal
            as="h1"
            delay={120}
            className="text-[clamp(48px,10vw,180px)] font-extrabold tracking-tighter leading-[0.85] max-w-[14ch]"
          >
            Начнём с разговора.
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-12">
            <Reveal>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-3">
                Прямая связь
              </div>
              <a
                href="tel:+77000000000"
                className="block text-3xl md:text-4xl font-extrabold tracking-tighter story-link"
              >
                +7 (700) 000 00 00
              </a>
              <a
                href="mailto:hello@smartgroup.kz"
                className="block mt-2 text-xl text-fg/80 story-link"
              >
                hello@smartgroup.kz
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-3">
                Офис
              </div>
              <p className="text-lg leading-relaxed">
                Астана, пр. Мангилик Ел, 55
                <br />
                БЦ EXPO Business Centre, 14 этаж
              </p>
              <p className="mt-2 text-mute text-sm">Пн–Пт 10:00 — 19:00 · Сб по записи</p>
            </Reveal>

            <Reveal delay={200} className="space-y-4">
              <Item
                icon={<Phone className="size-4" />}
                title="Телефон"
                v="+7 (700) 000 00 00"
                href="tel:+77000000000"
              />
              <Item
                icon={<Mail className="size-4" />}
                title="Email"
                v="hello@smartgroup.kz"
                href="mailto:hello@smartgroup.kz"
              />
              <Item
                icon={<MessageCircle className="size-4" />}
                title="WhatsApp"
                v="Написать в WhatsApp"
                href="https://wa.me/77000000000"
              />
              <Item
                icon={<MapPin className="size-4" />}
                title="Адрес"
                v="Астана, пр. Мангилик Ел, 55"
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <Reveal variant="breathe">
            <div className="aspect-[21/9] rounded-3xl cinematic-card-2 relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-silver mb-3">
                    Карта
                  </div>
                  <div className="text-3xl font-extrabold tracking-tighter">
                    Астана · пр. Мангилик Ел, 55
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
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
  const className = "flex items-center gap-4 py-3 border-b border-white/5 group";
  const content = (
    <>
      <span className="size-10 rounded-full border border-white/15 grid place-items-center text-silver group-hover:border-white/40 transition-colors">
        {icon}
      </span>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-mute">{title}</div>
        <div className="text-base">{v}</div>
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
