import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export function ProductCard({ title, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-700">{price}</span>
          <button className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

