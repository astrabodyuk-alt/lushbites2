import Link from "next/link";
import { LiquidCard } from "@/components/ui/liquid-glass-card";
import { AnimatedSection } from "@/components/animated-section";

const menuCategories = [
  {
    emoji: "🍔",
    title: "Burgers",
    description: "Double smashed, loaded to the max",
  },
  {
    emoji: "🍗",
    title: "Wings",
    description: "Crispy fried, sauced to perfection",
  },
  {
    emoji: "🍟",
    title: "Fries",
    description: "Loaded, seasoned & always crispy",
  },
  {
    emoji: "🥗",
    title: "Salads",
    description: "Fresh greens, bold flavours",
  },
  {
    emoji: "🥤",
    title: "Drinks",
    description: "Shakes, sodas & fresh juice",
  },
];

export function MenuCards() {
  return (
    <AnimatedSection className="py-20 bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-xs font-bold tracking-widest uppercase text-[#e84c1e] mb-3">
          What we do
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[#f5f0e8] mb-12">
          Everything on <em className="italic text-[#e84c1e]">the menu</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map(({ emoji, title, description }) => (
            <LiquidCard
              key={title}
              className="border-[#f5f0e8]/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="px-6 flex flex-col items-center text-center gap-4">
                <span className="text-6xl">{emoji}</span>
                <div>
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-1 group-hover:text-[#e84c1e] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#b8a898]">{description}</p>
                </div>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-[#e84c1e] text-white hover:bg-[#c43a10] hover:shadow-[0_8px_32px_rgba(232,76,30,.3)] transition-all duration-200"
                >
                  See Menu
                </Link>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
