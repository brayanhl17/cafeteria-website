import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const coffeeProducts = [
    {
      title: 'Espresso Clásico',
      description: 'Un shot perfecto de café italiano con crema dorada',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1606310553997-7a01e22900ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjIwMTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Cappuccino Artesanal',
      description: 'Espresso con leche vaporizada y arte latte',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzYyMDA5MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Café Helado',
      description: 'Refrescante café frío con hielo y un toque de vainilla',
      price: '$4.00',
      image: 'https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzYyMTAzOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const foodProducts = [
    {
      title: 'Croissant Francés',
      description: 'Croissant recién horneado con mantequilla',
      price: '$3.00',
      image: 'https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzYyMDUzMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Sandwich Gourmet',
      description: 'Pan artesanal con ingredientes frescos y selectos',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1712725213059-a05103ed48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGNhZmV8ZW58MXx8fHwxNzYyMDc3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Pastel del Día',
      description: 'Delicioso pastel artesanal hecho en casa',
      price: '$5.00',
      image: 'https://images.unsplash.com/photo-1705933774160-24298027a349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjIxMDM2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Sección de Cafés Populares */}
      <section id="cafe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-amber-900">Cafés Populares</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras bebidas favoritas, preparadas con pasión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {coffeeProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors">
              Ver Más Cafés
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Alimentos */}
      <section id="alimentos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-amber-900">Alimentos Frescos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acompaña tu café con nuestros deliciosos alimentos artesanales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {foodProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors">
              Ver Más Alimentos
            </button>
          </div>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-amber-900">Sobre Nosotros</h2>
              <p className="text-gray-600 mb-4">
                En Café Delicias, nos apasiona ofrecer la mejor experiencia de café a nuestros
                clientes. Desde 2010, hemos sido el punto de encuentro favorito para amantes del
                café, estudiantes y profesionales.
              </p>
              <p className="text-gray-600 mb-4">
                Utilizamos granos de café de origen único, seleccionados cuidadosamente de las
                mejores fincas de América Latina. Nuestros baristas expertos preparan cada taza
                con dedicación y amor.
              </p>
              <p className="text-gray-600">
                Ven y descubre por qué somos más que una cafetería, somos una comunidad.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <p className="text-amber-900 mb-2">15+</p>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <p className="text-amber-900 mb-2">50+</p>
                <p className="text-gray-600">Variedades de café</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <p className="text-amber-900 mb-2">1000+</p>
                <p className="text-gray-600">Clientes felices</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <p className="text-amber-900 mb-2">100%</p>
                <p className="text-gray-600">Café de calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <ServicesSection />

      <Footer />
      <Chatbot />
    </div>
  );
}
