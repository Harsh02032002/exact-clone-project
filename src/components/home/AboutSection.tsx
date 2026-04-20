import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import about1 from "@/assets/about-8.jpg";
import about2 from "@/assets/about-10.jpg";

const points = [
  "We consolidate your entire net worth into one clear strategy",
  "We simplify scattered investments and multiple advisor inputs",
  "We focus on long-term wealth creation — not short-term noise",
  "We provide access to institutional-quality investment opportunities",
  "We combine wealth strategy with disciplined market understanding",
];

const AboutSection = () => (
  <section className="section bg-muted/40">
    <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <div className="absolute -top-6 -left-6 z-10 bg-gold text-primary-deep p-6 rounded-md shadow-lg w-40 text-center">
          <div className="font-serif text-4xl">20+</div>
          <div className="text-xs uppercase tracking-wider mt-1 font-semibold">Years of<br/>Experience</div>
        </div>
        <img src={about1} alt="Anant Finserv Team" loading="lazy" width={1024} height={768} className="rounded-lg shadow-xl w-full" />
        <img src={about2} alt="Financial planning" loading="lazy" width={400} height={400} className="absolute -bottom-10 -right-4 md:right-8 w-44 md:w-56 rounded-lg border-8 border-background shadow-xl" />
      </div>
      <div>
        <span className="eyebrow">About Us</span>
        <h2 className="mt-3 font-serif">Guiding Wealth. <span className="italic-accent">Building Trust.</span></h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Anant Finserv is a wealth advisory firm focused on helping families simplify their financial lives and build long-term financial independence through structured, disciplined, and well-researched investment strategies.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          In today's complex financial environment — multiple investments, advisors, and opinions — we bring clarity by consolidating your entire net worth into one clear, actionable strategy.
        </p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-primary-deep" /></span>
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>
        <Link to="/about-us" className="btn-gold mt-8">
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default AboutSection;
