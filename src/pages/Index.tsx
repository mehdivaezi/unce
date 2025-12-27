import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AlertsSection from "@/components/AlertsSection";
import MarketAnalysis from "@/components/MarketAnalysis";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="alerts">
          <AlertsSection />
        </section>
        <section id="analysis">
          <MarketAnalysis />
        </section>
        <section id="about">
          <Benefits />
        </section>
        <Testimonials />
        <Newsletter />
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
