"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/menu",    label: "Menu" },
  { href: "/story",   label: "Our Story" },
  { href: "/order",   label: "Order" },
  { href: "/find-us", label: "Find Us" },
];

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300",
          scrolled
            ? "bg-dark/92 backdrop-blur-xl border-b border-white/10 shadow-md"
            : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="container-lush w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl text-cream flex items-center gap-2 shrink-0" aria-label="Lush Bites — home">
            Lush <em className="italic text-fire not-italic">Bites</em>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "nav-link text-sm font-medium text-cream/80 hover:text-cream transition-colors",
                    pathname === href && "active text-cream"
                  )}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/order"
            className="hidden md:inline-flex btn-fire text-sm font-semibold"
          >
            Order Now
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-0.5 w-full bg-cream transition-all duration-300 origin-center",
                menuOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-cream transition-all duration-300",
                menuOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-cream transition-all duration-300 origin-center",
                menuOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: "72px" }}
        aria-hidden={!menuOpen}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-display text-3xl text-cream hover:text-fire transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/order"
          className="btn-fire mt-4 text-base font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          Order Now
        </Link>
      </div>
    </>
  );
}
