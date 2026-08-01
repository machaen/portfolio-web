export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-line-soft bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5">
        <span className="font-mono text-[13px] font-medium tracking-wide text-ink">
          julio<span className="font-semibold text-amber">.</span>betancourt
        </span>
        <div className="hidden gap-[22px] font-mono text-xs text-ink-dim sm:flex">
          <a href="#timeline" className="transition-colors hover:text-amber">timeline</a>
          <a href="#skills" className="transition-colors hover:text-amber">stack</a>
          <a href="#contact" className="transition-colors hover:text-amber">contact</a>
        </div>
      </div>
    </nav>
  );
}
