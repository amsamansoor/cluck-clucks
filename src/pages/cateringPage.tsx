import React from "react";
import { heroContent } from "../content/catering";

const CateringPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <div className="w-full h-96 relative flex items-center justify-center">
        <img
          src={heroContent.heroImage}
          alt="Catering Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
            CATERING
          </h1>
          <p className="text-xl text-white drop-shadow mb-6">
            {heroContent.heading}
          </p>
          <p className="text-lg text-white drop-shadow mb-8">
            {heroContent.tagline}
          </p>
          <a
            href={heroContent.orderLink}
            className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded shadow hover:bg-yellow-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Load More Content Button */}
      <button className="mt-10 px-6 py-2 bg-yellow-500 text-white font-semibold rounded shadow hover:bg-yellow-600 transition">
        Load More Content
      </button>
      {/* Logo Link */}
      <a
        href="https://www.cluckcluckschicken.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8"
      >
        <img src="/vite.svg" alt="Cluck Clucks Logo" className="h-12" />
      </a>
    </div>
  );
};

export default CateringPage;
