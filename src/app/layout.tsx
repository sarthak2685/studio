import type { Metadata } from "next";
import { Archivo, Hind } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";
import "./globals.css";

// Archivo carries the width axis the marquee headlines are set on.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.heroSupport,
  openGraph: {
    title: `${site.name} — ${site.headline}`,
    description: site.heroSupport,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${hind.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-night text-cream">
        <SmoothScroll>
          <div className="noise-overlay" aria-hidden />
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
