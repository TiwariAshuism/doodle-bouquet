import type { Metadata } from "next";
import { DM_Sans, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Doodle Bouquet | Cinematic Romanticism",
  description:
    "Hand-sketched digital flora, bioluminescent glow, and whispered promises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${geistSans.variable} min-h-full font-body-md text-body-md antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
