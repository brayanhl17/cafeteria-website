export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzYyMTMzMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        {/* Overlay removido temporalmente para debug */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-6 text-6xl md:text-7xl font-bold tracking-wider text-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>Café Delicias</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Donde cada taza cuenta una historia
        </p>
        <button className="mt-8 px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors">
          Descubre Nuestro Menú
        </button>
      </div>
    </section>
  );
}
