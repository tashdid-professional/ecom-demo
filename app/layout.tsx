import type { Metadata } from "next";
import { Lato, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tuesdayNight = localFont({
  src: "../public/fonts/TuesdayNight-Regular.otf",
  variable: "--font-tuesday-night",
});

export const metadata: Metadata = {
  title: "Pozo Beauty",
  description: "Luxury Cosmetics & Beauty",
  icons: {
    icon: "/Images/logo.png",
    shortcut: "/Images/logo.png",
    apple: "/Images/logo.png",
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
      className={`${lato.variable} ${cormorant.variable} ${tuesdayNight.variable} antialiased`}
    >
      <body className="min-h-screen">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
