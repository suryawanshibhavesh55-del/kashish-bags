import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import { getWhatsAppGeneralContactLink } from "@/utils/whatsapp";

export default function About() {
  const whatsAppLink = getWhatsAppGeneralContactLink();

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#F5EFEB]/50 to-[#FDFBF7] text-center border-b border-[#EAE0D5]/35">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase block">
            Our Legacy
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-normal text-burgundy mt-2">
            The KASHISH Story
          </h1>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-xs sm:text-sm text-[#6B1F28]/80 max-w-xl mx-auto leading-relaxed font-light">
            Crafting premium, handcrafted canvas bags that combine modern functionality with traditional embroidery art. Created with passion, made with love.
          </p>
        </div>
      </section>

      {/* 2. Brand Story split section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl border border-[#EAE0D5]/50 bg-[#F5EFEB]">
              <Image
                src="/assets/9372.jpg.jpeg"
                alt="KASHISH Hand-Painted Floral Art Showcase"
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/45">
                <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-widest block mb-1">Our Studio</span>
                <span className="serif-font text-[#1A0D0F] font-semibold text-xs sm:text-sm">Every bag starts as a blank canvas and finishes as a piece of art.</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase">
                Handcrafted with Love
              </span>
              <h2 className="serif-font text-3xl sm:text-4xl text-burgundy leading-tight">
                Where Fashion <br />
                Meets <span className="italic text-[#C5A880] font-light">Fine Hand-stitch Art</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#C5A880]"></div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                <p>
                  KASHISH Bags Collection was born out of a desire to create something deeply personal, beautiful, and premium. What started as a small personal experiment in hand-embroidery soon blossomed into a luxury boutique brand celebrated for its elegant aesthetic and heavy-duty utility.
                </p>
                <p>
                  Every single bag we create is handcrafted from start to finish. We select high-density organic canvas fabrics, combine them with durable leather straps and gold metal details, and hand-stitch or hand-paint intricate designs. Whether it is our signature monarch butterfly applique, delicate wild lavender stalks, or customized names in scrolling script, each piece has its own unique character.
                </p>
                <p>
                  We believe that premium style shouldn&apos;t carry an exorbitant price tag. By working directly with you on WhatsApp and selling straight from our workshop, we eliminate distributor fees to bring you ₹5,000 quality designs starting at just ₹600/-.
                </p>
              </div>

              {/* Core Values Bullets */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#EAE0D5]">
                <div className="flex items-start space-x-3">
                  <Heart className="text-[#D4AF37] mt-1 shrink-0" size={16} />
                  <div>
                    <h4 className="serif-font text-burgundy font-bold text-xs sm:text-sm uppercase tracking-wider">100% Handcrafted</h4>
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">Not mass produced. Made in small, intentional batches with individual care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="text-[#D4AF37] mt-1 shrink-0" size={16} />
                  <div>
                    <h4 className="serif-font text-burgundy font-bold text-xs sm:text-sm uppercase tracking-wider">Customizable</h4>
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">We embroider custom names, monograms, and color themes on request.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. CTA Ribbon */}
      <section className="py-16 bg-[#F5EFEB]/50 text-center border-t border-[#EAE0D5]/50">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h3 className="serif-font text-2xl sm:text-3xl text-burgundy font-normal">
            Ready to experience KASHISH?
          </h3>
          <p className="text-xs text-[#6B1F28]/80 max-w-md mx-auto">
            Browse our catalog, find your favorite design, or request name customization directly via WhatsApp.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/shop"
              className="bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
            >
              Shop Collection
            </Link>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#4B151C]/40 hover:border-[#D4AF37] hover:bg-white text-burgundy px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
