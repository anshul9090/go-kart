import { ArrowRight, TrendingUp, Truck, Shield, RotateCcw } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative p-8 sm:p-12 lg:p-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Summer Collection 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Discover Amazing{' '}
              <span className="text-primary-400">Deals</span> Today
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg mb-8 max-w-md">
              Shop the latest trends with up to 50% off. Free shipping on orders
              over $50.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/25 active:scale-[0.98]">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: Truck,
            title: 'Free Shipping',
            desc: 'On orders over $50',
          },
          {
            icon: Shield,
            title: 'Secure Payment',
            desc: '100% protected',
          },
          {
            icon: RotateCcw,
            title: 'Easy Returns',
            desc: '30-day policy',
          },
          {
            icon: TrendingUp,
            title: 'Best Prices',
            desc: 'Guaranteed savings',
          },
        ].map((badge) => (
          <div
            key={badge.title}
            className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-200"
          >
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <badge.icon className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {badge.title}
              </p>
              <p className="text-xs text-neutral-500">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
