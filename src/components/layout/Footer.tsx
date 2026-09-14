"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-[#0b101c] border-t border-slate-800 text-slate-300 py-8 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left: Speaker Logo Mark + Brand + Red Service Badge */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          >
            {/* Audio Speaker Logo */}
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-400 flex items-center justify-center text-sky-400 transition-colors shadow-md">
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
              <span className="text-base sm:text-lg font-black text-white tracking-tight uppercase group-hover:text-sky-400 transition-colors">
                VIKASH ELECTRONICS
              </span>
              <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[9px] tracking-wider uppercase px-2 py-0.5 rounded shadow-sm w-fit mt-0.5">
                DJ & ELECTRONIC REPAIRING SERVICE
              </div>
            </div>
          </Link>

          {/* Center: Copyright Notice */}
          <div className="text-xs text-slate-400 font-medium">
            &copy; 2026 Vikash Electronics. All Rights Reserved.
          </div>

          {/* Right: Social Icons + Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
            {/* Social Media SVG Icons */}
            <div className="flex items-center gap-3 text-slate-400">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:text-sky-400 hover:border-sky-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:text-pink-400 hover:border-pink-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            {/* Tagline */}
            <div className="font-semibold text-slate-300">
              Your Equipment <span className="text-slate-600">|</span> Our Expertise
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
