import { useEffect, useRef, useState } from "react";
import { Globe, RotateCcw } from "lucide-react";

/**
 * "Watch it build" — code types itself out on the left while a live preview
 * assembles on the right, showing HTML, CSS and JavaScript working together.
 *
 * The site being built ("My Space Club") is a demo, not student work.
 */

type Lang = "html" | "css" | "js";

type Step = { lang: Lang; code: string };

const FILES: Record<Lang, string> = { html: "index.html", css: "style.css", js: "script.js" };

const STEPS: Step[] = [
  { lang: "html", code: "<h1>My Space Club</h1>" },
  { lang: "html", code: '<img class="rocket" src="rocket.svg">' },
  { lang: "html", code: "<button>Launch!</button>" },
  { lang: "css", code: "body { background: midnightblue; }" },
  { lang: "css", code: "h1 { color: gold; }" },
  { lang: "css", code: ".rocket { animation: float 2s infinite; }" },
  { lang: "js", code: 'button.onclick = () => {\n  rocket.classList.add("launch");\n};' },
];

const LAST = STEPS.length - 1;
const CHAR_MS = 28;
const STEP_PAUSE_MS = 650;
const CLICK_MS = 450;
const LAUNCH_MS = 1700;

const LANG_STYLE: Record<Lang, { label: string; className: string }> = {
  html: { label: "HTML", className: "bg-primary text-primary-foreground" },
  css: { label: "CSS", className: "bg-secondary text-secondary-foreground" },
  js: { label: "JavaScript", className: "bg-sun text-sun-foreground" },
};

type Phase = "idle" | "typing" | "pause" | "click" | "launch" | "done";

type State = { step: number; chars: number; phase: Phase };

const FINAL: State = { step: LAST, chars: STEPS[LAST].code.length, phase: "done" };
const START: State = { step: 0, chars: 0, phase: "typing" };

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Tiny highlighter: tags, strings, and punctuation get their own colors. */
function highlight(text: string) {
  const parts = text.split(/(<\/?[a-z0-9]+|"[^"]*"?|[{}();=>])/gi);
  return parts.map((part, i) => {
    if (!part) return null;
    let cls = "";
    if (/^<\/?[a-z0-9]+$/i.test(part)) cls = "text-[oklch(0.78_0.15_35)]";
    else if (/^"/.test(part)) cls = "text-[oklch(0.85_0.14_155)]";
    else if (/^[{}();=>]$/.test(part)) cls = "text-background/50";
    return (
      <span key={i} className={cls}>
        {part}
      </span>
    );
  });
}

function Rocket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden="true">
      <g stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M24 3 C36 14 37 34 33 46 H15 C11 34 12 14 24 3 Z" fill="var(--card)" />
        <path d="M15 34 L5 48 L15 46 Z" fill="var(--primary)" />
        <path d="M33 34 L43 48 L33 46 Z" fill="var(--primary)" />
        <circle cx="24" cy="24" r="6" fill="var(--secondary)" />
        <path d="M18 46 L24 60 L30 46 Z" fill="var(--sun)" />
      </g>
    </svg>
  );
}

const STARS = [
  [8, 14],
  [22, 70],
  [35, 28],
  [48, 82],
  [62, 12],
  [74, 58],
  [88, 22],
  [92, 76],
  [15, 45],
  [80, 40],
];

