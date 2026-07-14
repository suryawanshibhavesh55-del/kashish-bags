"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Percent, Phone, MessageSquare } from "lucide-react";
import { getWhatsAppGeneralContactLink } from "@/utils/whatsapp";

export default function BottomNav() {
  const pathname = usePathname();
  const whatsAppLink = getWhatsAppGeneralContactLink();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/shop", icon: ShoppingBag },
    { name: "Offers", href: "/#special-offer", icon: Percent },
    { name: "WhatsApp", href: whatsAppLink, icon: MessageSquare, isExternal: true },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#4B151C]/95 backdrop-blur-md border-t border-[#D4AF37]/20 text-[#EAE0D5] py-2 px-4 flex justify-around items-center z-50 shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href && !item.isExternal;
        
        if (item.isExternal) {
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-0.5 text-center relative group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center -translate-y-4 shadow-lg border-2 border-[#4B151C] transition-transform duration-300 group-hover:scale-110">
                <Icon size={18} />
              </div>
              <span className="text-[9px] tracking-wider uppercase font-semibold absolute bottom-0 text-[#25D366]">
                {item.name}
              </span>
            </a>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center space-y-1 py-1 text-center transition-colors ${
              isActive ? "text-[#D4AF37]" : "text-[#EAE0D5]/70"
            }`}
          >
            <Icon size={18} className={isActive ? "scale-110 transition-transform" : ""} />
            <span className="text-[9px] tracking-wider uppercase font-medium">
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
