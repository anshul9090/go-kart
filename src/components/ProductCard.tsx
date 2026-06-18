import { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const discount = product.discount || Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div
      className="group relative bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="px-2.5 py-1 bg-accent-500 text-white text-[10px] font-bold uppercase tracking-wide rounded-lg shadow-sm">
              -{discount}%
            </span>
          )}
          {product.badge && (
            <span className="px-2.5 py-1 bg-primary-600 text-white text-[10px] font-bold uppercase tracking-wide rounded-lg shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-3'
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-xl shadow-md transition-all duration-200 ${
              isLiked
                ? 'bg-error-500 text-white'
                : 'bg-white text-neutral-600 hover:text-error-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 rounded-xl bg-white text-neutral-600 hover:text-primary-600 shadow-md transition-all duration-200">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[11px] font-medium text-primary-600 uppercase tracking-wider mb-1.5">
          {product.category}
        </p>

        <h3 className="text-sm font-semibold text-neutral-900 line-clamp-2 mb-2 leading-snug min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-warning-500 fill-warning-500'
                    : 'text-neutral-200 fill-neutral-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-neutral-900">
                ${product.price.toFixed(2)}
              </span>
              {discount > 0 && (
                <span className="text-xs text-neutral-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={addedToCart}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              addedToCart
                ? 'bg-success-500 text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/20 active:scale-95'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {addedToCart ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}
