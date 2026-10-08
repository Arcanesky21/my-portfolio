import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mikarlo | Full Stack Developer",
  description:
    "Portfolio of Mikarlo Francis, a full stack developer and founder of Arkane Technologies, the Jamaican business behind iNeedALinkJA.",
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
