import React from "react";
import CateringImages from "../components/cateringImages";
import CateringForm from "../components/cateringForm";
import heroImg from "../assets/images/hero-image.jpg";
import bgImg from "../assets/images/cluck-background.jpg";

const CateringPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col ">
      {/* Hero Section - Patterned Red Squares Background */}
      <div
        className="w-full h-72 md:h-96 flex items-center justify-center relative pt-24"
        style={{
          background:
            `linear-gradient(90deg, #ea4c2a 1px, transparent 1px, transparent 60px),` +
            `linear-gradient(0deg, #ea4c2a 1px, transparent 1px, transparent 60px),` +
            `#f55a3a`,
          backgroundSize: "60px 60px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
        }}
      >
        <h1
          className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg text-center"
          style={{ textShadow: "2px 4px 0 #c94c2a" }}
        >
          CATERING
        </h1>
      </div>

      {/* Section 2 - Split layout */}
      <div
        className="w-full py-16 flex flex-col md:flex-row max-w-6xl mx-auto gap-12 items-center justify-between bg-fixed bg-cover bg-center"
      >
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center items-start text-left pt-16 md:justify-center md:h-full">
          <h2 className="text-orange-600 text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            BIRTHDAY? WEDDING? OFFICE PARTY?
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Birthday? Wedding? Office party? No problem! We cater to all.
            Cluck Clucks is your go-to for great chicken. It's so good your
            guests will be cluckin' for joy! Let us cater your next event and
            watch as we turn every bite into a feast for the tastebuds! Fill
            out the form below or send us an email at{" "}
            <span className="text-orange-600 font-bold">
              Hello@cluckclucks.ca
            </span>
            .
          </p>

          <div className="space-y-8 w-full">
            <div>
              <button className="flex items-center text-orange-600 font-bold text-xl group">
                Order Now <span className="ml-2">&raquo;</span>
              </button>
              <div className="w-32 h-1 bg-orange-600 mt-2"></div>
            </div>

            <div>
              <button className="flex items-center text-orange-600 font-bold text-xl group">
                Request A Special Catering Order <span className="ml-2">&raquo;</span>
              </button>
              <div className="w-56 h-1 bg-orange-600 mt-2"></div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-stretch">
          <img
            src={heroImg}
            alt="Catering Hero"
            className="w-full h-[600px] max-w-2xl rounded-2xl object-cover shadow-lg"
            style={{ height: '600px' }}
          />
        </div>
      </div>

      {/* Section 3 - Images Grid */}
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto px-2 md:px-6">
          <div className="w-full">
            <CateringImages />
          </div>
        </div>
      </div>

      {/* Section 4 - Catering Form */}
      <div className="w-full py-16">
        <CateringForm />
      </div>
    </div>
  );
};

export default CateringPage;
