"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="relative pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 bg-bg-primary overflow-hidden scroll-mt-20"
    >
      {/* Background Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container className="relative z-10 space-y-8 sm:space-y-10">
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
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            We repair all types of DJ & Electronic equipment with professional care and expertise.
          </p>
        </div>

        {/* 8 Services Grid: 4-col Desktop | 2-col Tablet | 1-col/2-col Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
