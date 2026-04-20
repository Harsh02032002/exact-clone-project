import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-advisor.jpg";

const slides = [
  {
    eyebrow: "Integrated Wealth Management · Kolkata",
    title: "We Simplify Wealth.",
    italic: "We Build Financial Independence.",
    body: "Clarity in your net worth. Discipline in your strategy. Helping families move from complexity to confidence.",
    cta: { label: "Get Your Portfolio Reviewed", to: "/contact" },
  },
  {
    eyebrow: "For Serious, Long-Term Investors",
    title: "Integrated Wealth Management",
    italic: "for Serious Investors",
    body: "We bring together your investments, goals, and financial decisions into one clear, structured strategy designed for long-term wealth creation.",
    cta: { label: "Explore Our Solutions", to: "/solution" },
  },
  {
    eyebrow: "Discipline · Clarity · Long-Term Thinking",
    title: "Disciplined Investing.",
    italic: "Long-Term Thinking. Real Outcomes.",
    body: "Our approach combines deep market understanding with structured planning to help you grow, protect, and manage wealth across generations.",
    cta: { label: "Learn More", to: "/about-us" },
  },
];

const HeroSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];

  return (
    <section className="relative h-[78vh] min-h-[600px] overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt="Wealth advisor consultation"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, hsl(217 60% 12% / 0.8) 0%, hsl(217 55% 18% / 0.55) 50%, hsl(217 55% 18% / 0.15) 100%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-full w-2/3 hidden md:block"
        style={{
          background: "linear-gradient(110deg, hsl(217 60% 12% / 0.85) 60%, transparent 100%)",
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        }}
      />

      <div className="relative z-10 h-full container-x flex items-center">
        <div key={i} className="max-w-2xl text-white animate-fade-up">
          <span className="eyebrow text-gold">{s.eyebrow}</span>
          <h1 className="mt-5 font-serif text-white text-5xl md:text-6xl leading-[1.05]">
            {s.title} <br />
            <span className="italic-accent">{s.italic}</span>
          </h1>
          <p className="mt-6 text-white/85 text-lg max-w-xl leading-relaxed">{s.body}</p>
          <Link to={s.cta.to} className="btn-gold mt-8">
            {s.cta.label} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <button
        onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
        aria-label="Previous"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep text-white items-center justify-center backdrop-blur transition-colors z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setI((p) => (p + 1) % slides.length)}
        aria-label="Next"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep text-white items-center justify-center backdrop-blur transition-colors z-10"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-3 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
