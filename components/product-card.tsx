import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  desc: string;
  price: string;
  badge?: string;
  emoji: string;
  image?: string;
  className?: string;
};

export function ProductCard({ name, desc, price, badge, emoji, image, className }: Props) {
  return (
    <div className={cn(
      "bg-brown rounded-lg border border-white/10 flex flex-col",
      "hover:-translate-y-1 hover:shadow-lg transition-all duration-200",
      className
    )}>
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-dark/30 rounded-t-lg overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-5xl">{emoji}</div>
        )}
        {badge && (
          <span className="absolute top-3 left-3 bg-fire text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full z-10">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-lg text-cream mb-1">{name}</h3>
        <p className="text-[0.825rem] text-muted leading-snug flex-1 mb-4">{desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl text-cream">{price}</span>
        </div>
      </div>
    </div>
  );
}
