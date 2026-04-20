import { Link } from "react-router-dom";
import heroBg from "@/assets/about-team.jpg";

interface PageHeroProps {
  title: string;
  crumb?: string;
}

const PageHero = ({ title, crumb }: PageHeroProps) => (
  <section
    className="relative text-white py-28 md:py-36 text-center overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(180deg, hsl(217 60% 12% / 0.78), hsl(217 60% 12% / 0.78)), url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container-x relative z-10">
      <h1 className="text-white font-serif text-5xl md:text-6xl">{title}</h1>
      <div className="mt-4 text-sm tracking-wider">
        <Link to="/" className="text-gold hover:underline">Home</Link>
        <span className="mx-2 opacity-60">/</span>
        <span className="opacity-90">{crumb ?? title}</span>
      </div>
    </div>
  </section>
);

export default PageHero;
