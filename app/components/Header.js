'use client';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
const Header = () => {
  const navLink = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {
      name: 'Explore',
      href: '#',
      subLinks: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <header className="w-full bg-white max-w-6xl mx-auto flex justify-between items-center py-6">
      <img src="/images/logo.png" alt="logo" />
      <nav className="desktop hidden lg:flex justify-center items-center gap-8 p-8 relative">
        {navLink.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
          >
            <Link
              href={link.href}
              className="text-primary text-lg flex items-center gap-1 cursor-pointer"
            >
              <span>{link.name}</span>
              {link.subLinks && (
                <span className="text-sm">
                  <ChevronDown />
                </span>
              )}
            </Link>

            {link.subLinks && openIndex === index && (
              <div
                onMouseLeave={() => setOpenIndex(null)}
                className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
              >
                {link.subLinks.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={sub.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <button className="hidden lg:block bg-primary px-6 py-2 text-white hover:bg-white hover:text-primary hover:ring-2 ring-primary rounded-full transition-all">
        Buy Now
      </button>

      <div className="p-3 bg-primary text-white lg:hidden rounded-md cursor-pointer">
        <Menu size={30} />
      </div>
    </header>
  );
};

export default Header;
