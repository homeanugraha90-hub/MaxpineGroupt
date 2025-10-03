import React, { useState } from "react";
import {Link} from "react-router-dom"

const LayOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    size: "100",
  });

  // const handleChange = () => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = () => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);
  //   alert(`Thanks ${formData.name}, we received your request!`);
  //   setFormData({ name: "", number: "", size: "100" }); // reset form
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-[#20ae9b]">Home</span> &gt;{" "}
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
              className="px-6 py-3 bg-[#20ae9b] text-white font-medium rounded-lg shadow hover:bg-[#266a61] transition"
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
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                A Joyous Celebration at Anugrah Homes: Family Carnival Success!
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                Lights, Camera, Action: Progress at International Film City
                (YEIDA)
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                Residential Plots Near Noida International Airport: A New Gateway
                to Global Connectivity
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                A Festive Affair: Diwali at Maxpine Group
              </li>
            </ul>
          </div>

          {/* Small Form */}
          <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Interested in Plots Near Airport?</h4>
                <p className="text-sm mb-4 text-blue-50">
                  Get exclusive details about our properties near Noida International Airport
                </p>
                <Link to="/contact">
                <button className="w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                  Contact Us Today
                </button>
                </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default LayOut;
