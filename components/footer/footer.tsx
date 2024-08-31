import React from 'react';
import Link from 'next/link';
import { footerData } from '@/data/footerData';
import { FooterSection } from '@/types';

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company Information</h3>
          <div className="mb-4">
            <img src="/path-to-logo.png" alt="Company Logo" className="mb-4 w-24 h-auto" />
            <p className="mb-2">Email: <a href="mailto:info@company.com" className="hover:text-white">info@company.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
            <p>Location: 1234 Street Name, City, Country</p>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="text-gray-200">
            {footerData.filter(section => section.title === 'Support')[0].links.map((link, linkIndex) => (
              <li key={linkIndex} className="mb-2">
                <Link
                  href={link.href}
                  className="hover:text-white flex items-center transition-colors duration-200 ease-in-out"
                >
                  {link.icon && <link.icon className="mr-2" />} {/* Render the icon as a JSX element */}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-200">
            {footerData.filter(section => section.title === 'Quick Links')[0].links.map((link, linkIndex) => (
              <li key={linkIndex} className="mb-2">
                <Link
                  href={link.href}
                  className="hover:text-white flex items-center transition-colors duration-200 ease-in-out"
                >
                  {link.icon && <link.icon className="mr-2" />} {/* Render the icon as a JSX element */}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Totally Optimized Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
