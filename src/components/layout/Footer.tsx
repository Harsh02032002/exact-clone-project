import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import flag from "@/assets/india-flag.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const gallery = [g1, g2, g3, g4, g5, g6];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/solution", label: "Solutions" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

const Footer = () => {
  return (
    <footer className="bg-primary-deep text-white/80">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <img src={flag} alt="India" className="w-16 h-16 rounded-full object-cover" width={64} height={64} loading="lazy" />
          <p className="mt-5 text-gold tracking-widest text-sm font-semibold">SINCE 2005, OPERATING FROM KOLKATA.</p>
          <p className="mt-5 text-sm leading-relaxed">
            We provide structured, disciplined, and relationship-driven wealth advisory services focused on long-term financial independence.
          </p>
          <div className="flex gap-2 mt-5">
            <a href="https://www.facebook.com/anantfinserv" aria-label="Facebook" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/finservanant/" aria-label="Instagram" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-xl mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  <span className="text-gold mr-2">›</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-white font-serif text-xl mb-5">Get In Touch</h4>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gold tracking-widest font-semibold text-xs">ADDRESS</p>
              <p className="mt-1">134, 1st Floor, BRB Basu Road,<br/>Kolkata – 700001</p>
            </div>
            <div>
              <p className="text-gold tracking-widest font-semibold text-xs">MAIL US</p>
              <a href="mailto:info@anantfinserv.com" className="hover:text-gold mt-1 inline-block">info@anantfinserv.com</a>
            </div>
            <div>
              <p className="text-gold tracking-widest font-semibold text-xs">PHONE</p>
              <a href="tel:+913340374509" className="hover:text-gold mt-1 inline-block">03340374509</a>
            </div>
            <div>
              <p className="text-gold tracking-widest font-semibold text-xs">WORKING HOURS</p>
              <p className="mt-1">Mon – Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Our Gallery */}
        <div>
          <h4 className="text-white font-serif text-xl mb-5">Our Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {gallery.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-sm">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-20 object-cover hover:opacity-80 transition-opacity" loading="lazy" width={150} height={80} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/60 leading-relaxed">
          <p><span className="font-semibold text-white/80">Disclaimer:</span> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance does not guarantee future results. The information on this website is for general understanding only and should not be treated as investment, legal, tax, or financial advice without considering individual circumstances.</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Anant Finserv Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
