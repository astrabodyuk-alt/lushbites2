function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d" }} className="text-[#f5f0e8]">
      {/* Main grid */}
      <div className="container-lush py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT — Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-3xl text-[#f5f0e8]">Lush Bites</span>
            <p className="text-sm text-[#f5f0e8]/50">Portsmouth's finest smash burgers.</p>
            <div className="flex gap-4 mt-1">
              <a
                href="https://www.instagram.com/lushbitesportsmouth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#f5f0e8] hover:text-[#e84c1e] transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@lushbitesportsmouth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#f5f0e8] hover:text-[#e84c1e] transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* CENTER — Visit Us */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#e84c1e] mb-1">
              Visit Us
            </h3>
            <p className="text-sm text-[#f5f0e8]/70">135 Queen Street</p>
            <p className="text-sm text-[#f5f0e8]/70">Portsmouth PO1 3HY</p>
            <a
              href="https://maps.google.com/?q=135+Queen+Street+Portsmouth+PO1+3HY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e84c1e] hover:underline mt-1 inline-block"
            >
              Get Directions →
            </a>
          </div>

          {/* RIGHT — Opening Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#e84c1e] mb-1">
              Opening Hours
            </h3>
            {[
              ["Mon–Thu", "11am – 10pm"],
              ["Fri–Sat", "11am – 11pm"],
              ["Sun",     "12pm – 9pm"],
            ].map(([days, hours]) => (
              <div key={days} className="flex justify-between max-w-[200px] text-sm">
                <span className="text-[#f5f0e8]/50">{days}</span>
                <span className="text-[#f5f0e8]/80">{hours}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-lush py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f5f0e8]/40">
          <span>© 2026 Lush Bites. All rights reserved.</span>
          <a
            href="https://lushhh.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e84c1e] transition-colors"
          >
            Order Online
          </a>
        </div>
      </div>
    </footer>
  );
}
