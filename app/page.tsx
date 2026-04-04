import Link from "next/link";
import Image from "next/image";
import { menuSections } from "@/lib/menu-data";
import { ProductCard } from "@/components/product-card";

import { AnimatedSection } from "@/components/animated-section";
import { StatsCounter } from "@/components/stats-counter";
import { HeroCta } from "@/components/hero-cta";
import { MenuMarquee } from "@/components/menu-marquee";
import { MenuCards } from "@/components/menu-card";
import { OrderModes } from "@/components/order-modes";
import { ReviewsMarquee } from "@/components/reviews-marquee";



const stats = [
  { value: 5, suffix: "★", label: "Rating" },
  { value: 2000, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "%", label: "British Beef" },
];


const mapsEmbedUrl =
  "https://maps.google.com/maps?q=135+Queen+Street,+Portsmouth,+PO1+3HY,+UK&hl=en&z=16&output=embed";
const mapsUrl = "https://maps.google.com/?q=135+Queen+Street+Portsmouth+PO1+3HY";

const showcaseBurgers = menuSections
  .filter((s) => ["beef-burgers", "lamb-burgers", "chicken-burgers"].includes(s.id))
  .flatMap((s) => s.items)
  .slice(0, 3);
const showcaseWings = menuSections.find((s) => s.id === "wings")?.items.slice(0, 3) ?? [];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <HeroCta />

      {/* ── MENU MARQUEE ──────────────────────────────────── */}
      <MenuMarquee />

      {/* ── USP STATS ─────────────────────────────────────── */}
      <div className="py-16 bg-dark border-y border-white/10">
        <div className="container-lush">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <StatsCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU SHOWCASE ─────────────────────────────────── */}
      <MenuCards />

      {/* ── ORDER MODES ───────────────────────────────────── */}
      <OrderModes />

      {/* ── FEATURED MENU ITEMS ───────────────────────────── */}
      <AnimatedSection className="py-20 bg-brown">
        <div className="container-lush">
          <p className="section-label mb-3">The favourites</p>
          <h2 className="section-title mb-10">
            Our signature <em className="text-fire-italic">burgers</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {showcaseBurgers.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/menu" className="btn-ghost">View Full Menu</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── STORY TEASER ──────────────────────────────────── */}
      <AnimatedSection className="py-20 bg-dark">
        <div className="container-lush">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <Image src="/menu/our-story.png" alt="Our Story" fill className="object-cover" />
            </div>
            <div>
              <p className="section-label mb-3">Our story</p>
              <h2 className="section-title mb-6">
                Started with a <em className="text-fire-italic">question</em>
              </h2>
              <p className="section-body mb-8">
                Why doesn't Portsmouth have a proper smash burger? We asked that question, quit
                our jobs, and opened Lush Bites at 135 Queen Street. Every burger is fresh,
                smashed to order, on a toasted brioche bun. No shortcuts. No freezer. Ever.
              </p>
              <Link href="/story" className="btn-fire">Read Our Story</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>


      {/* ── GOOGLE REVIEWS ────────────────────────────────── */}
      <ReviewsMarquee />

      {/* ── FIND US ───────────────────────────────────────── */}
      <AnimatedSection className="py-20 bg-dark">
        <div className="container-lush">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden border border-white/10 h-72 lg:h-auto">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lush Bites location"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="section-label mb-3">Find us</p>
                <h2 className="section-title mb-4">
                  135 Queen Street,<br />
                  <em className="text-fire-italic">Portsmouth PO1 3HY</em>
                </h2>
                <p className="section-body mb-6">
                  Right in the heart of Portsmouth. Easy to find, even easier to love.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Mon–Thu", "11:00–22:00"],
                  ["Fri–Sat", "11:00–23:00"],
                  ["Sun",     "12:00–21:00"],
                ].map(([days, time]) => (
                  <div key={days} className="flex justify-between max-w-xs text-muted">
                    <span>{days}</span><span className="text-cream/80">{time}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/find-us" className="btn-fire">Get Directions</Link>
                <Link href="/order"   className="btn-ghost">Order Online</Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
