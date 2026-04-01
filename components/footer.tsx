import Link from "next/link";

const menuLinks = [
  { href: "/menu#beef-burgers",    label: "Burgers" },
  { href: "/menu#wings",           label: "Wings" },
  { href: "/menu#sides",           label: "Sides" },
  { href: "/menu#salads",          label: "Salads" },
];

const visitLinks = [
  { href: "/story",   label: "Our Story" },
  { href: "/find-us", label: "Find Us" },
  { href: "/order",   label: "Order Online" },
];

const hours = [
  { days: "Mon–Thu", time: "11:00–22:00" },
  { days: "Fri–Sat", time: "11:00–23:00" },
  { days: "Sun",     time: "12:00–21:00" },
];

export function Footer() {
  return (
    <footer className="bg-brown border-t border-white/10 pt-16 pb-8">
      <div className="container-lush">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl text-cream flex items-center gap-1 mb-4">
              Lush <em className="italic text-fire not-italic ml-1">Bites</em>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Portsmouth's premium smash burger restaurant.<br />
              135 Queen Street, PO1 3HY.<br />
              Serving fresh, never frozen.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["IG", "TT", "FB"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-semibold text-muted hover:border-fire hover:text-fire hover:bg-fire/10 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Menu links */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted mb-4">Menu</p>
            <ul className="space-y-2">
              {menuLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit links */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted mb-4">Visit</p>
            <ul className="space-y-2">
              {visitLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted mb-4">Hours</p>
            <ul className="space-y-1 mb-6">
              {hours.map(({ days, time }) => (
                <li key={days} className="text-sm text-muted flex justify-between gap-4">
                  <span>{days}</span>
                  <span className="text-cream/80">{time}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted mb-2">Contact</p>
            <a href="mailto:hello@lushbites.co.uk" className="text-sm text-muted hover:text-cream transition-colors">
              hello@lushbites.co.uk
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 Lush Bites Portsmouth. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Allergen Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
