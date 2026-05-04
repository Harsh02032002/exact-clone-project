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
  { text: "Anant Finserv is presented as a credible and comprehensive Indian financial services company. The firm offers a solid combination of core services, including mutual fund distribution, insurance distribution, and consultancy. Most importantly, its official recognition by key regulatory bodies—AMFI, IRDA, and the BSE—suggests a strong commitment to compliance and a high degree of regulatory assurance, establishing it as a trustworthy partner in the Indian financial market.", name: "Ankit Patel", meta: "Kolkata — Client since 2020", avatar: "A" },
  { text: "Very helpful and good financial services company.", name: "Sandhya Sharma", meta: "Kolkata — Client since 2021", avatar: "S" },
  { text: "Supportive staff and proper guidance related to investment.", name: "Akash Agarwal", meta: "Kolkata — Client since 2019", avatar: "A" },
  { text: "Helpful and useful guidance by them :) strong recommend.", name: "Tanay Lakhotia", meta: "Kolkata — Local Guide", avatar: "T" },
  { text: "Excellent service and professional approach to financial planning. Highly recommended for all investment needs.", name: "Aritra Raha", meta: "Kolkata — Client since 2020", avatar: "A" },
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
            {t.image ? (
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-gold object-cover shadow-[var(--shadow-card)]" />
            ) : (
              <div className="w-20 h-20 rounded-full border-2 border-gold bg-gold flex items-center justify-center shadow-[var(--shadow-card)]">
                <span className="text-white font-bold text-2xl">{t.avatar}</span>
              </div>
            )}
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
