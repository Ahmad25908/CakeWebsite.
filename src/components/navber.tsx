
'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#f7f0ff] text-[#4b2e5d] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            🍰 CakeHut
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <NavLink href="/" label="Home" />
            <NavLink href="/menu" label="Menu" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
            <SignedOut>
              <SignInButton mode="modal">
                <span className="cursor-pointer px-3 py-1 bg-[#b57edc] text-white rounded hover:bg-[#a64fc0] transition">
                  Sign In
                </span>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links - always rendered, toggle with CSS */}
        <div
          className={`md:hidden transition-all duration-200 ease-out overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 py-4 font-medium">
            <NavLink href="/" label="Home" onClick={closeMenu} />
            <NavLink href="/menu" label="Menu" onClick={closeMenu} />
            <NavLink href="/about" label="About" onClick={closeMenu} />
            <NavLink href="/contact" label="Contact" onClick={closeMenu} />

            <SignedOut>
              <SignInButton mode="modal">
                <span
                  className="cursor-pointer px-3 py-1 bg-[#b57edc] text-white rounded hover:bg-[#a64fc0] transition"
                  onClick={closeMenu}
                >
                  Sign In
                </span>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink Component
function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-[#a64fc0] transition duration-200"
      prefetch
    >
      {label}
    </Link>
  );
}
