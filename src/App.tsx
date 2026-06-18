import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { products } from './data/products';

function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="max-w-7xl mx-auto flex">
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <HeroBanner />
          <div className="mt-8">
            <ProductGrid
              products={products}
              activeCategory={activeCategory}
              searchQuery={searchQuery}
            />
          </div>
        </main>
      </div>

      <CartDrawer />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Dashboard />
    </CartProvider>
  );
}

export default App;
