import Reveal from "./Reveal";

const SectionHeading = ({ index, title, aside }) => (
  <Reveal className="mb-6 flex items-baseline justify-between border-b border-line pb-4">
    <h2 className="font-mono text-[13px] text-faint">
      <span className="text-ink">{index}</span> — {title}
    </h2>
    {aside && (
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{aside}</span>
    )}
  </Reveal>
);

export default SectionHeading;
