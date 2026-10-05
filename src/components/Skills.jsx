import { skillGroups as groups } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const total = groups.reduce((sum, g) => sum + g.items.length, 0);

const Skills = () => (
  <section id="skills">
    <SectionHeading index="04" title="stack" aside={`${total} tools`} />
    <div className="space-y-10">
      {groups.map((group) => (
        <Reveal key={group.label} className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:pt-4">{group.label}</p>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {group.items.map((skill) => {
              const Icon = skill.icon;
              return (
                <li
                  key={skill.name}
                  className="group flex items-start gap-3 bg-paper p-4 transition-colors duration-300 hover:bg-soft sm:odd:last:col-span-2"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-ink transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <div>
                    <p className="text-[14px] font-medium text-ink">{skill.name}</p>
                    {skill.desc && <p className="mt-0.5 text-[12.5px] leading-snug text-muted">{skill.desc}</p>}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;