import "./globals.css";

import { Inter, Cormorant_Garamond } from "next/font/google";
import { story } from "@/content/story";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: story.site.title,
  description: story.site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
