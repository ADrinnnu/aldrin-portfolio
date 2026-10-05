import Reveal from "./Reveal";

// Shared row used by Experience and Activities — same ruled-list pattern as Education.
const EntryList = ({ entries, icon: Icon }) => (
  <ol>
    {entries.map((entry, i) => (
      <Reveal
        as="li"
        key={entry.id}
        delay={i * 0.05}
        className="group flex gap-4 border-b border-line py-5 last:border-b-0"
      >
        <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-soft text-faint transition-colors group-hover:border-faint group-hover:text-ink">
          {entry.logo ? (
            <img src={entry.logo} alt="" className="h-full w-full object-contain p-1.5 transition duration-500" />
          ) : (
            <Icon className="h-4 w-4" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="text-[15px] font-medium leading-snug text-ink">{entry.role}</p>
            <span className="shrink-0 font-mono text-[11px] text-faint">{entry.dates}</span>
          </div>
          <p className="mt-0.5 text-[13px] text-muted">
            {entry.org}
            {entry.location && <span className="text-faint"> · {entry.location}</span>}
          </p>
          {entry.summary && <p className="mt-3 text-[14px] leading-relaxed text-muted">{entry.summary}</p>}
          {entry.highlights?.length > 0 && (
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-muted">
              {entry.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          {entry.tech?.length > 0 && (
            <p className="mt-3 font-mono text-[11.5px] leading-relaxed text-faint">{entry.tech.join(" · ")}</p>
          )}
        </div>
      </Reveal>
    ))}
  </ol>
);

export default EntryList;
