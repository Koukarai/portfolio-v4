/**
 * The index is a site-wide page number: about 01, work 02, services 03,
 * contact 04, privacy 05. Homepage sections omit it, since the page shows only
 * a subset and the missing numbers read as a mistake.
 */
export default function SectionHeading({
  index,
  title,
}: {
  index?: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      {index && <span className="font-mono text-sm text-accent">({index})</span>}
      <h2 className="text-sm font-mono tracking-[0.3em] text-muted">{title}</h2>
    </div>
  );
}
