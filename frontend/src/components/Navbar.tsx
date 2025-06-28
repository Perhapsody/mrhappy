import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.svg" alt="MrHappy Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-gray-800">MrHappy</span>
      </Link>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`md:flex space-x-4 ${menuOpen ? "block" : "hidden"} md:block`}>
        <Link to="/productos" className="block py-2 px-4 text-gray-700 hover:text-blue-500">
          Productos
        </Link>
        <Link to="/sobre-nosotros" className="block py-2 px-4 text-gray-700 hover:text-blue-500">
          Sobre Nosotros
        </Link>
      </div>
    </nav>
  );
};
