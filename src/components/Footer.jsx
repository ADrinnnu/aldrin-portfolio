import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { socials } from "./Navbar";

const Footer = () => (
  <footer className="mt-24 flex flex-col gap-4 border-t border-line py-8 font-mono text-[11.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
    <p>Designed &amp; Built by Aldrin Villanueva · {new Date().getFullYear()}</p>
    <div className="flex items-center gap-5">
      {socials.map(({ name, href }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer" className="link-line inline-flex items-center gap-0.5 hover:text-ink">
          {name.toLowerCase()} <FiArrowUpRight className="h-3 w-3" />
        </a>
      ))}
      <a href="#home" className="link-line inline-flex items-center gap-0.5 hover:text-ink">
        top <FiArrowUp className="h-3 w-3" />
      </a>
    </div>
  </footer>
);

export default Footer;