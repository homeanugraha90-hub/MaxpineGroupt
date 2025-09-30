import React, { useState } from "react";

const LayOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    size: "100",
  });

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Thanks ${formData.name}, we received your request!`);
    setFormData({ name: "", number: "", size: "100" }); // reset form
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-blue-600">Home</span> &gt;{" "}
        <span className="text-gray-700 font-medium">Layout</span>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Layout
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Layout Image */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-4">
          <img
            src="/downloads/BVL-New.png" // replace with your image path
            alt="Project Layout"
            className="w-full h-auto rounded-lg object-contain"
          />

          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-semibold">Disclaimer:</span> The layout shown
            is for illustrative purposes only and is subject to change without
            prior notice.
          </p>

          {/* Download Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="/downloads/BVL-New.png"
              download
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition"
            >
              Download Current Layout
            </a>
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-4">
          {/* Latest Updates */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Latest Updates
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                A Joyous Celebration at Anugrah Homes: Family Carnival Success!
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Lights, Camera, Action: Progress at International Film City
                (YEIDA)
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Residential Plots Near Noida International Airport: A New Gateway
                to Global Connectivity
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                A Festive Affair: Diwali at Maxpine Group
              </li>
            </ul>
          </div>

          {/* Small Form */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Enquiry Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                type="tel"
                name="number"
                placeholder="Enter your number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
              >
                <option value="100">100 sq. ft.</option>
                <option value="200">200 sq. ft.</option>
                <option value="300">300 sq. ft.</option>
              </select>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-teal-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayOut;
