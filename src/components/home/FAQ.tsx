import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "../SectionHeading";

const faqs = [
  { q: "What services does Anant Finserv offer?", a: "We provide comprehensive Wealth Management, Financial Planning, Retirement Planning, Risk Protection, Goal-Based Investing, and Portfolio Review & Restructuring. Our services help clients build, protect, and grow their wealth with clarity and confidence." },
  { q: "How are you different from other advisors?", a: "We focus on simplifying your entire financial life by consolidating your net worth into one clear strategy, supported by disciplined execution and long-term thinking — not product-pushing or short-term noise." },
  { q: "What investment products do you offer?", a: "We provide access to Mutual Funds, Equities, Fixed Income & Debt Solutions, Portfolio Management Services (PMS), Alternative Investment Funds (AIF), International Investing Opportunities, Structured & Capital-Protected Products, and Insurance-linked Protection Solutions." },
  { q: "Who do you work with?", a: "We work with Business Owners & Entrepreneurs, Senior Professionals & CXOs, High Net Worth Families, Next-Generation Investors, and Families planning wealth legacy & succession." },
  { q: "How can I get started with Anant Finserv?", a: "You can request a portfolio review by calling us, emailing, or filling the contact form. We begin with a thorough understanding of your financial situation, goals, and risk appetite, then create a personalised strategy." },
  { q: "Are investments through Anant Finserv safe?", a: "All investments are subject to market risks. We follow a disciplined, research-based, suitability-focused process. We help you diversify across asset classes and regularly monitor your portfolio to stay aligned with your risk tolerance and goals." },
];

const FAQ = () => (
  <section className="section bg-muted/40">
    <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <SectionHeading
          align="left"
          eyebrow="Frequently Asked"
          title={<>Questions & <span className="italic-accent">Answers</span></>}
          subtitle="Quick answers to common questions. For anything else, reach out to us directly."
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-card rounded-lg p-5 shadow-[var(--shadow-soft)] text-center">
            <div className="font-serif text-3xl text-gold">98%</div>
            <div className="mt-1 text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="bg-card rounded-lg p-5 shadow-[var(--shadow-soft)] text-center">
            <div className="font-serif text-3xl text-gold">94%</div>
            <div className="mt-1 text-sm text-muted-foreground">Goal Achievement</div>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg shadow-[var(--shadow-soft)] border-none px-5">
            <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline hover:text-gold py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
