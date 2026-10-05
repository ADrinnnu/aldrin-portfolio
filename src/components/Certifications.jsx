import { certifications } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Certifications = () => (
  <section id="certifications">
    <SectionHeading index="03" title="certifications" aside={`${certifications.length} entries`} />
    <ol>
      {certifications.map((cert, i) => {
        const Icon = cert.icon;
        return (
          <Reveal
            as="li"
            key={cert.id}
            delay={i * 0.05}
            className="group flex gap-4 border-b border-line py-4 last:border-b-0"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-soft text-faint transition-colors group-hover:border-faint group-hover:text-ink">
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-[15px] font-medium leading-snug text-ink">{cert.name}</p>
                <span className="shrink-0 font-mono text-[11px] text-faint">{cert.date}</span>
              </div>
              <p className="mt-0.5 text-[13px] text-muted">{cert.provider}</p>
              <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-muted">
                {cert.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </ol>
  </section>
);

export default Certifications;
