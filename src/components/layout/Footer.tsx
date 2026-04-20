import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-deep text-white/80">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center text-white font-serif text-xl">
              <span className="-rotate-12">✦</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl text-white tracking-wide">ANANT</div>
              <div className="font-serif text-xs tracking-[0.3em] text-gold -mt-1">FINSERV</div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed">
            Integrated wealth management for serious, long-term investors.
            We simplify wealth and build financial independence for families.
          </p>
          <div className="flex gap-2 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about-us", label: "About Us" },
              { to: "/solution", label: "Solutions" },
              { to: "/process", label: "Our Process" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-gold" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-5">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Wealth Management",
              "Financial Planning",
              "Mutual Fund Advisory",
              "Retirement Planning",
              "Insurance & Protection",
              "Portfolio Review",
            ].map((s) => (
              <li key={s}>
                <Link to="/solution" className="hover:text-gold flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-gold" /> {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>134, 1st Floor, BRB Basu Road, Kolkata – 700001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <a href="tel:+913340374509" className="hover:text-gold">+91 33 4037 4509</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <a href="mailto:info@anantfinserv.com" className="hover:text-gold">info@anantfinserv.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Anant Finserv. All rights reserved.</p>
          <p>Investments are subject to market risks. Read all scheme-related documents carefully.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
