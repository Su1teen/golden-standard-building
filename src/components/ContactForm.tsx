import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`glass-strong rounded-3xl ${compact ? "p-8" : "p-10 md:p-12"} relative overflow-hidden`}
    >
      <div className="absolute -top-20 -right-20 size-64 bg-[#f5f5f7]/5 blur-[120px] pointer-events-none" />
      <div className="relative">
        <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-silver mb-3">
          Запрос
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-8">
          Расскажите о проекте
        </h3>

        {sent ? (
          <div className="py-12 text-center">
            <div className="text-2xl font-extrabold tracking-tighter mb-2">Спасибо.</div>
            <div className="text-mute text-sm">Свяжемся в течение рабочего дня.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Имя" name="name" required />
            <Field label="Телефон" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" className="md:col-span-2" />
            <Field label="Объект (квартира, отель…)" name="object" className="md:col-span-2" />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="premium-button group w-full font-bold uppercase tracking-[0.2em] text-xs py-5 rounded-full active:scale-[0.99] inline-flex items-center justify-center gap-3"
              >
                Отправить запрос
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-4 text-[11px] text-mute text-center">
                Нажимая, вы соглашаетесь с обработкой персональных данных.
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-mute mb-2">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/15 focus:border-white/60 outline-none py-3 text-base text-fg transition-colors"
      />
    </label>
  );
}
