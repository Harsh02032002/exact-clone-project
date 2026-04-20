import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import advisor from "@/assets/cta-advisor.png";

const CTA = () => (
  <section className="section bg-background">
    <div className="container-x">
      <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-primary to-primary-deep rounded-2xl overflow-hidden p-10 md:p-16 relative">
        <div className="text-white relative z-10">
          <span className="eyebrow text-gold">Take Control of Your Financial Future</span>
          <h2 className="mt-3 font-serif text-white text-4xl md:text-5xl">
            Get a Clear, Structured View <br /><span className="italic-accent">of Your Investments</span>
          </h2>
          <p className="mt-5 text-white/85 leading-relaxed max-w-lg">
            Get a strategy aligned to your life goals. Speak to an advisor and take the first step toward long-term financial independence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">
              Get Your Portfolio Reviewed <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+913340374509" className="btn-outline-light">
              <Phone className="w-4 h-4" /> Speak to an Advisor
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-5 py-3 text-sm">
            <Phone className="w-4 h-4 text-gold" />
            <strong className="text-gold">+91 33 4037 4509</strong>
            <span className="text-white/70">· Mon – Fri: 9:00 AM – 6:00 PM</span>
          </div>
        </div>
        <div className="relative h-80 lg:h-96 flex items-end justify-center">
          <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gold/20 blur-3xl" />
          <img src={advisor} alt="Advisor" loading="lazy" width={800} height={800} className="relative max-h-full object-contain" />
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
