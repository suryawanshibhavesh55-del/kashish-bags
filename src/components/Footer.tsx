import Link from "next/link";
import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { Facebook } from "@/components/Icons";
import { getWhatsAppGeneralContactLink } from "@/utils/whatsapp";
import { SITE_CONFIG } from "@/utils/config";

export default function Footer() {
  const whatsAppLink = getWhatsAppGeneralContactLink();
  const facebookLink = SITE_CONFIG.facebookUrl;

  return (
    <footer className="bg-[#1A0D0F] text-[#EAE0D5] pt-16 pb-24 border-t border-[#4B151C]/20 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex flex-col text-[#F5EFEB]">
                <span className="text-2xl font-bold tracking-widest uppercase serif-font leading-none">
                  KASHISH
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-light text-center">
                  Bags Collection
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#C5A880] leading-relaxed max-w-sm">
              Handcrafted with love and precision. We design luxury, high-end bags that carry confidence and style for every special occasion.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#4B151C]/50 flex items-center justify-center text-[#EAE0D5] hover:bg-[#D4AF37] hover:text-burgundy transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#4B151C]/50 flex items-center justify-center text-[#EAE0D5] hover:bg-[#D4AF37] hover:text-burgundy transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-white transition-colors">
                  Bulk Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              Collections
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop?category=Floral Collection" className="hover:text-white transition-colors">
                  Floral Collection
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Personalised Bags" className="hover:text-white transition-colors">
                  Personalised Bags
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Butterfly Bags" className="hover:text-white transition-colors">
                  Butterfly Bags
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Classic Collection" className="hover:text-white transition-colors">
                  Classic Collection
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Canvas Bags" className="hover:text-white transition-colors">
                  Canvas Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              Contact Info
            </h3>
            <div className="flex items-start space-x-2.5">
              <MapPin size={14} className="text-[#C5A880] mt-0.5 shrink-0" />
              <span>Ground Floor, Ambience Mall, G-7 & G-8, Ambience Island, DLF Phase 3, Sector 24, Gurugram, Haryana 122010</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone size={14} className="text-[#C5A880] shrink-0" />
              <span>+91 97723 26529</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Clock size={14} className="text-[#C5A880] shrink-0" />
              <span>Open 24/7 (Always Available)</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#4B151C]/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#C5A880] tracking-widest uppercase">
          <p>© {new Date().getFullYear()} KASHISH Bags Collection. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 font-medium">Handcrafted in India</p>
        </div>
      </div>
    </footer>
  );
}
