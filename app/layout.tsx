import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WelcomePopup } from "@/components/welcome-popup";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lush Bites Portsmouth — Smash Burgers, Wings & More",
  description:
    "Portsmouth's premium smash burger restaurant at 135 Queen Street. 100% British beef, never frozen. Dine in, click & collect, or delivery.",
  keywords: "smash burger, Portsmouth, halal, wings, loaded fries, restaurant",
  openGraph: {
    title: "Lush Bites Portsmouth",
    description: "Proper food. Portsmouth done right.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WelcomePopup />
      </body>
    </html>
  );
}
