"use client";

import Link from "next/link";

const heroVideoUrl =
  "https://res.cloudinary.com/dmjrtcds3/video/upload/v1774995093/hero-smash-burger_ilkazr.mp4";

export function HeroCta() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] md:object-[center_50%] scale-75 md:scale-100"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* CTA buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-nowrap gap-4 z-10">
        <Link href="/order" className="bg-[#e84c1e] text-white rounded-full px-4 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-[#c43a10] transition-colors">
          Order Now
        </Link>
        <Link href="/menu" className="border border-white/50 text-white rounded-full px-4 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-white/10 transition-colors">
          See Menu
        </Link>
      </div>
    </section>
  );
}
