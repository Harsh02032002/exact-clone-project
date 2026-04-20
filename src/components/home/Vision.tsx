import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Vision = () => (
  <section className="relative py-24 overflow-hidden bg-primary-deep text-white">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--gold)) 0, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0, transparent 50%)",
      }}
    />
    <div className="container-x relative text-center">
      <span className="eyebrow text-gold">Vision 2036</span>
      <h2 className="mt-4 font-serif text-white text-4xl md:text-5xl max-w-4xl mx-auto leading-tight">
        To help <span className="italic-accent">5,000 families</span> build{" "}
        <span className="italic-accent">₹50,000+ crore</span> of managed wealth and create a generation of financially independent families.
      </h2>
      <Link to="/contact" className="btn-gold mt-10">
        Be Part of This Journey <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default Vision;
