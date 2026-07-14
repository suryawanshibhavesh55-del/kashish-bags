"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Facebook, WhatsApp } from "@/components/Icons";
import { getWhatsAppGeneralContactLink } from "@/utils/whatsapp";
import { SITE_CONFIG } from "@/utils/config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Bulk Inquiry", href: "/inquiry" },
  ];

  const whatsAppLink = getWhatsAppGeneralContactLink();
  const facebookLink = SITE_CONFIG.facebookUrl;

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#4B151C] text-[#EAE0D5] text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center z-50 relative font-sans tracking-widest border-b border-[#5E1A22]">
        <div className="flex items-center space-x-1 mx-auto sm:mx-0">
          <span>✨</span>
          <span className="uppercase font-medium">Free Shipping On All Prepaid Orders</span>
          <span>✨</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={14} />
          </a>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsApp size={14} />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#4B151C] text-white shadow-lg py-3"
            : "bg-transparent text-[#4B151C] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-widest uppercase serif-font leading-none">
                KASHISH
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-light text-center">
                Bags Collection
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wider uppercase relative py-1 transition-colors hover:text-[#D4AF37] ${
                    isScrolled ? "text-white" : "text-[#4B151C]"
                  } ${isActive ? "text-[#D4AF37] font-semibold" : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/shop"
              className={`px-4 py-1.5 rounded-full border text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:border-[#D4AF37] ${
                isScrolled
                  ? "border-white/20 text-white hover:text-burgundy"
                  : "border-[#4B151C]/20 text-[#4B151C] hover:text-white"
              }`}
            >
              View Collection
            </Link>
          </div>

          {/* Mobile Actions and Burger */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isScrolled ? "text-white" : "text-burgundy"}`}
              aria-label="WhatsApp"
            >
              <WhatsApp size={18} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none p-1"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 top-[88px] sm:top-[96px] bg-[#4B151C] text-white z-50 md:hidden transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-widest uppercase border-b border-white/10 pb-3 block ${
                    isActive ? "text-[#D4AF37] font-semibold" : "text-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 flex justify-around">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-[#D4AF37]"
              >
                <Facebook size={20} />
                <span className="text-sm tracking-wider">Facebook</span>
              </a>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-[#D4AF37]"
              >
                <WhatsApp size={20} />
                <span className="text-sm tracking-wider">WhatsApp</span>
              </a>
            </div>
            <Link
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#D4AF37] text-burgundy text-center py-3 rounded-md font-medium uppercase tracking-widest text-sm hover:bg-[#C5A880] transition-colors mt-4"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
