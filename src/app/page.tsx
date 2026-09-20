import { Navbar, Footer, MobileBottomBar } from "@/components/layout";
import { Hero, Services, About, Contact } from "@/components/sections";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-brand-gray selection:bg-brand-blue selection:text-white relative">
      {/* 1. Navbar Header (Desktop + Mobile Slide Drawer) */}
      <Navbar />

      {/* 2. Hero Section with Interactive Category Jumpers & 1-Tap Calling */}
      <Hero />

      {/* 3. Services Section with Mobile Category Filters & WhatsApp Enquiry */}
      <Services />

      {/* 4. About Us Section with Technician Direct Calling */}
      <About />

      {/* 5. Contact Section with 1-Tap WhatsApp Booking & GPS Navigation */}
      <Contact />

      {/* 6. Footer */}
      <Footer />

      {/* 7. Floating WhatsApp Chat Action */}
      <WhatsAppButton />

      {/* 8. Mobile Bottom Quick Action Navigation Bar */}
      <MobileBottomBar />
    </main>
  );
}