export function WatchItBuild() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>({ step: 0, chars: 0, phase: "idle" });
  const [reduced, setReduced] = useState(false);

  // Start when the section scrolls into view (or jump to the end for reduced motion).
  useEffect(() => {
    if (prefersReducedMotion()) {
      setReduced(true);
      setState(FINAL);
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState((s) => (s.phase === "idle" ? START : s));
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Animation clock.
  useEffect(() => {
    const { step, chars, phase } = state;
    let t: ReturnType<typeof setTimeout> | undefined;
    if (phase === "typing") {
      const len = STEPS[step].code.length;
      if (chars < len) {
        t = setTimeout(() => setState({ step, chars: chars + 1, phase }), CHAR_MS);
      } else {
        t = setTimeout(
          () => setState({ step, chars, phase: step === LAST ? "click" : "pause" }),
          150,
        );
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setState({ step: step + 1, chars: 0, phase: "typing" }), STEP_PAUSE_MS);
    } else if (phase === "click") {
      t = setTimeout(() => setState({ step, chars, phase: "launch" }), CLICK_MS);
    } else if (phase === "launch") {
      t = setTimeout(() => setState({ step, chars, phase: "done" }), LAUNCH_MS);
    }
    return () => clearTimeout(t);
  }, [state]);

  const replay = () => setState(reduced ? FINAL : START);

  // A step counts as "applied" to the preview once its line is fully typed.
  const { step, chars, phase } = state;
  const started = phase !== "idle";
  const applied = (i: number) =>
    started && (i < step || (i === step && chars >= STEPS[i].code.length));

  const showH1 = applied(0);
  const showRocket = applied(1);
  const showButton = applied(2);
  const spaceBg = applied(3);
  const goldH1 = applied(4);
  const floating = applied(5) && !reduced;
  const clicking = phase === "click";
  const launching = phase === "launch";
  const finished = phase === "done";

  const activeLang = STEPS[step].lang;
  const fileText = STEPS.map((s, i) => {
    if (s.lang !== activeLang || !started || i > step) return null;
    return i === step ? s.code.slice(0, chars) : s.code;
  })
    .filter((s): s is string => s !== null)
    .join("\n");
  const typing = phase === "typing";

  return (
    <div ref={rootRef}>
      <p className="sr-only">
        Animated demo: code is typed line by line in HTML, CSS and JavaScript while a preview of a
        sample website called My Space Club builds alongside it, ending with a button that launches
        a rocket.
      </p>
      <div className="grid overflow-hidden rounded-lg ink-border md:grid-cols-2" aria-hidden="true">
        {/* Editor */}
        <div className="bg-foreground p-4 text-background sm:p-6">
          <div className="mb-4 flex items-center gap-1 border-b border-background/20 pb-3 text-xs font-semibold sm:text-sm">
            {(Object.keys(FILES) as Lang[]).map((lang) => (
              <span
                key={lang}
                className={`rounded-md px-2 py-1 font-mono transition-colors duration-300 ${
                  started && lang === activeLang
                    ? "bg-background/15 text-background"
                    : "text-background/45"
                }`}
              >
                {FILES[lang]}
              </span>
            ))}
          </div>
          <pre className="aspect-video overflow-hidden whitespace-pre-wrap break-words font-mono text-xs leading-relaxed sm:text-sm">
            {started ? (
              <>
                {highlight(fileText)}
                <span
                  className={`ml-px inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-sun ${
                    typing ? "" : "motion-safe:animate-pulse"
                  }`}
                />
              </>
            ) : (
              <span className="inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-sun motion-safe:animate-pulse" />
            )}
          </pre>
        </div>

        {/* Live preview */}
        <div className="bg-mint/40 p-4 text-foreground sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-2 border-b border-border/20 pb-3 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <Globe className="h-5 w-5" /> Live preview
            </span>
            <span
              key={activeLang}
              className={`rounded-full px-2.5 py-0.5 text-xs font-bold ink-border transition-all duration-300 ${
                started ? LANG_STYLE[activeLang].className : "opacity-0"
              } ${finished ? "opacity-0" : ""}`}
            >
              {LANG_STYLE[activeLang].label}
            </span>
          </div>

          <div
            className="relative flex aspect-video flex-col items-center justify-center gap-2 overflow-hidden rounded-md border-[2px] border-border transition-colors duration-700"
            style={{ backgroundColor: spaceBg ? "midnightblue" : "white" }}
          >
            {/* Stars */}
            {STARS.map(([x, y], i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white transition-opacity duration-700"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  opacity: spaceBg ? 0.8 : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              />
            ))}

            {!started && (
              <span className="font-mono text-xs text-muted-foreground">(empty page)</span>
            )}

            {showH1 && (
              <h4
                className="relative z-10 animate-in fade-in zoom-in-95 duration-300 transition-colors"
                style={{
                  fontFamily: goldH1 ? "var(--font-display)" : "Times New Roman, serif",
                  color: goldH1 ? "gold" : spaceBg ? "white" : "black",
                  fontSize: goldH1 ? "clamp(1.25rem, 3vw, 1.75rem)" : "clamp(1rem, 2.4vw, 1.4rem)",
                  fontWeight: 700,
                  transitionDuration: "500ms",
                }}
              >
                My Space Club
              </h4>
            )}

            {showRocket && (
              <div className="relative z-10 h-[30%] animate-in fade-in duration-300">
                <Rocket
                  className={`h-full w-auto ${floating && !launching ? "wib-float" : ""} ${launching ? "wib-launch" : ""} ${
                    finished && !reduced ? "wib-return" : ""
                  }`}
                />
              </div>
            )}

            {showButton && (
              <button
                type="button"
                tabIndex={-1}
                className={`relative z-10 rounded-[3px] border border-neutral-400 bg-neutral-100 px-2 py-0.5 text-xs text-black transition-transform animate-in fade-in duration-300 sm:text-sm ${
                  clicking ? "scale-90 bg-neutral-300" : ""
                }`}
              >
                Launch!
              </button>
            )}

            {/* Pointer that "clicks" the button */}
            {(clicking || launching) && (
              <span className="pointer-events-none absolute bottom-[12%] left-[56%] z-20 text-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
                👆
              </span>
            )}

            {finished && !reduced && (
              <span className="absolute right-2 top-2 z-10 rounded-full bg-sun px-2 py-0.5 text-[10px] font-bold text-sun-foreground ink-border animate-in zoom-in-50 duration-300 sm:text-xs">
                Liftoff!
              </span>
            )}

            <span className="absolute bottom-1.5 left-2 z-10 text-[10px] font-semibold uppercase tracking-wide text-white/60 mix-blend-difference">
              Demo project
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <div className="flex gap-1.5" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full border-[1.5px] border-border transition-colors duration-300 ${
                applied(i)
                  ? s.lang === "html"
                    ? "bg-primary"
                    : s.lang === "css"
                      ? "bg-secondary"
                      : "bg-sun"
                  : "bg-card"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={replay}
          className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 font-semibold text-foreground ink-border pop-sm transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Replay
        </button>
      </div>
    </div>
  );
}
