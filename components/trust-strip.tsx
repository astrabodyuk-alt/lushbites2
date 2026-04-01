"use client";

import { Marquee } from "@/components/ui/marquee";

const items = [
  "135 Queen Street, Portsmouth",
  "100% British Beef",
  "Never Frozen",
  "Halal Certified",
];

export function TrustStrip() {
  return (
    <div className="w-full bg-[#1a1a1a] border-y border-[#f5f0e8]/10">
      <Marquee duration={35} pauseOnHover={false} fade={true} fadeAmount={8}>
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-10 text-sm font-semibold tracking-wide text-[#f5f0e8]/60 whitespace-nowrap"
          >
            {item}{i < items.length - 1 ? " ·" : ""}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
