"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-6 w-full text-white p-4 z-50">
      <div className="flex items-center justify-between">
      <a href="/" className="text-white font-bad-script text-[20px]">
          Karina Lorenzo
        </a>
        <button
          className="md:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex gap-12 font-averia font-bold text-sm mr-8">
          <a href="/about">Sobre mí</a>
          <a href="/inspiration">Lo que me inspira</a>
          <a href="/projects">Proyectos</a>
          <a href="/contact">Contacto</a>
        </nav>
        
       
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 font-averia font-bold text-sm md:hidden">
          <a href="/about" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="/inspiration" onClick={() => setMenuOpen(false)}>
            Lo que me inspira
          </a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
