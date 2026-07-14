export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'Floral Collection' | 'Personalised Bags' | 'Butterfly Bags' | 'Classic Collection' | 'Canvas Bags' | 'Gift Collection';
  image: string;
  images?: string[]; // Multiple photos/views if available
  description: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: "butterfly-charm-tote",
    name: "Butterfly Charm Tote",
    price: 600,
    originalPrice: 899,
    category: "Butterfly Bags",
    image: "/assets/24502.png",
    images: ["/assets/24502.png"],
    description: "The signature KASHISH Butterfly bag. Crafted from premium cream canvas with delicate pink handles and a beautiful embroidered monarch butterfly applique. Features the 'KASHISH' branding hand-sequined on the front. A perfect blend of handcrafted charm and luxury aesthetic.",
    isNew: true,
    isPopular: true
  },
  {
    id: "floral-garden-bag",
    name: "Floral Garden Bag",
    price: 600,
    originalPrice: 899,
    category: "Personalised Bags",
    image: "/assets/9371.jpg.jpeg",
    images: ["/assets/9371.jpg.jpeg"],
    description: "An elegant white canvas bag featuring intricate hand-embroidered wildflowers rising from the base. Personalized with the name 'Rohitha' stitched beautifully in script. Comes with durable brown leather handles and a comfortable cross-body strap.",
    isNew: true,
    isPopular: true
  },
  {
    id: "bloom-elegance-tote",
    name: "Bloom Elegance Tote",
    price: 600,
    originalPrice: 899,
    category: "Floral Collection",
    image: "/assets/9372.jpg.jpeg",
    images: ["/assets/9372.jpg.jpeg"],
    description: "A gorgeous luxury tote crafted from textured beige canvas with dark brown leather accents. The front features a premium hand-painted floral art showcase with vibrant peach and orange petals, offset by rich green foliage.",
    isPopular: true
  },
  {
    id: "daisy-dreams-bag",
    name: "Daisy Dreams Bag",
    price: 600,
    originalPrice: 899,
    category: "Floral Collection",
    image: "/assets/9373.jpg.jpeg",
    images: ["/assets/9373.jpg.jpeg"],
    description: "Intricately hand-embroidered daisy bouquet on a premium, deep black canvas backdrop. Designed for individuals who appreciate fine art, this bag features brown leather double handles, a top zipper, and an adjustable shoulder strap.",
    isNew: true,
    isPopular: true
  },
  {
    id: "radiant-rosette-bag",
    name: "Radiant Rosette Bag",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9374.jpg.jpeg",
    description: "Delicate pink and crimson roses hand-stitched into premium cream canvas. A timeless addition to any wardrobe, perfect for summer outings."
  },
  {
    id: "vintage-bloom-shopper",
    name: "Vintage Bloom Shopper",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9378.jpg.jpeg",
    description: "A spacious everyday shopper with elegant vintage floral embroidery. Features sturdy straps and a large compartment to hold all your essentials."
  },
  {
    id: "buttercup-canvas-handbag",
    name: "Buttercup Canvas Handbag",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9380.jpg.jpeg",
    description: "Bright yellow buttercups embroidered on structured cream canvas. Add a bright, cheerful pop of color to your casual wear."
  },
  {
    id: "meadow-whispers-tote",
    name: "Meadow Whispers Tote",
    price: 600,
    category: "Canvas Bags",
    image: "/assets/9388.jpg.jpeg",
    description: "Comfortable over-the-shoulder tote bag made from heavy-duty organic canvas, featuring a detailed meadow grass embroidery sequence."
  },
  {
    id: "monarch-butterfly-bag",
    name: "Monarch Butterfly Bag",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9389.jpg.jpeg",
    description: "Stunning butterfly design featuring detailed thread work in orange, black, and white. Symbolizes grace, beauty, and confidence."
  },
  {
    id: "golden-wings-canvas-tote",
    name: "Golden Wings Canvas Tote",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9390.jpg.jpeg",
    description: "Cream canvas tote styled with multiple gold-accented butterflies fluttering across the front panel. Lightweight and durable."
  },
  {
    id: "elegant-script-personalised-bag",
    name: "Elegant Script Personalised Bag",
    price: 600,
    category: "Personalised Bags",
    image: "/assets/9395.jpg.jpeg",
    description: "High-quality personalized canvas bag with your name custom-embroidered in a sophisticated cursive script. Ideal for gifting."
  },
  {
    id: "classic-monogrammed-handbag",
    name: "Classic Monogrammed Handbag",
    price: 600,
    category: "Personalised Bags",
    image: "/assets/9396.jpg.jpeg",
    description: "Premium handbag featuring custom typography initials monogrammed onto luxury canvas. Features gold metal hardware and leather trim."
  },
  {
    id: "crimson-petals-canvas",
    name: "Crimson Petals Canvas",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9397.jpg.jpeg",
    description: "Beautiful handcrafted bag with dark crimson floral patterns. The perfect accessory for evening get-togethers and family dinners."
  },
  {
    id: "midnight-orchid-tote",
    name: "Midnight Orchid Tote",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9398.jpg.jpeg",
    description: "A dark black luxury tote displaying a hand-embroidered cluster of purple orchids. Chic, modern, and highly elegant."
  },
  {
    id: "spring-blossom-tote",
    name: "Spring Blossom Tote",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9399.jpg.jpeg",
    description: "Cream canvas tote celebrating the onset of spring with colorful blossom motifs. Spacious enough for your laptop and daily essentials."
  },
  {
    id: "royal-velvet-rose-bag",
    name: "Royal Velvet Rose Bag",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9401.jpg.jpeg",
    description: "Luxury canvas bag with high-density velvet textured rose embroidery, dark handles, and a premium inner satin lining."
  },
  {
    id: "classic-ivory-leather-accent",
    name: "Classic Ivory Leather Accent",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9425.jpg.jpeg",
    description: "A sophisticated minimalist bag in clean ivory color, trimmed with premium tan faux leather. Features double compartments."
  },
  {
    id: "warm-tan-signature-bag",
    name: "Warm Tan Signature Bag",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9446.jpg.jpeg",
    description: "Understated classic bag featuring rich tan hues, minimal patterns, and clean stitching. An everyday essential that matches any outfit."
  },
  {
    id: "champagne-beige-clutch",
    name: "Champagne Beige Clutch",
    price: 600,
    category: "Gift Collection",
    image: "/assets/9448.jpg.jpeg",
    description: "Sleek handcrafted clutch bag in rich champagne beige color. Ideal for holding phone, cards, and makeup during events."
  },
  {
    id: "premium-handcrafted-gift-set",
    name: "Premium Handcrafted Gift Set",
    price: 600,
    category: "Gift Collection",
    image: "/assets/9450.jpg.jpeg",
    description: "An elegant gift combo featuring our signature canvas bag packaged beautifully with a matching card holder and dust bag."
  },
  {
    id: "pastel-butterfly-dreams",
    name: "Pastel Butterfly Dreams",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9451.jpg.jpeg",
    description: "Cute butterfly graphics and thread embroidery in soft pastel pinks, purples, and blues. Extremely charming and feminine."
  },
  {
    id: "personalized-wildflower-tote",
    name: "Personalized Wildflower Tote",
    price: 600,
    category: "Personalised Bags",
    image: "/assets/9452.jpg.jpeg",
    description: "Customized canvas tote showcasing high-density wildflower embroidery with name customization. Premium quality straps."
  },
  {
    id: "botanical-canvas-pack",
    name: "Botanical Canvas Pack",
    price: 600,
    category: "Canvas Bags",
    image: "/assets/9453.jpg.jpeg",
    description: "Classic canvas backpack design featuring embroidered green botanical ferns and leaves. Compact yet surprisingly spacious."
  },
  {
    id: "classic-burgundy-tote",
    name: "Classic Burgundy Tote",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9454.jpg.jpeg",
    description: "Premium leather-accented tote in our brand's signature deep burgundy shade. Durable, timeless, and extremely professional."
  },
  {
    id: "forest-flora-shoulder-bag",
    name: "Forest Flora Shoulder Bag",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9455.jpg.jpeg",
    description: "Elegant shoulder bag embroidered with deep green and gold forest leaf patterns. Ideal for office wear and casual outings."
  },
  {
    id: "indigo-daisy-tote",
    name: "Indigo Daisy Tote",
    price: 600,
    category: "Canvas Bags",
    image: "/assets/9456.jpg.jpeg",
    description: "Premium blue denim canvas tote bag embroidered with clean white daisies. Durable straps make it comfortable for heavy carrying."
  },
  {
    id: "embroidered-sunflower-handbag",
    name: "Embroidered Sunflower Handbag",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9458.jpg.jpeg",
    description: "Sunny hand-stitched sunflowers with textured dark seeds on durable canvas. Adds a bright positive energy to your wardrobe."
  },
  {
    id: "handcrafted-rosebud-purse",
    name: "Handcrafted Rosebud Purse",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9791.jpg.jpeg",
    description: "Compact canvas handbag featuring delicate rosebud embroidery. Light and easy to carry, ideal for day trips."
  },
  {
    id: "personalised-initials-tote",
    name: "Personalised Initials Tote",
    price: 600,
    category: "Personalised Bags",
    image: "/assets/9792.jpg.jpeg",
    description: "Chic modern tote featuring your bold initials embroidered in gold or dark thread, flanked by tiny floral details."
  },
  {
    id: "sweet-butterfly-canvas",
    name: "Sweet Butterfly Canvas",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9795.jpg.jpeg",
    description: "A lovely everyday canvas bag featuring two cute pink butterflies embroidered on the front. A great casual choice."
  },
  {
    id: "lavender-field-handbag",
    name: "Lavender Field Handbag",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9796.jpg.jpeg",
    description: "Beautiful vertical embroidery of lavender stalks in purple and green. Handmade with meticulous attention to detail."
  },
  {
    id: "classic-minimalist-canvas",
    name: "Classic Minimalist Canvas",
    price: 600,
    category: "Canvas Bags",
    image: "/assets/9799.jpg.jpeg",
    description: "Plain high-density ivory canvas tote with no embroidery. For the lover of clean lines, minimalism, and eco-friendly style."
  },
  {
    id: "premium-wine-red-tote",
    name: "Premium Wine Red Tote",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9800.jpg.jpeg",
    description: "Luxury wine red canvas tote with gold hardware and chocolate brown leather base. Stately, elegant, and highly durable."
  },
  {
    id: "crimson-garden-shopper",
    name: "Crimson Garden Shopper",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9801.jpg.jpeg",
    description: "Spacious shopper canvas bag with dense red floral arrangements hand-embroidered across the top border."
  },
  {
    id: "emerald-butterfly-tote",
    name: "Emerald Butterfly Tote",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9802.jpg.jpeg",
    description: "Emerald green and gold thread work depicting a monarch butterfly on cream canvas. Sleek straps and premium feel."
  },
  {
    id: "hand-lettered-canvas-bag",
    name: "Hand-Lettered Canvas Bag",
    price: 600,
    category: "Personalised Bags",
    image: "/assets/9803.jpg.jpeg",
    description: "Hand-drawn and custom embroidered name canvas bag. Features high-grade inner pockets and heavy duty zipper closures."
  },
  {
    id: "soft-pink-butterfly-charm",
    name: "Soft Pink Butterfly Charm",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9804.jpg.jpeg",
    description: "An elegant cream tote adorned with a single large pink and orange butterfly applique. Light pink straps complete the look."
  },
  {
    id: "golden-petal-clutch",
    name: "Golden Petal Clutch",
    price: 600,
    category: "Gift Collection",
    image: "/assets/9805.jpg.jpeg",
    description: "A champagne clutch bag detailed with gold thread work and sequins. An absolute must-have for weddings and festive functions."
  },
  {
    id: "elegant-lavender-tote",
    name: "Elegant Lavender Tote",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9806.jpg.jpeg",
    description: "A wide canvas tote featuring a field of hand-embroidered purple lavender. Highly durable and classic."
  },
  {
    id: "autumn-blossom-canvas",
    name: "Autumn Blossom Canvas",
    price: 600,
    category: "Canvas Bags",
    image: "/assets/9807.jpg.jpeg",
    description: "Earthy autumn floral thread work on premium heavy-density canvas. Pairs beautifully with brown coats and beige dresses."
  },
  {
    id: "premium-hand-painted-rose",
    name: "Premium Hand-Painted Rose",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9808.jpg.jpeg",
    description: "Unique piece containing a hand-painted red rose on thick ivory canvas with clean leather borders. A true collector's item."
  },
  {
    id: "custom-name-embroidery-tote",
    name: "Custom Name Embroidery Tote",
    price: 600,
    category: "Personalised Bags",
    image: "/assets/9809.jpg.jpeg",
    description: "Bespoke service where your selected name is styled and embroidered inside a premium floral wreath design."
  },
  {
    id: "premium-butterfly-garden",
    name: "Premium Butterfly Garden",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9810.jpg.jpeg",
    description: "Intricate canvas art depicting butterflies hovering over a small meadow. A beautiful handcrafted marvel."
  },
  {
    id: "indigo-butterfly-clutch",
    name: "Indigo Butterfly Clutch",
    price: 600,
    category: "Butterfly Bags",
    image: "/assets/9813.jpg.jpeg",
    description: "Stylish clutch in deep indigo blue, featuring a butterfly embroidered in white and gold threads."
  },
  {
    id: "vintage-rose-shopper",
    name: "Vintage Rose Shopper",
    price: 600,
    category: "Floral Collection",
    image: "/assets/9816.jpg.jpeg",
    description: "A luxury canvas shopper showcasing high-density rose embroidery. Large storage capacity with double secure stitches."
  },
  {
    id: "pure-cream-canvas-tote",
    name: "Pure Cream Canvas Tote",
    price: 600,
    category: "Canvas Bags",
    image: "/assets/9817.jpg.jpeg",
    description: "Minimalist canvas tote bag with dual-tone pink and brown straps. Simple, beautiful, and sustainable."
  },
  {
    id: "luxury-wedding-gift-bag",
    name: "Luxury Wedding Gift Bag",
    price: 600,
    category: "Gift Collection",
    image: "/assets/9820.jpg.jpeg",
    description: "Our signature luxury gold-embroidered canvas bag presented in a high-grade gift wrap. Perfect for wedding favors."
  },
  {
    id: "royal-gold-embroidery-tote",
    name: "Royal Gold Embroidery Tote",
    price: 600,
    category: "Classic Collection",
    image: "/assets/9821.jpg.jpeg",
    description: "Classic canvas bag styled with symmetric royal gold pattern embroideries. An elegant statement bag for events."
  }
];
