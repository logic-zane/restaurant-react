
export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IT'shelter</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#hero" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#menu" className="hover:text-yellow-400">Menu</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    );
  }
  