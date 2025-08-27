import React from 'react';
import Logo from "../assets/images/cluck-logo.jpg";
export default function Navbar() {
  return (
  <nav className="w-full bg-white py-2 px-10 flex items-center justify-center fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center space-x-8">
        {/* Left Links */}
  <div className="flex space-x-10 text-red-600 font-bold text-lg uppercase tracking-wide">
          <a href="/locations" className="hover:text-red-700">Locations</a>
          <a href="/menu" className="hover:text-red-700">Menu</a>
          <a href="/catering" className="hover:text-red-700">Catering</a>
          <a href="/about" className="hover:text-red-700">About</a>
        </div>

        {/* Logo */}
          <div className="mx-8 flex items-center" style={{height: '90px'}}>
            <img
              src={Logo}
              alt="Cluck Clucks"
              className="h-24 w-auto max-h-full"
              style={{maxHeight: '90px'}}
            />
          </div>

        {/* Right Links */}
  <div className="flex items-center space-x-6 text-red-600 font-bold text-lg uppercase tracking-wide">
          <a href="/franchising" className="hover:text-red-700">Franchising</a>
          <a href="/offers" className="hover:text-red-700">Offers</a>
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-sm hover:bg-yellow-500">
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
}

