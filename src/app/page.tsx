import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/ServiceHighlights";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Referenzen from "@/components/Referenzen";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Areas from "@/components/Areas";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceHighlights />
        <Intro />
        <Services />
        <Referenzen />
        <WhyUs />
        <About />
        <Areas />
        <CtaBanner />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
