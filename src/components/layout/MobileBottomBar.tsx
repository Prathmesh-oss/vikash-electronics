"use client";

import React, { useState, useEffect } from "react";
import { Home, Wrench, Phone, MessageCircle, MapPin } from "lucide-react";

export function MobileBottomBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // If near bottom, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      const sections = ["home", "services", "about", "contact"];
      const navbarHeight = 80;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarHeight + 120 && rect.bottom > navbarHeight) {
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    document.body.style.overflow = "";

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

  const whatsappMessage = encodeURIComponent(
    "Hello Vikash Electronics! I need repair service for my DJ / Electronic equipment. Please provide details."
  );

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 bg-[#0d1322]/95 backdrop-blur-xl border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] transition-all">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1">
        {/* 1. Home */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeSection === "home"
              ? "text-amber-400 font-bold"
              : "text-slate-400 hover:text-white"
          }`}
          aria-label="Home"
        >
          <div
            className={`p-1 rounded-lg transition-all ${
              activeSection === "home" ? "bg-amber-400/20 text-amber-400" : ""
            }`}
          >
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Home</span>
        </a>

        {/* 2. Services */}
        <a
          href="#services"
          onClick={(e) => scrollToSection(e, "services")}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeSection === "services"
              ? "text-sky-400 font-bold"
              : "text-slate-400 hover:text-white"
          }`}
          aria-label="Repair Services"
        >
          <div
            className={`p-1 rounded-lg transition-all ${
              activeSection === "services" ? "bg-sky-500/20 text-sky-400" : ""
            }`}
          >
            <Wrench className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Services</span>
        </a>

        {/* 3. Center Special Action: Call Now */}
        <div className="flex justify-center -mt-5">
          <a
            href="tel:+919825485520"
            className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 shadow-[0_4px_18px_rgba(250,204,21,0.55)] active:scale-95 transition-transform border-2 border-slate-950"
            aria-label="Call Vikash Electronics"
          >
            <Phone className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

        {/* 4. WhatsApp Chat */}
        <a
          href={`https://wa.me/919825485520?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-emerald-400 hover:text-emerald-300 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">WhatsApp</span>
        </a>

        {/* 5. Workshop Location */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeSection === "contact"
              ? "text-rose-400 font-bold"
              : "text-slate-400 hover:text-white"
          }`}
          aria-label="Workshop Location"
        >
          <div
            className={`p-1 rounded-lg transition-all ${
              activeSection === "contact" ? "bg-rose-500/20 text-rose-400" : ""
            }`}
          >
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Location</span>
        </a>
      </div>
    </div>
  );
}

export default MobileBottomBar;
