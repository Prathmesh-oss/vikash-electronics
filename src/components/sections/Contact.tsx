"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  Plus,
  Minus,
  Navigation,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Contact() {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Quick Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    equipment: "DJ Speaker",
    issue: "",
  });

  const fullAddress =
    "Plot No. 199, Sarve No. 1-2, Sanjay Nagar, Udhna Yard, Udhna, Surat, Gujarat, India";

  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=21.1702,72.8311&query=Vikash+Electronics+Udhna+Surat";

  const googleMapsViewUrl =
    "https://www.google.com/maps/search/?api=1&query=Plot+No.+199+Sarve+No.+1-2+Sanjay+Nagar+Udhna+Yard+Udhna+Surat+Gujarat";

  const handleCopyAddress = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(fullAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Vikash Electronics!%0A%0A*Repair Inquiry Details:*%0A• *Customer Name:* ${encodeURIComponent(
      formData.name || "Customer"
    )}%0A• *Contact Phone:* ${encodeURIComponent(
      formData.phone || "Not provided"
    )}%0A• *Equipment Type:* ${encodeURIComponent(
      formData.equipment
    )}%0A• *Problem Description:* ${encodeURIComponent(
      formData.issue || "Need inspection and repairing"
    )}%0A%0APlease let me know the repairing charges and when I can bring it to your workshop in Udhna, Surat.`;

    window.open(`https://wa.me/919825485520?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-bg-primary overflow-hidden scroll-mt-20"
    >
      {/* Background Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container className="relative z-10 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* Gold Small Label */}
          <div className="inline-block text-amber-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
            GET IN TOUCH & WORKSHOP
          </div>

          {/* Main Heading: CONTACT in White, US in Gold */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
            <span className="text-white">CONTACT </span>
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              US
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Call us directly, send your repair enquiry on WhatsApp, or navigate to our workshop in Udhna, Surat.
          </p>
        </div>

        {/* 3-Column Grid: Contact Info Card, Interactive Google Map Card, Quick Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: Direct Contact Details & Workshop Address (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-2xl bg-[#131b2e] border border-sky-500/30 p-5 sm:p-6 flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Contact Channels</span>
              </h3>

              {/* 1. Phone Call */}
              <a
                href="tel:+919825485520"
                className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-400/50 group transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    98254 85520
                  </div>
                  <div className="text-xs text-slate-400">Direct Call &bull; Quick help</div>
                </div>
              </a>

              {/* 2. WhatsApp Chat */}
              <a
                href="https://wa.me/919825485520?text=Hello%20Vikash%20Electronics!%20I%20have%20an%20equipment%20repair%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 group transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="text-base sm:text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-xs text-slate-400">Instant photo & message chat</div>
                </div>
              </a>

              {/* 3. Address with Copy Button */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
                    <MapPin className="w-4 h-4" />
                    <span>Workshop Address</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed space-y-0.5">
                  <p className="font-semibold text-white">Plot No. 199, Sarve No. 1-2,</p>
                  <p>Sanjay Nagar, Udhna Yard,</p>
                  <p>Udhna, Surat, Gujarat, India.</p>
                </div>
              </div>

              {/* 4. Timings & Technician */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white">Opening Hours:</span>
                  <p className="text-slate-400">Mon &ndash; Sat: 9:30 AM &ndash; 9:00 PM</p>
                  <p className="text-[11px] text-amber-400 font-semibold">
                    Technician: Murlidhar Chaudhari
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Interactive Google Map Card with Working Zoom & GPS Nav (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl overflow-hidden bg-slate-900 text-slate-900 border-2 border-sky-500/40 relative flex flex-col justify-between shadow-xl min-h-[360px]"
          >
            {/* Top Google Map Info Badge */}
            <div className="p-3.5 bg-slate-950 border-b border-slate-800 z-10 space-y-1 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">Vikash Electronics</span>
                <a
                  href={googleMapsViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Plot No. 199, Sanjay Nagar, Udhna Yard, Udhna, Surat
              </p>
            </div>

            {/* Stylized Scalable Google Map Canvas */}
            <div className="relative flex-1 bg-[#1a2234] overflow-hidden flex items-center justify-center min-h-[220px]">
              {/* Map Road Grid Lines that scale with zoomLevel */}
              <svg
                className="absolute inset-0 w-full h-full opacity-50 transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="40" x2="100%" y2="40" stroke="#374151" strokeWidth="6" />
                <line x1="0" y1="120" x2="100%" y2="120" stroke="#475569" strokeWidth="8" />
                <line x1="0" y1="200" x2="100%" y2="200" stroke="#374151" strokeWidth="5" />
                <line x1="80" y1="0" x2="80" y2="100%" stroke="#374151" strokeWidth="6" />
                <line x1="220" y1="0" x2="220" y2="100%" stroke="#475569" strokeWidth="10" />
                <line x1="340" y1="0" x2="340" y2="100%" stroke="#374151" strokeWidth="5" />
              </svg>

              {/* Area Labels */}
              <div className="absolute top-6 left-8 text-[11px] font-bold text-slate-400">
                Udhna
              </div>
              <div className="absolute bottom-12 left-10 text-[11px] font-bold text-slate-400">
                Sanjay Nagar
              </div>
              <div className="absolute top-10 right-10 text-[11px] font-bold text-slate-400">
                Udhna Yard
              </div>

              {/* Pinpoint Red Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="px-2.5 py-1 rounded bg-slate-950 border border-amber-400/60 text-white font-bold text-[10px] shadow-lg -mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-amber-300">Vikash Electronics</span>
                </div>
                <div className="text-red-500 filter drop-shadow-[0_4px_8px_rgba(239,35,60,0.6)]">
                  <MapPin className="w-9 h-9 fill-red-600 text-white stroke-[1.5]" />
                </div>
              </div>

              {/* Interactive Working Zoom Controls */}
              <div className="absolute bottom-3 right-3 flex flex-col bg-slate-900/90 rounded-lg shadow-lg border border-slate-700 overflow-hidden text-white z-20">
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2))}
                  aria-label="Zoom in"
                  className="p-2 hover:bg-slate-800 border-b border-slate-700 active:scale-95 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
                  aria-label="Zoom out"
                  className="p-2 hover:bg-slate-800 active:scale-95 transition-all"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Google Maps Text Tag */}
              <div className="absolute bottom-2 left-3 text-[11px] font-bold tracking-tight text-slate-400 font-sans">
                Surat Workshop
              </div>
            </div>

            {/* Bottom 1-Tap GPS Navigation Trigger */}
            <div className="p-3.5 bg-slate-950 border-t border-slate-800">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Start GPS Navigation</span>
              </a>
            </div>
          </motion.div>

          {/* Column 3: Interactive WhatsApp Repair Booking Form (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#1b1c38] via-[#14152e] to-[#0c0d1f] border-2 border-indigo-500/40 relative flex flex-col justify-between shadow-2xl space-y-4"
          >
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Quick Repair Enquiry</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fill details & send instantly on WhatsApp to get cost & repair time estimate.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                {/* 1. Name Input */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* 2. Phone Input */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98254 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* 3. Equipment Selector */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Equipment to Repair
                  </label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="DJ Speaker / Subwoofer">DJ Speaker / Subwoofer</option>
                    <option value="Power Amplifier">Power Amplifier</option>
                    <option value="Sharpy / Moving Head Light">Sharpy / Moving Head Light</option>
                    <option value="DJ Stage Light / Par Can">DJ Stage Light / Par Can</option>
                    <option value="Sound Mixer / Console">Sound Mixer / Console</option>
                    <option value="Home Theatre System">Home Theatre System</option>
                    <option value="LED / Smart TV">LED / Smart TV</option>
                    <option value="Other Electronic Gear">Other Electronic Gear</option>
                  </select>
                </div>

                {/* 4. Issue Description */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Issue / Problem
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Voice coil burnt, No sound, etc."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Submit to WhatsApp Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
