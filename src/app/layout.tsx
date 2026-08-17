import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Grain } from "@/components/ui/Grain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajeeshnittoor.nl"),
  title: {
    default: "Nittoor — Design for complex systems, made simple to use",
    template: "%s — Nittoor",
  },
  description:
    "Nittoor is a freelance design practice in Amsterdam by Rajeesh Nittoor, working across UX, service, and system design for clients like Airbus and IKEA.",
  openGraph: {
    title: "Nittoor — Design studio, Amsterdam",
    description:
      "Design across UX, service, and system design. A freelance practice by Rajeesh Nittoor.",
    type: "website",
    locale: "en_NL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas text-body">
        <Grain />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
