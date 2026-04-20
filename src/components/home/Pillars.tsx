import { Eye, Layers, Key, Compass } from "lucide-react";
import SectionHeading from "../SectionHeading";

const pillars = [
  { icon: Eye, title: "Clarity", text: "Clarity in your complete financial life — your assets, liabilities, goals, and net worth in one transparent view." },
  { icon: Layers, title: "Declutter", text: "Decluttering scattered investments and multiple advisor inputs into one unified, actionable strategy." },
  { icon: Key, title: "Access", text: "Access to institutional-quality investment opportunities across asset classes, not available to most individual investors." },
  { icon: Compass, title: "Independence", text: "Financial independence through disciplined execution, consistent review, and long-term thinking." },
];

const Pillars = () => (
  <section className="section bg-background">
    <div className="container-x">
      <SectionHeading eyebrow="Our Core Philosophy" title={<>Built on Four Pillars</>} />
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <div key={p.title} className="card-elevated text-center group border-t-4 border-transparent hover:border-gold">
            <div className="w-20 h-20 mx-auto rounded-full bg-gold-soft flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-deep transition-colors">
              <p.icon className="w-9 h-9" />
            </div>
            <div className="mt-4 text-sm text-gold font-semibold">0{i + 1}</div>
            <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
