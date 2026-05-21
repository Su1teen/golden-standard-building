import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <Link
        to="/contact"
        className="glass-strong inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full ring-1 ring-[#C5A059]/30 hover:ring-[#C5A059]/60 transition-all"
      >
        <span className="text-[12px] font-medium tracking-wide">Обсудить проект</span>
        <span className="size-8 grid place-items-center rounded-full bg-[#C5A059] text-[#050505]">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </div>
  );
}
