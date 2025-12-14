import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={28} className="text-blue-400" />
              <span className="text-xl font-bold">Jadev.cl</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones de software a medida para transformar y optimizar tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Software a Medida
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Consultoría IT
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-400 hover:text-white transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="text-gray-400 hover:text-white transition-colors">
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-gray-400 hover:text-white transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 mr-3 mt-1" />
                <a href="mailto:contacto@jadev.cl" className="text-gray-400 hover:text-white transition-colors">
                  contacto@jadev.cl
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-blue-400 mr-3 mt-1" />
                <a href="tel:+56912345678" className="text-gray-400 hover:text-white transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  Concepción, Chile
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Jadev.cl. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;