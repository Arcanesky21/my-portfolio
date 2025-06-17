import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mikarlo | Full Stack Developer",
  description:
    "Portfolio of Mikarlo Francis, a full stack developer specializing in modern web development, API design, and scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main-wrapper">
          <Header />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
