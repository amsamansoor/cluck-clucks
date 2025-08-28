import React from "react";

const CateringForm = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-600 mb-10 text-center uppercase tracking-wide">
          Catering Request Form
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 rounded-3xl shadow-2xl">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Event Type</label>
            <input
              type="text"
              placeholder="Birthday, Wedding, Office Party..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Event Date */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Event Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              placeholder="e.g. 50"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Tell us more about your event..."
              rows={5}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all uppercase tracking-wide"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CateringForm;
