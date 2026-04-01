"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "lushbites_welcome_seen";

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied]   = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }, []);

  // Escape key
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("WELCOME10");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = "WELCOME10";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-headline"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="animate-pop-in relative bg-brown rounded-xl max-w-[420px] w-full overflow-hidden shadow-fire">
        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close welcome offer"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-dark/60 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-dark transition-all text-sm"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-brown to-dark overflow-hidden">
          <Image
            src="/burger-assembled.jpg"
            alt="Lush Bites smash burger"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/80 to-transparent" />
        </div>

        <div className="p-6 pt-5">
          {/* Fire bar */}
          <div className="w-10 h-0.5 bg-fire mb-4" />

          <h2 id="welcome-headline" className="font-display text-2xl text-cream mb-1">
            Welcome to Lush Bites
          </h2>
          <p className="text-muted text-sm mb-5">
            Portsmouth's freshest smash burgers, wings &amp; more.
          </p>

          {/* Offer box */}
          <div className="bg-fire/10 border border-fire/30 rounded-lg p-4 mb-5 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-fire mb-1">Exclusive First-Visit Offer</p>
            <p className="font-display text-xl text-cream">10% OFF your first order</p>
          </div>

          {/* Promo code */}
          <button
            onClick={copyCode}
            className="w-full bg-dark border-2 border-dashed border-fire/50 rounded-lg py-3 px-4 font-display text-xl text-cream tracking-widest hover:border-fire transition-all mb-4 relative"
          >
            WELCOME10
            <span className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-body font-medium transition-colors",
              copied ? "text-fire" : "text-muted"
            )}>
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </button>

          {/* CTAs */}
          <Link
            href="/order"
            onClick={dismiss}
            className="btn-fire w-full text-center block mb-3 font-semibold"
          >
            Order Now
          </Link>
          <button
            onClick={dismiss}
            className="w-full text-xs text-muted hover:text-cream transition-colors py-1"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
