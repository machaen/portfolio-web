export default function SectionHeading({ num, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-wider text-amber">{num}</span>
      <h2 className="font-display text-[1.55rem] font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
