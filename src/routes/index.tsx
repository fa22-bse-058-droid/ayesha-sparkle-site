import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Instagram,
  Linkedin,
  MessageCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ayeshaPhoto from "@/assets/ayesha.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayesha Zaka — Smart Strategy. Stronger Brands. Real Growth." },
      {
        name: "description",
        content:
          "Social Media Marketing Strategist helping brands scale with Meta & Google Ads, content strategy and AI-driven systems.",
      },
      { property: "og:title", content: "Ayesha Zaka — Social Media Marketing Strategist" },
      { property: "og:description", content: "Smart strategy, stronger brands, real growth." },
    ],
  }),
  component: Index,
});

// --- Reveal on scroll helper ---
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CountUp({ end, suffix = "", duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const NAV = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Course", "#course"],
  ["Resources", "#resources"],
  ["Contact", "#contact"],
] as const;

const TICKER = [
  "Meta Ads",
  "Instagram Growth",
  "Facebook Ads",
  "AI Content Systems",
  "Brand Strategy",
  "Google Ads",
];

const SERVICES = [
  ["01", "Meta Ads Management", "Profitable campaigns built on data, not guesswork."],
  ["02", "Social Media Management", "Consistent presence across every platform."],
  ["03", "Content Strategy", "Content that attracts, engages, and converts."],
  ["04", "AI Content Creation", "Smarter content, faster — powered by AI tools."],
  ["05", "Personal Branding", "Build a brand that people remember and trust."],
  ["06", "Paid Advertising Strategy", "Full-funnel ad strategy for maximum ROI."],
];

const WORK = [
  { result: "Revenue doubled in 90 days", brand: "E-commerce Brand", service: "Meta Ads Strategy" },
  { result: "2x more leads in just 60 days", brand: "Coaching Brand", service: "Facebook Ads" },
  { result: "Grew from 0 to 78,000 followers", brand: "Personal Brand", service: "Instagram Strategy" },
];

const TESTIMONIALS = [
  { quote: "Ayesha's strategies helped us scale our brand faster than we expected.", name: "Sarah Khan", role: "E-commerce Brand Owner" },
  { quote: "Professional, reliable and result-driven. Highly recommend her services.", name: "Usman Ali", role: "Business Coach" },
  { quote: "Our content and ad performance improved dramatically.", name: "Hira Malik", role: "Beauty Brand Founder" },
];

function Index() {
  useReveal();
  return (
    <div className="bg-app min-h-screen text-white antialiased selection:bg-[#1A6BFF] selection:text-white">
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Work />
      <Services />
      <Course />
      <Testimonials />
      <Resource />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#060B14]/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold tracking-tight">Ayesha<span className="text-[#1A6BFF]">.</span></a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-secondary-soft">
          {NAV.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#1A6BFF] px-5 py-2.5 text-sm font-medium text-white hover:scale-105 transition-transform btn-glow">
          Book a Call <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 8) * 0.7;
        const size = 2 + (i % 4);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#1A6BFF] animate-float-dot"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s` }}
          />
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Particles />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center relative">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.25em] font-semibold text-[#1A6BFF] uppercase mb-6">
            Social Media Marketing Strategist
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Smart Strategy.<br />
            Stronger Brands.<br />
            <span className="text-[#1A6BFF]">Real Growth.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg text-secondary-soft leading-relaxed">
            I help businesses grow through content strategy, paid ads, and data-driven marketing.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#1A6BFF] px-7 py-3.5 font-medium text-white hover:scale-[1.03] transition-transform btn-glow">
              Book Consultation <ArrowRight className="size-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-medium text-white hover:bg-white/5 hover:scale-[1.03] transition-all">
              View Services
            </a>
          </div>
        </div>

        <div className="reveal relative flex justify-center lg:justify-end">
          <div className="relative w-[340px] sm:w-[420px] aspect-[4/5]">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[120%] h-[80%] rounded-full bg-[#1A6BFF] opacity-40 blur-[80px]" />
            </div>
            <img
              src={ayeshaPhoto}
              alt="Ayesha Zaka, Social Media Marketing Strategist"
              className="relative z-10 w-full h-full object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="border-y border-white/5 bg-[#0a1220] py-5 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-ticker w-max">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-secondary-soft text-sm uppercase tracking-widest">
            <Sparkles className="size-4 text-[#1A6BFF]" /> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="relative mb-14">
      <span className="absolute -top-10 left-0 font-display text-[140px] leading-none font-bold text-white/[0.04] select-none">{num}</span>
      <h2 className="relative font-display text-4xl sm:text-5xl font-bold">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="02" title="About me" />
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="reveal lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-10">
            <p className="font-display text-2xl sm:text-3xl leading-snug">
              I help brands scale profitably using <span className="text-[#1A6BFF]">Meta &amp; Google Ads</span>, AI tools, and structured data-driven systems that turn ad spend into consistent growth.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-secondary-soft">
              {["Audit", "Strategy", "Launch", "Results"].map((s, i, a) => (
                <span key={s} className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full border border-white/15 text-white">{s}</span>
                  {i < a.length - 1 && <span className="text-[#1A6BFF]">→</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl border border-white/10 bg-[#0a1220] p-10 flex flex-col justify-between gap-8">
            {[
              { n: 3, suf: "+", l: "Years Experience" },
              { n: 50, suf: "+", l: "Brands Scaled" },
              { n: 167, suf: "%", l: "Avg. ROAS" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl font-bold text-[#1A6BFF]">
                  <CountUp end={s.n} suffix={s.suf} />
                </div>
                <div className="text-sm text-secondary-soft mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          {[
            { icon: Target, t: "Strategic", d: "Every decision rooted in data and clear objectives." },
            { icon: Sparkles, t: "Creative", d: "Stories and visuals that stop the scroll." },
            { icon: TrendingUp, t: "Results Focused", d: "Built for ROAS, not vanity metrics." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="reveal rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-[#1A6BFF]/40 transition-colors">
              <Icon className="size-6 text-[#1A6BFF] mb-4" />
              <h3 className="font-display text-xl font-semibold">{t}</h3>
              <p className="text-secondary-soft text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="03" title="Recent work" />
        <div className="space-y-5">
          {WORK.map((w, i) => (
            <a
              key={i}
              href="#contact"
              className="reveal group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1220] to-[#060B14] p-10 sm:p-14 hover:border-[#1A6BFF]/50 transition-all"
            >
              <div className="absolute inset-0 bg-[#1A6BFF] opacity-0 group-hover:opacity-[0.08] transition-opacity" />
              <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#1A6BFF] mb-5">Case {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-[1.05]">
                    {w.result}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-secondary-soft text-sm">
                    <span>{w.brand}</span>
                    <span className="text-white/40">•</span>
                    <span>{w.service}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white opacity-60 group-hover:opacity-100 group-hover:text-[#1A6BFF] transition">
                  View Details <ArrowRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="04" title="Services" />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map(([num, name, desc], i) => (
            <div
              key={num}
              className="reveal group grid grid-cols-12 gap-6 py-8 px-2 items-center hover:bg-white/[0.02] border-l-2 border-l-transparent hover:border-l-[#1A6BFF] hover:translate-x-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="col-span-2 text-secondary-soft font-mono text-sm">{num}</div>
              <div className="col-span-10 lg:col-span-5">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold">{name}</h3>
              </div>
              <div className="col-span-12 lg:col-span-5 text-secondary-soft">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Course() {
  return (
    <section id="course" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a3d] via-[#060B14] to-[#060B14]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#1A6BFF] opacity-20 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center reveal">
        <p className="text-xs tracking-[0.3em] uppercase text-[#1A6BFF] mb-6">Course</p>
        <h2 className="font-display text-5xl sm:text-7xl font-bold leading-[1.05]">
          Social Media<br />Marketing Mastery
        </h2>
        <p className="mt-8 text-lg text-secondary-soft max-w-2xl mx-auto">
          Learn the exact system I use to scale brands with paid ads and AI tools.
        </p>
        <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1A6BFF] px-8 py-4 font-medium text-white hover:scale-105 transition-transform btn-glow">
          Explore Course <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel num="06" title="What clients say" />
        <div className="reveal relative rounded-3xl border border-white/10 bg-[#0a1220] p-10 sm:p-16 min-h-[280px]">
          <Quote className="size-12 text-[#1A6BFF] mb-6" />
          <p key={i} className="font-display text-2xl sm:text-3xl leading-snug animate-in fade-in duration-700">
            "{TESTIMONIALS[i].quote}"
          </p>
          <div className="mt-8 text-sm">
            <div className="text-white font-medium">{TESTIMONIALS[i].name}</div>
            <div className="text-secondary-soft">{TESTIMONIALS[i].role}</div>
          </div>

          <div className="absolute right-8 bottom-8 flex items-center gap-3">
            <button aria-label="Previous" onClick={() => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="p-2 rounded-full border border-white/15 hover:bg-white/5">
              <ChevronLeft className="size-4" />
            </button>
            <button aria-label="Next" onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)} className="p-2 rounded-full border border-white/15 hover:bg-white/5">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#1A6BFF]" : "w-3 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Resource() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section id="resources" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <p className="text-xs tracking-[0.3em] uppercase text-[#1A6BFF] mb-6">Free Resource</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold">Get the Free Meta Ads Checklist</h2>
        <p className="mt-5 text-secondary-soft">
          The exact checklist I use before launching every Meta campaign.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@brand.com"
            className="flex-1 px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#1A6BFF] focus:shadow-[0_0_0_4px_rgba(26,107,255,0.18)] transition"
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A6BFF] px-7 py-4 font-medium text-white hover:scale-[1.03] transition-transform btn-glow">
            {sent ? "Sent ✓" : <>Send It <ArrowRight className="size-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#04080f]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl font-bold">Ayesha<span className="text-[#1A6BFF]">.</span></div>
          <p className="mt-3 text-secondary-soft text-sm max-w-xs">Scaling brands through smart strategy.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center text-sm text-secondary-soft">
          {NAV.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-white transition">{l}</a>
          ))}
        </div>
        <div className="flex md:justify-end gap-3">
          {[
            { Icon: Linkedin, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: MessageCircle, href: "#" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} aria-label="social" className="p-3 rounded-full border border-white/15 hover:border-[#1A6BFF] hover:text-[#1A6BFF] transition">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-secondary-soft">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <a href="mailto:aishazaka007@gmail.com" className="hover:text-white">aishazaka007@gmail.com</a>
            <a href="tel:+923146155627" className="hover:text-white">+92 314 6155627</a>
          </div>
          <div>© 2025 Ayesha. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}