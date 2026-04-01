import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Find Us — Lush Bites Portsmouth",
  description:
    "Lush Bites is at 135 Queen Street, Portsmouth PO1 3HY. Opening hours, directions, and contact info.",
};

const mapsEmbedUrl =
  "https://maps.google.com/maps?q=135+Queen+Street,+Portsmouth,+PO1+3HY,+UK&hl=en&z=16&output=embed";
const mapsUrl =
  "https://maps.google.com/?q=135+Queen+Street+Portsmouth+PO1+3HY";

const hours = [
  { days: "Monday–Thursday", time: "11:00–22:00" },
  { days: "Friday–Saturday", time: "11:00–23:00" },
  { days: "Sunday",           time: "12:00–21:00" },
];

const gettingHere = [
  { icon: "🚌", label: "By Bus", desc: "Routes 1, 2, 3, 5, 7 stop on Queen Street. Short walk from Portsmouth Hard Interchange." },
  { icon: "🚗", label: "By Car", desc: "Nearest car parks: Gunwharf Quays multi-storey (0.3 miles) and St George's Square (0.4 miles)." },
  { icon: "🚶", label: "On Foot", desc: "5-minute walk from Portsmouth Harbour station. 10 minutes from Gunwharf Quays." },
];

export default function FindUsPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="bg-brown py-16 border-b border-white/10">
        <div className="container-lush">
          <p className="section-label mb-3">Come visit</p>
          <h1 className="section-title">
            Find <em className="text-fire-italic">us</em>
          </h1>
        </div>
      </div>

      {/* Map + details */}
      <AnimatedSection className="py-16 bg-dark">
        <div className="container-lush">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-80 lg:h-auto min-h-[400px]">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lush Bites location map"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-8">
              {/* Address */}
              <div>
                <p className="section-label mb-3">Address</p>
                <address className="not-italic">
                  <p className="font-display text-2xl text-cream mb-1">135 Queen Street</p>
                  <p className="text-muted">Portsmouth, PO1 3HY</p>
                </address>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fire mt-4 inline-flex"
                >
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="section-label mb-4">Opening Hours</p>
                <div className="space-y-2">
                  {hours.map(({ days, time }) => (
                    <div key={days} className="flex justify-between gap-8 border-b border-white/10 pb-2">
                      <span className="text-sm text-muted">{days}</span>
                      <span className="text-sm font-medium text-cream">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="section-label mb-3">Contact</p>
                <a href="mailto:hello@lushbites.co.uk" className="text-sm text-muted hover:text-cream transition-colors">
                  hello@lushbites.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Getting here */}
      <AnimatedSection className="py-16 bg-brown">
        <div className="container-lush">
          <p className="section-label mb-8">Getting here</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gettingHere.map(({ icon, label, desc }) => (
              <div key={label} className="bg-dark rounded-xl border border-white/10 p-6">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="font-display text-xl text-cream mb-2">{label}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Delivery CTA */}
      <AnimatedSection className="py-16 bg-dark">
        <div className="container-lush text-center">
          <p className="section-label mb-4">Can't make it in?</p>
          <h2 className="section-title mb-4">
            We deliver across <em className="text-fire-italic">Portsmouth</em>
          </h2>
          <p className="section-body mx-auto mb-8">
            Order on Deliveroo, Just Eat, or Uber Eats and we'll bring it to you.
          </p>
          <Link href="/order" className="btn-fire btn-lg">Order Delivery</Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
