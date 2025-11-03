import { Coffee, Wifi, Clock, MapPin } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Coffee,
      title: "Café de Especialidad",
      description:
        "Granos seleccionados de las mejores regiones del mundo",
    },
    {
      icon: Wifi,
      title: "WiFi Gratis",
      description:
        "Internet de alta velocidad para que trabajes o estudies",
    },
    {
      icon: Clock,
      title: "Horario Extendido",
      description:
        "Abierto de 7:00 AM a 10:00 PM todos los días",
    },
    {
      icon: MapPin,
      title: "Ubicación Céntrica",
      description: "En el corazón de la ciudad, fácil acceso",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-amber-900">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos más que café, brindamos una experiencia
            completa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}