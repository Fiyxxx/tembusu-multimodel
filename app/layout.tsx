import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const geistMono = localFont({
  src: "../public/fonts/GeistMono/GeistMono-Regular.woff2",
  variable: "--font-geist-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Spectacles and Society",
  description: "An interactive exploration of spectacles in the local context",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
