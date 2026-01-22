// components/RSVPForm.jsx
"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("RSVP Submitted:", formData);
    alert("Thank you for your RSVP!");
    setFormData({
      name: "",
      attending: "yes",
      guests: "1",
      message: "",
    });
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <label className="block text-gray-700 mb-2">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition"
          required
        />
      </div>

      {/* Attendance Radio */}
      <div>
        <label className="block text-gray-700 mb-2">
          Will you be attending?
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={formData.attending === "yes"}
              onChange={handleChange}
              className="mr-2 text-rose-500"
            />
            <span>Yes, with joy!</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="attending"
              value="no"
              checked={formData.attending === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Sorry, can't make it</span>
          </label>
        </div>
      </div>

      {/* Number of Guests */}
      <div>
        <label className="block text-gray-700 mb-2">Number of Guests</label>
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition"
        >
          <option value="1">Just me</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5+">5+ guests</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div>
        <label className="block text-gray-700 mb-2">
          Message for the couple
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your wishes and excitement..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
      >
        Send RSVP
      </button>
    </form>
  );
}
