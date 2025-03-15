import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WomenWork - Event Planning Platform",
  description: "Empowering housewives to become professional event planners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
