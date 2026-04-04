"use client";

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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
    </section>
  );
}
