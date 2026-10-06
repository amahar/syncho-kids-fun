import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Rocket, Bot, Users, Trophy, Check, Star, Shield,
  ArrowRight, Clock, Zap, Heart, MessageCircle, Code2, GraduationCap,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FounderIntro, BeforeAfter, AgeGroupedOfficeHours } from "@/components/site/AcademySections";
import { projects as approvedProjects, faqs as approvedFaqs, featureCopy, pillarCopy, pricingIncludes } from "@/lib/academy-content";
import heroKids from "@/assets/hero-kids.png";

// 🔗 Replace this with your real Kajabi checkout URL when ready
const KAJABI_CHECKOUT_URL = "#checkout";

export const Route = createFileRoute("/sales")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [{"title": "Start Your Trial — Syncho Academy · Coding for Ages 9–18"}, {"name": "description", "content": "A fun, beginner-friendly online program where kids and teens 9–18 build real websites and apps — and publish them live on the internet. Live mentors, hands-on projects, parent updates. Start for $1.99."}, {"property": "og:title", "content": "Start Your Trial — Syncho Academy · Coding for Ages 9–18"}, {"property": "og:description", "content": "Ages 9–18 build real websites & apps, and publish them live. Live mentors, hands-on projects, parent progress reports. Start for $1.99."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}, {"property": "og:url", "content": "https://syncho-kids-fun.lovable.app/sales"}],
    links: [{ rel: "canonical", href: "https://syncho-kids-fun.lovable.app/sales" }],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <WhoFor />
        <Testimonials />
        <FounderIntro />
        <Projects />
        <BeforeAfter />
        <AgeGroupedOfficeHours />
        <WhatYouGet />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 dot-paper opacity-60" />
      <div className="absolute top-20 -left-16 h-72 w-72 bg-sun/40 animate-blob -z-0" />
      <div className="absolute top-40 -right-20 h-80 w-80 bg-accent/30 animate-blob -z-0" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-grape/20 animate-blob -z-0" style={{ animationDelay: "-8s" }} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sun ink-border pop-sm px-4 py-1.5 mb-6 animate-wobble" style={{ ["--r" as string]: "0deg" } as React.CSSProperties}>
            <Clock className="h-4 w-4" />
            <span className="text-sm font-bold">New cohorts open now · $1.99 trial</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Your child can build{" "}
            <span className="relative inline-block">
              <span className="relative z-10">real websites &amp; games</span>
              <span className="absolute inset-x-0 bottom-1 h-4 bg-accent -z-0 -rotate-1 rounded" />
            </span>{" "}
            and publish them live<span className="inline-block animate-wobble ml-2">✨</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Syncho Academy turns curious kids and teens <strong className="text-foreground">9–18</strong> into confident makers — writing real code and publishing their projects live. Just <strong className="text-foreground">1–2 hours a week</strong>, no experience needed.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={KAJABI_CHECKOUT_URL}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-bold ink-border pop pop-hover"
            >
              <Rocket className="h-5 w-5" />
              Get started — $1.99
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-card text-foreground px-7 py-4 text-base font-bold ink-border pop-sm pop-hover"
            >
              See what's included <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-sun text-sun" />
              ))}
            </div>
            <span>Loved by parents & kids · Cancel anytime</span>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-mint/40 ink-border px-4 py-2.5 text-sm font-semibold w-fit">
            <Shield className="h-4 w-4 shrink-0" />
            30-day money-back guarantee — no questions asked.
          </div>
        </div>

        <div className="relative flex items-center justify-center px-2 sm:px-10">
          <div className="absolute top-2 left-4 sm:left-2 rotate-[-8deg] rounded-2xl bg-mint ink-border pop-sm px-3 py-2 text-sm font-bold animate-float z-10" style={{ ["--r" as string]: "-8deg" } as React.CSSProperties}>
            ⚡ Real projects
          </div>
          <div className="absolute bottom-4 right-4 sm:right-2 rotate-[6deg] rounded-2xl bg-grape text-grape-foreground ink-border pop-sm px-3 py-2 text-sm font-bold animate-float z-10" style={{ animationDelay: "-2s", ["--r" as string]: "6deg" } as React.CSSProperties}>
            🌐 Published live
          </div>
          <div className="absolute top-1/2 right-2 sm:right-0 rotate-[10deg] rounded-2xl bg-sun ink-border pop-sm px-3 py-2 text-sm font-bold animate-float z-10" style={{ animationDelay: "-3.5s", ["--r" as string]: "10deg" } as React.CSSProperties}>
            🏆 Certificate
          </div>

          <div className="relative w-full max-w-lg rounded-[2rem] bg-card ink-border pop p-6">
            <img
              src={heroKids}
              alt="Three happy kids coding together with AI"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- VALUE PROPS ---------------------------- */
