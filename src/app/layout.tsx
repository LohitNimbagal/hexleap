import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F7F7F8] text-black dark:bg-[#292B32] dark:text-white relative">
      <body className={`${inter.className} w-full h-full bg-[#F7F7F8] text-black dark:bg-[#292B32] dark:text-white`}>{children}</body>
    </html>
  );
}
