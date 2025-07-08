// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-gray-800">
          IT'shelter
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-500 transition">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
