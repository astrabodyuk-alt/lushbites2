import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Our Story — Lush Bites Portsmouth",
  description:
    "How Lush Bites started. The story behind Portsmouth's premium smash burger restaurant.",
};

const chapters = [
  {
    num: "01",
    title: "It started with a question",
    body: "Why doesn't Portsmouth have a proper smash burger? Not a fast food chain, not a gimmick — a real, properly made smash burger. Fresh beef, smashed hard, caramelised edges, stacked with care. We asked the question and nobody had an answer. So we became the answer.",
    dark: false,
  },
  {
    num: "02",
    title: "The technique is everything",
    body: "Smash burgers aren't just thin patties. They're science. The smash maximises the Maillard reaction — the browning, the crust, the flavour. We trialled hundreds of combinations of beef fat content, smash pressure, griddle temp, and rest time before we got it exactly right. Every burger that leaves our kitchen is the product of that obsession.",
    dark: true,
  },
  {
    num: "03",
    title: "What goes in matters",
    body: "100% British beef. No fillers, no stabilisers, no nonsense. Our lamb is spiced in-house. Our chicken is marinated in buttermilk for 24 hours. Our sauces are made fresh each morning. Every single ingredient on the menu has been chosen deliberately — and there's nothing on the menu that isn't exceptional.",
    dark: false,
  },
  {
    num: "04",
    title: "Portsmouth is the brand",
    body: "We're not a chain. We're not trying to be. We're from Portsmouth, we're for Portsmouth, and we're staying in Portsmouth. 135 Queen Street is our home. Every review, every return customer, every social tag — that's the community we're building. We're proud of where we come from and that shows in everything we do.",
    dark: true,
  },
];

const facts = [
  { stat: "100%", label: "British Beef" },
  { stat: "0",    label: "Frozen Ingredients" },
  { stat: "135",  label: "Queen Street" },
  { stat: "5★",   label: "Rated by Portsmouth" },
];

export default function StoryPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <div className="bg-brown py-20 border-b border-white/10">
        <div className="container-lush">
          <p className="section-label mb-4">Who we are</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight text-cream max-w-3xl">
            We asked a question.<br />
            <em className="text-fire">Then we opened a restaurant.</em>
          </h1>
        </div>
      </div>

      {/* Chapters */}
      {chapters.map(({ num, title, body, dark }) => (
        <AnimatedSection
          key={num}
          className={`py-20 ${dark ? "bg-brown" : "bg-dark"}`}
        >
          <div className="container-lush">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              parseInt(num) % 2 === 0 ? "lg:grid-flow-col-dense" : ""
            }`}>
              {/* Visual placeholder */}
              <div
                className={`aspect-[4/3] bg-${dark ? "dark" : "brown"} rounded-xl border border-white/10 flex items-center justify-center text-7xl ${
                  parseInt(num) % 2 === 0 ? "lg:order-2" : ""
                }`}
              >
                {["🍔", "🔥", "🥩", "🏙️"][parseInt(num) - 1]}
              </div>

              <div className={parseInt(num) % 2 === 0 ? "lg:order-1" : ""}>
                <p className="font-display text-6xl text-fire/30 font-bold mb-2">{num}</p>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-cream mb-6">
                  {title}
                </h2>
                <p className="text-[1.05rem] text-muted leading-relaxed max-w-prose">{body}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Facts strip */}
      <div className="bg-fire py-16">
        <div className="container-lush">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {facts.map(({ stat, label }) => (
              <div key={label}>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] text-white mb-1">{stat}</p>
                <p className="text-sm text-white/75 uppercase tracking-wider font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-dark">
        <div className="container-lush text-center">
          <p className="section-label mb-4">Ready to try it?</p>
          <h2 className="section-title mb-8">
            Come taste the <em className="text-fire-italic">difference</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/order" className="btn-fire btn-lg">Order Now</Link>
            <Link href="/menu"  className="btn-ghost btn-lg">See the Menu</Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
