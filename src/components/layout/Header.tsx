import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import TopBar from "./TopBar";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/solution", label: "Solutions" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <TopBar />
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="Anant Finserv" className="h-12 w-auto" width={256} height={64} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? "text-gold" : "text-primary hover:text-gold"
                } after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:bg-gold after:transition-all ${
                  isActive ? "after:w-6" : "after:w-0"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">
            Get Your Portfolio Reviewed <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-x flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold uppercase tracking-wider ${
                    isActive ? "text-gold" : "text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-gold mt-3 w-full">
              Get Your Portfolio Reviewed
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
