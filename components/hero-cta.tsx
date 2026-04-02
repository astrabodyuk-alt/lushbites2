"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

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

const heroVideoUrl =
  "https://res.cloudinary.com/dmjrtcds3/video/upload/v1774995093/hero-smash-burger_ilkazr.mp4";

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

export function HeroCta() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item-h");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = containerRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.45) 0%, rgba(0,0,0,.55) 50%, #1a1a1a 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] w-full pt-[72px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top: Text + CTAs */}
          <div className="container-lush space-y-8 max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-[#e84c1e] animate-hero-up">
              135 Queen Street · Portsmouth
            </p>

            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-[#f5f0e8] animate-hero-up [animation-delay:200ms]">
              <span className="block">Proper Food.</span>
              <span className="block italic text-[#e84c1e]">Portsmouth.</span>
              <span className="block">Done Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#f5f0e8]/80 leading-relaxed animate-hero-up [animation-delay:400ms]">
              Smash burgers · Crispy wings · Loaded fries &amp; more.
            </p>

            <div className="flex flex-wrap gap-4 animate-hero-up [animation-delay:600ms]">
              <Link
                href="/order"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-semibold bg-[#e84c1e] text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(232,76,30,.4)]"
              >
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
              <Link
                href="/menu"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-semibold border border-[#f5f0e8]/30 text-[#f5f0e8] overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#f5f0e8]/10"
              >
                <span className="relative z-10">See Menu</span>
              </Link>
            </div>
          </div>

          {/* Bottom: Horizontal Marquee */}
          <div
            ref={marqueeRef}
            className="relative w-full animate-hero-up [animation-delay:800ms]"
          >
            <div className="relative">
              <HorizontalMarquee speed={30}>
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-light tracking-tight px-12 marquee-item-h whitespace-nowrap text-[#f5f0e8]/90"
                  >
                    {item}
                  </div>
                ))}
              </HorizontalMarquee>

              {/* Left vignette */}
              <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-48 md:w-64 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent z-10" />

              {/* Right vignette */}
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-48 md:w-64 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
        aria-hidden="true"
      >
        <span />
      </div>
    </section>
  );
}
