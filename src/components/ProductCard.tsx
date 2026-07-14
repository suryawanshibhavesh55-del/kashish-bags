"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { getWhatsAppOrderLink, isToteBag } from "@/utils/whatsapp";

interface ProductCardProps {
  product: Product;
  index?: number;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, index = 0, onClick }: ProductCardProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);
  
  const whatsAppLink = mounted ? getWhatsAppOrderLink(product, 1, isToteBag(product) ? "Medium" : undefined) : "";
  
  // Stagger animation based on index
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // premium easeOutQuart
      },
    },
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#EAE0D5]/40 flex flex-col h-full luxury-transition group"
    >
      {/* Product Image Wrapper */}
      <div 
        onClick={() => onClick(product)}
        className="relative aspect-[4/5] bg-[#F5EFEB]/50 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={`KASHISH ${product.name} - Handcrafted Premium Embroidered Ladies Bag`}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10 font-sans">
          {product.isNew && (
            <span className="bg-[#D4AF37] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              New
            </span>
          )}
          {product.isPopular && (
            <span className="bg-[#4B151C] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Popular
            </span>
          )}
        </div>

        {/* Quick View Overlay on Desktop hover */}
        <div className="absolute inset-0 bg-[#1A0D0F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
            className="w-10 h-10 rounded-full bg-white text-burgundy flex items-center justify-center shadow-md hover:bg-burgundy hover:text-white transition-colors duration-300"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5 flex flex-col flex-grow text-center">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A880] mb-1 font-sans font-medium">
          {product.category}
        </span>
        <h3 
          onClick={() => onClick(product)}
          className="serif-font text-base font-semibold text-[#1A0D0F] mb-2 hover:text-[#4B151C] transition-colors line-clamp-1 cursor-pointer"
        >
          {product.name}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-[#4B151C] font-semibold text-base">
            ₹{product.price}/-
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs">
              ₹{product.originalPrice}/-
            </span>
          )}
        </div>

        {/* WhatsApp Order Button */}
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full bg-[#4B151C] hover:bg-[#D4AF37] text-white hover:text-burgundy py-2.5 rounded-full flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02]"
        >
          <MessageCircle size={14} />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
}
