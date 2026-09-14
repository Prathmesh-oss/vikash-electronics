"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Wrench, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS_DATA } from "@/data/business";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-bg-primary">
      {/* Full-width Purple and Dark Blue Ambient Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep studio purple & navy radial gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(49,46,91,0.65)_0%,rgba(17,24,39,0.95)_75%)]" />

        {/* Ambient Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-blue/20 via-brand-purple/40 to-brand-orange/15 rounded-full blur-[150px]"
        />

        {/* Technical dot circuit texture overlay */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container tight className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-12 lg:p-16 bg-gradient-to-b from-brand-purple/30 via-bg-card/85 to-bg-card/95 border border-indigo-400/20 shadow-2xl backdrop-blur-xl text-center space-y-5 sm:space-y-7 overflow-hidden"
        >
          {/* Top Multi-Color Accent Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-80" />

          {/* Small Label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/60 border border-indigo-400/40 text-indigo-200 text-xs font-semibold tracking-wider uppercase shadow-glow-purple backdrop-blur-md">
            <Wrench className="w-3.5 h-3.5 text-brand-orange" />
            <span className="font-mono text-[10px] sm:text-[11px]">NEED REPAIRING SERVICE?</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.12]">
            NEED ELECTRONIC EQUIPMENT{" "}
            <span className="text-gradient-blue">REPAIRING?</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-slate-200 font-medium max-w-xl mx-auto leading-relaxed">
            Contact Vikash Electronics Today
          </p>

          {/* Two Action Buttons: CONTACT US & WORKSHOP LOCATION */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3">
            {/* Button 1: CONTACT US */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-brand-blue to-sky-600 text-white font-bold text-sm sm:text-base shadow-glow-blue hover:shadow-glow-blue-lg hover:from-sky-500 hover:to-brand-blue transition-all duration-300 min-h-[48px] group"
            >
              <span>CONTACT WORKSHOP</span>
            </motion.a>

            {/* Button 2: WORKSHOP LOCATION */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-bg-primary hover:bg-[#1a2035] text-white border border-slate-700 hover:border-slate-500 font-bold text-sm sm:text-base transition-all duration-300 min-h-[48px] group"
            >
              <span>VIEW LOCATION</span>
            </motion.a>
          </div>

          {/* Quick Verified Support Footnote */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-brand-gray-muted border-t border-brand-border/50">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Fast Diagnostics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span>Surat, Gujarat</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTA;
