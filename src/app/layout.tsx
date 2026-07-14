import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

import { SITE_CONFIG } from "@/utils/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KASHISH Bags Collection | Premium Handcrafted & Stylish Ladies Bags",
  description: "Shop premium handcrafted, embroidered and stylish ladies bags at KASHISH Bags Collection. Explore unique floral, personalized and trending handbag designs. Order easily via WhatsApp.",
  keywords: "KASHISH Bags Collection, Kashish Bags, Kashish handbag, Kashish ladies bags, Kashish handmade bags, Premium ladies bags, Handcrafted bags India, Personalized bags India, Embroidered ladies bags, Floral handbags India, Buy ladies bags online",
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },
  openGraph: {
    title: "KASHISH Bags Collection | Premium Handcrafted & Stylish Ladies Bags",
    description: "Shop premium handcrafted, embroidered and stylish ladies bags at KASHISH Bags Collection. Explore unique floral, personalized and trending handbag designs. Order easily via WhatsApp.",
    url: SITE_CONFIG.siteUrl,
    siteName: "KASHISH Bags Collection",
    images: [
      {
        url: "/assets/24502.png",
        width: 1200,
        height: 630,
        alt: "KASHISH Premium Handcrafted Butterfly Bag",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KASHISH Bags Collection | Premium Handcrafted & Stylish Ladies Bags",
    description: "Shop premium handcrafted, embroidered and stylish ladies bags at KASHISH Bags Collection. Explore unique floral, personalized and trending handbag designs. Order easily via WhatsApp.",
    images: ["/assets/24502.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // GOOGLE SEARCH CONSOLE VERIFICATION: Add your verification code in the .env as NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION or replace below
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7]">
        {/* Sticky scrollable header */}
        <Header />
        
        {/* Primary Page Content */}
        <main className="flex-grow pb-16 md:pb-0">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Mobile bottom navigation sticky bar */}
        <BottomNav />
      </body>
    </html>
  );
}
