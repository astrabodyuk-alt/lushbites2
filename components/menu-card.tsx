import Link from "next/link";
import Image from "next/image";
import { LiquidCard } from "@/components/ui/liquid-glass-card";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map(({ image, title, description }) => (
            <LiquidCard
              key={title}
              className="border-[#f5f0e8]/10 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="px-4 pt-0 pb-2 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-1 group-hover:text-[#e84c1e] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#b8a898] mb-3">{description}</p>
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-[#e84c1e] text-white hover:bg-[#c43a10] hover:shadow-[0_8px_32px_rgba(232,76,30,.3)] transition-all duration-200"
                  >
                    See Menu
                  </Link>
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
