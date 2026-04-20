import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import InvestmentBanner from "@/components/home/InvestmentBanner";
import Pillars from "@/components/home/Pillars";
import AboutSection from "@/components/home/AboutSection";
import StatsBand from "@/components/home/StatsBand";
import Solutions from "@/components/home/Solutions";
import Process from "@/components/home/Process";
import WhoWeServe from "@/components/home/WhoWeServe";
import Testimonials from "@/components/home/Testimonials";
import Vision from "@/components/home/Vision";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <InvestmentBanner />
      <Pillars />
      <AboutSection />
      <StatsBand />
      <Solutions />
      <Process />
      <WhoWeServe />
      <Testimonials />
      <Vision />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
