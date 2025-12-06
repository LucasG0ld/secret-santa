import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

import MainLayout from "@/components/templates/MainLayout";

export const metadata: Metadata = {
  title: "Secret Santa",
  description: "Organisez votre Secret Santa simplement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
