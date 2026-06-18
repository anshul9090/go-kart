import {
  LayoutGrid,
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { categories } from '../data/products';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Sparkles,
};

export default function Sidebar({
  activeCategory,
  onCategoryChange,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-16 lg:top-0 left-0 z-30 h-[calc(100vh-4rem)] lg:h-[calc(100vh-0px)] w-64 bg-white border-r border-neutral-200 transform transition-transform duration-300 ease-out lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto scrollbar-hide`}
      >
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-2">
              Categories
            </h2>
            <nav className="space-y-0.5">
              {categories.map((cat) => {
                const Icon = iconMap[cat.icon] || LayoutGrid;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onCategoryChange(cat.id);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 shadow-sm'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    <Icon
                      className={`w-4.5 h-4.5 transition-colors ${
                        isActive ? 'text-primary-600' : 'text-neutral-400 group-hover:text-neutral-600'
                      }`}
                      style={{ width: '18px', height: '18px' }}
                    />
                    <span className="flex-1 text-left">{cat.name}</span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-primary-500" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mb-6">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-2">
              Filters
            </h2>
            <div className="space-y-2 px-2">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  Free Shipping
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  On Sale
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  4+ Stars
                </span>
              </label>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-2xl">
            <p className="text-sm font-semibold text-primary-800 mb-1">
              Summer Sale!
            </p>
            <p className="text-xs text-primary-600 mb-3">
              Up to 50% off on selected items
            </p>
            <button className="w-full py-2 bg-primary-600 text-white text-xs font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-sm shadow-primary-600/20">
              Shop Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
