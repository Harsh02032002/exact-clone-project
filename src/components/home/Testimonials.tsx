import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

const items = [
  { text: "Our experience has been extremely structured and transparent. The clarity in advice and disciplined approach have made a meaningful difference to our financial journey.", name: "Business Owner", meta: "Kolkata — Client since 2018" },
  { text: "Anant Finserv helped us consolidate multiple investments into one clear strategy. We now feel more confident and in control of our financial future.", name: "Senior Professional", meta: "Kolkata — Client since 2015" },
  { text: "The long-term thinking and consistent review process have been invaluable. We finally have a financial plan that adapts as our life evolves.", name: "HNI Family", meta: "Kolkata — Client since 2010" },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="section bg-muted/40">
      <div className="container-x">
        <SectionHeading eyebrow="Client Testimonials" title={<>Words From Our Clients</>} subtitle="Our clients trust us with their financial future. Here is what some of them have shared about their experience with Anant Finserv." />
        <div className="mt-12 max-w-4xl mx-auto bg-card rounded-lg p-10 md:p-14 shadow-[var(--shadow-card)] relative">
          <Quote className="absolute -top-6 left-10 w-16 h-16 text-gold opacity-90" />
          <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed">"{t.text}"</p>
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-serif text-xl text-primary">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.meta}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setI((p) => (p - 1 + items.length) % items.length)} aria-label="Previous" className="w-10 h-10 rounded-full border border-border hover:bg-gold hover:border-gold hover:text-primary-deep flex items-center justify-center transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setI((p) => (p + 1) % items.length)} aria-label="Next" className="w-10 h-10 rounded-full border border-border hover:bg-gold hover:border-gold hover:text-primary-deep flex items-center justify-center transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-3 bg-border"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
