import { useCallback, useEffect, useRef, useState } from "react";

const transitionStart = 0.25;
const transitionEnd = 0.75;
const settleDelay = 190;
const settleDuration = 280;

function easeBetween(value: number, from: number, to: number) {
  const progress = Math.max(0, Math.min(1, (value - from) / (to - from)));
  return progress * progress * (3 - 2 * progress);
}

export function useHistoryScroll() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const geometry = useRef({ step: 0, last: 0 });
  const cancelMotion = useRef(() => {});
  const finishScrubbing = useRef(() => {});
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
    let settleTimer = 0;
    let settleFrame = 0;
    let touchHeld = false;
    let touchGesture: { id: number; x: number; y: number; left: number; axis: string } | null =
      null;
    let userScrolling = false;
    let direction = 0;
    let lastUserLeft = 0;

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

      // The ends of an interval keep the whole chapter readable while short inputs accumulate.
      const mix = Math.max(
        0,
        Math.min(1, (position - first - transitionStart) / (transitionEnd - transitionStart)),
      );
      const opening = easeBetween(mix, 0.02, 0.96);
      viewport.style.setProperty("--scene-light", String(0.32 + Math.sin(mix * Math.PI) * 0.4));
      for (const [index, card] of cards.entries()) {
        const incoming = index === first + 1 && mix > 0;
        const layer = index === first && mix < 1 ? "base" : incoming ? "incoming" : "";
        if (card.dataset.layer !== layer) card.dataset.layer = layer;
        if (!layer) continue;

        const year = incoming ? easeBetween(mix, 0.41, 0.76) : 1 - easeBetween(mix, 0.08, 0.41);
        const title = incoming ? easeBetween(mix, 0.45, 0.89) : 1 - easeBetween(mix, 0.07, 0.45);
        const copy = incoming ? easeBetween(mix, 0.51, 0.99) : 1 - easeBetween(mix, 0, 0.4);

        card.style.setProperty("--scene-year", year.toFixed(3));
        card.style.setProperty("--scene-title", title.toFixed(3));
        card.style.setProperty("--scene-copy", copy.toFixed(3));
        card.style.setProperty("--scene-offset", (incoming ? 1 - mix : -mix).toFixed(3));
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

    function stopSettling() {
      window.clearTimeout(settleTimer);
      cancelAnimationFrame(settleFrame);
      settleFrame = 0;
    }

    function stopMotion() {
      stopWheel();
      stopSettling();
      userScrolling = false;
    }

    function beginGesture(inputDirection = 0) {
      stopSettling();
      if (!userScrolling) {
        userScrolling = true;
        lastUserLeft = viewport.scrollLeft;
        direction = 0;
      }
      if (inputDirection) direction = inputDirection;
    }

    function finishTransition(inputDirection = 0) {
      stopMotion();
      if (!step || reducedMotion.matches) return;
      const left = viewport.scrollLeft;
      const chapter = Math.floor(left / step);
      const fraction = left / step - chapter;
      if (fraction <= transitionStart || fraction >= transitionEnd) return;

      // Complete only the interrupted transition, stopping at its readable edge.
      const forward = inputDirection ? inputDirection > 0 : fraction >= 0.5;
      const edge = (chapter + (forward ? transitionEnd : transitionStart)) * step;
      const destination = forward ? Math.ceil(edge) : Math.floor(edge);
      const startingTime = performance.now();
      function advance(time: number) {
        const progress = easeBetween(time - startingTime, 0, settleDuration);
        if (reducedMotion.matches) {
          settleFrame = 0;
          return;
        }
        viewport.scrollLeft = left + (destination - left) * progress;
        settleFrame = progress < 1 ? requestAnimationFrame(advance) : 0;
      }
      settleFrame = requestAnimationFrame(advance);
    }

    function scheduleSettle() {
      window.clearTimeout(settleTimer);
      if (userScrolling && direction && !touchHeld && !wheelFrame) {
        settleTimer = window.setTimeout(() => finishTransition(direction), settleDelay);
      }
    }

    function onScroll() {
      schedulePaint();
      if (!userScrolling) return;
      const left = viewport.scrollLeft;
      const delta = left - lastUserLeft;
      if (Math.abs(delta) >= 0.5) direction = Math.sign(delta);
      lastUserLeft = left;
      scheduleSettle();
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
        stopMotion();
        viewport.scrollTo({ left: retainedPosition * step, behavior: "instant" });
      }
      paint();
    }

    function slideWheel() {
      const distance = wheelTarget - viewport.scrollLeft;
      if (Math.abs(distance) <= 2 || reducedMotion.matches) {
        viewport.scrollLeft = wheelTarget;
        wheelFrame = 0;
        scheduleSettle();
        return;
      }
      viewport.scrollLeft += distance * 0.24;
      wheelFrame = requestAnimationFrame(slideWheel);
    }

    function onWheel(event: WheelEvent) {
      if (event.ctrlKey) {
        stopMotion();
        return;
      }
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1;
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        if (!event.deltaX) return;
        stopWheel();
        beginGesture(Math.sign(event.deltaX));
        scheduleSettle();
        return;
      }
      if (!event.cancelable) return;
      const distance = event.deltaY * unit;
      const left = viewport.scrollLeft;
      const end = viewport.scrollWidth - viewport.clientWidth;
      const leaving = (distance < 0 && left <= 1) || (distance > 0 && end - left <= 1);
      if (!event.shiftKey && (event.deltaX || leaving)) {
        // Keep vertical scrolling available even if the browser latched the horizontal viewport.
        stopWheel();
        scheduleSettle();
        event.preventDefault();
        window.scrollBy({ top: distance, behavior: "instant" });
        return;
      }
      if (leaving) return;

      event.preventDefault();
      beginGesture(Math.sign(distance));
      wheelTarget = Math.max(0, Math.min(end, (wheelFrame ? wheelTarget : left) + distance));
      if (!wheelFrame) slideWheel();
    }

    function onPointerDown(event: PointerEvent) {
      stopMotion();
      if (
        event.pointerType !== "touch" ||
        !event.isPrimary ||
        (event.target instanceof Element && event.target.closest("button, a, input"))
      )
        return;
      touchHeld = true;
      touchGesture = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        left: viewport.scrollLeft,
        axis: "",
      };
    }

    function onPointerMove(event: PointerEvent) {
      const gesture = touchGesture;
      if (!gesture || gesture.id !== event.pointerId || !step) return;
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      if (!gesture.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 8) {
        gesture.axis = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
        if (gesture.axis === "horizontal") viewport.setPointerCapture(event.pointerId);
      }
      if (gesture.axis !== "horizontal") return;
      const origin = Math.round(gesture.left / step);
      viewport.scrollLeft = Math.max(
        Math.max(0, origin - 1) * step,
        Math.min(Math.min(last, origin + 1) * step, gesture.left - dx),
      );
    }

    function onPointerEnd(event: PointerEvent) {
      const gesture = touchGesture;
      if (!gesture || gesture.id !== event.pointerId) return;
      touchGesture = null;
      touchHeld = false;
      if (gesture.axis !== "horizontal" || !step) return;
      const dx = event.clientX - gesture.x;
      const origin = Math.round(gesture.left / step);
      const target = Math.max(0, Math.min(last, origin + (Math.abs(dx) > 35 ? -Math.sign(dx) : 0)));
      const start = viewport.scrollLeft;
      const destination = target * step;
      const startTime = performance.now();
      function advance(time: number) {
        const progress = reducedMotion.matches ? 1 : easeBetween(time - startTime, 0, 300);
        viewport.scrollLeft = start + (destination - start) * progress;
        settleFrame = progress < 1 ? requestAnimationFrame(advance) : 0;
      }
      settleFrame = requestAnimationFrame(advance);
    }

    cancelMotion.current = stopMotion;
    finishScrubbing.current = () => {
      if (!settleFrame) finishTransition();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    viewport.addEventListener("scroll", onScroll, { passive: true });
    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerEnd);
    viewport.addEventListener("pointercancel", onPointerEnd);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(paintFrame);
      stopMotion();
      viewport.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerEnd);
      viewport.removeEventListener("pointercancel", onPointerEnd);
      viewport.removeAttribute("data-scroll-effects");
    };
  }, []);

  const scrollToStage = useCallback((index: number, animate = true) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const { step, last } = geometry.current;
    if (!step) return;
    const bounded = Math.max(0, Math.min(index, last));
    cancelMotion.current();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: bounded * step,
      behavior: animate && !reduce ? "smooth" : "instant",
    });
  }, []);

  const settleScrubber = useCallback(() => finishScrubbing.current(), []);

  return { viewportRef, progressRef, rangeRef, ...scene, scrollToStage, settleScrubber };
}
