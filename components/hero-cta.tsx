"use client";

import Link from "next/link";

const heroVideoUrl =
  "https://res.cloudinary.com/dmjrtcds3/video/upload/v1774995093/hero-smash-burger_ilkazr.mp4";

export function HeroCta() {
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
      <div className="container-lush relative z-[2] pt-[72px]">
        <div className="space-y-8 max-w-3xl">
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
