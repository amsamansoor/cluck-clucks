import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Cluck Clucks Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl font-mont tracking-wide">Cluck Clucks</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mont text-sm uppercase">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="/catering" className="hover:text-yellow-400 transition">Catering</a>
          <a href="/about" className="hover:text-yellow-400 transition">About</a>
          <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        <a
          href="/order"
          className="hidden sm:block bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg uppercase hover:bg-yellow-300 transition"
        >
          Order Now
        </a>

        <button className="md:hidden text-white text-2xl focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black w-full absolute left-0 top-full shadow-lg">
          <nav className="flex flex-col items-center py-6 gap-6 font-mont uppercase">
            <a href="/" className="hover:text-yellow-400 transition">Home</a>
            <a href="/menu" className="hover:text-yellow-400 transition">Menu</a>
            <a href="/catering" className="hover:text-yellow-400 transition">Catering</a>
            <a href="/about" className="hover:text-yellow-400 transition">About</a>
            <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
            <a
              href="/order"
              className="mt-2 px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
