"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  value: number;
  suffix: string;
  label: string;
};

export function StatsCounter({ value, suffix, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] text-fire leading-none mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
