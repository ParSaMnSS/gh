"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-white hover:text-gray-300">{link.name}</a>
            </Link>
          ))}
          <Link href="/contact">
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
