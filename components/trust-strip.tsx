const pills = [
  { icon: "📍", text: "135 Queen Street, Portsmouth" },
  { icon: "🥩", text: "100% British Beef" },
  { icon: "❄️",  text: "Never Frozen" },
  { icon: "✅", text: "Halal Certified" },
];

export function TrustStrip() {
  // Duplicate pills for seamless marquee on mobile
  const allPills = [...pills, ...pills];

  return (
    <div className="bg-cream text-brown border-y border-brown/20 py-3 overflow-hidden">
      {/* Desktop: centered grid */}
      <div className="hidden md:flex container-lush items-center justify-center gap-8">
        {pills.map(({ icon, text }, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap">
            <span>{icon}</span>
            <span className="text-sm font-semibold">{text}</span>
          </div>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden flex items-center animate-marquee whitespace-nowrap gap-8 w-max">
        {allPills.map(({ icon, text }, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>{icon}</span>
            <span className="text-sm font-semibold">{text}</span>
            {i < allPills.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-brown/30 ml-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
