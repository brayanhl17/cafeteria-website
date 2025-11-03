import { Coffee, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-500" />
              <span className="text-xl">Café Delicias</span>
            </div>
            <p className="text-gray-400">
              Tu lugar favorito para disfrutar del mejor café y alimentos frescos
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cafe" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Café
                </a>
              </li>
              <li>
                <a href="#alimentos" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Alimentos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@cafedelicias.com" className="hover:text-amber-500 transition-colors">
                  info@cafedelicias.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-3">Síguenos en redes sociales:</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
          
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Café Delicias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
