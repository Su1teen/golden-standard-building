import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm({
  compact = false,
  variant = "light",
}: {
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const [sent, setSent] = useState(false);

  const isDark = variant === "dark";
  const formBg = isDark
    ? "bg-[#1d1d1f] border border-white/10 text-white"
    : "bg-white border border-black/8 text-[#1d1d1f] shadow-[0_2px_30px_rgba(0,0,0,0.06)]";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`rounded-3xl ${formBg} ${compact ? "p-8" : "p-8 md:p-10"} relative overflow-hidden`}
    >
      <div className="relative">
        <div
          className={`text-[11px] uppercase tracking-[0.22em] mb-3 ${
            isDark ? "text-[#86a8c4]" : "text-[#6e6e73]"
          }`}
        >
          Запрос
        </div>
        <h3
          className={`font-hero text-[clamp(28px,3vw,40px)] leading-[1.05] mb-8 ${
            isDark ? "text-white" : "text-[#1d1d1f]"
          }`}
        >
          Расскажите о проекте.
        </h3>

        {sent ? (
          <div className="py-12 text-center">
            <div className="font-hero text-3xl md:text-4xl mb-2">Спасибо.</div>
            <div className={`${isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"} text-sm`}>
              Свяжемся в течение рабочего дня.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Имя" name="name" required variant={variant} />
            <Field label="Телефон" name="phone" type="tel" required variant={variant} />
            <Field
              label="Email"
              name="email"
              type="email"
              className="md:col-span-2"
              variant={variant}
            />
            <Field
              label="Объект (квартира, отель…)"
              name="object"
              className="md:col-span-2"
              variant={variant}
            />
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary w-full justify-center">
                Отправить запрос
                <ArrowRight className="size-4" />
              </button>
              <p
                className={`mt-4 text-[11px] text-center ${
                  isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"
                }`}
              >
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
  variant = "light",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <label className={`block ${className}`}>
      <span
        className={`block text-[11px] uppercase tracking-[0.22em] mb-2 ${
          isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"
        }`}
      >
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className={`w-full bg-transparent border-b py-3 text-[15px] outline-none transition-colors ${
          isDark
            ? "border-white/20 focus:border-white/60 text-white"
            : "border-black/15 focus:border-[#0071e3] text-[#1d1d1f]"
        }`}
      />
    </label>
  );
}
