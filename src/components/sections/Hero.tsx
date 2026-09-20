"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Speaker,
  Zap,
  Lightbulb,
  Sparkles,
  Tv,
  Disc3,
  Sliders,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const quickCategories = [
    { label: "Speakers", icon: Speaker, target: "services" },
    { label: "Amplifiers", icon: Zap, target: "services" },
    { label: "DJ Lights", icon: Sparkles, target: "services" },
    { label: "Sharpy Lights", icon: Lightbulb, target: "services" },
    { label: "TVs", icon: Tv, target: "services" },
    { label: "Home Theatre", icon: Disc3, target: "services" },
    { label: "Sound Mixers", icon: Sliders, target: "services" },
    { label: "DJ Equipment", icon: Wrench, target: "services" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.body.style.overflow = "";

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.hash = id;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerEl = document.querySelector("header");
      const navOffset = headerEl ? headerEl.getBoundingClientRect().height : 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-24 xs:pt-28 pb-14 lg:py-24"
    >
      {/* Background Atmosphere - Deep Blue & Electric Purple Stage Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(49,46,91,0.6),rgba(17,24,39,0.98)_80%)]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-sky-500/15 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[130px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-40" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Typography, Interactive Quick Pills & CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            {/* Main Brand Heading */}
            <div className="space-y-1">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]">
                <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  VIKASH
                </span>{" "}
                <br className="hidden sm:inline" />
                <span className="text-white drop-shadow-md">ELECTRONICS</span>
              </h1>
            </div>

            {/* Red Service Badge Banner */}
            <div>
              <div className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[10px] xs:text-xs sm:text-sm tracking-wider uppercase px-3 xs:px-4 py-1.5 rounded-md shadow-[0_4px_14px_rgba(225,29,72,0.4)]">
                DJ & ELECTRONIC REPAIRING SERVICE
              </div>
            </div>

            {/* Subheading */}
            <h2 className="text-sm xs:text-base sm:text-xl font-bold text-slate-100 max-w-xl mx-auto lg:mx-0 leading-snug">
              Professional Repairing Service for <br className="hidden sm:inline" />
              DJ & Sound Equipment in Surat
            </h2>

            {/* 8 Interactive Quick Category Buttons */}
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 pt-1 max-w-xl mx-auto lg:mx-0">
              {quickCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <a
                    key={cat.label}
                    href={`#${cat.target}`}
                    onClick={(e) => handleSmoothScroll(e, cat.target)}
                    className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-slate-900/80 border border-amber-400/30 text-slate-200 text-xs font-semibold hover:border-amber-400 hover:text-white hover:bg-amber-400/10 active:scale-95 transition-all shadow-sm group min-h-[38px]"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate text-[11px] sm:text-xs">{cat.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Call-To-Action Group (Mobile optimized with Direct Call Button) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Button 1: Direct Phone Call for Mobile Users */}
              <a
                href="tel:+919825485520"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wide shadow-[0_4px_20px_rgba(251,191,36,0.35)] active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call: 98254 85520</span>
              </a>

              {/* Button 2: Explore Services */}
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-sky-500/50 text-white font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>

              {/* Button 3: Workshop Location */}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm active:scale-95 transition-all"
              >
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Workshop</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stage Equipment Rig Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 via-indigo-500/30 to-amber-500/15 rounded-3xl blur-2xl opacity-60 -z-10" />

            {/* Main Stage Equipment Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-bg-card border border-sky-500/30 shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero/dj_stage_rig.jpg"
                  alt="Vikash Electronics professional concert DJ stage lighting, speakers, moving head lights, amplifiers and audio mixing equipment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center"
                />

                {/* Subtle vignette gradient for dramatic stage feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-black/30 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
