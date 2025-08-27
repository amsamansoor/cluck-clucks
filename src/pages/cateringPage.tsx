import React from "react";
import { heroContent } from "../content/catering";
import CateringImages from "../components/cateringImages";
import CateringForm from "../components/cateringForm";

const CateringPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-100">
      {/* Hero Section - Patterned Red Squares Background */}
      <div
        className="w-full h-80 flex items-center justify-center relative pt-24"
        style={{
          background:
            `linear-gradient(90deg, #ea4c2a 1px, transparent 1px, transparent 60px),` +
            `linear-gradient(0deg, #ea4c2a 1px, transparent 1px, transparent 60px),` +
            `#f55a3a`,
          backgroundSize: '60px 60px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}
      >
        <h1 className="text-white text-7xl font-extrabold drop-shadow-lg text-center" style={{ textShadow: '2px 4px 0 #c94c2a' }}>
          CATERING
        </h1>
      </div>
      {/* Parallax Section 2 - Content */}
      <div
        className="w-full py-16 flex flex-col md:flex-row max-w-5xl mx-auto gap-8 md:gap-12 px-4 md:px-8 items-start justify-center bg-fixed bg-cover bg-center"
        style={{
          marginTop: '100px',
          zIndex: 1,
          position: 'relative',
          backgroundImage: "url('src/assets/images/cluck-background.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center items-start py-4 md:py-0 max-w-xl">
          <h1 className="text-orange-600 text-2xl sm:text-3xl md:text-6xl font-extrabold mb-3 md:mb-6" style={{ letterSpacing: '-2px' }}>
            BIRTHDAY? WEDDING?<br />OFFICE PARTY?
          </h1>
          <a
            href="https://www.cluckcluckschicken.com/catering"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-orange-600 font-bold text-sm sm:text-base md:text-lg underline mb-3 md:mb-6"
          >
            www.cluckcluckschicken.com/catering
          </a>
          <div className="mt-2 md:mt-6">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 md:mb-6">
              Birthday? Wedding? Office party? No problem! We cater to all. Cluck Clucks is your go-to for great chicken. It's so good your guests will be cluckin' for joy! Let us cater your next event and watch as we turn every bite into a feast for the tastebuds! Fill our the form below or send us an email at <span className="text-orange-600 font-bold">Hello@cluckclucks.ca.</span>
            </p>
            <div className="space-y-4 md:space-y-8 w-full">
              <button className="flex items-center text-orange-600 font-bold text-base sm:text-lg md:text-xl mb-2 group">
                Order Now <span className="ml-2">&raquo;</span>
              </button>
              <div className="w-24 sm:w-32 md:w-40 h-1 bg-orange-600 mb-2 md:mb-4"></div>
              <button className="flex items-center text-orange-600 font-bold text-base sm:text-lg md:text-xl group">
                Request A Special Catering Order <span className="ml-2">&raquo;</span>
              </button>
              <div className="w-40 sm:w-56 md:w-72 h-1 bg-orange-600"></div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center py-4 md:py-0">
          <img
            src="src/assets/images/hero-image.jpg"
            alt="Catering Hero"
            className="w-full h-150 max-w-xs sm:max-w-sm md:max-w-lg rounded-2xl object-cover shadow-lg"
            style={{
              height: 'auto',
              maxHeight: '400px',
              transition: '0.6s filter linear',
              borderRadius: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block'
            }}
          />
        </div>
      </div>
      {/* Parallax Section 3 - Another background */}
      <div className="w-full h-[300px] flex items-center justify-center relative bg-fixed bg-cover bg-center">
        {/* Images Grid Section */}
        <CateringImages />
      </div>
      <div>
        {/* Catering Form Section */}
        <CateringForm />
      </div>
    </div>
  );
};

export default CateringPage;
