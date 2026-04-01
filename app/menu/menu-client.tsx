"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { menuSections, menuCategories } from "@/lib/menu-data";
import { ProductCard } from "@/components/product-card";

const catSectionIds: Record<string, string[]> = {
  burgers: ["beef-burgers", "lamb-burgers", "chicken-burgers"],
  wings:   ["wings"],
  sides:   ["sides"],
  salads:  ["salads"],
};

export function MenuClient() {
  const [activeTab, setActiveTab] = useState("burgers");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll to top of first section when tab changes
  const jumpToTab = (id: string) => {
    setActiveTab(id);
    const firstSectionId = catSectionIds[id]?.[0];
    const el = firstSectionId ? sectionRefs.current[firstSectionId] : null;
    if (el) {
      const offset = 72 + 56;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }
  };

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const sectionId = e.target.id;
            for (const [cat, sids] of Object.entries(catSectionIds)) {
              if (sids.includes(sectionId)) { setActiveTab(cat); break; }
            }
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const visibleSections = menuSections.filter((s) =>
    catSectionIds[activeTab]?.includes(s.id)
  );
  // For scroll we show all sections but the sticky nav highlights active
  const allSections = menuSections;

  return (
    <>
      {/* Sticky category nav */}
      <div className="sticky top-[72px] z-30 bg-dark/95 backdrop-blur border-b border-white/10">
        <div className="container-lush">
          <div className="flex items-center gap-3 py-3 overflow-x-auto hide-scrollbar">
            {menuCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => jumpToTab(id)}
                className={cn(
                  "shrink-0 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200",
                  activeTab === id
                    ? "bg-fire border-fire text-white"
                    : "border-white/20 text-muted hover:border-white/50 hover:text-cream"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div className="bg-dark py-12">
        <div className="container-lush space-y-16">
          {allSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
            >
              <h2 className="font-display text-2xl text-cream mb-6 pb-3 border-b border-white/10">
                {section.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item) => (
                  <ProductCard key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Allergen note */}
        <div className="container-lush mt-16">
          <div className="bg-brown border border-white/10 rounded-xl p-6 flex gap-4 items-start">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <p className="text-sm text-cream font-semibold mb-1">Allergen Information</p>
              <p className="text-sm text-muted leading-relaxed">
                Our kitchen handles all 14 major allergens including gluten, dairy, nuts, and
                sesame. Please inform a member of staff of any allergies before ordering. For a
                full allergen list, email{" "}
                <a href="mailto:hello@lushbites.co.uk" className="text-fire hover:underline">
                  hello@lushbites.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
