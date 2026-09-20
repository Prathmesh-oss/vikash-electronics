"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, ExternalLink, Building2, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS_DATA } from "@/data/business";

/**
 * Placeholder constant for Google Maps URL.
 * When the business owner provides their exact Google Maps location pin or embed link,
 * replace this placeholder value.
 */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/21%C2%B010'16.7%22N+72%C2%B051'49.3%22E/@21.171312,72.86369,17z";

export function Location() {
  const addressLines = [
    "Plot No. 199",
    "Sarve No. 1-2",
    "Sanjay Nagar",
    "Udhna Yard",
    "Udhna",
    "Surat, Gujarat, India",
  ];

  return (
    <section
      id="location"
      className="relative section-spacing bg-bg-secondary/30 border-t border-brand-border/60 overflow-hidden scroll-mt-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-brand-blue/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container className="relative z-10 space-y-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/40 border border-indigo-400/30 text-indigo-200 text-xs font-semibold tracking-wider uppercase shadow-glow-purple backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-brand-orange" />
            <span className="font-mono text-[10px] sm:text-[11px]">OUR WORKSHOP</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            VISIT OUR <span className="text-gradient-blue">SHOP</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-brand-gray-muted leading-relaxed font-medium">
            Bring your DJ sound equipment, amplifiers, or stage lights directly to our workshop in Surat for fast, reliable repair.
          </p>
        </motion.div>

        {/* Location Grid: Address Details Card & Interactive Map Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left / Main Card: Professional Address Details (Col 6) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between p-5 xs:p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-bg-card/95 border border-brand-border shadow-2xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-blue" />

            <div className="space-y-5 sm:space-y-6">
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl sm:rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shadow-glow-blue shrink-0">
                  <Building2 className="w-5 h-5 xs:w-6 xs:h-6" />
                </div>
                <div>
                  <h3 className="text-lg xs:text-xl font-bold text-white tracking-tight">
                    {BUSINESS_DATA.name}
                  </h3>
                  <p className="text-[11px] xs:text-xs text-brand-gray-muted">
                    DJ & Electronic Equipment Repair Workshop
                  </p>
                </div>
              </div>

              {/* Formatted Address Lines */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-bg-primary/80 border border-brand-border/80 space-y-2">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0 mt-1" />
                  <div className="space-y-0.5 sm:space-y-1 text-xs xs:text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                    {addressLines.map((line, i) => (
                      <p key={i} className={i >= 4 ? "font-bold text-white" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-brand-gray-muted pt-2 border-t border-brand-border/50">
                <div className="flex items-center gap-1.5 shrink-0">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call before visiting:</span>
                </div>
                <a
                  href={`tel:${BUSINESS_DATA.phone}`}
                  className="font-bold text-white hover:text-brand-blue transition-colors min-h-[36px] inline-flex items-center"
                >
                  {BUSINESS_DATA.formattedPhone}
                </a>
              </div>
            </div>

            {/* Get Directions Button (uses placeholder GOOGLE_MAPS_URL) */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-brand-border/60">
              <a
                href={GOOGLE_MAPS_URL}
                target={GOOGLE_MAPS_URL !== "#" ? "_blank" : undefined}
                rel={GOOGLE_MAPS_URL !== "#" ? "noopener noreferrer" : undefined}
                className="w-full inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-brand-blue to-sky-600 text-white font-bold text-sm sm:text-base shadow-glow-blue hover:shadow-glow-blue-lg hover:from-sky-500 hover:to-brand-blue transition-all duration-300 min-h-[48px] group"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300 shrink-0" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 shrink-0" />
              </a>
              {GOOGLE_MAPS_URL === "#" && (
                <p className="text-[10px] sm:text-[11px] text-center text-brand-gray-dark mt-2 font-mono">
                  (Google Maps link ready to be configured)
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Stylized Workshop Location Map Area (Col 6) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-bg-card/90 border border-brand-border shadow-2xl p-5 xs:p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
          >
            {/* Top Radar/City Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 z-10 pb-3 sm:pb-4 border-b border-brand-border/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Surat Repair Hub
                </span>
              </div>
              <span className="text-[10px] xs:text-[11px] font-mono text-brand-blue uppercase bg-sky-950/60 border border-sky-500/30 px-2 py-0.5 xs:px-2.5 xs:py-1 rounded-full shrink-0">
                Udhna Yard &bull; Udhna
              </span>
            </div>

            {/* Stylized Dark Grid Map Representation */}
            <div className="relative my-6 py-12 rounded-2xl bg-bg-primary/90 border border-brand-border/80 flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Subtle Map Coordinates / Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />

              {/* Center MapPin Marker with Glowing Pulse Rings */}
              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-brand-orange opacity-40" />
                  <span className="animate-pulse absolute inline-flex h-10 w-10 rounded-full bg-brand-blue opacity-50" />
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-glow-orange">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white tracking-wide">
                    Vikash Electronics
                  </h4>
                  <p className="text-xs font-mono text-brand-gray-muted">
                    Sanjay Nagar, Udhna, Surat
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Assistance Notice */}
            <div className="p-4 rounded-xl bg-bg-primary/70 border border-brand-border/60 text-xs text-brand-gray-muted space-y-1 z-10">
              <p className="font-semibold text-white">Landmark Guidance:</p>
              <p className="leading-relaxed">
                Located near Sanjay Nagar & Udhna Yard, Udhna. Accessible by road for safely unloading speakers and heavy sound equipment.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Location;
