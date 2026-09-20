"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-[#0b101c] border-t border-slate-800 text-slate-300 pt-8 pb-24 lg:pb-8 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left: Speaker Logo Mark + Brand + Red Service Badge */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          >
            {/* Audio Speaker Logo */}
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-400 flex items-center justify-center text-sky-400 transition-colors shadow-md shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <circle cx="12" cy="14" r="4" />
                <line x1="12" y1="6" x2="12.01" y2="6" strokeWidth="3" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-black text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors">
                VIKASH ELECTRONICS
              </span>
              <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[9px] tracking-wider uppercase px-2 py-0.5 rounded shadow-sm w-fit mt-0.5">
                DJ & ELECTRONIC REPAIRING SERVICE
              </div>
            </div>
          </a>

          {/* Center: Copyright Notice */}
          <div className="text-xs text-slate-400 font-medium space-y-0.5">
            <div>&copy; 2026 Vikash Electronics. All Rights Reserved.</div>
            <div className="text-[11px] text-slate-500">
              Udhna, Surat, Gujarat &bull; Phone: +91 98254 85520
            </div>
          </div>

          {/* Right: Tagline & Links */}
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold text-slate-300">
              Your Equipment <span className="text-slate-600">|</span> Our Expertise
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
