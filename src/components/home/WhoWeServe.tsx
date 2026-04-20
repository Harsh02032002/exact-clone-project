import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

const groups = [
  "Business Owners & Entrepreneurs",
  "Senior Professionals & CXOs",
  "High Net Worth Families",
  "Next-Generation Investors",
  "Families planning legacy & succession",
];

const WhoWeServe = () => (
  <section className="section bg-background relative overflow-hidden">
    <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeading
          align="left"
          eyebrow="Who We Serve"
          title={<>We Work With Clients <br /><span className="italic-accent">Who Take Wealth Seriously.</span></>}
          subtitle="Our clients come from diverse backgrounds, but share one need: dependable, structured financial guidance built for the long term."
        />
        <ul className="mt-8 space-y-3">
          {groups.map((g) => (
            <li key={g} className="flex items-center gap-3 bg-muted/50 rounded-md px-4 py-3 hover:bg-gold-soft transition-colors">
              <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-primary-deep" />
              </span>
              <span className="font-medium">{g}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-gold mt-8">
          Speak to an Advisor <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative">
        <div className="aspect-square rounded-full bg-gradient-to-br from-gold/20 to-primary/10 absolute inset-10 -z-10" />
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "25+", l: "Years Experience" },
            { v: "3500+", l: "Families Trusted" },
            { v: "₹600Cr+", l: "AUM" },
            { v: "10+", l: "Service Lines" },
          ].map((s) => (
            <div key={s.l} className="card-elevated text-center">
              <div className="font-serif text-4xl text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeServe;
