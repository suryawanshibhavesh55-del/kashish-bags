"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, Plus, Minus, Check } from "lucide-react";
import { Instagram } from "@/components/Icons";
import { products, Product } from "@/data/products";
import { getWhatsAppOrderLink, getWhatsAppGeneralContactLink } from "@/utils/whatsapp";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { SITE_CONFIG } from "@/utils/config";

export default function Home() {
  const whatsAppLink = getWhatsAppGeneralContactLink();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);
  
  // Find the specific products for the home page showcase
  const butterflyBag = products.find(p => p.id === "butterfly-charm-tote") || products[0];

  const heroWhatsAppUrl = mounted ? getWhatsAppOrderLink(butterflyBag) : "";
  
  const featuredBags = [
    products.find(p => p.id === "floral-garden-bag") || products[1],
    products.find(p => p.id === "bloom-elegance-tote") || products[2],
    products.find(p => p.id === "daisy-dreams-bag") || products[3],
    products.find(p => p.id === "butterfly-charm-tote") || products[0],
  ];

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "Do you take bulk orders for events and corporate gifts?",
      a: "Yes, we specialize in bulk and customized orders for weddings, baby showers, festivals, corporate gifting, and special events. We offer customizable text, names, and customized embroidery. Please fill out our inquiry form or contact us directly on WhatsApp for special wholesale pricing."
    },
    {
      q: "Can I customize the name on the bags?",
      a: "Absolutely! Our 'Personalised Bags' collection is made-to-order. You can specify the exact name, initials, or monogram you want embroidered, along with your choice of floral frame styles. Please message us on WhatsApp with details."
    },
    {
      q: "How long does shipping take?",
      a: "For standard collections, we ship within 2-3 business days. Customized or personalized bags take 5-7 business days to handcraft before shipping. Delivery usually takes 3-5 days across India depending on the location."
    },
    {
      q: "What is your return policy?",
      a: "Since our bags are individually handcrafted (and often personalized), we do not accept general returns unless the item arrives damaged. If there is a manufacturing defect, please contact us on WhatsApp with photos within 24 hours of delivery, and we will issue a replacement."
    },
    {
      q: "What payment methods are supported?",
      a: "We support UPI (GPay, PhonePe, Paytm), Net Banking, and Bank Transfers. We offer FREE SHIPPING on all prepaid orders. Cash on Delivery (COD) is available on request for standard bulk orders with a nominal booking advance."
    }
  ];

  const testimonials = [
    {
      name: "Aanya Sharma",
      city: "Mumbai",
      comment: "I ordered the Floral Garden Bag with my name engraved. The embroidery work is absolutely stunning. I get compliments every time I carry it out!",
      stars: 5
    },
    {
      name: "Meera Patel",
      city: "Ahmedabad",
      comment: "The butterfly charm tote is incredibly beautiful. The canvas quality is heavy-duty and premium. Perfect size for carrying my essentials in style.",
      stars: 5
    },
    {
      name: "Rohan Das",
      city: "New Delhi",
      comment: "Ordered 50 customized bags as return gifts for my daughter's wedding. The seller communicated efficiently on WhatsApp, customized the names perfectly, and delivered on time. Highly recommended!",
      stars: 5
    }
  ];

  const categories = [
    { name: "Floral Collection", image: "/assets/9372.jpg.jpeg", count: 12 },
    { name: "Personalised Bags", image: "/assets/9395.jpg.jpeg", count: 7 },
    { name: "Butterfly Bags", image: "/assets/24502.png", count: 9 },
    { name: "Classic Collection", image: "/assets/9425.jpg.jpeg", count: 8 },
    { name: "Canvas Bags", image: "/assets/9388.jpg.jpeg", count: 8 },
    { name: "Gift Collection", image: "/assets/9450.jpg.jpeg", count: 4 },
  ];

  const instagramPhotos = [
    "/assets/9373.jpg.jpeg",
    "/assets/9374.jpg.jpeg",
    "/assets/9396.jpg.jpeg",
    "/assets/9455.jpg.jpeg",
    "/assets/9796.jpg.jpeg",
    "/assets/9807.jpg.jpeg",
  ];

  // WhatsApp order link for Special Combo Offers
  const getComboWhatsAppLink = (bagsCount: number, price: number) => {
    const text = `Hello KASHISH Bags Collection ✨

I am interested in ordering the Special Combo Offer.

📦 Combo Details: ${bagsCount} Handcrafted Bag(s)
💰 Price: ₹${price}

Please share the available designs!`;
    return `https://wa.me/919772326529?text=${encodeURIComponent(text)}`;
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "KASHISH Bags Collection",
    "description": "Shop premium handcrafted, embroidered and stylish ladies bags at KASHISH Bags Collection. Explore unique floral, personalized and trending handbag designs.",
    "url": SITE_CONFIG.siteUrl,
    "logo": `${SITE_CONFIG.siteUrl}/assets/24502.png`,
    "image": `${SITE_CONFIG.siteUrl}/assets/24502.png`,
    "telephone": `+${SITE_CONFIG.whatsAppNumber}`,
    "priceRange": "₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Ambience Mall, G-7 & G-8, Ambience Island, DLF Phase 3, Sector 24",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122010",
      "addressCountry": "IN"
    },
    "sameAs": [
      SITE_CONFIG.instagramUrl,
      SITE_CONFIG.facebookUrl
    ].filter(Boolean)
  };

  const featuredSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "KASHISH Featured Collection",
    "numberOfItems": featuredBags.length,
    "itemListElement": featuredBags.map((product, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `${SITE_CONFIG.siteUrl}${product.image}`,
        "description": product.description,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": `${SITE_CONFIG.siteUrl}/shop`
        }
      }
    }))
  };

  return (
    <div className="overflow-hidden bg-[#FDFBF7]">
      {/* JSON-LD Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:py-28 bg-gradient-to-r from-[#FDFBF7] via-[#F5EFEB]/95 to-[#EAE0D5]/65 overflow-hidden">
        {/* Soft background light folds simulation */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial from-white/20 to-transparent pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Content */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <span className="text-xs font-semibold tracking-[0.4em] text-[#C5A880] uppercase block">
                  Carry Confidence
                </span>
                <h1 className="serif-font text-4xl sm:text-5xl lg:text-[62px] font-normal text-burgundy leading-[1.12] tracking-wide">
                  Elegance in <br />
                  <span className="font-light italic text-[#C5A880]">Every Detail</span>
                </h1>
                <p className="text-[#6B1F28]/90 font-sans text-sm sm:text-base max-w-lg leading-relaxed font-light tracking-wide">
                  Premium handcrafted bags designed for every occasion. Experience high-end fashion, meticulous embroidery details, and personalized aesthetics.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <a
                  href={heroWhatsAppUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy px-9 py-4 rounded-full flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <MessageCircle size={16} />
                  <span>Buy From WhatsApp</span>
                </a>
                <Link
                  href="/shop"
                  className="border border-[#4B151C]/35 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-burgundy text-burgundy px-9 py-4 rounded-full text-center text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:scale-105"
                >
                  View Collection
                </Link>
              </motion.div>

              {/* Minimalist benefit bullets */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="pt-6 border-t border-[#EAE0D5] flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#6B1F28]/85 font-medium tracking-wider"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span>Premium Quality</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span>Trendy Designs</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span>Limited Stock</span>
                </span>
              </motion.div>
            </div>

            {/* Right Side Image Banner with Badge */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end z-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] overflow-hidden"
              >
                <img
                  src="/assets/24502.png"
                  alt="KASHISH Premium Handcrafted Butterfly Embroidery Ladies Bag"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* Glass Starting Price Badge */}
                <div className="absolute top-8 right-8 bg-[#4B151C]/85 backdrop-blur-md text-[#EAE0D5] w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center p-3 text-center border border-white/10 shadow-lg z-20 animate-pulse">
                  <span className="text-[7px] sm:text-[9px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] leading-none">Starting From</span>
                  <span className="serif-font text-base sm:text-xl font-bold mt-1 text-white">₹600/-</span>
                  <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-light text-white/70">Only</span>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS (OUR COLLECTION) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
            Our Collection
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-4">
            Stylish. Premium. You.
          </h2>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-12 rounded-full"></div>

          {/* Featured Grid of 4 reference bags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredBags.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                index={idx}
                onClick={setSelectedProduct}
              />
            ))}
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-burgundy hover:text-[#D4AF37] border-2 border-burgundy hover:border-[#D4AF37] px-8 py-3 rounded-full transition-all duration-300"
          >
            <span>View All Collections</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 3. HANDCRAFTED WITH LOVE BANNER */}
      <section className="relative py-24 bg-burgundy overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: `url('/assets/9388.jpg.jpeg')` }}></div>
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#6B1F28] rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#D4AF37] rounded-full filter blur-3xl opacity-20"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
            Artisan Handiwork
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Handcrafted with <span className="italic text-[#D4AF37]">Love & Care</span>
          </h2>
          <p className="text-[#EAE0D5]/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Each bag in our collection is uniquely designed, hand-stitched, and finished with meticulous care to complement your premium style.
          </p>
          <div className="pt-4">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#D4AF37] hover:bg-[#EAE0D5] text-burgundy hover:text-burgundy px-8 py-3.5 rounded-full items-center justify-center space-x-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle size={16} />
              <span>Buy From WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. CATEGORIES */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
            Categories
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-4">
            Browse By Collection
          </h2>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group flex flex-col items-center bg-white p-4 rounded-2xl border border-[#EAE0D5]/30 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 bg-[#F5EFEB]">
                  <img
                    src={category.image}
                    alt={`KASHISH ${category.name} - Handcrafted Premium Ladies Handbags Collection`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="serif-font text-xs sm:text-sm font-semibold text-burgundy text-center group-hover:text-[#D4AF37] transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIAL COMBO OFFER SECTION */}
      <section id="special-offer" className="py-20 bg-[#F5EFEB]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
            Limited Time Deal
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-4">
            Special Combo Offer
          </h2>
          <p className="text-xs text-[#6B1F28]/80 max-w-md mx-auto mb-12">
            Elevate your bag closet. Order together to unlock these exclusive luxury savings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Card 1 Bag */}
            <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">Solo Elegance</span>
                <h3 className="serif-font text-2xl font-bold text-burgundy">1 Handcrafted Bag</h3>
                <div className="text-3xl font-extrabold text-burgundy pt-2">₹600</div>
                <p className="text-xs text-gray-500 font-light pt-2">Choose any 1 premium canvas bag from our regular collection.</p>
              </div>
              <a
                href={getComboWhatsAppLink(1, 600)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={14} />
                <span>Buy Now</span>
              </a>
            </div>

            {/* Card 2 Bags (Most Popular Highlighted) */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#D4AF37] flex flex-col justify-between shadow-lg relative -translate-y-2 md:-translate-y-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-burgundy text-[9px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-widest shadow-sm">
                Most Popular
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Double Charm</span>
                <h3 className="serif-font text-2xl font-bold text-burgundy">2 Handcrafted Bags</h3>
                <div className="text-3xl font-extrabold text-burgundy pt-2">₹850</div>
                <p className="text-xs text-gray-600 font-light pt-2">Mix and match any 2 premium styles. Perfect to keep one and gift one!</p>
              </div>
              <a
                href={getComboWhatsAppLink(2, 850)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <MessageCircle size={14} />
                <span>Buy Now</span>
              </a>
            </div>

            {/* Card 3 Bags */}
            <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">Artisan Closet</span>
                <h3 className="serif-font text-2xl font-bold text-burgundy">3 Handcrafted Bags</h3>
                <div className="text-3xl font-extrabold text-burgundy pt-2">₹1250</div>
                <p className="text-xs text-gray-500 font-light pt-2">Superb value package. Get any 3 gorgeous bags for your complete collection.</p>
              </div>
              <a
                href={getComboWhatsAppLink(3, 1250)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={14} />
                <span>Buy Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
            Our Standards
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-4">
            Why KASHISH Bags?
          </h2>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE0D5]/20">
              <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto text-burgundy">
                <Check size={20} className="text-burgundy" />
              </div>
              <h3 className="serif-font text-base font-bold text-burgundy">Handcrafted Artistry</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Each design is meticulously embroidered and stitched with care, creating unique styles.</p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE0D5]/20">
              <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto text-burgundy">
                <Check size={20} className="text-burgundy" />
              </div>
              <h3 className="serif-font text-base font-bold text-burgundy">Premium Quality</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Made from organic, heavy-density canvas, quality metals, and robust double stitching.</p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE0D5]/20">
              <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto text-burgundy">
                <Check size={20} className="text-burgundy" />
              </div>
              <h3 className="serif-font text-base font-bold text-burgundy">Affordable Luxury</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Premium look and durability starting from just ₹600/- without retail markups.</p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE0D5]/20">
              <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto text-burgundy">
                <Check size={20} className="text-burgundy" />
              </div>
              <h3 className="serif-font text-base font-bold text-burgundy">Secure WhatsApp Orders</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Chat directly with the business owner, confirm customizations, and track your package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM GALLERY */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
            Social Media
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-4">
            Follow Us On Instagram
          </h2>
          <p className="text-xs text-[#6B1F28]/85 mb-10">
            Join our luxury community and stay updated with the latest releases at <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[#D4AF37]">@kashish_bags_collection</a>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {instagramPhotos.map((photo, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm group bg-[#F5EFEB]">
                <img
                  src={photo}
                  alt={`KASHISH Handcrafted Ladies Bag - Instagram Feature ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors items-center space-x-2"
          >
            <Instagram size={14} />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
            Reviews
          </span>
          <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#EAE0D5]/30 space-y-4">
                <div className="flex text-[#D4AF37] space-x-0.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" />
                  ))}
                </div>
                <p className="text-xs text-[#6B1F28]/95 leading-relaxed font-light italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="pt-2 border-t border-[#EAE0D5]/50 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-burgundy">
                  <span>{t.name}</span>
                  <span className="text-[#C5A880]">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 bg-[#F5EFEB]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
              Support
            </span>
            <h2 className="serif-font text-3xl sm:text-4xl font-normal text-burgundy mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#EAE0D5]/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center text-[#1A0D0F] hover:text-burgundy transition-colors focus:outline-none"
                  >
                    <span className="text-sm font-semibold tracking-wider font-sans uppercase">
                      {item.q}
                    </span>
                    <span className="text-[#D4AF37] shrink-0 ml-4">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs text-gray-500 font-light leading-relaxed border-t border-[#F5EFEB] pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM BUTTON FOR WHATSAPP (Desktop floating, mobile is handled in BottomNav) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-30">
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Product Detail Overlay Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
