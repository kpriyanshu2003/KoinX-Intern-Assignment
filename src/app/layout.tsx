import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX - Frontend Intern Assignment",
  description: "Your Gateway to Crypto Taxes and Accounting",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-[#EFF2F5] p-4 md:p-10">{children}</div>
      </body>
    </html>
  );
}
