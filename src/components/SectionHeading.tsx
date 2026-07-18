export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">({index})</span>
      <h2 className="text-sm font-mono tracking-[0.3em] text-muted">
        {title}
      </h2>
    </div>
  );
}
