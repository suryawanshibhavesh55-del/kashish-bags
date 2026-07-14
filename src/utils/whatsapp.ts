import { Product } from '@/data/products';
import { SITE_CONFIG } from './config';

// The official KASHISH bags WhatsApp contact number
export const KASHISH_WHATSAPP_NUMBER = SITE_CONFIG.whatsAppNumber; 

export function isToteBag(product: { id: string; name: string }): boolean {
  const nameLower = product.name.toLowerCase();
  const idLower = product.id.toLowerCase();
  
  // Exclude clutches, packs/backpacks, and gift sets/packages
  if (
    nameLower.includes("clutch") || 
    idLower.includes("clutch") ||
    nameLower.includes("pack") || 
    idLower.includes("pack") ||
    nameLower.includes("set") || 
    idLower.includes("set") ||
    nameLower.includes("gift bag") ||
    idLower.includes("gift-bag")
  ) {
    return false;
  }
  
  return true; // All other items are standard canvas totes
}

export function getWhatsAppOrderLink(product: Product, quantity = 1, size?: string): string {
  const phone = KASHISH_WHATSAPP_NUMBER;
  
  // Build the product image URL dynamically using the current website origin/domain
  const origin = typeof window !== "undefined" ? window.location.origin : SITE_CONFIG.siteUrl;
  const currentUrl = typeof window !== "undefined" ? window.location.href : SITE_CONFIG.siteUrl;
  
  const imageUrl = `${origin}${product.image}`;
  const qtySuffix = quantity > 1 ? ` (Qty: ${quantity})` : "";
  
  let message = "";
  if (isToteBag(product) && size) {
    message = `Hello KASHISH Bags 👋

I am interested in this bag:

Product: ${product.name}${qtySuffix}
Selected Size: ${size}
Price: ₹${product.price}

Product Image:
${imageUrl}

Product Link:
${currentUrl}

Please share availability and ordering details.`;
  } else {
    message = `Hello KASHISH Bags Collection ✨
I am interested in ordering this bag.

👜 Product Name: ${product.name}${qtySuffix}
💰 Price: ₹${product.price}
🖼️ Product Photo: ${imageUrl}
🔗 Product: ${currentUrl}

Please share availability and order details.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralContactLink(message?: string): string {
  const phone = KASHISH_WHATSAPP_NUMBER;
  if (!message) {
    message = `Hello KASHISH Bags Collection ✨

I am interested in your luxury bags collection. Can you help me?`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
