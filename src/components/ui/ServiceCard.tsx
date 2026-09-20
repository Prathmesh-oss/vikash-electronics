"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ServiceItem } from "@/types";
import { SERVICES_DATA } from "@/data/business";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  service?: ServiceItem;
  id?: string;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  index?: number;
  className?: string;
}

const serviceImageMap: Record<string, string> = {
  "speaker-repairing": "/images/services/speaker.jpg",
  "amplifier-repairing": "/images/services/amplifier.jpg",
  "dj-light-repairing": "/images/services/dj_light.jpg",
  "sharpy-light-repairing": "/images/services/sharpy.jpg",
  "tv-repairing": "/images/services/tv.jpg",
  "home-theatre-repairing": "/images/services/home_theatre.jpg",
  "sound-mixer-repairing": "/images/services/sound_mixer.jpg",
  "other-electronic-repairing": "/images/services/other_electronic.jpg",
};

export function ServiceCard({
  service,
  id,
  title,
  description,
  icon,
  index = 0,
  className,
}: ServiceCardProps) {
  const resolvedId = id ?? service?.id ?? "";
  const resolvedTitle = title ?? service?.title ?? "";
  const resolvedDescription = description ?? service?.description ?? "";
  const IconComponent = icon ?? service?.icon;
  const imageSrc = serviceImageMap[resolvedId] || "/images/services/speaker.jpg";

  // Find matching highlight points from business data
  const matchedServiceData = SERVICES_DATA.find(
    (s) => s.id === resolvedId || s.title.toLowerCase() === resolvedTitle.toLowerCase()
  );
  const highlights = matchedServiceData?.highlights || [];

  const whatsappInquiryUrl = `https://wa.me/919825485520?text=${encodeURIComponent(
    `Hello Vikash Electronics! I want to enquire about ${resolvedTitle} service.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden",
        "bg-[#131b2e] border-2 border-sky-500/40 hover:border-amber-400/70",
        "shadow-[0_4px_24px_rgba(14,165,233,0.18)] hover:shadow-[0_12px_36px_rgba(250,204,21,0.25)]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Top Half: High Definition Photographic Visual */}
      <div className="relative w-full h-44 xs:h-48 overflow-hidden bg-slate-950 border-b border-sky-500/30">
        <Image
          src={imageSrc}
          alt={resolvedTitle}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Ambient Dark Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-black/30 pointer-events-none" />

        {/* Category Pill Tag Overlay on Image */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-sky-400/40 text-[10px] font-mono font-bold text-sky-300 uppercase tracking-wider shadow-sm">
          Surat Repair
        </div>
      </div>

      {/* Middle: Content with Blue Icon Badge */}
      <div className="p-4 xs:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            {/* Circular Icon Badge */}
            <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(14,165,233,0.6)] group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
              {IconComponent && <IconComponent className="w-5 h-5" />}
            </div>

            {/* Title & Description */}
            <div className="space-y-1 min-w-0">
              <h3 className="text-sm xs:text-base font-black text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors leading-snug">
                {resolvedTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {resolvedDescription}
              </p>
            </div>
          </div>

          {/* Key Repair Highlights Tags */}
          {highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {highlights.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-[10px] text-slate-300 font-medium"
                >
                  &bull; {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: 1-Tap Mobile Action Buttons (WhatsApp & Call) */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
          {/* Action 1: Enquire on WhatsApp */}
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${resolvedTitle} on WhatsApp`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-bold transition-all active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Action 2: Call Technician */}
          <a
            href="tel:+919825485520"
            aria-label={`Call for ${resolvedTitle} repair`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400/20 hover:bg-amber-400 border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-slate-950 text-xs font-bold transition-all active:scale-95 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
