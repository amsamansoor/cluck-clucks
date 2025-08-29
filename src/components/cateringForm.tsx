import React from "react";

const CateringForm = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Outer Border */}
        <div className="border-3 border-red-400 rounded-xl p-[10px]">
          {/* Inner White Background */}
          <div className="bg-white rounded-lg p-8">
            {/* Title */}
            <h2 className="text-5xl font-extrabold text-center text-[#ea4c2a] uppercase tracking-wide mb-4">
              Catering inquiries
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Contact us for catering information and we will get back to you
              soon.
            </p>

            {/* Form */}
            <form className="space-y-6">
              {/* Full Name */}
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#ea4c2a] focus:outline-none"
                placeholder="Full Name"
              />

              {/* Email */}
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#ea4c2a] focus:outline-none"
                placeholder="Email"
              />

              {/* Phone */}
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#ea4c2a] focus:outline-none"
                placeholder="Phone"
              />

              {/* Event Date */}
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#ea4c2a] focus:outline-none"
              />

              {/* Guests */}
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#ea4c2a] focus:outline-none"
                placeholder="Number of Guests"
              />

              {/* Message */}
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#ea4c2a] focus:outline-none"
                placeholder="Tell us more about your event..."
              />

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#ea4c2a] hover:bg-[#c63d21] text-white font-bold py-3 px-10 rounded-lg uppercase tracking-wide shadow-lg transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringForm;
