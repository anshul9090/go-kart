import { useMemo } from 'react';
import { SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react';
import type { Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  searchQuery: string;
}

export default function ProductGrid({
  products,
  activeCategory,
  searchQuery,
}: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, activeCategory, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-neutral-900">
            {activeCategory === 'all' ? 'All Products' : (
              activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
            )}
          </h2>
          <p className="text-sm text-neutral-500 mt-0.5">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <div className="flex items-center bg-white border border-neutral-200 rounded-xl p-0.5">
            <button className="p-2 rounded-lg bg-neutral-100 text-neutral-900">
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 transition-colors">
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-4">
            <SlidersHorizontal className="w-6 h-6 text-neutral-300" />
          </div>
          <p className="text-lg font-semibold text-neutral-900 mb-1">
            No products found
          </p>
          <p className="text-sm text-neutral-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
