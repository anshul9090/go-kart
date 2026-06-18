import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
              <p className="text-xs text-neutral-500">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-neutral-300" />
              </div>
              <p className="text-neutral-900 font-semibold mb-1">
                Your cart is empty
              </p>
              <p className="text-sm text-neutral-500 mb-6">
                Looks like you haven't added anything yet
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-3 bg-neutral-50 rounded-2xl border border-neutral-100"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900 line-clamp-1 mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-sm font-bold text-primary-600 mb-3">
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white rounded-xl border border-neutral-200 p-0.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 text-neutral-600" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 text-neutral-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 rounded-xl hover:bg-error-50 text-neutral-400 hover:text-error-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-neutral-100 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="font-semibold text-neutral-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Shipping</span>
                <span className="font-semibold text-success-600">Free</span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-neutral-100">
                <span className="font-semibold text-neutral-900">Total</span>
                <span className="font-bold text-neutral-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-sm shadow-primary-600/20 active:scale-[0.98]">
              Checkout Now
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2.5 text-sm text-neutral-500 hover:text-error-500 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
