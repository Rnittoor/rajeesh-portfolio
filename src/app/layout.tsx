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
    default: "Rajeesh Nittoor — Senior UX & Product Designer",
    template: "%s — Rajeesh Nittoor",
  },
  description:
    "Rajeesh Nittoor is a Senior UX & Product Designer relocating to London, working across product, service and systems design.",
  openGraph: {
    title: "Rajeesh Nittoor — Senior UX & Product Designer",
    description:
      "Rajeesh Nittoor is a Senior UX & Product Designer relocating to London, working across product, service and systems design.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas text-body">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-canvas transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <Grain />
        <SmoothScroll>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
