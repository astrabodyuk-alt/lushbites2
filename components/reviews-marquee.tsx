"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "James T.",
    initials: "JT",
    body: "Best smash burger in Portsmouth. The Devil's Bite is insane, perfectly seasoned patty, toasted brioche. Will be back every week.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    initials: "SM",
    body: "Blown away. The smash burger was juicy, crispy edges, fresh ingredients. Nothing frozen here. Easily top 3 burgers I've ever had.",
    rating: 5,
  },
  {
    name: "Mike R.",
    initials: "MR",
    body: "The meat quality is unreal. You can tell it's 100% British beef. Crispy wings too. Lush Bites is the real deal in Portsmouth.",
    rating: 5,
  },
  {
    name: "Emma L.",
    initials: "EL",
    body: "Came for lunch on a whim, left obsessed. Click & Collect was ready in 10 mins. Hot, fresh, incredible. Best fast food in the city.",
    rating: 5,
  },
];

function ReviewCard({ name, initials, body, rating }: (typeof reviews)[0]) {
  return (
    <div className="mx-3 w-80 flex-shrink-0 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
          <Image src="/menu/menu-burger.png" alt="burger" fill className="object-cover" />
        </div>
        <div>
          <p className="text-cream font-semibold text-sm">{name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-fire text-fire" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[0.825rem] text-muted leading-relaxed">{body}</p>
    </div>
  );
}

export function ReviewsMarquee() {
  return (
    <section className="py-20 bg-dark overflow-hidden">
      <div className="container-lush mb-10">
        <p className="section-label mb-3">Google Reviews</p>
        <h2 className="section-title">
          What Portsmouth <em className="text-fire-italic">is saying</em>
        </h2>
      </div>
      <Marquee pauseOnHover duration={35} fade fadeAmount={8}>
        {reviews.map((r) => (
          <ReviewCard key={r.name} {...r} />
        ))}
      </Marquee>
    </section>
  );
}
