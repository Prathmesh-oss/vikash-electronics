"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Phone, MessageCircle } from "lucide-react";

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services", count: services.length },
    {
      id: "audio",
      label: "Audio & DJ Sound",
      count: 4,
      matchIds: [
        "speaker-repairing",
        "amplifier-repairing",
        "sound-mixer-repairing",
        "home-theatre-repairing",
      ],
    },
    {
      id: "lighting",
      label: "Stage & DJ Lights",
      count: 2,
      matchIds: ["sharpy-light-repairing", "dj-light-repairing"],
    },
    {
      id: "visual",
      label: "TV & Display",
      count: 1,
      matchIds: ["tv-repairing"],
    },
    {
      id: "other",
      label: "Other Gear",
      count: 1,
      matchIds: ["other-electronic-repairing"],
    },
  ];

  const filteredServices = services.filter((service) => {
    if (selectedCategory === "all") return true;
    const cat = categories.find((c) => c.id === selectedCategory);
    return cat?.matchIds?.includes(service.id);
  });

  return (
    <section
      id="services"
      className="relative pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 bg-bg-primary overflow-hidden scroll-mt-20"
    >
      {/* Background Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container className="relative z-10 space-y-7 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* Gold Small Label */}
          <div className="inline-block text-amber-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
            OUR SERVICES
          </div>

          {/* Main Heading: DJ & ELECTRONIC in White, REPAIRING SERVICES in Gold */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
            <span className="text-white">DJ & ELECTRONIC </span>
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              REPAIRING SERVICES
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Professional repair for DJ Sound, Stage Lights, Amplifiers, Mixers, and electronics in Surat. Tap on any service to enquire or call directly.
          </p>
        </div>

        {/* Mobile Horizontal Scrollable Category Filter Chips */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all active:scale-95 shadow-sm ${
                  isSelected
                    ? "bg-amber-400 text-slate-950 shadow-[0_2px_12px_rgba(250,204,21,0.4)]"
                    : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-slate-950 text-amber-300" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 8 Services Grid: 4-col Desktop | 2-col Tablet | 1-col Mobile */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Contact Bar for Mobile / Service Inquiries */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Have other equipment or customized repair needs?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with technician Murlidhar Chaudhari in Udhna, Surat.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919825485520"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span>98254 85520</span>
            </a>

            <a
              href="https://wa.me/919825485520?text=Hello%20Vikash%20Electronics!%20I%20have%20an%20equipment%20repair%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
