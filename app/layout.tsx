import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Providers } from "@/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Totally Optimised Solution",
  description: "A leading software company providing cutting-edge solutions for businesses and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
      <Navbar/>

        {children}
     
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
