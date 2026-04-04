"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/* ── Horizontal Marquee ────────────────────────────── */

interface HorizontalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function HorizontalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: HorizontalMarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee-h",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 animate-marquee-h",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

/* ── Data ──────────────────────────────────────────── */

const marqueeItems = [
  "Smash Burgers",
  "Crispy Wings",
  "Loaded Fries",
  "Halal Certified",
  "Never Frozen",
  "Portsmouth's Finest",
  "100% British Beef",
];

/* ── Component ─────────────────────────────────────── */

export function MenuMarquee() {
  return (
    <div className="w-full bg-[#1a1a1a] border-y border-[#f5f0e8]/10 py-4">
      <HorizontalMarquee speed={30}>
        {marqueeItems.map((item, idx) => (
          <span
            key={idx}
            className="text-xs md:text-sm font-medium tracking-wide px-2 md:px-4 whitespace-nowrap text-[#f5f0e8]/70"
          >
            {item}
          </span>
        ))}
      </HorizontalMarquee>
    </div>
  );
}
