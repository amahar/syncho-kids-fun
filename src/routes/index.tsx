import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Rocket, Code2, Bot, GraduationCap, Users, MessageCircle,
  Trophy, Calendar, Check, Star, Zap, Heart, ArrowRight, PlayCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroKids from "@/assets/hero-kids.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syncho AI Academy — Kids Learn to Code with AI (Ages 9–14)" },
      {
        name: "description",
        content:
          "A fun, beginner-friendly online program where kids 9–14 build real websites and apps using AI. Live mentors, hands-on projects, parent updates. Start for $1.99.",
      },
    ],
  }),
  component: Index,
});

const TRUST = ["Ages 9–14", "No experience needed", "1–2 hrs / week", "100% Online", "Live mentors"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <WhoFor />
        <HowItWorks />
        <WhatYouGet />
        <OfficeHours />
        <Pricing />
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
      {/* floating blobs */}
      <div className="absolute top-20 -left-16 h-72 w-72 bg-sun/40 animate-blob -z-0" />
      <div className="absolute top-40 -right-20 h-80 w-80 bg-accent/30 animate-blob -z-0" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-grape/20 animate-blob -z-0" style={{ animationDelay: "-8s" }} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sun ink-border pop-sm px-4 py-1.5 mb-6 animate-wobble" style={{ ["--r" as string]: "0deg" }}>
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold">New cohorts open now · $1.99 trial</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Kids learn to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">code</span>
              <span className="absolute inset-x-0 bottom-1 h-4 bg-accent -z-0 -rotate-1 rounded" />
            </span>{" "}
            using <span className="text-primary">AI</span>
            <span className="inline-block animate-wobble ml-2">🚀</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Ages <strong className="text-foreground">9–14</strong> build real websites &amp; apps with AI in a fun,
            beginner-friendly program. Just <strong className="text-foreground">1–2 hours a week</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-bold ink-border pop pop-hover"
            >
              <Rocket className="h-5 w-5" />
              Start trial — $1.99
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full bg-card text-foreground px-7 py-4 text-base font-bold ink-border pop-sm pop-hover"
            >
              <PlayCircle className="h-5 w-5" />
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-sun text-sun" />
              ))}
            </div>
            <span>Loved by parents &amp; kids · 30-day money-back · Cancel anytime</span>
          </div>
        </div>

        {/* Hero illustration card */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-4 -left-4 rotate-[-8deg] rounded-2xl bg-mint ink-border pop-sm px-3 py-2 text-sm font-bold animate-float" style={{ ["--r" as string]: "-8deg" } as React.CSSProperties}>
            ⚡ Build real projects
          </div>
          <div className="absolute -bottom-2 -right-2 rotate-[6deg] rounded-2xl bg-grape text-grape-foreground ink-border pop-sm px-3 py-2 text-sm font-bold animate-float" style={{ animationDelay: "-2s", ["--r" as string]: "6deg" } as React.CSSProperties}>
            🤖 AI as your sidekick
          </div>
          <div className="absolute top-1/2 -right-6 rotate-[10deg] rounded-2xl bg-sun ink-border pop-sm px-3 py-2 text-sm font-bold animate-float" style={{ animationDelay: "-3.5s", ["--r" as string]: "10deg" } as React.CSSProperties}>
            🏆 Earn a certificate
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

/* ------------------------------- MARQUEE ------------------------------ */
function Marquee() {
  const items = [...TRUST, ...TRUST, ...TRUST];
  return (
    <div className="border-y-[2.5px] border-border bg-foreground text-background py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-10 font-display text-lg font-semibold">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{t}</span>
            <Sparkles className="h-5 w-5 text-sun" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- PILLARS ------------------------------ */
function Pillars() {
  const pillars = [
    {
      icon: Bot,
      title: "AI, simplified",
      body: "We turn intimidating AI into bite-size lessons kids actually finish — and remember.",
      color: "bg-accent",
    },
    {
      icon: Rocket,
      title: "Build the future",
      body: "Kids ship real websites & games — not just watch tutorials. Portfolio from day one.",
      color: "bg-sun",
    },
    {
      icon: GraduationCap,
      title: "Beginner-friendly",
      body: "Zero coding experience needed. If they can use a laptop, they can start today.",
      color: "bg-mint",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <span className="inline-block bg-grape text-grape-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
          WHY SYNCHO
        </span>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Coding &amp; AI skills,{" "}
          <span className="relative inline-block">
            <span className="relative z-10">designed for kids</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-primary/30 -z-0 rounded" />
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Kids don't just learn <em>about</em> AI — they create with it.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
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
  const items = [
    { emoji: "🧠", text: "Curious kids 9–14 who love building things" },
    { emoji: "🌱", text: "Total beginners — no coding experience needed" },
    { emoji: "👨‍👩‍👧", text: "Parents who want structured, low-stress learning" },
    { emoji: "🛠️", text: "Families who want real projects, not just videos" },
  ];
  return (
    <section className="bg-secondary/30 border-y-[2.5px] border-border py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 items-center">
        <div>
          <span className="inline-block bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
            WHO IT'S FOR
          </span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Made for kids who ask <span className="text-primary">"how does this work?"</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If your child loves Minecraft, Roblox, or asking endless questions about how things work — they'll feel right at home here.
          </p>
        </div>
        <ul className="grid gap-4">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-card ink-border pop-sm p-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun ink-border text-2xl shrink-0">
                {it.emoji}
              </span>
              <span className="font-semibold">{it.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ HOW IT WORKS -------------------------- */
function HowItWorks() {
  const steps = [
    { n: "1", title: "Sign up", body: "Pick your trial and start Level 1 instantly.", color: "bg-primary text-primary-foreground" },
    { n: "2", title: "Learn", body: "Bite-size lessons + parent progress emails.", color: "bg-accent" },
    { n: "3", title: "Quiz", body: "Quick checks lock in the concepts.", color: "bg-sun" },
    { n: "4", title: "Build", body: "Real websites, mini-games, and showcase projects.", color: "bg-mint" },
    { n: "5", title: "Get help", body: "Drop into weekly LIVE office hours with mentors.", color: "bg-grape text-grape-foreground" },
    { n: "6", title: "Earn it", body: "Finish strong with a certificate to show off.", color: "bg-secondary" },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <span className="inline-block bg-mint rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
          HOW IT WORKS
        </span>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Six fun steps to becoming a maker</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl bg-card ink-border pop-sm pop-hover p-6">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.color} ink-border font-display text-xl font-bold mb-4`}>
              {s.n}
            </div>
            <h3 className="font-display text-2xl font-bold">{s.title}</h3>
            <p className="mt-1 text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- WHAT YOU GET --------------------------- */
function WhatYouGet() {
  const features = [
    { icon: Code2, title: "5 fun levels", body: "Hundreds of code examples, quizzes, and mini-games." },
    { icon: Zap, title: "Instant AI help", body: "Stuck? AI explains and fixes code in plain English." },
    { icon: Users, title: "Live mentor hours", body: "Weekly Zoom sessions to get unstuck and share work." },
    { icon: MessageCircle, title: "Parent updates", body: "Weekly progress emails so you stay in the loop." },
    { icon: Trophy, title: "Certificate", body: "Plus a shareable showcase site of their best work." },
    { icon: Heart, title: "Lifetime access", body: "Keep every lesson and update — forever." },
  ];
  return (
    <section id="what" className="bg-foreground text-background py-20 border-y-[2.5px] border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block bg-sun text-sun-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
            WHAT YOU GET
          </span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Everything kids need to <span className="text-sun">actually finish</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl bg-card text-card-foreground ink-border pop-sm pop-hover p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground ink-border">
                <f.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-1 text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- OFFICE HOURS --------------------------- */
function OfficeHours() {
  const sessions = [
    { day: "Tuesday", time: "5:30 – 7:00 PM" },
    { day: "Wednesday", time: "5:30 – 7:00 PM" },
    { day: "Saturday", time: "12:00 – 12:45 PM" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-accent/40 ink-border pop p-8 sm:p-12 grid gap-10 lg:grid-cols-2 items-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-48 w-48 bg-sun rounded-full ink-border opacity-80" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-card ink-border pop-sm rounded-full px-3 py-1 text-xs font-bold mb-4">
            <Calendar className="h-4 w-4" /> THIS WEEK · EST
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Live mentor office hours
          </h2>
          <p className="mt-3 text-lg text-foreground/80">
            Hop on Zoom, ask a question, share a project. Beginner-friendly, optional, and always free with membership.
          </p>
        </div>
        <div className="relative grid gap-3">
          {sessions.map((s) => (
            <div key={s.day} className="flex items-center justify-between rounded-2xl bg-card ink-border pop-sm p-4">
              <div>
                <div className="font-display text-xl font-bold">{s.day}</div>
                <div className="text-sm text-muted-foreground">{s.time}</div>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold ink-border pop-sm pop-hover"
              >
                Join <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PRICING ------------------------------ */
function Pricing() {
  const includes = [
    "Personalized learning platform",
    "Live weekly mentor office hours",
    "Short on-demand lessons + project feedback",
    "Structured 5-level curriculum",
    "Certificate upon completion",
    "Lifetime access to lessons & updates",
  ];
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
            🔥 Most popular
          </div>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <div className="font-display text-2xl font-bold">30-day Trial</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold text-primary">$1.99</span>
                <span className="text-muted-foreground">first 30 days</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Then <strong className="text-foreground">$29/month</strong>. Cancel anytime — no questions asked.
              </p>
              <a
                href="https://www.syncho.ai/resource_redirect/offers/FxDHkrZf"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-lg font-bold ink-border pop pop-hover"
              >
                <Rocket className="h-5 w-5" />
                Start trial for $1.99
              </a>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                30-day full access · No commitment
              </p>
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

/* --------------------------------- FAQ -------------------------------- */
function FAQ() {
  const faqs = [
    {
      q: "What is Syncho AI Academy?",
      a: "An online coding program where kids 9–14 learn real JavaScript, HTML, and CSS to build websites and beginner-friendly web apps — using AI as a co-pilot, just like modern developers do.",
    },
    {
      q: "Does my child need prior coding experience?",
      a: "Zero. If your child can turn on a laptop or iPad, they're ready to start. We take care of the rest.",
    },
    {
      q: "Will this help with regular schoolwork?",
      a: "Yes — coding builds critical thinking, problem-solving, and digital literacy that transfer to every subject.",
    },
    {
      q: "What equipment do we need?",
      a: "A computer or laptop with a reliable internet connection. Most activities are browser-based.",
    },
    {
      q: "How do live mentor office hours work?",
      a: "Sessions run on Zoom. Students drop in with bugs or questions. 60–90 minutes, beginner-friendly, join or leave anytime.",
    },
    {
      q: "What happens after the 30-day trial?",
      a: "Membership continues at $29/month. Full access to lessons, projects, updates, and live office hours. Cancel anytime.",
    },
  ];
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="inline-block bg-grape text-grape-foreground rounded-full px-3 py-1 text-xs font-bold ink-border pop-sm mb-4">
          QUESTIONS
        </span>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Parents ask, we answer</h2>
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

        <h2 className="font-display text-4xl font-bold sm:text-6xl">Ready to jump in?</h2>
        <p className="mt-4 text-lg sm:text-xl opacity-95">
          Your child's journey into AI &amp; coding starts here. No experience needed.
        </p>
        <a
          href="https://www.syncho.ai/resource_redirect/offers/FxDHkrZf"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-card text-card-foreground px-8 py-5 text-lg font-bold ink-border pop pop-hover"
        >
          <Sparkles className="h-5 w-5" />
          Start trial for $1.99
        </a>
        <p className="mt-4 text-sm opacity-90">30-day full access · Cancel anytime</p>
      </div>
    </section>
  );
}
