import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center border-t border-slate-800 bg-darker">
      <div className="flex justify-center gap-6 mb-4 text-slate-400">
        <a href="https://github.com/ADrinnnu" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
          <FiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/aldrin-villanueva-306781317" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
          <FiLinkedin size={24} />
        </a>
        
      </div>
      <p className="text-slate-500 font-mono text-sm">
        Designed & Built by Aldrin Villanueva
      </p>
    </footer>
  );
};

export default Footer;