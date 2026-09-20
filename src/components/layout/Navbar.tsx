"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  ArrowUpRight,
  Wrench,
  MessageCircle,
  MapPin,
  Speaker,
  Zap,
  Lightbulb,
  Sparkles,
  Tv,
} from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Contact Us", href: "#contact", id: "contact" },
  ];

  const quickServices = [
    { label: "Speakers", icon: Speaker },
    { label: "Amplifiers", icon: Zap },
    { label: "Sharpy Lights", icon: Lightbulb },
    { label: "DJ Lights", icon: Sparkles },
    { label: "TV Repair", icon: Tv },
  ];

  // Initialize from hash if present on mount
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "services", "about", "contact"].includes(hash)) {
        setActiveSection(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If scrolled near bottom of page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      const sections = ["home", "services", "about", "contact"];
      const headerEl = document.querySelector("header");
      const navbarHeight = headerEl ? headerEl.getBoundingClientRect().height : 75;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarHeight + 80 && rect.bottom > navbarHeight + 40) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler with robust unlock for mobile browsers
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    // CRITICAL for mobile: instantly release body overflow before scrolling
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappMessage = encodeURIComponent(
    "Hello Vikash Electronics! I need repair service for my DJ / Electronic equipment."
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d1322]/95 backdrop-blur-md border-b border-brand-border/80 shadow-2xl py-2.5 sm:py-3"
            : "bg-transparent border-b border-transparent py-3 sm:py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Left Side: Branding / Logo with Red Service Badge */}
          <a
            href="#home"
            className="group flex items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-1 shrink-0"
            onClick={(e) => handleNavClick(e, "home")}
            aria-label="Vikash Electronics - Home"
          >
            {/* Vikash Electronics Logo Mark */}
            <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 bg-black shadow-[0_0_12px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_18px_rgba(234,179,8,0.6)] transition-all duration-300">
              <Image
                src="/images/logo/vikash-logo.jpg"
                alt="Vikash Electronics Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Logo Typography & Red Service Badge */}
            <div className="flex flex-col text-left min-w-0">
              <span className="text-sm xs:text-base sm:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase truncate">
                VIKASH ELECTRONICS
              </span>
              {/* Signature Red Pill Badge */}
              <div className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[8px] xs:text-[9px] sm:text-[10px] tracking-wider uppercase px-1.5 xs:px-2 py-0.5 rounded shadow-sm w-fit mt-0.5 whitespace-nowrap">
                DJ & ELECTRONIC REPAIRING SERVICE
              </div>
            </div>
          </a>

          {/* Center: Desktop Navigation Links with Gold Indicator (Hidden on lg and below) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 px-4 py-1.5 rounded-full bg-bg-secondary/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? "text-amber-400 font-bold"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 bg-amber-400 shadow-[0_0_10px_rgba(250,204,21,0.9)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Quick Contact Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
            >
              <span>Contact Us</span>
            </a>

            {/* Mobile Hamburger Button (Visible on screens < 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden min-w-[42px] min-h-[42px] p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-400 active:scale-95 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shadow-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation (lg:hidden) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-out Mobile Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-sm bg-[#0d1322] border-l border-slate-800 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="p-4 xs:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-black border border-amber-400/40 shrink-0">
                    <Image
                      src="/images/logo/vikash-logo.jpg"
                      alt="Vikash Electronics"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-tight">
                      VIKASH ELECTRONICS
                    </div>
                    <div className="text-[9px] text-amber-400 font-bold uppercase tracking-wider">
                      Surat Workshop & Repair
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 active:scale-95 transition-all"
                >
                  <X className="w-5 h-5 text-amber-400" />
                </button>
              </div>

              {/* Drawer Navigation Links & Shortcuts */}
              <div className="p-4 xs:p-5 space-y-6 flex-1">
                {/* Main Section Navigation */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold px-2 mb-2">
                    Navigation Menu
                  </div>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all min-h-[46px] ${
                          isActive
                            ? "bg-amber-400/15 text-amber-400 border border-amber-400/30 font-bold shadow-sm"
                            : "text-slate-200 hover:text-white hover:bg-slate-800/60"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          className={`w-4 h-4 ${
                            isActive ? "text-amber-400" : "text-slate-500"
                          }`}
                        />
                      </a>
                    );
                  })}
                </div>

                {/* Quick Service Jumps */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold px-2">
                    Quick Service Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {quickServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={service.label}
                          href="#services"
                          onClick={(e) => handleNavClick(e, "services")}
                          className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate text-[11px] font-medium">{service.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Workshop Quick Location Card */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Limbayat Workshop, Surat</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Plot No. 199, Sarve No. 1-2, Sanjay Nagar, Udhna Yard, Limbayat.
                  </p>
                </div>
              </div>

              {/* Drawer Bottom 1-Tap Action Buttons */}
              <div className="p-4 xs:p-5 border-t border-slate-800 bg-slate-950 space-y-2.5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                {/* 1. Direct Call Technician */}
                <a
                  href="tel:+919825485520"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Technician: 98254 85520</span>
                </a>

                {/* 2. Direct WhatsApp Enquiry */}
                <a
                  href={`https://wa.me/919825485520?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
