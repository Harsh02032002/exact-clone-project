import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Solutions from "@/components/home/Solutions";
import CTA from "@/components/home/CTA";
import { TrendingUp, BarChart3, Briefcase, ShieldCheck, PiggyBank, Layers, Globe, Check } from "lucide-react";

const products = [
  { icon: TrendingUp, title: "Mutual Funds", desc: "Diversified mutual fund portfolios for every risk profile and investment horizon — from equity growth to debt stability." },
  { icon: BarChart3, title: "Equity Investments", desc: "Long-term equity strategies with structured market participation for sustained wealth creation through quality businesses." },
  { icon: Briefcase, title: "PMS / AIF Opportunities", desc: "Specialized Portfolio Management Services and Alternative Investment Funds for eligible investors seeking enhanced returns." },
  { icon: Layers, title: "Structured & Market-Linked Solutions", desc: "Market-linked and structured products designed for specific risk-return expectations and investor preferences." },
  { icon: PiggyBank, title: "Fixed Income & Debt", desc: "Stability and portfolio balance through suitable debt-oriented avenues for risk-conscious investors." },
  { icon: ShieldCheck, title: "Protection Solutions", desc: "Insurance-linked offerings for risk management, family security, income protection, and business continuity." },
  { icon: Globe, title: "Liquidity & Treasury Management", desc: "Efficient cash and liquidity management solutions to optimize idle funds while maintaining accessibility and capital preservation." },
];

const clients = [
  "Working Professionals",
  "Entrepreneurs & Business Owners",
  "Families Planning Long-Term Wealth",
  "Senior Citizens",
  "Next-Generation Investors",
  "High-Net-Worth Individuals",
];

const SolutionsPage = () => (
  <Layout>
    <PageHero title="Solutions" />

    <section className="section bg-background">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Financial Solutions"
          title={<>Building Wealth With <span className="italic-accent">Clarity & Confidence</span></>}
          subtitle="We offer comprehensive financial solutions designed to help individuals, families, and businesses build, manage, and protect wealth with clarity and confidence. Our approach combines deep market understanding with structured planning to deliver personalized investment strategies."
        />
      </div>
    </section>

    <Solutions />

    <section className="section bg-muted/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Investment Opportunities"
          title={<>Investment Products</>}
          subtitle="Access to institutional-quality investment opportunities across diverse asset classes, carefully selected to match your financial objectives."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.title} className="card-elevated">
              <div className="w-14 h-14 rounded-lg bg-gold-soft text-gold flex items-center justify-center">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Clients"
            title={<>Who We Work With</>}
            subtitle="We partner with individuals and families who understand the value of structured financial planning and are committed to long-term wealth creation."
          />
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {clients.map((c) => (
              <li key={c} className="flex items-center gap-3 bg-muted/50 rounded-md px-4 py-3">
                <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary-deep" />
                </span>
                <span className="font-medium text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "3500+", l: "Families Served" },
            { v: "25+", l: "Years Experience" },
            { v: "₹600+ Cr", l: "Assets Managed" },
            { v: "10+", l: "Service Lines" },
          ].map((s) => (
            <div key={s.l} className="card-elevated text-center">
              <div className="font-serif text-3xl text-gold">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x mt-14">
        <div className="bg-gold-soft border-l-4 border-gold rounded-md p-6">
          <h4 className="font-serif text-xl text-primary">Important Note</h4>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            All investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance does not guarantee future results. Product recommendations are always aligned with an individual's financial profile, goals, and risk appetite. The information provided is for general understanding only and should not be treated as investment, legal, tax, or financial advice.
          </p>
        </div>
      </div>
    </section>

    <CTA />
  </Layout>
);

export default SolutionsPage;
