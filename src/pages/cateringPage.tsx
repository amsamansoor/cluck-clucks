import React from "react";
import { Parallax } from "react-parallax";
import CateringImages from "../components/cateringImages";
import CateringForm from "../components/cateringForm";
import heroImg from "../assets/images/hero-image.jpg";
import parallaxImg from "../assets/images/cluck-background1.jpg";
import background from "../assets/images/background-maincontent.jpg";

const CateringPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
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

      {/* Section 2 - Split layout with blurred background */}
      <div className="relative w-full">
        {/* 🔥 Background Layer (blurred only) */}
        <div
          className="absolute inset-0 bg-no-repeat bg-fixed 
               bg-[length:250px_auto,100px_auto] 
               bg-[position:calc(0%_-_80px)_40%,100%_calc(0%_-_7px)] 
               opacity-20"
          style={{
            backgroundImage: `url(${background}), url(${background})`,
          }}
        />

        {/* 🌟 Foreground Content (not blurred) */}
        <div className="relative w-full py-12 flex flex-col md:flex-row max-w-7xl mx-auto gap-10 items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-red-500 text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              BIRTHDAY? WEDDING? OFFICE PARTY?
            </h2>
            <p className="text-amber-900 text-lg mb-8 leading-relaxed">
              Birthday? Wedding? Office party? No problem! We cater to all.
              Cluck Clucks is your go-to for great chicken. It's so good your
              guests will be cluckin' for joy! Let us cater your next event and
              watch as we turn every bite into a feast for the tastebuds! Fill
              out the form below or send us an email at{" "}
              <span className="text-red-500 font-bold">
                Hello@cluckclucks.ca
              </span>
              .
            </p>

            <div className="space-y-8 w-full">
              <div>
                <button
                  className="flex items-center font-bold transform transition-all duration-300 
                    text-red-500 border-b-2 border-red-500 
                    hover:scale-110 hover:text-[#5c2c00] hover:border-[#5c2c00] text-[18px]"
                >
                  Order Now <span className="ml-6">&raquo;</span>
                </button>
              </div>

              <div>
                <button
                  className="flex items-center font-bold transform transition-all duration-300 
                    text-red-500 border-b-2 border-red-500 
                    hover:scale-110 hover:text-[#5c2c00] hover:border-[#5c2c00] text-[20px]"
                >
                  Request A Special Catering Order{" "}
                  <span className="ml-2">&raquo;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-stretch">
            <img
              src={heroImg}
              alt="Catering Hero"
              className="w-full h-[400px] md:h-[700px] max-w-2xl rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* ✅ Section 3 - Parallax Background with Images */}
      <div className="w-full bg-amber-400 py-4">
        <CateringImages />
      </div>

      {/* Section 4 - Catering Form */}
      {/* Section 4 - Catering Form with fixed background logos */}
      <div
        className="relative w-full py-10 bg-fixed bg-no-repeat bg-[length:auto_900px,contain] 
             bg-[position:bottom_left,bottom_right]"
        style={{
          backgroundImage: `
      url('https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/ac1bb47a-11e5-4f75-9388-9c7a555da425.png'),
      url('https://popmenucloud.com/ctsazijb/eddd21fa-4a99-460f-bf15-1b629b860087.png')
    `,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <CateringForm />
        </div>
      </div>
    </div>
  );
};

export default CateringPage;
