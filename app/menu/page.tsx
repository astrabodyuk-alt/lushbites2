import { Metadata } from "next";
import { MenuClient } from "./menu-client";

export const metadata: Metadata = {
  title: "Menu — Lush Bites Portsmouth",
  description:
    "Smash burgers, crispy wings, loaded fries, salads and more. See the full Lush Bites menu.",
};

export default function MenuPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <div className="bg-brown py-14 border-b border-white/10">
        <div className="container-lush">
          <p className="section-label mb-3">What we serve</p>
          <h1 className="section-title">
            Everything on <em className="text-fire-italic">the menu</em>
          </h1>
        </div>
      </div>

      <MenuClient />
    </div>
  );
}
