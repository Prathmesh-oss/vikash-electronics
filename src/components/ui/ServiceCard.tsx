"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ServiceItem } from "@/types";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden",
        "bg-[#131b2e] border-2 border-sky-500/50 hover:border-sky-400",
        "shadow-[0_4px_24px_rgba(14,165,233,0.18)] hover:shadow-[0_12px_36px_rgba(14,165,233,0.38)]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Top Half: High Definition Vibrant Photographic Visual */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-950 border-b border-sky-500/30">
        <Image
          src={imageSrc}
          alt={resolvedTitle}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Ambient Dark Gradient Transition to Card Body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-black/20 pointer-events-none" />

        {/* Subtle Neon Blue Rim Light on Hover */}
        <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Bottom Half: Circular Blue Icon + Title + Description */}
      <div className="p-4 sm:p-5 flex items-start gap-3.5 flex-1">
        {/* Circular Blue Icon Badge on Left */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(14,165,233,0.6)] group-hover:scale-105 group-hover:bg-sky-400 transition-all duration-200">
          {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
        </div>

        {/* Title & Description */}
        <div className="space-y-1 min-w-0">
          <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
            {resolvedTitle}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            {resolvedDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
