import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          MonLogo
        </Link>
        
        {/* Menu en grand écran */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Accueil
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            À propos
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
        
        {/* Bouton du menu pour mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Menu déroulant pour mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 p-4 space-y-2">
          <Link to="/" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link to="/about" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            À propos
          </Link>
          <Link to="/services" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;