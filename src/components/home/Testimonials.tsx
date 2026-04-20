import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

import testi1 from "../../assets/testi-1.png";
import testi2 from "../../assets/testi-2.png";
import testi3 from "../../assets/testi-3.png";

const items = [
  { text: "Our experience has been extremely structured and transparent. The clarity in advice and disciplined approach have made a meaningful difference to our financial journey.", name: "Business Owner", meta: "Kolkata — Client since 2018", image: testi1 },
  { text: "Anant Finserv helped us consolidate multiple investments into one clear strategy. We now feel more confident and in control of our financial future.", name: "Senior Professional", meta: "Kolkata — Client since 2015", image: testi2 },
  { text: "The long-term thinking and consistent review process have been invaluable. We finally have a financial plan that adapts as our life evolves.", name: "HNI Family", meta: "Kolkata — Client since 2010", image: testi3 },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="section bg-muted/40">
      <div className="container-x">
        <SectionHeading eyebrow="Client Testimonials" title={<>Words From Our Clients</>} subtitle="Our clients trust us with their financial future. Here is what some of them have shared about their experience with Anant Finserv." />
        <div className="mt-12 max-w-4xl mx-auto bg-card rounded-lg p-10 md:p-14 shadow-[var(--shadow-card)] relative text-center">
          <div className="flex justify-center mb-6">
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-gold object-cover shadow-[var(--shadow-card)]" />
          </div>
          <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed">
            <span className="text-gold font-bold text-2xl mr-1">“</span>
            {t.text}
            <span className="text-gold font-bold text-2xl ml-1">”</span>
          </p>
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="text-center">
              <div className="font-serif text-xl text-primary font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.meta}</div>
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
