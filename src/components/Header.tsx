import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-blue-700">
            <Code2 size={28} className="text-blue-700" />
            <span className="text-xl font-bold">Jadev.cl</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Beneficios
            </a>
            <a href="#proceso" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Proceso
            </a>
            <a href="#tecnologias" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Tecnologías
            </a>
            <a href="#portafolio" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Portafolio
            </a>
            <a href="#contacto" className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
              Contáctanos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4 bg-white">
            <a 
              href="#beneficios" 
              className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#proceso" 
              className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proceso
            </a>
            <a 
              href="#tecnologias" 
              className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnologías
            </a>
            <a 
              href="#portafolio" 
              className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portafolio
            </a>
            <a 
              href="#contacto" 
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;