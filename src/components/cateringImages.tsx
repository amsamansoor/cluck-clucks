import React from "react";

const CateringImages = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-10xl mx-auto px-0 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="border-[16px] border-yellow-300 rounded-[32px] overflow-hidden">
            <img
              src="src/assets/images/chicken-waffels.jpg"
              alt="Chicken & Waffles"
              className="object-cover w-full h-80 md:h-[28rem] transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="border-[16px] border-yellow-300 rounded-[32px] overflow-hidden">
            <img
              src="src/assets/images/sandwiches.jpg"
              alt="Sandwiches"
              className="object-cover w-full h-80 md:h-[28rem] transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="border-[16px] border-yellow-300 rounded-[32px] overflow-hidden">
            <img
              src="src/assets/images/burger.jpg"
              alt="Burgers"
              className="object-cover w-full h-80 md:h-[28rem] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringImages;
