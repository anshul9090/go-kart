import { useState } from 'react';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Zap,
  Heart,
  Bell,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onMenuToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({
  onMenuToggle,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-neutral-700" />
            </button>
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:shadow-primary-600/30 transition-shadow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-neutral-900 tracking-tight hidden sm:block">
                Go<span className="text-primary-600">Kart</span>
              </span>
            </a>
          </div>

          <div
            className={`flex-1 max-w-xl mx-4 transition-all duration-300 ${
              isSearchFocused ? 'scale-[1.02]' : ''
            }`}
          >
            <div
              className={`relative flex items-center bg-neutral-50 rounded-xl border transition-all duration-200 ${
                isSearchFocused
                  ? 'border-primary-400 ring-4 ring-primary-100 bg-white'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <Search
                className={`absolute left-3 w-4 h-4 transition-colors ${
                  isSearchFocused ? 'text-primary-500' : 'text-neutral-400'
                }`}
              />
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2.5 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 p-0.5 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-neutral-500" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button className="hidden md:flex p-2.5 rounded-xl hover:bg-neutral-100 transition-colors relative group">
              <Heart className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
            </button>
            <button className="hidden md:flex p-2.5 rounded-xl hover:bg-neutral-100 transition-colors relative group">
              <Bell className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-500 rounded-full" />
            </button>
            <button className="hidden sm:flex p-2.5 rounded-xl hover:bg-neutral-100 transition-colors group">
              <User className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl hover:bg-neutral-100 transition-colors group"
            >
              <ShoppingCart className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-accent-500 text-white text-[10px] font-bold rounded-full shadow-sm">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
