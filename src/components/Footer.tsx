import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Go<span className="text-primary-400">Kart</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Your one-stop destination for premium shopping. Quality products, unbeatable prices, and exceptional service.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-neutral-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-300">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {['About Us', 'Contact', 'FAQs', 'Shipping Info', 'Returns'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-300">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Beauty'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-300">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-neutral-400">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                support@gokart.com
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-400">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                123 Commerce St, Suite 100<br />New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 GoKart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
