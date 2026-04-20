import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/home/AboutSection";
import SectionHeading from "@/components/SectionHeading";
import { Compass, Eye, Heart, ShieldCheck, GraduationCap, Users, Briefcase, BarChart3 } from "lucide-react";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Vision from "@/components/home/Vision";
import StatsBand from "@/components/home/StatsBand";

const mvv = [
  { icon: Compass, title: "Our Mission", desc: "To empower clients with clear financial direction, suitable investment opportunities, and dependable service that helps them build, protect, and manage wealth over the long term." },
  { icon: Eye, title: "Our Vision", desc: "To be a trusted and respected wealth management partner known for integrity, knowledge, client service, and long-term value creation." },
  { icon: Heart, title: "Our Values", desc: "Integrity, Client First, Clarity, Long-Term Thinking, and Continuous Learning — the five principles that guide every recommendation and every client relationship we build." },
];

const why = [
  { icon: GraduationCap, title: "Personalized Financial Guidance", desc: "We consolidate your entire net worth into one clear strategy — tailored to your unique financial situation and long-term life goals." },
  { icon: BarChart3, title: "Goal-Based Investment Approach", desc: "We focus on long-term wealth creation, not short-term noise — building disciplined portfolios aligned to your milestones." },
  { icon: Users, title: "Experienced Wealth Team", desc: "A seasoned team combining deep market understanding with structured planning to help you grow and protect wealth across generations." },
  { icon: Briefcase, title: "Diversified Investment Solutions", desc: "Access to institutional-quality opportunities across mutual funds, equities, fixed income, PMS, AIFs, and global investments." },
  { icon: Heart, title: "Relationship-Driven Service", desc: "We simplify scattered investments and multiple advisor inputs into one integrated wealth strategy — and stay with you through every stage." },
  { icon: ShieldCheck, title: "Trust, Transparency & Discipline", desc: "Operated with a fiduciary mindset, ensuring consistent review, honest communication, and clear reporting at all times." },
];

const About = () => (
  <Layout>
    <PageHero title="About Us" />
    <AboutSection />

    <section className="section bg-background">
      <div className="container-x grid md:grid-cols-3 gap-6">
        {mvv.map((m) => (
          <div key={m.title} className="card-elevated text-center group">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold to-primary text-white flex items-center justify-center">
              <m.icon className="w-8 h-8" />
            </div>
            <h3 className="mt-5 font-serif text-2xl">{m.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <StatsBand />

    <section className="section bg-muted/40">
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose Us" title={<>What Sets Anant Finserv <span className="italic-accent">Apart</span></>} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {why.map((w) => (
            <div key={w.title} className="card-elevated group hover:bg-primary hover:text-white transition-colors">
              <div className="w-14 h-14 rounded-full bg-gold-soft text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-primary-deep transition-colors">
                <w.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-5 font-serif text-xl group-hover:text-white">{w.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-white/80">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Process />
    <Testimonials />
    <FAQ />
    <Vision />
    <CTA />
  </Layout>
);

export default About;
