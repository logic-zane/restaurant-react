// components/Menu.jsx
import { useCart } from "./CartContext";

const menuData = {
  Appetizers: [
    {
      name: "Golden Fries",
      description: "Crispy french fries with our secret seasoning",
      price: 5.99,
    },
    {
      name: "Spicy Chicken Wings",
      description: "6 pieces with your choice of sauce (Mild/Hot/Inferno)",
      price: 8.99,
    },
    {
      name: "Escargots",
      description: "Traditional French snails in garlic butter",
      price: 12.99,
    },
  ],
  "Main Courses": [
    {
      name: "Artisan Pizza",
      description:
        '12" with mozzarella, tomato sauce, and your choice of 3 toppings',
      price: 14.99,
    },
    {
      name: "Mexican Tacos",
      description:
        "3 soft corn tortillas with seasoned meat, salsa, and fresh veggies",
      price: 11.99,
    },
    {
      name: "BBQ Ribs",
      description:
        "Full rack with homemade barbecue sauce and coleslaw",
      price: 18.99,
    },
  ],
  Desserts: [
    {
      name: "Strawberry Cake",
      description: "Vanilla sponge cake with fresh strawberry topping",
      price: 7.99,
    },
  ],
};

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Menu
      </h1>

      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-gray-900 font-semibold mb-4">
                  ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
