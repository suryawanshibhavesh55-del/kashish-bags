"use client";

import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Facebook } from "@/components/Icons";
import { getWhatsAppGeneralContactLink } from "@/utils/whatsapp";
import { SITE_CONFIG } from "@/utils/config";

export default function Contact() {
  const whatsAppLink = getWhatsAppGeneralContactLink("Hello! I want to contact you regarding KASHISH Bags Collection.");
  const facebookLink = SITE_CONFIG.facebookUrl;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `Hello KASHISH Bags Collection ✨\nI am contacting you from the website regarding a general inquiry.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n💬 Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsAppNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp URL in a new window/tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase block">
            Get In Touch
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-normal text-burgundy mt-2">
            Contact KASHISH
          </h1>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs text-gray-500 max-w-sm mx-auto">
            Have questions about custom naming, shipping, or need bulk ordering? We are here to help.
          </p>
        </div>

        {/* Contact Page Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl border border-[#EAE0D5]/50 p-8 shadow-sm space-y-6 text-[#1A0D0F]">
              <h2 className="serif-font text-2xl text-burgundy font-bold">Studio Info</h2>
              <div className="w-8 h-0.5 bg-[#C5A880]"></div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3.5">
                  <MapPin size={18} className="text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-[10px] text-gray-400 mb-1">Our Workshop Address</h3>
                    <p className="font-light leading-relaxed">Ground Floor, Ambience Mall, G-7 & G-8, Ambience Island, DLF Phase 3, Sector 24, Gurugram, Haryana 122010</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone size={18} className="text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-[10px] text-gray-400 mb-1">WhatsApp & Call</h3>
                    <p className="font-light leading-relaxed">+91 97723 26529</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock size={18} className="text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-[10px] text-gray-400 mb-1">Studio Hours</h3>
                    <p className="font-light leading-relaxed">Open 24/7 (Always Available)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels buttons */}
              <div className="pt-6 border-t border-[#EAE0D5]/50 flex flex-wrap gap-3">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center space-x-2"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b5998] hover:bg-[#2d4373] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center space-x-2"
                >
                  <Facebook size={14} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps container */}
            <div className="rounded-3xl overflow-hidden border border-[#EAE0D5]/40 shadow-sm relative aspect-[16/10] bg-[#F5EFEB]">
              <iframe
              title="KASHISH Bags Google Maps Location"
              src={SITE_CONFIG.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale contrast-110 opacity-90 hover:grayscale-0 transition-all duration-500"
            ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE0D5]/50 p-8 shadow-sm">
            <h2 className="serif-font text-2xl text-burgundy font-bold mb-2">Write To Us</h2>
            <p className="text-xs text-gray-400 font-light mb-6">Send us a direct query message, and our designer team will reply within 24 hours.</p>

            {submitSuccess ? (
              <div className="bg-[#F5EFEB]/50 border border-burgundy/20 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-burgundy/10 text-burgundy rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={24} />
                </div>
                <h3 className="serif-font text-lg font-bold text-burgundy">Message Sent Successfully!</h3>
                <p className="text-xs text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting KASHISH Bags Collection. We have received your query and will get back to you shortly. For immediate support, click the WhatsApp button.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-burgundy text-white hover:bg-[#D4AF37] hover:text-burgundy px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F]"
                    placeholder="e.g. +91 99999 99999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F] resize-none"
                    placeholder="Write details about your query or product specifications here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-sm disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? "Opening WhatsApp..." : "Send Query on WhatsApp"}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
