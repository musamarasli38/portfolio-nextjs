import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarsCanvas from "@/../components/main/stars";
import "./globals.css";
import Footer from "../components/main/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
