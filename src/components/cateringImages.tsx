import React from "react";

const CateringImages = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6 flex flex-row gap-8">
      <img
        src="src/assets/images/chicken-waffels.jpg"
        alt="Chicken & Waffles"
        className="rounded-2xl shadow-lg object-cover w-full h-80 flex-1 transition-transform duration-300 hover:scale-105"
      />
      <img
        src="src/assets/images/sandwiches.jpg"
        alt="Sandwiches"
        className="rounded-2xl shadow-lg object-cover w-full h-80 flex-1 transition-transform duration-300 hover:scale-105"
      />
      <img
        src="src/assets/images/burger.jpg"
        alt="burgers"
        className="rounded-2xl shadow-lg object-cover w-full h-80 flex-1 transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default CateringImages;
