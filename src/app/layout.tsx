import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Shah Nawaz | eCommerce Growth Specialist & Performance Marketing Consultant",
  description: "Shah Nawaz is a premium eCommerce Growth Specialist, Shopify Expert, SEO Strategist, and CRO Consultant. Scale your Shopify store and performance marketing ROI today.",
  keywords: "eCommerce Growth Specialist, Shopify Expert, SEO Strategist, Performance Marketing Consultant, CRO specialist, Shopify design, Shopify development, Digital marketing consultant, Shah Nawaz, eCommerce scale, traffic growth, conversion rate optimization",
  authors: [{ name: "Shah Nawaz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-brand-bg text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
