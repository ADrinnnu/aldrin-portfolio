import { education } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Education = () => (
  <section id="education">
    <SectionHeading index="02" title="education" aside={`${education.length} entries`} />
    <ol>
      {education.map((item, i) => (
        <Reveal
          as="li"
          key={item.id}
          delay={i * 0.05}
          className="group flex items-center gap-4 border-b border-line py-4 last:border-b-0"
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-soft p-1.5 transition-colors group-hover:border-faint">
            <img
              src={item.logo}
              alt={`${item.school} logo`}
              className="h-full w-full object-contain transition duration-500"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-medium leading-snug text-ink">{item.degree}</p>
            <p className="mt-0.5 truncate text-[13px] text-muted">{item.school}</p>
            {item.specialization && <p className="mt-0.5 text-[13px] text-muted">{item.specialization}</p>}
            {item.coursework && (
              <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-faint">
                Coursework: {item.coursework.join(" · ")}
              </p>
            )}
          </div>
          <span className="shrink-0 font-mono text-[11px] text-faint">{item.year.replace("S.Y. ", "")}</span>
        </Reveal>
      ))}
    </ol>
  </section>
);

export default Education;