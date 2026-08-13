import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutTeaser from "@/components/AboutTeaser";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import CollegeTeaser from "@/components/CollegeTeaser";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/components/QuoteProvider";

export default function Home() {
  return (
    <QuoteProvider>
      <main>
        <Header />
        <Hero />
        <TrustStrip />
        <AboutTeaser />
        <Services />
        <WhyChoose />
        <CollegeTeaser />
        <Portfolio />
        <Process />
        <CtaBanner />
        <Contact />
        <Footer />
      </main>
    </QuoteProvider>
  );
}
