import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b-[2.5px] border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary ink-border pop-sm transition-transform group-hover:rotate-[-6deg]">
            <span className="font-display text-xl font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Syncho<span className="text-primary">.ai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#how" className="text-sm font-bold hover:text-primary transition-colors">How it works</a>
          <a href="#what" className="text-sm font-bold hover:text-primary transition-colors">What you get</a>
          <a href="#pricing" className="text-sm font-bold hover:text-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-bold hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.syncho.ai/login"
            className="hidden sm:inline-flex text-sm font-bold hover:text-primary transition-colors px-3 py-2"
          >
            Student Login
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold ink-border pop-sm pop-hover"
          >
            <Sparkles className="h-4 w-4" />
            Start $1.99
          </a>
        </div>
      </div>
    </header>
  );
}
