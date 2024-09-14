import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import FloatingButton from "@/components/common/FloatingButton/FloatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jagath Travels",
  description: "Created by Interithm @BhathiyaPrasad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children} <FloatingButton></FloatingButton></Providers></body>
    </html>
  );
}
