import React from "react";

const CateringImages = () => {
  return (
    <section className="w-full bg-yellow-100 py-16"> {/* ✅ yellow background */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="src/assets/images/chicken-waffels.jpg"
            alt="Chicken & Waffles"
            className="rounded-xl shadow-lg object-cover w-full h-80 md:h-96 transition-transform duration-300 hover:scale-105"
          />
          <img
            src="src/assets/images/sandwiches.jpg"
            alt="Sandwiches"
            className="rounded-xl shadow-lg object-cover w-full h-80 md:h-96 transition-transform duration-300 hover:scale-105"
          />
          <img
            src="src/assets/images/burger.jpg"
            alt="Burgers"
            className="rounded-xl shadow-lg object-cover w-full h-80 md:h-96 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default CateringImages;
