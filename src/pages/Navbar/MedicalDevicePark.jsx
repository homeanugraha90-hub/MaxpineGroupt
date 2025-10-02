import React from 'react';
import { MapPin, Target, Building2, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function MedicalDevicePark() {
  const focusAreas = [
    "Cancer care and radiotherapy devices",
    "Radiology and imaging equipment",
    "Anaesthetics and cardio-respiratory devices",
    "Renal care solutions",
    "Nuclear imaging systems",
    "Implantable electronic devices"
  ];

  const recentPosts = [
    "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group",
    "A Joyous Celebration at Anugrah Homes: Family Carnival Success!",
    "Lights, Camera, Action: Progress at International Film City (YEIDIA)",
    "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
    "A Festive Affair: Diwali at Maxpine Group"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-teal-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Medical Device Park</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Medical Device Park
            </h1>
            <p className="text-xl sm:text-2xl text-teal-50 max-w-3xl mx-auto">
              North India's First Dedicated Medical Device Manufacturing Hub
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Location Highlight */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-teal-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Only 18 Minutes Away From Anugrah Homes
                </h2>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <img 
                  src="/downloads/Medical.jpg" 
                  alt="Location Map"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-7 h-7 text-teal-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Government of Uttar Pradesh (GoUP) has proposed the development of a Medical Device Park in Sector 28 of the Yamuna Expressway Industrial Development Area (YEIDA). Recognizing the potential of India's growing healthcare market, the government aims to create a favorable investment environment by launching initiatives such as the <span className="font-semibold text-teal-600">Make in India</span> campaign, offering special incentives for manufacturing, and ensuring faster approvals to attract foreign direct investment (FDI) in medical devices through greenfield, brownfield, and strategic ventures. YEIDA has been designated as the <span className="font-semibold">State Implementing Agency</span> for this initiative.
                </p>
                <p>
                  The park, set to be North India's first dedicated facility for medical device manufacturing, will span <span className="font-bold text-teal-600">350 acres</span>. It aims to address key challenges faced by Indian manufacturers, particularly access to cost-effective testing and advanced scientific facilities. This infrastructure is expected to reduce manufacturing costs, enhance the competitiveness of domestic producers, and improve the quality of Indian-made medical devices.
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl text-white mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-7 h-7 text-teal-400" />
                <h2 className="text-2xl sm:text-3xl font-bold">Focus Areas</h2>
              </div>
              <p className="text-gray-300 mb-6">The park will cater to various segments, including:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm hover:bg-opacity-15 transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7" />
                <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-teal-50 text-lg leading-relaxed">
                The Uttar Pradesh Medical Device Park aligns with India's vision of promoting self-reliance and boosting local manufacturing while ensuring high-quality healthcare solutions.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Recent Updates
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-50 transition-colors">
                      <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-teal-600 transition-colors">
                        {post}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}