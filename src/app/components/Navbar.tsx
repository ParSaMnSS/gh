'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import the hook

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current page path

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);

    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const navbar = document.getElementById('main-navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 24; // 24px for a little extra padding

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  // Define nav links for easy mapping
  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '/#about-us', id: 'about-us' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Partners', href: '/#partners', id: 'partners' },
  ];

  return (
    <nav id="main-navbar" className="bg-white border-b border-gray-200 py-8 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ghadir Babil Logo"
              width={160}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => link.id !== 'home' && handleScrollClick(e, link.id)}
                className="text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-lg font-medium bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              {/* Simple Hamburger Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu (Slide-in Drawer) */}
      
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl
                   transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            {/* Simple Close Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => link.id !== 'home' && handleScrollClick(e, link.id)}
              className="text-lg font-medium text-gray-700 hover:text-brand-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors text-center"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </nav>
  );
}