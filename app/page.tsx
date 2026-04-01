import Link from "next/link";
import Image from "next/image";
import { menuSections } from "@/lib/menu-data";
import { ProductCard } from "@/components/product-card";
import { TrustStrip } from "@/components/trust-strip";
import { AnimatedSection } from "@/components/animated-section";
import { StatsCounter } from "@/components/stats-counter";

const heroVideoUrl =
  "https://res.cloudinary.com/dmjrtcds3/video/upload/v1774995093/hero-smash-burger_ilkazr.mp4";

const reviews = [
  {
    stars: 5,
    text: "Best smash burger I've had outside of London. The Devil's Bite is absolutely unreal. Queued 20 minutes and it was worth every second.",
    name: "Jamie T.",
    source: "Google",
    initials: "JT",
  },
  {
    stars: 5,
    text: "Fresh, hot, and massive. The lamb smash is different — proper spicing, soft bun, not a soggy mess. Finally a halal option that doesn't compromise.",
    name: "Amara S.",
    source: "Google",
    initials: "AS",
  },
  {
    stars: 5,
    text: "The cheesy crinkle fries alone are worth the trip. Added the mango habanero wings and I was in heaven. 10/10 would recommend to anyone in Portsmouth.",
    name: "Ryan K.",
    source: "Google",
    initials: "RK",
  },
];

const showcaseCards = [
  { label: "Burgers", emoji: "🍔", href: "/menu#beef-burgers", span: true },
  { label: "Wings",   emoji: "🍗", href: "/menu#wings" },
  { label: "Fries",   emoji: "🍟", href: "/menu#sides" },
  { label: "Salads",  emoji: "🥗", href: "/menu#salads" },
  { label: "Drinks",  emoji: "🥤", href: "/menu" },
];

const stats = [
  { value: 135, suffix: "", label: "Queen Street" },
  { value: 4.8, suffix: "★", label: "Average Rating" },
  { value: 30,  suffix: "min", label: "Avg. Order Time" },
  { value: 100, suffix: "%", label: "Fresh Daily" },
];

const orderModes = [
  {
    icon: "🪑",
    title: "Dine In",
    desc: "Eat with us at 135 Queen Street. No booking needed — just turn up, sit down, and enjoy.",
    cta: { label: "Find Us", href: "/find-us" },
  },
  {
    icon: "📦",
    title: "Click & Collect",
    desc: "Order ahead online, skip the queue. We'll have it ready in 20–25 minutes.",
    cta: { label: "Order Now", href: "/order" },
    featured: true,
  },
  {
    icon: "🛵",
    title: "Delivery",
    desc: "We deliver across Portsmouth via Deliveroo, Just Eat & Uber Eats.",
    cta: { label: "Order Delivery", href: "/order" },
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
      <section className="relative h-screen min-h-[640px] flex items-center" aria-label="Hero">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,26,26,.55) 0%, rgba(26,26,26,.82) 60%, #1a1a1a 100%)",
          }}
        />

        <div className="container-lush relative z-[2] pt-[72px]">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-fire mb-4 animate-fade-up">
              135 Queen Street · Portsmouth
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-cream mb-6">
              <span className="block animate-fade-up" style={{ animationDelay: "0.12s" }}>Proper Food.</span>
              <span className="block italic text-fire animate-fade-up" style={{ animationDelay: "0.24s" }}>Portsmouth</span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.36s" }}>Done Right.</span>
            </h1>
            <p className="text-lg text-cream/80 mb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              Smash burgers · Crispy wings · Loaded fries &amp; more.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Link href="/order" className="btn-fire btn-lg">Order Now</Link>
              <Link href="/menu"  className="btn-ghost btn-lg">See Menu</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────── */}
      <TrustStrip />

      {/* ── MENU SHOWCASE ─────────────────────────────────── */}
      <AnimatedSection className="py-20 bg-dark">
        <div className="container-lush">
          <p className="section-label mb-3">What we do</p>
          <h2 className="section-title mb-12">
            Everything on <em className="text-fire-italic">the menu</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseCards.map(({ label, emoji, href, span }) => (
              <Link
                key={label}
                href={href}
                className={`
                  group bg-brown border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3
                  hover:-translate-y-1 hover:border-fire/40 hover:shadow-fire/20 hover:shadow-lg transition-all duration-200
                  ${span ? "col-span-2 md:col-span-2" : ""}
                `}
              >
                <span className="text-5xl">{emoji}</span>
                <span className="font-display text-xl text-cream group-hover:text-fire transition-colors">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── USP STATS ─────────────────────────────────────── */}
      <div className="py-16 bg-brown border-y border-white/10">
        <div className="container-lush">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatsCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>

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

      {/* ── REVIEWS ───────────────────────────────────────── */}
      <AnimatedSection className="py-20 bg-brown">
        <div className="container-lush">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-3">What people say</p>
              <h2 className="section-title">
                Portsmouth <em className="text-fire-italic">loves it</em>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-fire/10 border border-fire/30 rounded-xl px-6 py-4">
              <span className="font-display text-4xl text-cream">4.8</span>
              <div>
                <p className="text-fire text-lg leading-none mb-1">★★★★★</p>
                <p className="text-xs text-muted">Google Reviews</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-dark rounded-lg border border-white/10 p-6">
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
