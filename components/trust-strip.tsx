"use client";

import { Marquee } from "@/components/ui/marquee";

const items = [
  { icon: "📍", text: "135 Queen Street, Portsmouth" },
  { icon: "🥩", text: "100% British Beef" },
  { icon: "❄️", text: "Never Frozen" },
  { icon: "✅", text: "Halal Certified" },
];

export function TrustStrip() {
  return (
    <div className="w-full bg-[#f5f0e8] border-y border-[#1a1a1a]/10">
      <Marquee duration={35} pauseOnHover={false} fade={true} fadeAmount={8}>
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-10 text-sm font-semibold tracking-wide text-[#1a1a1a] whitespace-nowrap"
          >
            {item.icon} {item.text}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
