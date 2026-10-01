import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddhartha Bose | Technical Consultant & Frontend Developer (OBDX & Fintech)",
  description:
    "Professional portfolio of Siddhartha Bose — Technical Consultant with 4+ years of production experience in Oracle Banking Digital Experience (OBDX), Fintech consulting, and frontend engineering.",
  keywords: [
    "Siddhartha Bose",
    "Technical Consultant",
    "Frontend Developer",
    "OBDX",
    "Oracle Banking Digital Experience",
    "Fintech",
    "VIT Vellore",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Siddhartha Bose" }],
  openGraph: {
    title: "Siddhartha Bose | Technical Consultant & Frontend Developer",
    description:
      "Explore the cybernetic portfolio of Siddhartha Bose — Technical Consultant specializing in Oracle OBDX, Fintech consulting, and modern frontend architecture.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-cyber-void text-white selection:bg-cyber-orange selection:text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
