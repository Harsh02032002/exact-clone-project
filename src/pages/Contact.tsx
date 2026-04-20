import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const offices = [
  { idx: "01", title: "Head Office", city: "Kolkata", lines: ["134, 1st Floor, BRB Basu Road,", "Kolkata - 700 001, West Bengal"], phone: "+91 33 4037 4509", email: "info@anantfinserv.com" },
  { idx: "02", title: "Ranaghat Branch", city: "Ranaghat", lines: ["6, Beharampore Road, Holding 67/1A,", "Ward-17, Ranaghat - 741201, Nadia, West Bengal"], phone: "+91 9064342301" },
  { idx: "03", title: "Sector V Branch", city: "Kolkata", lines: ["Aurora Waterfront #715, GN 34/1, GN Block,", "Sector V, Bidhannagar, Kolkata - 700091"], phone: "+91 9830055373" },
];

const services = ["Risk Profiling", "Financial Planning", "Succession Planning", "Legal Advisory", "Taxation Advisory", "Startup Advisory", "Mutual Funds", "Fixed Income", "Equities"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thank you — our team will reach out within one business day." });
    setForm({ name: "", email: "", phone: "", service: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero title="Contact Us" />

      <section className="section bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg shadow-[var(--shadow-card)] p-8 md:p-10">
            <span className="eyebrow">Send a Message</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Get In Touch With Us</h2>
            <form onSubmit={submit} className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium block mb-2">Your Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Your Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your Email" className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Phone Number</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Select Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold">
                    <option value="">-- Select Service --</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Subject</label>
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Your Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your Message" className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
              </div>
              <button type="submit" className="btn-gold w-full md:w-auto">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div>
            <span className="eyebrow">Contact Info</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Reach Our Expert Team</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We would be delighted to answer any enquiry about your financial affairs. Use the form, or reach us directly — we are available Monday to Friday, 9:00 AM to 6:00 PM.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4 p-5 bg-muted/40 rounded-md">
                <div className="w-12 h-12 rounded-full bg-gold text-primary-deep flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-lg text-primary">Head Office</h4>
                  <p className="text-sm text-muted-foreground mt-1">134, 1st Floor, BRB Basu Road,<br/>Kolkata - 700 001, West Bengal</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-muted/40 rounded-md">
                <div className="w-12 h-12 rounded-full bg-gold text-primary-deep flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-lg text-primary">Phone & Email</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+913340374509" className="hover:text-gold">+91 33 4037 4509</a><br />
                    <a href="mailto:info@anantfinserv.com" className="hover:text-gold">info@anantfinserv.com</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-muted/40 rounded-md">
                <div className="w-12 h-12 rounded-full bg-gold text-primary-deep flex items-center justify-center shrink-0"><Clock className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-lg text-primary">Working Hours</h4>
                  <p className="text-sm text-muted-foreground mt-1">Monday – Friday: 9:00 AM to 6:00 PM<br/>(Saturday and Sunday: Closed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeading eyebrow="Our Offices" title={<>Branch Locations</>} />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.idx} className="card-elevated relative">
                <span className="absolute top-5 right-6 font-serif text-5xl text-gold/20">{o.idx}</span>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">{o.title}</div>
                <h3 className="mt-2 font-serif text-2xl">{o.city}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.lines.map((l, i) => <span key={i}>{l}<br/></span>)}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-gold">{o.phone}</a></div>
                  {o.email && <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> <a href={`mailto:${o.email}`} className="hover:text-gold">{o.email}</a></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <iframe
          title="Anant Finserv location"
          src="https://www.google.com/maps?q=BRB%20Basu%20Road%20Kolkata&output=embed"
          className="w-full h-96 border-0"
          loading="lazy"
        />
      </section>
    </Layout>
  );
};

export default Contact;
