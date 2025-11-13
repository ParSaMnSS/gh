'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Dictionary } from '@/lib/i18n';

export default function Navbar({ dict, locale }: { dict: Dictionary, locale: 'en' | 'ar' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const desktopLangDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDesktopLangOpen(false);
    setIsMobileLangOpen(false);
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === `/${locale}`) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const navbar = document.getElementById('main-navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - (navbarHeight / 2);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', `/${locale}#${id}`);
      }
    }
    closeAllMenus();
  };

  const switchLocale = (newLocale: 'en' | 'ar') => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    closeAllMenus();
  };

  const navLinks = [
    { name: dict.Navigation.Home, href: `/${locale}`, id: 'home' },
    { name: dict.Navigation.AboutUs, href: `/${locale}/#about-us`, id: 'about-us' },
    { name: dict.Navigation.Projects, href: `/${locale}/#projects`, id: 'projects' },
    { name: dict.Navigation.Partners, href: `/${locale}/#partners`, id: 'partners' },
  ];

  const dirClass = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopLangDropdownRef.current && !desktopLangDropdownRef.current.contains(event.target as Node)) {
        setIsDesktopLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(event.target as Node)) {
        setIsMobileLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav id="main-navbar" className={`bg-white/80 backdrop-blur-md border-b border-gray-200 py-8 sticky top-0 z-50 ${dirClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${locale}`}>
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
                onClick={(e) => handleScrollClick(e, link.id)}
                className="text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="text-lg font-medium bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors"
            >
              {dict.Navigation.ContactUs}
            </Link>

            {/* Language Switcher Dropdown */}
            <div className="relative" ref={desktopLangDropdownRef}>
              <button
                onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
                className="flex items-center gap-x-2 text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 019-9m-9 9a9 9 0 009 9" />
                </svg>
                <span>{locale === 'en' ? 'English' : 'العربية'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isDesktopLangOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDesktopLangOpen && (
                <div className="absolute mt-2 w-40 bg-white rounded-lg shadow-xl z-10">
                  <button
                    onClick={() => switchLocale('en')}
                    className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('ar')}
                    className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu (Slide-in Drawer) */}
          <div
            className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeAllMenus}
          />

          <div
            className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white/80 backdrop-blur-md z-50 shadow-xl
                       transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-end p-6">
              <button onClick={closeAllMenus}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#3467a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <nav className={`flex flex-col px-8 space-y-6 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="relative" ref={mobileLangDropdownRef}>
                <button
                  onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors"
                >
                  <span>{locale === 'en' ? 'English' : 'العربية'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isMobileLangOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileLangOpen && (
                  <div className="mt-2 w-full bg-white rounded-lg shadow-xl z-10">
                    <button
                      onClick={() => switchLocale('en')}
                      className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => switchLocale('ar')}
                      className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollClick(e, link.id)}
                  className="text-lg font-medium text-gray-700 hover:text-brand-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={closeAllMenus}
                className="text-lg font-medium bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors text-center"
              >
                {dict.Navigation.ContactUs}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}