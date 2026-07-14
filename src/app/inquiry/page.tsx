"use client";

import { useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/utils/config";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interestedProducts: "Butterfly Charm Tote",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `Hello KASHISH Bags Collection ✨\nI have a bulk/custom inquiry from the website.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n📍 City: ${formData.city}\n👜 Product of Interest: ${formData.interestedProducts}\n💬 Message & Requirements: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsAppNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp URL in a new window/tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      interestedProducts: "Butterfly Charm Tote",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const productOptions = [
    "Butterfly Charm Tote (Signature)",
    "Floral Garden Bag (Customizable Name)",
    "Bloom Elegance Tote (Hand-painted)",
    "Daisy Dreams Bag (Embroidered)",
    "Bulk Combo Package (Mix & Match)",
    "Custom Embroidered Logo / Motif Bag",
    "Gift / Event Return Favors (50+ Quantity)",
    "Other Collection Bags",
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase block">
            Exclusive Service
          </span>
          <h1 className="serif-font text-4xl font-normal text-burgundy mt-2">
            Bulk & Custom Inquiry
          </h1>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
            Interested in booking customized party favors, corporate gift designs, or ordering custom-name bags in bulk? Fill out this consultation form.
          </p>
        </div>

        {/* Info card regarding customization */}
        <div className="bg-white rounded-2xl border border-[#D4AF37]/20 p-5 shadow-sm mb-10 flex items-start space-x-3 text-left">
          <div className="bg-burgundy/10 text-burgundy p-2 rounded-full shrink-0">
            <Sparkles size={16} className="text-[#D4AF37]" />
          </div>
          <div>
            <h3 className="serif-font text-xs uppercase font-bold text-burgundy tracking-wider mb-1">Bespoke Options Available</h3>
            <p className="text-[11px] text-gray-400 font-light leading-relaxed">
              We offer exclusive discounts for quantities exceeding 10 bags. Custom logo designs, wedding favors, hand-painted details, and personalized font styles can be requested in the message field.
            </p>
          </div>
        </div>

        {/* Inquiry Form Card */}
        <div className="bg-white rounded-3xl border border-[#EAE0D5]/50 p-8 sm:p-10 shadow-sm text-left">
          
          {submitSuccess ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-12 h-12 bg-burgundy/10 text-burgundy rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={24} />
              </div>
              <h3 className="serif-font text-xl font-bold text-burgundy">Inquiry Received Successfully</h3>
              <p className="text-xs text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
                Thank you for submitting your custom design inquiry. A member of our design team will contact you on your registered WhatsApp phone number or email within 12-24 hours.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors mt-6"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Name</label>
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
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F]"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F]"
                    placeholder="yourname@domain.com"
                  />
                </div>
                {/* City */}
                <div>
                  <label htmlFor="city" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F]"
                    placeholder="e.g. Mumbai, New Delhi"
                  />
                </div>
              </div>

              {/* Interested Products dropdown */}
              <div>
                <label htmlFor="interestedProducts" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Product of Interest</label>
                <select
                  id="interestedProducts"
                  name="interestedProducts"
                  value={formData.interestedProducts}
                  onChange={handleChange}
                  className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F] cursor-pointer"
                >
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom message details */}
              <div>
                <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Message & Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#FDFBF7] text-xs py-3.5 px-4 rounded-xl border border-[#EAE0D5] focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-[#1A0D0F] resize-none"
                  placeholder="Describe details regarding customized names, colors, expected quantity, or delivery timelines..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-burgundy hover:bg-[#D4AF37] text-white hover:text-burgundy py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-sm disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Send Inquiry on WhatsApp"}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
