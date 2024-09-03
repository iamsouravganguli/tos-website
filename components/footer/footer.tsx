// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navbarData } from '@/data';

export function Footer() {
  return (
    <footer className="bg-zinc-950 overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <Image src="/assets/LogoFoot.png" width={100} height={100} alt="TOS Logo" />
          </Link>

          {/* Links on the right */}
          <div className="flex flex-row md:gap-4  gap-3 text-md text-white mb-4 md:mb-0">
            {navbarData.map((item) => (
            <Link href={item.href} className="hover:underline mb-2 md:mb-0">{item.label}</Link>))}
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Copyright at the bottom */}
        <div className="text-center  md:text-lg text-xs text-white">
          <span>
            © {new Date().getFullYear()} <Link href="/" className="hover:underline">Totally Optimized Solutions</Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
