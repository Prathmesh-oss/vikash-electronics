"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Sliders, ArrowUpRight, Wrench, ShieldCheck } from "lucide-react";
import { BUSINESS_DATA, NAV_ITEMS } from "@/data/business";
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

  // Track scroll position to toggle transparent vs blurred dark navbar and highlight active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If scrolled near the bottom of page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      const sections = ["home", "services", "about", "contact"];
      const navbarHeight = 75;

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

  // Smooth scroll handler with exact navbar offset to eliminate gap
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.hash = id;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-brand-border/80 shadow-2xl py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Left Side: Branding / Logo with Red Service Badge */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-1 shrink-0"
          onClick={(e) => handleNavClick(e, "home")}
        >
          {/* Vikash Electronics Logo Mark */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 bg-black shadow-[0_0_12px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_18px_rgba(234,179,8,0.6)] transition-all duration-300">
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
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-xl font-black tracking-tight text-white group-hover:text-sky-400 transition-colors uppercase">
                VIKASH ELECTRONICS
              </span>
            </div>
            {/* Signature Red Pill Badge */}
            <div className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[9px] sm:text-[10px] tracking-wider uppercase px-2 py-0.5 rounded shadow-sm w-fit mt-0.5">
              DJ & ELECTRONIC REPAIRING SERVICE
            </div>
          </div>
        </a>

        {/* Center: Desktop Navigation Links with Gold Indicator */}
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

        {/* Right Side: Clean Contact Us CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105"
          >
            <span>Contact Us</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden min-w-[42px] min-h-[42px] p-2.5 rounded-xl bg-bg-secondary border border-brand-border text-brand-gray hover:text-white hover:border-brand-blue transition-colors flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-amber-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-bg-primary/95 backdrop-blur-xl border-b border-brand-border/90 shadow-2xl"
          >
            <Container className="py-6 space-y-5">
              {/* Navigation Links List */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-amber-400/20 text-amber-400 border border-amber-400/40 font-bold"
                          : "text-brand-gray hover:text-white hover:bg-bg-secondary"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        className={`w-4 h-4 ${
                          isActive ? "text-amber-400" : "text-brand-gray-muted"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Contact Action Button */}
              <div className="pt-2 border-t border-brand-border/60">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider transition-all"
                >
                  <span>Contact & Workshop Location</span>
                </a>
              </div>

              {/* Workshop Quick Location Snippet */}
              <div className="p-3 rounded-xl bg-bg-secondary/60 border border-brand-border/50 text-xs text-brand-gray-muted flex items-start gap-2.5">
                <Wrench className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Workshop: Limbayat, Surat</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Plot No. 199, Sanjay Nagar, Udhna Yard
                  </p>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
