import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MotionProvider from "@/components/MotionProvider";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

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
    <html lang="en" className={roboto.variable}>
      <body>
        <MotionProvider>
          <div className="main-wrapper">
            <Header />
            {children}
          </div>
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
