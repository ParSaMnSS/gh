import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Dictionary } from '@/lib/i18n';

const Footer = ({ dict, locale }: { dict: Dictionary, locale: 'en' | 'ar' }) => {
  return (
    <footer className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Ghadir Babil Logo"
              width={160}
              height={45}
              className="mb-4"
            />
            <p className="text-gray-600">
              © 2024 {dict.Footer.Copyright}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{dict.Footer.QuickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-700 hover:text-brand-primary">
                  {dict.Navigation.Home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#about-us`}
                  className="text-gray-700 hover:text-brand-primary"
                >
                  {dict.Navigation.AboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#projects`}
                  className="text-gray-700 hover:text-brand-primary"
                >
                  {dict.Footer.OurProjects}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{dict.Footer.ContactUs}</h3>
            <p className="text-gray-700">{dict.Footer.Address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
