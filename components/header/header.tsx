'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Services', href: '/' },
  { name: 'Contacts', href: '/' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 my-5">
      <div className="inline-flex">
        <nav className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-100 rounded-full shadow-md">
          <div className="flex gap-x-3 px-5 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-white px-4 py-2 transition-all duration-300'
                    : 'opacity-50 px-4 py-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
