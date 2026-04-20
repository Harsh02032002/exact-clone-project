import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground text-xs">
      <div className="container-x flex flex-wrap items-center justify-between gap-3 py-2.5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold" /> 134, 1st Floor, BRB Basu Road, Kolkata – 700001</span>
          <a href="mailto:info@anantfinserv.com" className="hidden md:flex items-center gap-1.5 hover:text-gold"><Mail className="w-3.5 h-3.5 text-gold" /> info@anantfinserv.com</a>
          <a href="tel:03340374509" className="hidden md:flex items-center gap-1.5 hover:text-gold"><Phone className="w-3.5 h-3.5 text-gold" /> 03340374509</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline"><strong className="text-gold">25+</strong> Years Experience</span>
          <span className="hidden lg:inline opacity-50">|</span>
          <span className="hidden lg:inline"><strong className="text-gold">₹600+ Cr</strong> AUM</span>
          <span className="hidden lg:inline opacity-50">|</span>
          <span className="hidden lg:inline">Trusted by <strong className="text-gold">3500+</strong> Families</span>
          <div className="flex items-center gap-2 ml-2">
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep flex items-center justify-center transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
