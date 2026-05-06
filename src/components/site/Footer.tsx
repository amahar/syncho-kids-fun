export function Footer() {
  return (
    <footer className="border-t-[2.5px] border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <span className="font-display text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-display text-lg font-bold">Syncho.ai Academy</span>
          </div>
          <p className="text-sm opacity-70">© {new Date().getFullYear()} Syncho AI Academy · Made with ❤️ for young creators</p>
        </div>
      </div>
    </footer>
  );
}
