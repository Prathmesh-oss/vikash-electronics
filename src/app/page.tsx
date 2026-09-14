import { Navbar, Footer } from "@/components/layout";
import { Hero, Services, About, Contact } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-brand-gray selection:bg-brand-blue selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Services Section */}
      <Services />

      {/* 4. About Us Section */}
      <About />

      {/* 5. Contact Us Section (includes Contact Info, Interactive Map & Workshop Guide) */}
      <Contact />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}

