import Link from "next/link";
import Image from "next/image";
import { LiquidCard } from "@/components/ui/liquid-glass-card";
import { ShineBorder } from "@/components/ui/shine-border";
import { AnimatedSection } from "@/components/animated-section";

const menuCategories = [
  {
    image: "/menu/menu-burger.png",
    title: "Burgers",
    description: "Double smashed, loaded to the max",
  },
  {
    image: "/menu/menu-wings.png",
    title: "Wings",
    description: "Crispy fried, sauced to perfection",
  },
  {
    image: "/menu/menu-fries.png",
    title: "Fries",
    description: "Loaded, golden, impossible to resist",
  },
  {
    image: "/menu/menu-salad.png",
    title: "Salads",
    description: "Fresh, bold, never boring",
  },
  {
    image: "/menu/menu-milkshake.png",
    title: "Milkshakes",
    description: "Thick, creamy, dangerously good",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {menuCategories.map(({ image, title, description }) => (
            <ShineBorder key={title} color="#e84c1e" borderRadius={12} className="h-[420px] w-full rounded-xl">
              <LiquidCard className="h-full w-full py-0 border-[#f5f0e8]/10 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="flex flex-col h-full px-4 pt-3 pb-4">
                  <div className="relative h-[240px] w-full shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-1 items-center justify-center text-center gap-2 pt-3">
                    <h3 className="font-display text-2xl text-[#f5f0e8] group-hover:text-[#e84c1e] transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-[#b8a898]">{description}</p>
                    <Link
                      href="/menu"
                      className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-[#e84c1e] text-white hover:bg-[#c43a10] hover:shadow-[0_8px_32px_rgba(232,76,30,.3)] transition-all duration-200 mt-1"
                    >
                      See Menu
                    </Link>
                  </div>
                </div>
              </LiquidCard>
            </ShineBorder>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
