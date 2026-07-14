"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle, Minus, Plus, Truck, ShieldCheck, RefreshCw, ChevronUp, ChevronDown } from "lucide-react";
import { Product } from "@/data/products";
import { getWhatsAppOrderLink, isToteBag } from "@/utils/whatsapp";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Prevent scroll behind modal when open
  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  // State Management
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>("description");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Return null early if no product is selected (Declared AFTER all hooks)
  if (!product) return null;

  const whatsAppLink = mounted
    ? getWhatsAppOrderLink(product, quantity, isToteBag(product) ? selectedSize : undefined)
    : "";

  const galleryImages = [
    product.image,
    product.image,
    "/assets/9388.jpg.jpeg", // Closeup embroidery preview
  ];

  const specifications = {
    material: "High-density Organic Canvas & Eco-leather trims",
    dimensions: isToteBag(product)
      ? selectedSize === "Small"
        ? '13" Width × 12" Length'
        : selectedSize === "Medium"
        ? '16" Width × 15" Length'
        : '18" Width × 17" Length'
      : "12\" W x 10\" H x 4.5\" D",
    pockets: "1 Zippered Inner Pocket, 2 Slip Compartments",
    straps: isToteBag(product) ? "Double Handle (14\" drop)" : "Double Handle (4\" drop) + Detachable Shoulder Strap (22\" drop)",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#1A0D0F]/65 backdrop-blur-sm"
      />

      {/* Modal Card Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FDFBF7] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto shadow-2xl border border-[#EAE0D5]/50 flex flex-col md:flex-row z-10 no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white text-burgundy hover:bg-[#D4AF37] hover:text-burgundy p-2 rounded-full shadow-md transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left: Image Gallery (Grid layout inside modal) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4 border-b md:border-b-0 md:border-r border-[#EAE0D5]/30">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-[#EAE0D5]/40">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`KASHISH ${product.name} - Handcrafted Premium Ladies Handbag - Main View`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out"
            />
            {activeImageIndex === 2 && (
              <div className="absolute top-4 left-4 bg-burgundy/80 backdrop-blur-sm text-white text-[9px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                Handicraft Closeup
              </div>
            )}
          </div>

          {/* Gallery selector */}
          <div className="flex gap-3 overflow-x-auto py-1">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden bg-white border-2 shrink-0 transition-all ${
                  activeImageIndex === index ? "border-[#D4AF37] scale-105 shadow-sm" : "border-[#EAE0D5]/40 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`KASHISH ${product.name} - Handcrafted Premium Ladies Handbag - View ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info & CTA Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-start">
          <span className="text-[10px] uppercase tracking-widest text-[#C5A880] mb-1.5 font-sans font-bold">
            {product.category}
          </span>
          <h2 className="serif-font text-2xl sm:text-3xl font-normal text-burgundy mb-3 leading-tight">
            {product.name}
          </h2>

          {/* Price */}
          <div className="flex items-center space-x-3 mb-5">
            <span className="text-xl font-bold text-burgundy">₹{product.price}/-</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}/-</span>
            )}
          </div>

          {/* Size Selector for Tote Bags */}
          {isToteBag(product) && (
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Select Size</span>
                <span className="text-[10px] font-semibold text-[#C5A880]">Handle: 14&quot; drop</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Small", dimensions: '13" × 12"' },
                  { name: "Medium", dimensions: '16" × 15"' },
                  { name: "Large", dimensions: '18" × 17"' }
                ].map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSelectedSize(s.name)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all duration-300 ${
                      selectedSize === s.name
                        ? "border-burgundy bg-[#6B1F28]/5 text-burgundy scale-[1.02]"
                        : "border-[#EAE0D5] hover:border-burgundy/50 text-[#1A0D0F]/80 bg-white"
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-wider uppercase">{s.name}</span>
                    <span className="text-[9px] text-[#1A0D0F]/50 font-light mt-0.5">{s.dimensions}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Micro features list */}
          <div className="grid grid-cols-3 gap-2 border-y border-[#EAE0D5]/40 py-3 mb-6 text-[9px] text-gray-500 font-sans tracking-wider uppercase font-semibold">
            <div className="flex flex-col items-center text-center space-y-1">
              <Truck size={14} className="text-[#C5A880]" />
              <span>Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
              <ShieldCheck size={14} className="text-[#C5A880]" />
              <span>Handcrafted</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
              <RefreshCw size={14} className="text-[#C5A880]" />
              <span>Easy Checkout</span>
            </div>
          </div>

          {/* Quantity selector */}
          <div className="space-y-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quantity</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-[#F5EFEB]/50 border border-[#EAE0D5] rounded-full p-0.5">
                <button
                  onClick={handleDecrement}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white text-burgundy transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 text-center text-xs font-bold text-burgundy">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white text-burgundy transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Order On WhatsApp CTA */}
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy w-full py-3.5 rounded-full flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] shadow-md hover:shadow-lg mb-6"
          >
            <MessageCircle size={16} />
            <span>Order on WhatsApp</span>
          </a>

          {/* Specification Accordions */}
          <div className="space-y-2.5 border-t border-[#EAE0D5]/50 pt-5">
            {/* Description */}
            <div className="border-b border-[#EAE0D5]/50 pb-2">
              <button
                onClick={() => toggleSection("description")}
                className="w-full flex justify-between items-center text-left text-[10px] font-bold uppercase tracking-widest text-burgundy"
              >
                <span>Description</span>
                {expandedSection === "description" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {expandedSection === "description" && (
                <p className="mt-2 text-[11px] text-gray-500 font-light leading-relaxed">
                  {product.description}{" "}
                  {isToteBag(product) && (
                    <span className="font-semibold text-burgundy">
                      Available in Small, Medium and Large sizes. Designed for comfortable everyday use with a 14-inch handle.
                    </span>
                  )}
                </p>
              )}
            </div>

            {/* Specifications */}
            <div className="border-b border-[#EAE0D5]/50 pb-2">
              <button
                onClick={() => toggleSection("specifications")}
                className="w-full flex justify-between items-center text-left text-[10px] font-bold uppercase tracking-widest text-burgundy"
              >
                <span>Specifications</span>
                {expandedSection === "specifications" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {expandedSection === "specifications" && (
                <div className="mt-2 space-y-1.5 text-[11px] text-gray-500 font-light">
                  <div className="flex justify-between py-0.5 border-b border-[#F5EFEB]">
                    <span className="font-medium text-gray-400">Material</span>
                    <span className="text-right text-[#1A0D0F]">{specifications.material}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-[#F5EFEB]">
                    <span className="font-medium text-gray-400">Dimensions</span>
                    <span className="text-right text-[#1A0D0F]">{specifications.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="font-medium text-gray-400">Straps</span>
                    <span className="text-right text-[#1A0D0F]">{specifications.straps}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Care */}
            <div className="pb-2">
              <button
                onClick={() => toggleSection("care")}
                className="w-full flex justify-between items-center text-left text-[10px] font-bold uppercase tracking-widest text-burgundy"
              >
                <span>Care Instructions</span>
                {expandedSection === "care" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {expandedSection === "care" && (
                <ul className="mt-2 list-disc pl-4 space-y-1 text-[11px] text-gray-500 font-light">
                  <li>Dry clean only to maintain embroidery thread texture.</li>
                  <li>Store in the provided dust bag when not in use.</li>
                  <li>Avoid direct exposure to water or strong chemicals.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
