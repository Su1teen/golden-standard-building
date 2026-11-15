import { useCallback, useEffect, useRef, useState } from "react";

export function useHistoryScroll() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const cancelWheel = useRef(() => {});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = viewportRef.current;
    const strip = container?.firstElementChild;
    if (!container || !strip) return;

    const viewport = container;
    const cards = Array.from(strip.children) as HTMLElement[];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let measuredWidth = 0;
    let step = 0;
    let position = 0;
    let visibleIndex = 0;
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

      position = Math.max(0, Math.min(cards.length - 1, viewport.scrollLeft / step));
      const nearest = Math.round(position);
      if (visibleIndex !== nearest) {
        visibleIndex = nearest;
        setActiveIndex(nearest);
      }
      progressRef.current?.style.setProperty(
        "--history-progress",
        String(position / (cards.length - 1)),
      );
      for (const [index, card] of cards.entries()) {
        card.style.setProperty(
          "--history-reveal",
          Math.max(0, 1 - Math.abs(index - position)).toFixed(3),
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
      const width = cards[1].offsetLeft - cards[0].offsetLeft;
      if (!width) return;
      measuredWidth = viewport.clientWidth;
      const previousStep = step;
      step = width;
      if (previousStep && previousStep !== width) {
        stopWheel();
        viewport.scrollTo({ left: position * width, behavior: "instant" });
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
    viewport.setAttribute("data-scroll-effects", "");
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
    const cards = viewport.firstElementChild?.children;
    const bounded = Math.max(0, Math.min(index, (cards?.length ?? 1) - 1));
    const card = cards?.[bounded] as HTMLElement | undefined;
    if (!card) return;
    cancelWheel.current();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: card.offsetLeft,
      behavior: animate && !reduce ? "smooth" : "instant",
    });
  }, []);

  return { viewportRef, progressRef, activeIndex, scrollToStage };
}
