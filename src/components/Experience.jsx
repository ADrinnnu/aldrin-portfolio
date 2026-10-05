import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data";
import SectionHeading from "./SectionHeading";
import EntryList from "./EntryList";

const Experience = () => (
  <section id="experience">
    <SectionHeading index="01" title="experience" aside="internship" />
    <EntryList entries={experience} icon={FiBriefcase} />
  </section>
);

export default Experience;
