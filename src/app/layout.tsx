import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

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
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
