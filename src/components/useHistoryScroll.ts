import { useCallback, useEffect, useRef, useState } from "react";

function easeBetween(value: number, from: number, to: number) {
  const progress = Math.max(0, Math.min(1, (value - from) / (to - from)));
  return progress * progress * (3 - 2 * progress);
}

export function useHistoryScroll() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const geometry = useRef({ step: 0, last: 0 });
  const cancelWheel = useRef(() => {});
  const [scene, setScene] = useState({ activeIndex: 0, first: -1 });

  useEffect(() => {
    const container = viewportRef.current;
    const strip = container?.firstElementChild;
    const frame = strip?.firstElementChild;
    if (!container || !frame) return;

    const viewport = container;
    const cards = Array.from(frame.children) as HTMLElement[];
    const last = cards.length - 1;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let measuredWidth = 0;
    let step = 0;
    let position = 0;
    let firstVisible = -1;
    let active = 0;
    let paintFrame = 0;
    let wheelFrame = 0;
    let wheelTarget = 0;

    function paint() {
      paintFrame = 0;
      if (viewport.clientWidth !== measuredWidth) {
        measure();
        return;
      }
      if (!step) return;

      position = Math.max(0, Math.min(last, viewport.scrollLeft / step));
      const first = Math.floor(position);
      const nearest = Math.round(position);
      if (firstVisible !== first || active !== nearest) {
        firstVisible = first;
        active = nearest;
        setScene({ first, activeIndex: nearest });
      }
      const progress = position / last;
      progressRef.current?.style.setProperty("--history-progress", String(progress));
      if (rangeRef.current) rangeRef.current.value = String(position);

      const mix = position - first;
      const opening = easeBetween(mix, 0.02, 0.96);
      viewport.style.setProperty("--scene-light", String(0.32 + Math.sin(mix * Math.PI) * 0.4));
      for (const [index, card] of cards.entries()) {
        const incoming = index === first + 1 && mix > 0;
        const layer = index === first ? "base" : incoming ? "incoming" : "";
        if (card.dataset.layer !== layer) card.dataset.layer = layer;
        if (!layer) continue;

        const year = incoming ? easeBetween(mix, 0.34, 0.76) : 1 - easeBetween(mix, 0.08, 0.49);
        const title = incoming ? easeBetween(mix, 0.42, 0.89) : 1 - easeBetween(mix, 0.03, 0.45);
        const copy = incoming ? easeBetween(mix, 0.51, 0.99) : 1 - easeBetween(mix, 0, 0.4);

        card.style.setProperty("--scene-year", year.toFixed(3));
        card.style.setProperty("--scene-title", title.toFixed(3));
        card.style.setProperty("--scene-copy", copy.toFixed(3));
        card.style.setProperty("--scene-offset", (index - position).toFixed(3));
        card.style.setProperty(
          "--scene-aperture",
          incoming ? `${((1 - opening) * 100).toFixed(2)}%` : "0%",
        );
        card.style.setProperty(
          "--scene-seam",
          incoming ? (Math.sin(Math.PI * opening) * 0.75).toFixed(3) : "0",
        );
      }
    }

    function schedulePaint() {
      if (!paintFrame) paintFrame = requestAnimationFrame(paint);
    }

    function stopWheel() {
      cancelAnimationFrame(wheelFrame);
      wheelFrame = 0;
    }

    function measure() {
      const width = viewport.clientWidth;
      if (!width || width === measuredWidth) return;
      const retainedPosition = measuredWidth ? position : viewport.scrollLeft / width;
      measuredWidth = width;
      step = Math.min(width, 560);
      geometry.current = { step, last };
      viewport.style.setProperty("--history-frame-width", `${width}px`);
      viewport.style.setProperty("--history-track-width", `${width + step * last}px`);
      viewport.setAttribute("data-scroll-effects", "");
      if (retainedPosition > 0) {
        stopWheel();
        viewport.scrollTo({ left: retainedPosition * step, behavior: "instant" });
      }
      paint();
    }

    function slideWheel() {
      const distance = wheelTarget - viewport.scrollLeft;
      if (Math.abs(distance) <= 2 || reducedMotion.matches) {
        viewport.scrollLeft = wheelTarget;
        wheelFrame = 0;
        return;
      }
      viewport.scrollLeft += distance * 0.24;
      wheelFrame = requestAnimationFrame(slideWheel);
    }

    function onWheel(event: WheelEvent) {
      if (event.ctrlKey || !event.cancelable) return;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1;
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        stopWheel();
        return;
      }
      const distance = event.deltaY * unit;
      if (event.deltaX && !event.shiftKey) {
        // A diagonal trackpad gesture must be able to continue up or down the page.
        stopWheel();
        event.preventDefault();
        window.scrollBy({ top: distance, behavior: "instant" });
        return;
      }
      const left = viewport.scrollLeft;
      const end = viewport.scrollWidth - viewport.clientWidth;
      if ((distance < 0 && left <= 1) || (distance > 0 && end - left <= 1)) return;

      event.preventDefault();
      wheelTarget = Math.max(0, Math.min(end, (wheelFrame ? wheelTarget : left) + distance));
      if (!wheelFrame) slideWheel();
    }

    cancelWheel.current = stopWheel;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    viewport.addEventListener("scroll", schedulePaint, { passive: true });
    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("pointerdown", stopWheel);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(paintFrame);
      stopWheel();
      viewport.removeEventListener("scroll", schedulePaint);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", stopWheel);
      viewport.removeAttribute("data-scroll-effects");
    };
  }, []);

  const scrollToStage = useCallback((index: number, animate = true) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const { step, last } = geometry.current;
    if (!step) return;
    const bounded = Math.max(0, Math.min(index, last));
    cancelWheel.current();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: bounded * step,
      behavior: animate && !reduce ? "smooth" : "instant",
    });
  }, []);

  return { viewportRef, progressRef, rangeRef, ...scene, scrollToStage };
}
