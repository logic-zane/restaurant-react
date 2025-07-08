// components/CartModal.jsx
import { useCart } from "./CartContext";
import { useState } from "react";

export default function CartModal() {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = Array.isArray(cart)
    ? cart.reduce((s, i) => s + i.quantity, 0)
    : 0;

  return (
    <>
      {/* Position the cart button lower so it doesn’t cover the navbar */}
      <div className="fixed top-[100px] right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          🛒 View Cart ({totalItems})
        </button>
      </div>

      {isOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Side cart panel */}
          <div className="fixed top-0 right-0 h-full w-[400px] bg-white z-50 shadow-lg p-6 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Your Cart</h3>

            {Array.isArray(cart) && cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              Array.isArray(cart) &&
              cart.map((item) => (
                <div key={item.name} className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.name, -1)}
                      className="px-2"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, 1)}
                      className="px-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="mt-6 font-bold">Total: ${total.toFixed(2)}</div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={clearCart}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Clear
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
