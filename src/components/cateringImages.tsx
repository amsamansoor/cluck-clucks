import React from "react";

const CateringImages = () => {
  return (
    <section className="w-full py-3">
      <div className="max-w-10xl mx-auto px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Chicken Waffles */}
          <div className="rounded-[32px] overflow-hidden shadow-lg">
            <img
              src="src/assets/images/chicken-waffles2.jpg"
              alt="Chicken & Waffles"
              className="object-cover w-full h-80 md:h-[26rem] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Sandwich */}
          <div className="rounded-[32px] overflow-hidden shadow-lg">
            <img
              src="src/assets/images/sandwiches.jpg"
              alt="Sandwiches"
              className="object-cover w-full h-80 md:h-[26rem] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Burger */}
          <div className="rounded-[32px] overflow-hidden shadow-lg">
            <img
              src="src/assets/images/burger.jpg"
              alt="Burger"
              className="object-cover w-full h-80 md:h-[26rem] transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CateringImages;
