"use client";

import { AnimatedSection } from "@/components/animated-section";
import { DestinationCard } from "@/components/ui/card-21";

const orderModes = [
  {
    title: "Dine In",
    subtitle: "Walk in & enjoy fresh smash burgers",
    image: "/order/dine-in.png",
    themeColor: "16 70% 28%",
  },
  {
    title: "Click & Collect",
    subtitle: "Order online, pick up in 15 mins",
    image: "/order/collect.png",
    themeColor: "16 70% 22%",
  },
  {
    title: "Delivery",
    subtitle: "Hot to your door via Uber Eats & Deliveroo",
    image: "/order/delivery-2.png",
    themeColor: "16 70% 28%",
  },
];

export function OrderModes() {
  return (
    <AnimatedSection className="py-20 bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-xs font-bold tracking-widest uppercase text-[#e84c1e] mb-3">
          How to order
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[#f5f0e8] mb-3">
          How to eat
        </h2>
        <p className="text-[#b8a898] text-base mb-12">
          Three ways to enjoy Lush Bites
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orderModes.map(({ title, subtitle, image, themeColor }) => (
            <div key={title} className="h-[420px]">
              <DestinationCard
                imageUrl={image}
                location={title}
                stats={subtitle}
                href="https://lushhh.co.uk"
                themeColor={themeColor}
                buttonText="Order Now"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
