"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a numeric stat up from 0 when it scrolls into view.
 * Values that aren't "number + suffix" (e.g. a range like "8–11") render as-is.
 * SSR renders the final value, so no-JS / crawlers see the real number.
 */
export function CountUp({ value, durationMs = 1300 }: { value: string; durationMs?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^(\d+)(\D*)$/);
    if (!m || reducedMotion()) return; // not countable or reduced-motion → leave static

    const target = parseInt(m[1], 10);
    const suffix = m[2];
    el.textContent = `0${suffix}`;
    let raf = 0;
    let start = 0;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.disconnect();
          const tick = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min(1, (ts - start) / durationMs);
            el.textContent = `${Math.round(easeOut(p) * target)}${suffix}`;
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return <span ref={ref}>{value}</span>;
}

/**
 * Fades + lifts its children into view on scroll. Content is visible by default
 * (the hidden state is added by JS), so no-JS users and reduced-motion users see
 * it normally. `delayMs` staggers siblings.
 */
export function Reveal({
  children,
  as,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
}) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    el.classList.add("reveal");
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return (
    <Tag ref={(node: HTMLElement | null) => { ref.current = node; }} className={className}>
      {children}
    </Tag>
  );
}