function ValueProps() {
  const items = pillarCopy.map((p, i) => ({ ...p, icon: [Code2, Bot, Trophy][i], color: ["bg-mint", "bg-accent", "bg-sun"][i] }));
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <span className="inline-block bg-grape text-grape-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
          WHY PARENTS PICK SYNCHO
        </span>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Coding skills, built the right way
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Kids and teens don't just watch tutorials — they build, ship, and publish real things, one solid skill at a time.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <div
            key={p.title}
            className="relative rounded-3xl bg-card ink-border pop-sm pop-hover p-7"
            style={{ transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})` }}
          >
            <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.color} ink-border pop-sm`}>
              <p.icon className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-2xl font-bold">{p.title}</h3>
            <p className="mt-2 text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ WHO FOR ------------------------------- */
function WhoFor() {
  const yes = [
    "Kids and teens ages 9–18 who love building, tinkering, or asking questions",
    "Total beginners — zero coding experience required",
    "Minecraft / Roblox kids ready for the next step",
    "Busy families that want 1–2 focused hours a week",
  ];
  const no = [
    "Children under 9",
    "Families looking for unsupervised one-on-one tutoring",
    "Parents who want their child to just watch passive videos",
  ];
  return (
    <section className="bg-secondary/30 border-y-[2.5px] border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
            IS THIS RIGHT FOR YOUR CHILD?
          </span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Made for curious kids and teens <span className="text-primary">9–18</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card ink-border pop-sm p-7" style={{ transform: "rotate(-1deg)" }}>
            <div className="font-display text-2xl font-bold mb-4">✅ Perfect if…</div>
            <ul className="space-y-3">
              {yes.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-mint ink-border shrink-0">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card ink-border pop-sm p-7" style={{ transform: "rotate(1deg)" }}>
            <div className="font-display text-2xl font-bold mb-4">🚫 Probably not for…</div>
            <ul className="space-y-3">
              {no.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 ink-border shrink-0 font-bold">
                    ×
                  </span>
                  <span className="font-semibold text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ OUTCOMES ------------------------------ */
function Projects() {
  return <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <h2 className="mb-4 text-center font-display text-4xl font-bold sm:text-5xl">Real projects. Real pride. Six levels, six real builds.</h2>
    <p className="mb-10 text-center text-lg text-muted-foreground">No blocks. No drag-and-drop. Real HTML, CSS, and JavaScript — the same languages professional developers use every day.</p>
    <div className="grid gap-6 md:grid-cols-3">{approvedProjects.map(p => <div key={p.level} className="rounded-3xl bg-card p-7 ink-border pop-sm"><span className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ink-border ${p.color}`}>{p.emoji}</span><p className="text-sm font-bold text-muted-foreground">{p.level}</p><h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3><p className="mt-3 text-muted-foreground">{p.body}</p></div>)}</div>
  </section>;
}

/* ----------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const testimonials = [
    {
      quote: "My 11-year-old built her own website in week 2. She showed it to her whole class. I've never seen her more proud of anything she's made.",
      name: "Sarah M.",
      role: "Mom of Priya, age 11",
    },
    {
      quote: "We've tried coding apps before and they always quit after a week. Three months in, my son still looks forward to it every Tuesday. That says everything.",
      name: "James T.",
      role: "Dad of Eli, age 13",
    },
    {
      quote: "The live mentor sessions are worth the price alone. My daughter had a real person help her debug her first game. She was ecstatic — and so was I.",
      name: "Rekha P.",
      role: "Mom of Asha, age 12",
    },
  ];
  return (
    <section className="bg-secondary/30 border-y-[2.5px] border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block bg-sun text-sun-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
            PARENT STORIES
          </span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Parents who took the leap
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-3xl bg-card ink-border pop-sm p-7 flex flex-col gap-4"
              style={{ transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})` }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-sun text-sun" />
                ))}
              </div>
              <p className="text-muted-foreground flex-1">"{t.quote}"</p>
              <div>
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHAT YOU GET --------------------------- */
function WhatYouGet() {
  const features = featureCopy.map((f, i) => ({ ...f, icon: [Code2, Zap, Users, MessageCircle, Trophy, Heart][i] }));
  return (
    <section className="bg-foreground text-background py-20 border-y-[2.5px] border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block bg-sun text-sun-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
            EVERYTHING INCLUDED
          </span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            What's inside the <span className="text-sun">membership</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl bg-card text-card-foreground ink-border pop-sm pop-hover p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground ink-border">
                <f.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PRICING ------------------------------ */
function Pricing() {
  const includes = pricingIncludes;
  return (
    <section id="pricing" className="relative py-20 grid-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
            START TODAY
          </span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Try it for less than a coffee</h2>
          <p className="mt-3 text-lg text-muted-foreground">30 full days of unlimited access. Cancel anytime.</p>
        </div>

        <div className="relative rounded-[2rem] bg-card ink-border pop p-8 sm:p-10">
          <div className="absolute -top-4 left-8 bg-sun ink-border rounded-full px-4 py-1 text-sm font-bold pop-sm rotate-[-3deg]">
            🔥 Best value
          </div>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <div className="font-display text-2xl font-bold">30-day Trial Membership</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold text-primary">$1.99</span>
                <span className="text-muted-foreground">first 30 days</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Then <strong className="text-foreground">$29/month</strong>. Cancel anytime — no questions asked.
              </p>
              <a
                href={KAJABI_CHECKOUT_URL}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-lg font-bold ink-border pop pop-hover"
              >
                <Rocket className="h-5 w-5" />
                Start trial for $1.99
              </a>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Secure checkout · Instant access
              </p>
              <div className="mt-5 rounded-2xl bg-mint/40 ink-border p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm">30-day money-back guarantee</div>
                  <p className="text-xs text-muted-foreground mt-1">If your child doesn't love it, we refund every penny. No forms, no hassle.</p>
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-mint ink-border shrink-0">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-semibold">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- GUARANTEE ------------------------------ */
function Guarantee() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-mint/50 ink-border pop p-8 sm:p-12 grid gap-6 md:grid-cols-[auto,1fr] items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card ink-border pop-sm mx-auto md:mx-0">
          <Shield className="h-12 w-12" strokeWidth={2.5} />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Try it risk-free for 30 days
          </h2>
          <p className="mt-3 text-foreground/80">
            We're so sure your child will love Syncho that we back every membership with a no-questions-asked 30-day refund. If it's not the right fit, email us and we'll send your money back. You have nothing to lose — and a whole new skill to gain.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ -------------------------------- */
function FAQ() {
  const faqs = approvedFaqs;
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="inline-block bg-grape text-grape-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
          BEFORE YOU CHECKOUT
        </span>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Common parent questions</h2>
      </div>
      <div className="grid gap-4">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl bg-card ink-border pop-sm p-5 open:bg-sun/30 transition-colors"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <h3 className="font-display text-lg font-bold">{f.q}</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ink-border font-bold text-xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- CTA --------------------------------- */
function FinalCTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl rounded-[2rem] bg-primary text-primary-foreground ink-border pop p-10 sm:p-16 text-center overflow-hidden">
        <div className="absolute top-6 left-8 animate-float text-4xl" style={{ ["--r" as string]: "-15deg" } as React.CSSProperties}>⭐</div>
        <div className="absolute bottom-8 right-10 animate-float text-4xl" style={{ animationDelay: "-2s", ["--r" as string]: "12deg" } as React.CSSProperties}>🚀</div>
        <div className="absolute top-1/2 right-6 animate-float text-3xl" style={{ animationDelay: "-3s", ["--r" as string]: "20deg" } as React.CSSProperties}>✨</div>

        <h2 className="font-display text-4xl font-bold sm:text-6xl">Your child's first line of code is 5 minutes away.</h2>
        <p className="mt-4 text-lg sm:text-xl opacity-95">
          Start the trial today. If your child doesn't love it in 30 days, we refund every penny — no questions asked.
        </p>
        <a
          href={KAJABI_CHECKOUT_URL}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-card text-card-foreground px-8 py-5 text-lg font-bold ink-border pop pop-hover"
        >
          <Sparkles className="h-5 w-5" />
          Start trial for $1.99
        </a>
        <p className="mt-4 text-sm opacity-90">30-day full access · Cancel anytime · Keep everything</p>
      </div>
    </section>
  );
}
