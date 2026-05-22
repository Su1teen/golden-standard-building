import {
  createElement,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type CSSProperties,
} from "react";

type Props = PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  variant?: "unfold" | "breathe" | "fade";
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}>;

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "unfold",
  className = "",
  style,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          if (once) io.disconnect();
        } else if (!once) {
          setSeen(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const cls = seen
    ? variant === "breathe"
      ? "in-breathe"
      : variant === "fade"
        ? "in-fade"
        : "in"
    : "";
  return createElement(
    Tag,
    {
      ref,
      className: `reveal ${cls} ${className}`,
      style: { animationDelay: `${delay}ms`, ...style },
    },
    children,
  );
}
