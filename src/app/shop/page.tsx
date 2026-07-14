"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { SITE_CONFIG } from "@/utils/config";
import { isToteBag } from "@/utils/whatsapp";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  // State Management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [prevCategoryParam, setPrevCategoryParam] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("popular");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync category state when search parameters change (render-phase update)
  if (categoryParam !== prevCategoryParam) {
    setPrevCategoryParam(categoryParam);
    setSelectedCategory(categoryParam || "All");
  }

  const categories = [
    "All",
    "Floral Collection",
    "Personalised Bags",
    "Butterfly Bags",
    "Classic Collection",
    "Canvas Bags",
    "Gift Collection",
  ];

  // Filtering Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sortBy === "newest") {
      return (a.isNew ? 0 : 1) - (b.isNew ? 0 : 1);
    } else {
      // Default: Popular
      return (b.isPopular ? 0 : 1) - (a.isPopular ? 0 : 1);
    }
  });

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "KASHISH Bags Collection",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `${SITE_CONFIG.siteUrl}${product.image}`,
        "description": isToteBag(product)
          ? `${product.description} Available in Small, Medium and Large sizes. Designed for comfortable everyday use with a 14-inch handle.`
          : product.description,
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
    <div className="bg-[#FDFBF7] min-h-screen py-10">
      {/* Product List Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase block">
            KASHISH Bags
          </span>
          <h1 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-normal text-burgundy mt-2">
            The Complete Collection
          </h1>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter, Search & Sort Panel */}
        <div className="bg-white rounded-3xl border border-[#EAE0D5]/50 p-6 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A880] w-4 h-4" />
              <input
                type="text"
                placeholder="Search premium bags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#F5EFEB]/30 hover:bg-[#F5EFEB]/50 focus:bg-white text-sm py-3 pl-12 pr-4 rounded-full border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F]"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 justify-between lg:justify-end">
              
              {/* Sort Selector */}
              <div className="flex items-center space-x-2">
                <ArrowUpDown size={14} className="text-[#C5A880]" />
                <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs text-burgundy font-semibold uppercase tracking-wider focus:outline-none border-b border-transparent focus:border-burgundy py-1 cursor-pointer"
                >
                  <option value="popular">Popularity</option>
                  <option value="newest">New Arrivals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Alphabetical: A to Z</option>
                  <option value="name-desc">Alphabetical: Z to A</option>
                </select>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                className="lg:hidden flex items-center space-x-1.5 text-xs text-burgundy font-semibold uppercase tracking-wider border border-[#EAE0D5] px-4 py-2.5 rounded-full hover:bg-[#F5EFEB]/30"
              >
                <SlidersHorizontal size={14} />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Category Tabs (Desktop: visible always, Mobile: toggleable) */}
          <div className={`${isFilterPanelOpen ? "block" : "hidden"} lg:block pt-4 border-t border-[#EAE0D5]/50`}>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880] block mb-3">
              Collections
            </span>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterPanelOpen(false);
                    }}
                    className={`text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold border transition-all duration-300 ${
                      isActive
                        ? "bg-burgundy border-burgundy text-white shadow-sm"
                        : "bg-[#FDFBF7] border-[#EAE0D5] text-[#6B1F28] hover:bg-[#F5EFEB]/50 hover:border-burgundy/30"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Count & Grid */}
        <div className="space-y-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Showing {sortedProducts.length} of {products.length} luxury designs
          </p>

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} onClick={setSelectedProduct} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#EAE0D5]/30">
              <p className="text-burgundy font-medium text-lg mb-2">No bags match your selection.</p>
              <p className="text-xs text-gray-400">Try clearing your filters or searching for something else.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Overlay Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={
      <div className="bg-[#FDFBF7] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-burgundy border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs tracking-widest uppercase text-burgundy font-medium">Loading Collection...</p>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
