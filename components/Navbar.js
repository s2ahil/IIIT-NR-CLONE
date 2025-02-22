"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "T&P Cell", href: "/tnp" },
    { name: "Patents", href: "/patents" },
    { name: "Contact", href: "/contact" },
    {name:"Show your quirk",href:"/projectShowcase"}
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 w-full bg-black bg-opacity-60 backdrop-blur-md">
      <div className="max-w-[1550px] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.iiitnr.ac.in/sites/all/themes/iiit/head.png"
            className="h-9"
            alt="i love iiitnr logo"
          />
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
            <span className="text-lg lg:text-2xl">
              I <b className="text-red-500">Love</b> IIIT Naya Raipur
            </span>
          </span>
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-red-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isOpen ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium bg-gray-900 border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`block py-2 px-1 lg:px-3 rounded-md md:p-0 text-white transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-red-400 bg-transparent md:bg-transparent md:text-red-500"
                      : "hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-500"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)} // Close mobile menu on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
