import { Link } from "react-router-dom";
import {
  Briefcase, FileText, TrendingUp, BarChart3, Umbrella, Shield,
  ClipboardCheck, Target, PiggyBank, Gem,
} from "lucide-react";
import SectionHeading from "../SectionHeading";

const services = [
  { icon: Briefcase, title: "Wealth Management", desc: "We go beyond managing investments — we manage your entire financial life. From consolidating fragmented portfolios to tax-efficient strategies, we create a unified approach to preserve, grow, and transition wealth across generations." },
  { icon: FileText, title: "Financial Planning", desc: "Every financial decision should move you closer to a defined life goal. We build a clear, actionable roadmap based on your income, lifestyle, aspirations, and risk appetite — bringing discipline to cashflows, investments, and liabilities." },
  { icon: TrendingUp, title: "Mutual Fund Advisory", desc: "Goal-oriented mutual fund portfolios backed by research and continuous monitoring. Our focus is on asset allocation, consistency, and timing discipline — aligned with changing market conditions and life stages." },
  { icon: BarChart3, title: "Equity & Market-Linked Solutions", desc: "Curated access to equity strategies, structured products, and market-linked opportunities for long-term wealth creation — focused on strategic participation, risk-managed exposure, and identifying high-quality opportunities early." },
  { icon: Umbrella, title: "Retirement Planning", desc: "We create retirement strategies that replace your income reliably, protect against inflation, and optimize withdrawals and taxation — ensuring financial independence without compromise on lifestyle." },
  { icon: Shield, title: "Insurance & Protection Planning", desc: "Safeguard your financial life through life insurance structuring, health protection, business continuity planning, and asset protection strategies — ensuring your family and wealth remain secure." },
  { icon: ClipboardCheck, title: "Portfolio Review & Restructuring", desc: "We conduct a deep diagnostic review to identify redundant investments, underperforming assets, risk concentration, and tax inefficiencies — then restructure your portfolio into a focused, high-conviction strategy." },
  { icon: Target, title: "Goal-Based Investing", desc: "We structure portfolios around specific life goals — children's education, wealth creation, retirement, and legacy planning — with clear timelines, measurable targets, and disciplined execution." },
  { icon: PiggyBank, title: "Fixed Income & Capital Preservation", desc: "Access to government securities, bonds, debentures, and structured fixed income products — delivering predictable income, low volatility, and portfolio stability as a strong defensive allocation." },
  { icon: Gem, title: "AIF (For HNI Clients)", desc: "For sophisticated investors, we offer curated access to Alternative Investment Funds (AIFs), pre-IPO & unlisted equities, and structured opportunities — enhancing returns and diversification aligned with long-term wealth creation." },
];

const Solutions = () => (
  <section className="section bg-background">
    <div className="container-x">
      <SectionHeading
        eyebrow="What We Offer"
        title={<>Curated Investment Solutions <br /><span className="italic-accent">Across Asset Classes</span></>}
        subtitle="All recommendations are based on your goals, risk profile, and time horizon — not generic templates."
      />
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="card-elevated relative group border border-border hover:border-gold">
            <span className="absolute top-4 right-5 font-serif text-5xl text-muted/60 group-hover:text-gold/30 transition-colors">{String(i + 1).padStart(2, "0")}</span>
            <div className="w-16 h-16 rounded-full bg-gold-soft flex items-center justify-center text-gold mb-5">
              <s.icon className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl">
              <Link to="/contact" className="hover:text-gold">{s.title}</Link>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <Link to="/contact" className="mt-5 inline-block text-xs uppercase tracking-wider font-semibold text-gold hover:underline">
              Explore →
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs italic text-muted-foreground max-w-3xl mx-auto">
        All investments are subject to market risks and suitability considerations. Product recommendations are always aligned with an individual's financial profile, goals, and risk appetite.
      </p>
    </div>
  </section>
);

export default Solutions;
