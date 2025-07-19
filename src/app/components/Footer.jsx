import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 text-white font-averia text-sm flex justify-center items-center gap-4 fixed bottom-0 bg-transparent sm:justify-end sm:px-20">
      <a
        href="https://www.instagram.com/__mrs.reyes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/karina-lorenzo/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin size={25} />
      </a>
    </footer>
  );
};

export default Footer;
