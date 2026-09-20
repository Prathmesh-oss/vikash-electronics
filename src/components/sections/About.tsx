"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, UserCheck, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function About() {
  const specializations = [
    { label: "DJ Sound Systems", id: 1 },
    { label: "Sharpy / Moving Head Lights", id: 2 },
    { label: "Speakers & Subs", id: 3 },
    { label: "Home Theatre", id: 4 },
    { label: "Power Amplifiers", id: 5 },
    { label: "Smart & LED TVs", id: 6 },
    { label: "DJ Stage Lights", id: 7 },
    { label: "Other Electronics", id: 8 },
  ];

  return (
    <section
      id="about"
      className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-bg-secondary/40 border-y border-brand-border/60 overflow-hidden scroll-mt-20"
    >
      {/* Background Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[130px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Workshop Bench Image with Status Bar */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient behind-frame glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-indigo-500/30 to-amber-500/15 rounded-3xl blur-xl opacity-70 -z-10" />

            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border-2 border-sky-500/40 shadow-2xl">
              {/* Top Electronic Status Bar */}
              <div className="px-3 xs:px-4 py-2 bg-slate-900/90 border-b border-sky-500/30 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[10px] xs:text-[11px] font-mono uppercase text-slate-300 tracking-wider font-semibold truncate">
                    Surat Workshop &bull; Inspection
                  </span>
                </div>
                <div className="text-[9px] xs:text-[10px] font-mono text-amber-400 font-bold shrink-0">
                  PRECISION BENCH
                </div>
              </div>

              {/* Workshop Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/about/about_workshop.jpg"
                  alt="Vikash Electronics workshop bench with technician diagnosing DJ equipment and power amplifiers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Details, Specialization Checklist & Technician Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6 relative"
          >
            {/* Small Gold Label */}
            <div className="inline-block text-amber-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              ABOUT US
            </div>

            {/* Main Heading: VIKASH in White, ELECTRONICS in Gold */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
              <span className="text-white">VIKASH </span>
              <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                ELECTRONICS
              </span>
            </h2>

            {/* Description Text */}
            <p className="text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              We are a trusted name in DJ & Electronic equipment repairing services in Surat. With years of
              hands-on experience and expert technicians, we provide reliable component-level repair solutions
              for professional audio, stage lighting, and electronic gear.
            </p>

            {/* Technician Attribution Card with 1-Tap Call Trigger */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#131b2e] border border-sky-500/30 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
                  <UserCheck className="w-5 h-5 text-sky-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                    Chief Repair Specialist
                  </div>
                  <div className="text-sm xs:text-base font-black text-white uppercase tracking-tight truncate">
                    Murlidhar Chaudhari
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    DJ & Audio Repair Specialist
                  </div>
                </div>
              </div>

              {/* 1-Tap Call */}
              <a
                href="tel:+919825485520"
                className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold shadow-md active:scale-95 transition-all shrink-0"
                aria-label="Call Murlidhar Chaudhari"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
              </a>
            </div>

            {/* Specialization Checklist */}
            <div className="space-y-2.5 pt-1">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                We Specialize In:
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {specializations.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    {/* Gold Circular Checkmark Badge */}
                    <div className="w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                      <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cursive Tag: Quality Service / Trusted Repair */}
            <div className="pt-2 flex justify-end overflow-hidden">
              <div className="relative inline-block text-right pr-2">
                <div className="font-script text-white text-2xl xs:text-3xl sm:text-4xl font-bold rotate-[-5deg] leading-tight select-none">
                  <div>Quality Service</div>
                  <div>Trusted Repair</div>
                </div>
                {/* Red Curved Brush Stroke */}
                <svg
                  className="w-32 sm:w-44 h-3.5 text-red-500 mt-0.5 ml-auto overflow-hidden"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C45 3 115 2 157 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
