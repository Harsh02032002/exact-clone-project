import { Search, ClipboardList, PenTool, Rocket, RefreshCw, GitBranch } from "lucide-react";
import SectionHeading from "../SectionHeading";

const steps = [
  { icon: Search, title: "Understand", desc: "Your goals, priorities, financial expectations, timelines, and life stage — fully and clearly." },
  { icon: ClipboardList, title: "Assess", desc: "Your current investments, risks, cash flows, liabilities, and overall financial position." },
  { icon: PenTool, title: "Design", desc: "A clear, goal-aligned investment strategy personalised to your needs — not generic templates." },
  { icon: Rocket, title: "Implement", desc: "Efficient and structured execution of the plan with full clarity and alignment." },
  { icon: RefreshCw, title: "Review", desc: "Continuous monitoring and optimisation of your portfolio to keep you on track." },
  { icon: GitBranch, title: "Evolve", desc: "Adapting your strategy as life changes, markets shift, and new opportunities emerge." },
];

const Process = () => (
  <section className="section bg-muted/40">
    <div className="container-x">
      <SectionHeading
        eyebrow="How We Work"
        title={<>A Structured Approach <br /><span className="italic-accent">to Wealth Creation</span></>}
      />
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="relative bg-card rounded-lg p-7 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all group">
            <span className="absolute -top-4 -right-3 w-12 h-12 rounded-full bg-primary text-white font-serif text-xl flex items-center justify-center shadow-lg">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-16 h-16 rounded-lg bg-gold-soft text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-primary-deep transition-colors">
              <s.icon className="w-8 h-8" />
            </div>
            <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary text-white rounded-lg p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
        <h3 className="font-serif text-white text-3xl md:text-4xl">20+ Years of Experience</h3>
        <p className="text-white/85 leading-relaxed">
          With over two decades of expertise in wealth management and financial planning, Anant Finserv has been trusted by hundreds of clients to manage and grow their wealth with discipline, integrity, and a long-term perspective.
        </p>
      </div>
    </div>
  </section>
);

export default Process;
