import React from 'react';
import { Train, MapPin, Calendar, FileText, ArrowRight, Zap, Clock, Leaf, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function PersonalRapidTransit() {
  const recentPosts = [
    "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group",
    "A Joyous Celebration at Anugrah Homes: Family Carnival Success!",
    "Lights, Camera, Action: Progress at International Film City (YEIDIA)",
    "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
    "A Festive Affair: Diwali at Maxpine Group"
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Efficient",
      description: "Quick point-to-point transportation"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Zero emissions electric transport"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Service",
      description: "Round-the-clock availability"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personal Comfort",
      description: "Private pods for individual travel"
    }
  ];

  const timeline = [
    {
      date: "1 July 2023",
      event: "RFP floated for DEVELOPMENT OF PASSENGER PERSONAL RAPID TRANSIT (PRT) SYSTEM FROM FILM CITY TO NOIDA INTERNATIONAL AIRPORT, JEWAR (YEIDA), UTTAR PRADESH ON DESIGN, BUILD, FINANCE, OPERATE, AND TRANSFER (DBFOT) BASIS"
    },
    {
      date: "23 August 2023",
      event: "Corrigendum Uploaded"
    },
    {
      date: "25 October 2023",
      event: "Last date for submission of bid"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-purple-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Personal Rapid Transit – Pod Taxi</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                <Train className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Personal Rapid Transit – Pod Taxi
            </h1>
            <p className="text-xl sm:text-2xl text-pink-50 max-w-3xl mx-auto">
              Revolutionary Transport System Connecting Film City to Jewar International Airport
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* PRT System Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-7 h-7 text-purple-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Personal Rapid Transit (PRT) System
                </h2>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src="/api/placeholder/500/350" 
                    alt="PRT System Overview"
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src="/api/placeholder/500/350" 
                    alt="Pod Station"
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Station Cross Section */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                <img 
                  src="/api/placeholder/800/300" 
                  alt="Station Cross Section"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-3 font-medium">Station Cross Section</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-4">
                <img 
                  src="/api/placeholder/800/300" 
                  alt="Elevation View"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-3 font-medium">Elevation View</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Route Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-7 h-7 text-purple-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  PRT Alignment - Film City To Jewar International Airport
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Project Scope</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        RFP floated for DEVELOPMENT OF PASSENGER PERSONAL RAPID TRANSIT (PRT) SYSTEM FROM FILM CITY TO NOIDA INTERNATIONAL AIRPORT, JEWAR (YEIDA), UTTAR PRADESH ON DESIGN, BUILD, FINANCE, OPERATE, AND TRANSFER (DBFOT) BASIS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Route Map"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl text-white mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-7 h-7 text-purple-400" />
                <h2 className="text-2xl sm:text-3xl font-bold">Project Timeline</h2>
              </div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-purple-400 last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-[9px]"></div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-purple-300" />
                        <span className="text-purple-300 font-semibold text-sm">{item.date}</span>
                      </div>
                      <p className="text-gray-100 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-7 h-7" />
                <h3 className="text-2xl font-bold">Why PRT?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Reduces traffic congestion",
                  "Environmentally sustainable",
                  "Cost-effective transport solution",
                  "Enhances regional connectivity",
                  "Supports economic growth",
                  "Future-ready infrastructure"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-pink-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8 mb-8">
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
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-purple-600 transition-colors">
                        {post}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-100 mb-1">Location</p>
                  <p className="text-white">Film City to Jewar Airport, YEIDA</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-100 mb-1">Model</p>
                  <p className="text-white">DBFOT (Design, Build, Finance, Operate, Transfer)</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-100 mb-1">Status</p>
                  <p className="text-white">RFP Stage - Bidding Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Interested in the PRT Project?
          </h2>
          <p className="text-pink-50 text-lg mb-8 max-w-2xl mx-auto">
            Learn more about bidding opportunities and project specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Download RFP
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}