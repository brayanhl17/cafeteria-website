import { Coffee, ShoppingCart, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-700" />
            <span className="text-amber-900">Café Delicias</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-700 hover:text-amber-700 transition-colors">
              Inicio
            </a>
            <a href="#cafe" className="text-gray-700 hover:text-amber-700 transition-colors">
              Café
            </a>
            <a href="#alimentos" className="text-gray-700 hover:text-amber-700 transition-colors">
              Alimentos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-amber-700 transition-colors">
              Nosotros
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute top-0 right-0 bg-amber-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
