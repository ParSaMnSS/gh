'use client'; // <-- Must be a client component for the onClick logic

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import the hook

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname(); // Get the current page path

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // 1. Check if we are on the homepage
    if (pathname === '/') {
      // We are on the homepage, so scroll
      e.preventDefault(); // Stop the link from navigating
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Optional: Update URL hash
        window.history.pushState(null, '', `#${id}`);
      }
    }
    // 2. If we are NOT on the homepage, the <Link href="/#id">
    // will just work normally, and the ScrollHandler component will catch it.
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/logo.png" 
                alt="Ghadir Babil Logo" 
                width={160} 
                height={45} 
              />
            </Link>
            <p className="text-gray-600">
              Your trusted partner in agriculture, animal feed, and general trade since 2004.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 hover:text-brand-primary">Home</Link></li>
              <li>
                <Link 
                  href="/#about-us" 
                  onClick={(e) => handleScrollClick(e, 'about-us')}
                  className="text-gray-600 hover:text-brand-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/#projects" 
                  onClick={(e) => handleScrollClick(e, 'projects')}
                  className="text-gray-600 hover:text-brand-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/#partners" 
                  onClick={(e) => handleScrollClick(e, 'partners')}
                  className="text-gray-600 hover:text-brand-primary"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Projects */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Our Projects</h4>
            <ul className="space-y-4">
              <li><Link href="/projects/feed-factory" className="text-gray-600 hover:text-brand-primary">Feed Factory</Link></li>
              <li><Link href="/projects/poultry-farms" className="text-gray-600 hover:text-brand-primary">Poultry Farms</Link></li>
              <li><Link href="/projects/research" className="text-gray-600 hover:text-brand-primary">Research Centre</Link></li>
              <li><Link href="/projects/trade" className="text-gray-600 hover:text-brand-primary">General Trade</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li><p className="text-gray-600">Baghdad, Iraq</p></li>
              <li><a href="mailto:info@ghadirbabil.com" className="text-gray-600 hover:text-brand-primary">info@ghadirbabil.com</a></li>
              {/* Add phone number if you have it */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Copyright) */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {currentYear} Ghadir Babil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
