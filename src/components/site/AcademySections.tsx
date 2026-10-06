import { ArrowRight, Calendar, FileCode2, Globe, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { officeGroups } from "@/lib/academy-content";

const INK = "var(--color-border)";

function SparkDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke={INK} strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <polygon points="23,12 15.9,9.8 17.5,2.5 12,7.5 6.5,2.5 8.1,9.8 1,12 8.1,14.2 6.5,21.5 12,16.5 17.5,21.5 15.9,14.2" />
    </svg>
  );
}

function PlusDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <polygon points="9,2 15,2 15,9 22,9 22,15 15,15 15,22 9,22 9,15 2,15 2,9 9,9" />
    </svg>
  );
}

function ZigzagDoodle({ className }: { className?: string }) {
  const d = "M3 14 L9 6 L15 14 L21 6 L27 14 L33 6 L39 14 L45 6";
  return (
    <svg viewBox="0 0 48 20" className={className} fill="none" aria-hidden="true">
      <path d={d} stroke={INK} strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
      <path d={d} stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function CropMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true">
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

export function FounderIntro() {
  return (
    <section id="founder" className="border-y-[2.5px] border-border bg-mint/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="mb-4 inline-block rounded-full bg-sun px-3 py-1 text-xs font-bold ink-border pop-sm">MEET THE FOUNDER</span>
        <h2 className="mb-10 font-display text-4xl font-bold sm:text-5xl">Why I built Syncho Academy</h2>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div role="img" aria-label="Founder video placeholder, awaiting Mahar’s introduction video" className="group relative">
            {/* Doodle accents peeking from behind the frame */}
            <SparkDoodle className="absolute -left-7 -top-7 z-20 h-14 w-14 -rotate-6 text-accent" />
            <PlusDoodle className="absolute -right-5 top-12 z-20 h-9 w-9 rotate-12 text-sun" />
            <ZigzagDoodle className="absolute -bottom-7 -right-6 z-20 h-9 w-28 rotate-6 text-primary" />

            <div className="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-card text-center ink-border pop">
              {/* Inner dashed frame */}
              <div className="pointer-events-none absolute inset-4 rounded-2xl border-[2.5px] border-dashed border-primary/25" aria-hidden="true" />
              {/* Corner crop marks */}
              <CropMark className="pointer-events-none absolute left-7 top-7 h-4 w-4 text-primary/45" />
              <CropMark className="pointer-events-none absolute right-7 top-7 h-4 w-4 text-primary/45" />
              <CropMark className="pointer-events-none absolute bottom-7 left-7 h-4 w-4 text-primary/45" />
              <CropMark className="pointer-events-none absolute bottom-7 right-7 h-4 w-4 text-primary/45" />

              <span className="relative z-10 grid h-16 w-16 place-items-center rounded-lg bg-primary ink-border pop-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-0.5 fill-card" aria-hidden="true">
                  <polygon points="7,4 20,12 7,20" />
                </svg>
              </span>
              <span className="relative z-10 font-display text-2xl font-bold">Meet Mahar</span>
              <span className="relative z-10 text-sm text-muted-foreground">Founder video coming soon · 60–90 seconds</span>
            </div>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <h3 className="font-display text-2xl font-bold text-foreground">Hi, I'm Mahar — the founder of Syncho Academy.</h3>
            <p>I started Syncho Academy because I kept seeing the same thing: kids finishing "coding" apps that never taught them to actually write code. Drag-and-drop blocks, gamified badges, nothing they could point to and say "I built that." I wanted something different — a place where a 9-year-old (or a 17-year-old) writes real HTML, CSS, and JavaScript by hand, gets stuck, gets unstuck by an actual human on a Zoom call, and finishes with something real: a website that's actually live on the internet.</p>
            <p>That's still what every lesson here is built around. Not to make coding look easy — to make it real, and to make kids proud of what they made.</p>
            <p className="font-display font-semibold text-foreground">— Mahar, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold ink-border pop-sm">BEFORE / AFTER</span>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">From blank file to live website</h2>
      </div>
      <div className="grid overflow-hidden rounded-lg ink-border md:grid-cols-2">
        <div className="bg-foreground p-6 text-background">
          <div className="mb-5 flex items-center gap-2 border-b border-background/20 pb-4 font-semibold"><FileCode2 className="h-5 w-5" /> Before · index.html</div>
          <div role="img" aria-label="Blank editor screenshot placeholder" className="flex aspect-video flex-col items-center justify-center gap-3 border border-dashed border-background/40">
            <Image className="h-10 w-10 opacity-60" aria-hidden="true" />
            <span className="text-sm">Blank editor image coming soon</span>
          </div>
        </div>
        <div className="bg-mint/40 p-6 text-foreground">
          <div className="mb-5 flex items-center gap-2 border-b border-border/20 pb-4 font-semibold"><Globe className="h-5 w-5" /> After · Level 6, published live</div>
          <div role="img" aria-label="Authentic published student game screenshot placeholder" className="flex aspect-video flex-col items-center justify-center gap-3 border border-dashed border-border/40 bg-card">
            <Image className="h-10 w-10 text-primary" aria-hidden="true" />
            <span className="text-sm">Student project image coming soon</span>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-lg text-muted-foreground">That blank screen is where every student starts. This is where they finish.</p>
    </section>
  );
}

export function AgeGroupedOfficeHours() {
  return (
    <section id="office-hours" className="border-y-[2.5px] border-border bg-accent/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-bold ink-border pop-sm"><Calendar className="h-4 w-4" /> WEEKLY · EST</span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Live mentor office hours — grouped by age</h2>
          <p className="mt-4 text-lg text-muted-foreground">Hop on Zoom, ask a question, share a project. Sessions are grouped by age band so younger builders and older builders each get time suited to their pace. Beginner-friendly, optional, and always free with membership. All sessions are group-based and supervised.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {officeGroups.map(group => (
            <div key={group.name}>
              <h3 className="mb-5 font-display text-2xl font-bold">{group.name} sessions <span className="text-muted-foreground">(ages {group.minAge}–{group.maxAge})</span></h3>
              <div className="grid gap-4">
                {group.sessions.map(session => (
                  <div key={session.day} className="flex items-center justify-between gap-3 rounded-lg bg-card p-4 ink-border pop-sm">
                    <div><p className="font-display text-xl font-bold">{session.day}</p><p className="text-sm text-muted-foreground">{session.time} EST</p></div>
                    <Button asChild className="rounded-full font-bold ink-border pop-sm"><a href="#pricing" aria-label={`Join ${group.name.toLowerCase()} ${session.day} session`}>Join <ArrowRight /></a></Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}