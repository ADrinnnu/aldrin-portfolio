import { FiUsers } from "react-icons/fi";
import { activities } from "../data";
import SectionHeading from "./SectionHeading";
import EntryList from "./EntryList";

const Activities = () => (
  <section id="activities">
    <SectionHeading index="06" title="leadership & activities" aside="extracurricular" />
    <EntryList entries={activities} icon={FiUsers} />
  </section>
);

export default Activities;
