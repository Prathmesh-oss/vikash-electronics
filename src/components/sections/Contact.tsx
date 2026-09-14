"use client";

import React from "react";
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
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Contact() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Plot+No.+199+Sarve+No.+1-2+Sanjay+Nagar+Udhna+Yard+Limbayat+Surat+Gujarat";

  return (
    <section
      id="contact"
      className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-bg-primary overflow-hidden scroll-mt-20"
    >
      {/* Background Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container className="relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* Gold Small Label */}
          <div className="inline-block text-amber-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
            GET IN TOUCH
          </div>

          {/* Main Heading: CONTACT in White, US in Gold */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
            <span className="text-white">CONTACT </span>
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              US
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            For any repair service or enquiry, feel free to contact us. We are always ready to help you.
          </p>
        </div>

        {/* 3-Column Grid: Contact Info, Map Card, Need a Repair CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[#131b2e] border border-sky-500/30 p-6 flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:+919825485520"
                className="flex items-start gap-4 group transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    98254 85520
                  </div>
                  <div className="text-xs text-slate-400">Call us anytime</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919825485520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Us
                  </div>
                  <div className="text-xs text-slate-400">Quick response</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 text-xs text-slate-300 leading-relaxed">
                  <div className="font-semibold text-white">Workshop Location:</div>
                  <div>Plot No. 199, Sarve No. 1-2,</div>
                  <div>Sanjay Nagar, Udhna Yard,</div>
                  <div>Limbayat, Surat, Gujarat.</div>
                </div>
              </div>

              {/* Service */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">
                    Service
                  </div>
                  <div className="text-xs text-slate-300">DJ & Electronic Repairing</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Google Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-white text-slate-900 border-2 border-sky-500/40 relative flex flex-col justify-between shadow-xl min-h-[340px]"
          >
            {/* Top Google Map Info Badge */}
            <div className="p-3.5 bg-white/95 border-b border-slate-200 z-10 space-y-1 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-950">Vikash Electronics</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                >
                  <span>View larger map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[10px] text-slate-600 leading-tight">
                Plot No. 199, Sarve No. 1-2, Sanjay Nagar, Udhna Yard, Limbayat, Surat
              </p>
            </div>

            {/* Stylized Google Map Canvas */}
            <div className="relative flex-1 bg-[#e5e3df] overflow-hidden flex items-center justify-center min-h-[220px]">
              {/* Map Road Grid Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="40" x2="100%" y2="40" stroke="#ffffff" strokeWidth="6" />
                <line x1="0" y1="120" x2="100%" y2="120" stroke="#ffffff" strokeWidth="8" />
                <line x1="0" y1="200" x2="100%" y2="200" stroke="#ffffff" strokeWidth="5" />
                <line x1="80" y1="0" x2="80" y2="100%" stroke="#ffffff" strokeWidth="6" />
                <line x1="220" y1="0" x2="220" y2="100%" stroke="#ffffff" strokeWidth="10" />
                <line x1="340" y1="0" x2="340" y2="100%" stroke="#ffffff" strokeWidth="5" />
              </svg>

              {/* Street Names / Labels */}
              <div className="absolute top-8 left-16 text-[11px] font-bold text-slate-600">
                Limbayat
              </div>
              <div className="absolute bottom-16 left-12 text-[11px] font-bold text-slate-600">
                Sanjay Nagar
              </div>
              <div className="absolute bottom-6 right-16 text-[11px] font-bold text-slate-600">
                Udhna Yard
              </div>

              {/* Pinpoint Red Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="px-2.5 py-1 rounded bg-slate-900 text-white font-bold text-[10px] shadow-md -mb-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>Vikash Electronics</span>
                </div>
                <div className="text-red-600 filter drop-shadow-md">
                  <MapPin className="w-8 h-8 fill-red-600 text-white stroke-[1.5]" />
                </div>
              </div>

              {/* Zoom Controls (+ / -) */}
              <div className="absolute bottom-3 right-3 flex flex-col bg-white rounded shadow border border-slate-300 overflow-hidden text-slate-700">
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="p-1.5 hover:bg-slate-100 border-b border-slate-200"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Zoom out"
                  className="p-1.5 hover:bg-slate-100"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Google Brand Logo */}
              <div className="absolute bottom-2 left-3 text-[11px] font-bold tracking-tight text-slate-500 font-sans">
                Google
              </div>
            </div>
          </motion.div>

          {/* Column 3: Workshop Visit Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#1b1c38] via-[#14152e] to-[#0c0d1f] border-2 border-indigo-500/40 relative flex flex-col justify-between text-center overflow-hidden shadow-2xl space-y-6"
          >
            {/* Ambient Concert Lighting Glow inside Card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.35),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Visit Workshop
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Bring your equipment directly to our workshop in Limbayat, Surat for diagnostic assessment.
              </p>
            </div>

            {/* Quality Markers */}
            <div className="relative z-10 space-y-2.5 text-xs text-slate-200 text-left bg-slate-950/60 p-4 rounded-xl border border-indigo-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Component-Level Precision Repair</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Bench Tested Before Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Audio, Stage Lighting & Display Gear</span>
              </div>
            </div>

            {/* Action Button: Get Directions */}
            <div className="relative z-10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(251,191,36,0.35)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 text-slate-950" />
                <span>Get Directions on Map</span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
