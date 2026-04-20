import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";
import { Search, ClipboardList, PenTool, Rocket, RefreshCw, GitBranch, Brain, ShieldCheck, Target, Eye, Compass, HeartHandshake } from "lucide-react";

const journey = [
  { icon: Search, title: "Understand", desc: "Deep dive into your financial goals" },
  { icon: ClipboardList, title: "Assess", desc: "Complete financial health check" },
  { icon: PenTool, title: "Recommend", desc: "Customized strategy creation" },
  { icon: Rocket, title: "Implement", desc: "Efficient execution of plan" },
  { icon: RefreshCw, title: "Review", desc: "Regular monitoring & adjustments" },
  { icon: GitBranch, title: "Stay Aligned", desc: "Long-term goal alignment" },
];

const advantages = [
  { icon: Brain, title: "Structured Decision Making", desc: "Every recommendation is backed by thorough analysis and aligned with your specific financial situation." },
  { icon: Compass, title: "Long-Term Discipline", desc: "We help you stay focused on your goals regardless of market fluctuations and short-term noise." },
  { icon: ShieldCheck, title: "Risk-Aware Investing", desc: "Your risk profile is central to every decision. We never compromise on capital protection." },
  { icon: Target, title: "Goal-Based Planning", desc: "Each investment is tied to a specific life goal — education, retirement, wealth creation, and more." },
  { icon: Eye, title: "Continuous Monitoring", desc: "Regular reviews ensure your portfolio stays aligned with evolving market conditions and life changes." },
  { icon: HeartHandshake, title: "Client-Centric Strategy", desc: "Your interests always come first. We build relationships based on trust, transparency, and results." },
];

const ProcessPage = () => (
  <Layout>
    <PageHero title="Our Process" crumb="Process" />

    <section className="section bg-background">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title={<>Our Structured <span className="italic-accent">Financial Process</span></>}
          subtitle="A structured process helps create clarity, discipline, and long-term wealth outcomes. At Anant Finserv, we follow a proven six-step methodology designed to understand your unique needs and build a roadmap for lasting financial independence."
        />
      </div>
    </section>

    <Process />

    <section className="section bg-background">
      <div className="container-x">
        <SectionHeading eyebrow="Visual Overview" title={<>Your Journey With Us</>} subtitle="From initial consultation to ongoing optimization — every step is designed with your success in mind." />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {journey.map((j, i) => (
              <div key={j.title} className="text-center relative">
                <div className="mx-auto w-24 h-24 rounded-full bg-card shadow-[var(--shadow-card)] border-2 border-gold flex items-center justify-center text-gold relative z-10">
                  <j.icon className="w-10 h-10" />
                </div>
                <div className="mt-3 text-xs font-bold text-gold tracking-widest">STEP {String(i + 1).padStart(2, "0")}</div>
                <h4 className="mt-1 font-serif text-lg text-primary">{j.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-muted/40">
      <div className="container-x">
        <SectionHeading eyebrow="The Anant Advantage" title={<>Why Our Process Works</>} subtitle="Our methodology is built on decades of experience and a deep understanding of what drives long-term financial success." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="card-elevated">
              <div className="w-14 h-14 rounded-lg bg-gold-soft text-gold flex items-center justify-center">
                <a.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
  </Layout>
);

export default ProcessPage;
