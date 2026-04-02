import Link from "next/link";
import Image from "next/image";
import { menuSections } from "@/lib/menu-data";
import { ProductCard } from "@/components/product-card";

import { AnimatedSection } from "@/components/animated-section";
import { StatsCounter } from "@/components/stats-counter";
import { HeroCta } from "@/components/hero-cta";
import { MenuMarquee } from "@/components/menu-marquee";
import { MenuCards } from "@/components/menu-card";


const reviews = [
  {
    stars: 5,
    text: "The smash burgers here are absolutely incredible. Perfectly seasoned patties, toasted buns, and the sauce is next level. Best burger in Portsmouth by a mile!",
    name: "James T.",
    source: "Google",
    initials: "JT",
  },
  {
    stars: 5,
    text: "Went in for a quick bite and left completely blown away. The smash burger was juicy, crispy, and just perfect. Already planning my next visit!",
    name: "Sarah M.",
    source: "Google",
    initials: "SM",
  },
  {
    stars: 5,
    text: "Hands down the best smash burgers I've ever had. The meat quality is unreal — you can tell it's proper British beef. The loaded fries are insane too.",
    name: "Mike R.",
    source: "Google",
    initials: "MR",
  },
];


const stats = [
  { value: 5, suffix: "★", label: "Rating" },
  { value: 2000, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "%", label: "British Beef" },
];

const orderModes = [
  {
    icon: "🍽️",
    title: "Dine In",
    desc: "Eat with us at 135 Queen Street. No booking needed — just turn up, sit down, and enjoy.",
    cta: { label: "Find Us", href: "/order" },
  },
  {
    icon: "📦",
    title: "Click & Collect",
    desc: "Order ahead online, skip the queue. We'll have it ready in 20–25 minutes.",
    cta: { label: "Order Now", href: "https://lushbites.co.uk" },
    featured: true,
  },
  {
    icon: "🛵",
    title: "Delivery",
    desc: "We deliver across Portsmouth via Deliveroo. Hot food, straight to your door.",
    cta: { label: "Order Delivery", href: "https://deliveroo.co.uk" },
  },
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
      <AnimatedSection className="py-20 bg-dark">
        <div className="container-lush">
          <p className="section-label mb-3">How to eat</p>
          <h2 className="section-title mb-12">
            Your way. <em className="text-fire-italic">Your choice.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orderModes.map(({ icon, title, desc, cta, featured }) => (
              <div
                key={title}
                className={`
                  bg-brown rounded-xl p-7 flex flex-col gap-4 border transition-all duration-200
                  hover:-translate-y-1 hover:shadow-lg
                  ${featured ? "border-fire/40 ring-1 ring-fire/20" : "border-white/10"}
                `}
              >
                <div className="w-14 h-14 rounded-md bg-fire/10 flex items-center justify-center text-3xl">
                  {icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-cream mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
                <Link href={cta.href} className={featured ? "btn-fire mt-auto" : "btn-ghost mt-auto"}>
                  {cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
            <div className="aspect-square lg:aspect-[4/3] bg-brown rounded-xl border border-white/10 flex items-center justify-center text-8xl">
              🍔
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

      {/* ── GOOGLE REVIEWS ─────────────────────────────────── */}
      <AnimatedSection className="py-20" style={{ backgroundColor: "#222222" }}>
        <div className="container-lush">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-3">What people say</p>
              <h2 className="section-title">
                Google <em className="text-fire-italic">Reviews</em>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-fire/10 border border-fire/30 rounded-xl px-6 py-4">
              <span className="font-display text-4xl text-cream">5.0</span>
              <div>
                <p className="text-fire text-lg leading-none mb-1">★★★★★</p>
                <p className="text-xs text-muted">Google Reviews</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-dark rounded-lg border border-white/10 p-6 hover:-translate-y-1 transition-transform duration-200">
                <p className="text-fire tracking-wider mb-3">{"★".repeat(r.stars)}</p>
                <p className="text-[0.9375rem] text-muted italic leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-fire flex items-center justify-center text-xs font-bold text-white">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cream">{r.name}</p>
                    <p className="text-xs text-muted">{r.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
