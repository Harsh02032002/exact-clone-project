import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 3500, suffix: "+", label: "Families Served" },
  { value: 600, prefix: "₹", suffix: "+ Cr", label: "Assets Under Management" },
  { value: 50000, label: "Families — Vision 2036" },
];

const Counter = ({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [end]);
  return <div ref={ref}>{prefix}{n.toLocaleString()}{suffix}</div>;
};

const StatsBand = () => (
  <section className="bg-primary py-16 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0, transparent 40%), radial-gradient(circle at 80% 30%, hsl(var(--gold)) 0, transparent 40%)",
      }}
    />
    <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-serif text-4xl md:text-5xl text-gold">
            <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-sm uppercase tracking-wider text-white/80">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBand;
