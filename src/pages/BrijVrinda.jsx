import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Home,
  TrendingUp,
  CheckCircle,
  Download,
  Phone,
} from "lucide-react";
import img1 from "../assets/BrijVrinda/1 (1).jpg"
import img2 from "../assets/BrijVrinda/1 (2).jpg"
import img3 from "../assets/BrijVrinda/1 (3).jpg"
import img4 from "../assets/BrijVrinda/1 (4).jpg"
import img5 from "../assets/BrijVrinda/1 (5).jpg"
import img6 from "../assets/BrijVrinda/1 (6).jpg"
import img7 from "../assets/BrijVrinda/1 (7).jpg"
import pdf from "../assets/BrijVrinda/BV-N-links.pdf"


import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BrijVrinda() {
  const [mainImage, setMainImage] = useState(0);

  const images = [
    img1, img2, img3, img4, img5, img6, img7
  ];

  const features = [
    "24X7 CCTV surveillance",
    "25 Acre 5 Star Resort",
    "50 Feet Wide Roads",
    "Electrification",
    "Sanskar School",
    "Security",
    "Well Connectivity",
    "Wellness Centre",
    "White Sandalwood Farmland",
  ];

  const benefits = [
    "Instant Registry & Mutation – Complete Legal Ownership.",
    "Immediate legal possession with boundary",
    "Multiple Income Channels via Sandalwood Farming",
    "Guaranteed ROI from Land Appreciation",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brij Vrinda</h1>
          <div className="flex flex-wrap gap-2">
            {/* <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              FEATURED
            </span> */}
            {/* <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              FARMLAND-LAND
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              ON-GOING
            </span> */}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-6">
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 px-20 h-[80vh] w-full">
          <img
            src={images[mainImage]}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() =>
              setMainImage(mainImage > 0 ? mainImage - 1 : images.length - 1)
            }
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => setMainImage((mainImage + 1) % images.length)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 md:px-20">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(idx)}
              className={`aspect-video rounded overflow-hidden ${mainImage === idx ? "ring-2 ring-cyan-500" : ""
                }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-cyan-600 pb-2 inline-block">
                Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-6 rounded-lg text-center">
                  <Home className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <p className="text-sm opacity-90 mb-1">Property Type</p>
                  <p className="text-2xl font-bold">Farming-Land</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-6 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <p className="text-sm opacity-90 mb-1">Land Area</p>
                  <p className="text-2xl font-bold">250+ Acre</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-cyan-600 pb-2 inline-block">
                Description
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
                Opportunity to own а Farmland in Vrindavan with White Sandalwood
                Tree.
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tucked amidst 200+ Acres of flourishing White Sandalwood Farming Land-Parcels and rooted in the
                sacred Braj Bhumi of Vrindavan, Brij Vrinda is more than just land – it’s your legacy in the making.
                Experience the rare charm of Bamboo Mud Farmhouses, a 25-Acre 5 Star Exclusive Resort, 5-Acre
                Sanskar School, 5-Acre Wellness Centre and timeless spiritual energy, all in one sanctuary
                with lush greenery all around.
                Whether you’re in your 30s, 40s, Or sos – Brij Vrinda addresses the very insecurities that keep most
                families financially unsettles:
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-cyan-600 pb-2 inline-block">
                Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-cyan-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-cyan-600 mb-6">
                Property Details
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-cyan-600 font-semibold mb-1">
                    Property Size
                  </p>
                  <p className="text-gray-800">250+ Acre</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-cyan-600 font-semibold mb-1">
                    Property Type
                  </p>
                  <p className="text-gray-800">Farming-Land</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-cyan-600 font-semibold mb-1">
                    Property Status
                  </p>
                  <p className="text-gray-800">On-going Project</p>
                </div>
                <div className="pb-3">
                  <p className="text-cyan-600 font-semibold mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Updated
                  </p>
                  <p className="text-gray-800">September 17, 2025</p>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                  <Phone className="w-5 h-5" />
                <Link to="/contact">
                  Contact Us
                </Link>
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                  <Download className="w-5 h-5" />
                  <a
                    href={pdf}
                    download
                    className="w-full block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Download Brochure
                  </a>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
