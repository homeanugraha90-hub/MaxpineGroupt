import React from 'react';
import { MapPin, Truck, Package, Building, TrendingUp, ArrowRight, CheckCircle2, Warehouse, Train, Plane } from 'lucide-react';

export default function LogisticsPark() {
  const features = [
    {
      icon: <Train className="w-6 h-6" />,
      title: "Rail & Road Connectivity",
      description: "Excellent transport links via rail and road"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Custom Clearance",
      description: "On-site custom clearance facilities"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Storage Solutions",
      description: "State-of-the-art warehousing facilities"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Single-Window Services",
      description: "Streamlined administrative processes"
    }
  ];

  const recentPosts = [
    "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group",
    "A Joyous Celebration at Anugrah Homes: Family Carnival Success!",
    "Lights, Camera, Action: Progress at International Film City (YEIDIA)",
    "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
    "A Festive Affair: Diwali at Maxpine Group"
  ];

  const benefits = [
    "Strategic location at Tappal Bajna within YEIDA",
    "Enhanced investment climate for businesses",
    "Major thrust on industrial activities",
    "Value-added logistics services",
    "Prime freight profile and development potential",
    "Storage and warehousing hub capabilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Logistics Park</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                <Warehouse className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Logistics Park
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 max-w-3xl mx-auto">
              Multimodal Logistics Park (MMLP) at Tappal Bajna - YEIDA's Gateway to Industrial Excellence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Maps Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-7 h-7 text-blue-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Strategic Location
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-4 overflow-hidden">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Connectivity Map"
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-center text-sm text-gray-600 mt-3 font-medium">Regional Connectivity</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 overflow-hidden">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Site Layout"
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-center text-sm text-gray-600 mt-3 font-medium">Master Plan Layout</p>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-7 h-7 text-blue-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Project Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  The Yamuna Expressway Industrial Development Authority has proposed to develop a <span className="font-semibold text-blue-600">Multimodal Logistics Park (MMLP)</span> facility at Tappal Bajna located within YEIDA. This is with the objective to optimize the present potential, enhance investment climate and promote the economic development of the area with major thrust on industrial activities.
                </p>
                <p>
                  The MMLP shall provide excellent transport links via rail and road, custom clearance facilities, single-window services, and value-added services. Given the freight profile and upcoming industrial development potential of the proposed site, the MMLP is expected to have potential to develop as a storage and warehousing hub.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-7 h-7 text-blue-300" />
                <h2 className="text-2xl sm:text-3xl font-bold">Key Benefits</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm hover:bg-opacity-15 transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Opportunity */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-7 h-7" />
                <h3 className="text-xl sm:text-2xl font-bold">Investment Opportunity</h3>
              </div>
              <p className="text-blue-50 text-lg leading-relaxed mb-6">
                MMLP offers a unique opportunity for businesses to establish their operations in a strategically located, well-connected logistics hub with world-class infrastructure and facilities.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Recent Updates
              </h3>
              <div className="">
                {recentPosts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-blue-600 transition-colors">
                        {post}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white mt-8">
              <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
              <p className="text-gray-300 text-sm mb-6">
                Get in touch with our team to learn more about investment opportunities at the Logistics Park.
              </p>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Contact Us
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing network of businesses at YEIDA's premier Multimodal Logistics Park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Download Brochure
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}