import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Order — Lush Bites Portsmouth",
  description:
    "Order Lush Bites online for dine in, click & collect, or delivery via Deliveroo, Just Eat and Uber Eats.",
};

const orderModes = [
  {
    icon: "🪑",
    title: "Dine In",
    desc: "No booking required. Walk in, find a seat, and order at the counter. We'll bring it to your table hot and fresh.",
    details: [
      "No reservation needed",
      "Mon–Thu 11:00–22:00",
      "Fri–Sat 11:00–23:00",
      "Sun 12:00–21:00",
    ],
    cta: { label: "Get Directions", href: "/find-us" },
  },
  {
    icon: "📦",
    title: "Click & Collect",
    desc: "Order ahead online, skip the queue. We'll have your order boxed and ready in 20–25 minutes.",
    details: [
      "Order 20–25 min ahead",
      "No waiting in line",
      "Ready at the counter",
      "Same menu, full selection",
    ],
    cta: { label: "Order to Collect", href: "#" },
    featured: true,
  },
  {
    icon: "🛵",
    title: "Delivery",
    desc: "Get Lush Bites delivered across Portsmouth on your favourite platform.",
    platforms: [
      { name: "Deliveroo", color: "#00CCBC", href: "#" },
      { name: "Just Eat",  color: "#ff8000", href: "#" },
      { name: "Uber Eats", color: "#06C167", href: "#" },
    ],
  },
];

export default function OrderPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="bg-brown py-16 border-b border-white/10">
        <div className="container-lush">
          <p className="section-label mb-3">How to eat</p>
          <h1 className="section-title">
            Your way. <em className="text-fire-italic">Your choice.</em>
          </h1>
        </div>
      </div>

      {/* Order modes */}
      <AnimatedSection className="py-20 bg-dark">
        <div className="container-lush">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orderModes.map(({ icon, title, desc, details, platforms, cta, featured }) => (
              <div
                key={title}
                className={`
                  bg-brown rounded-xl p-8 flex flex-col gap-5 border transition-all duration-200
                  ${featured ? "border-fire/40 ring-1 ring-fire/20" : "border-white/10"}
                `}
              >
                <div className="w-14 h-14 rounded-md bg-fire/10 flex items-center justify-center text-3xl">
                  {icon}
                </div>
                <div>
                  <h2 className="font-display text-2xl text-cream mb-3">{title}</h2>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>

                {details && (
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="text-sm text-muted flex items-center gap-2">
                        <span className="text-fire">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                )}

                {platforms && (
                  <div className="flex flex-col gap-3 mt-auto">
                    {platforms.map(({ name, color, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="w-full text-center py-3 px-4 rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        style={{ backgroundColor: color }}
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                )}

                {cta && (
                  <Link
                    href={cta.href}
                    className={`mt-auto ${featured ? "btn-fire" : "btn-ghost"}`}
                  >
                    {cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Allergen note */}
      <div className="bg-brown py-10 border-t border-white/10">
        <div className="container-lush">
          <div className="flex gap-4 items-start max-w-2xl">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <p className="text-sm text-cream font-semibold mb-1">Allergen Information</p>
              <p className="text-sm text-muted leading-relaxed">
                Our kitchen handles all 14 major allergens. Please inform us of any allergies
                before ordering. Full allergen info:{" "}
                <a href="mailto:hello@lushbites.co.uk" className="text-fire hover:underline">
                  hello@lushbites.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
