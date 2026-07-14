import { Product } from '@/data/products';
import { SITE_CONFIG } from './config';

// The official KASHISH bags WhatsApp contact number
export const KASHISH_WHATSAPP_NUMBER = SITE_CONFIG.whatsAppNumber; 

export function getWhatsAppOrderLink(product: Product, quantity = 1): string {
  const phone = KASHISH_WHATSAPP_NUMBER;
  
  // Build the product image URL dynamically using the current website origin/domain
  const origin = typeof window !== "undefined" ? window.location.origin : SITE_CONFIG.siteUrl;
  const currentUrl = typeof window !== "undefined" ? window.location.href : SITE_CONFIG.siteUrl;
  
  const imageUrl = `${origin}${product.image}`;
  const qtySuffix = quantity > 1 ? ` (Qty: ${quantity})` : "";
  
  // Format matching the exact product identification layout
  const message = `Hello KASHISH Bags Collection ✨

I am interested in ordering this bag.

👜 Product Name: ${product.name}${qtySuffix}
💰 Price: ₹${product.price}
🖼️ Product Photo: ${imageUrl}
🔗 Product: ${currentUrl}

Please share availability and order details.`;

  // Return the fully encoded wa.me URL
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
