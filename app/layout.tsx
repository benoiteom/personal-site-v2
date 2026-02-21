import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Suspense } from "react";
import PulseTrackerWrapper from "@/components/pulse-tracker-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benoit Ortalo-Magne",
  description: "Benoit Ortalo-Magne's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        <Suspense>
          <PulseTrackerWrapper />
        </Suspense>
      </body>
    </html>
  );
}
