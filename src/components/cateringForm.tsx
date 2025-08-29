import React from "react";

const CateringForm = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Outer Border */}
        <div className="border-3 border-[#F15C3E] rounded-xl p-[10px]">
          {/* Inner White Background */}
          <div className="bg-white rounded-lg p-8">
            {/* Title */}
            <h2 className="text-5xl font-extrabold text-center text-[#F15C3E] uppercase tracking-wide mb-4">
              Catering inquiries
            </h2>
            <h3 className="text-center text-black text-xl mb-10">
              Contact us for catering information and we will get back to you
              soon.
            </h3>

            {/* Form */}
            <form className="space-y-6">
              {/* First Name */}
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-black focus:ring-2 focus:ring-[#F15C3E] focus:outline-none"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-[#F15C3E] bg-white px-1"
                >
                  First Name
                </label>
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-black focus:ring-2 focus:ring-[#F15C3E] focus:outline-none"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-[#F15C3E] bg-white px-1"
                >
                  Last Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-black focus:ring-2 focus:ring-[#F15C3E] focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-[#F15C3E] bg-white px-1"
                >
                  Email
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-black focus:ring-2 focus:ring-[#F15C3E] focus:outline-none"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-[#F15C3E] bg-white px-1"
                >
                  Phone
                </label>
              </div>

              {/* Event Type */}
              <div className="flex flex-col">
                <label
                  htmlFor="eventType"
                  className="mb-2 text-black font-medium"
                >
                  Desired Pickup Location (Required)
                </label>
                <select
                  id="eventType"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#F15B40] focus:outline-none"
                >
                  <option value="">Select an event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="private">Private Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Event Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="eventDate"
                  className="mb-2 text-black font-medium"
                >
                  Desired Date and Pickup Time (Required)
                </label>
                <input
                  type="date"
                  id="eventDate"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-[#F15B40] focus:outline-none"
                />
              </div>


              {/* Number of Guests */}
              <div className="relative">
                <input
                  type="number"
                  id="guests"
                  placeholder=" "
                  min="1"
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-black focus:ring-2 focus:ring-[#F15C3E] focus:outline-none"
                />
                <label
                  htmlFor="guests"
                  className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-[#F15C3E] bg-white px-1"
                >
                  Number of servings (required)
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-black focus:ring-2 focus:ring-gray-600 focus:outline-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-[#F15C3E] bg-white px-1"
                >
                  Tell us more about your event...
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#FBBF24] hover:bg-[#F59E0B] text-black font-bold py-3 px-10 rounded-lg uppercase tracking-wide shadow-lg transition"
              >
                Submit Request
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringForm;
