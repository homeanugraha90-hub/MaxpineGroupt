import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Users, Building2 } from 'lucide-react';
import img1 from "../../assets/All home imgs/airport1.png"
import img2 from "../../assets/All home imgs/Screenshot-2024-11-22-112948.png"
import img3 from "../../assets/All home imgs/airport2.jpg"

export default function NoidaInternational() {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    phase: false,
    development: false,
    present: false,
    connectivity: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const relatedPosts = [
    "Buy Plots Near Jewar Airport - Anugrah Homes by Magpie Group",
    "A Joyous Celebration at Anugrah Homes: Family Carnival Success!",
    "Lights, Camera, Action: Progress at International Film City (NFIDA)",
    "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
    "A Festive Affair: Diwali at Magpie Group"
  ];

  const presentProjectImages = [
    { id: 1, alt: "Construction site with multiple cranes" },
    { id: 2, alt: "Building structure framework" },
    { id: 3, alt: "Airport runway construction" },
    { id: 4, alt: "Green building under construction" },
    { id: 5, alt: "Airport terminal exterior view" },
    { id: 6, alt: "Airport terminal interior design" }
  ];

  const developmentImages = [
    { id: 1, alt: "Early stage construction phase 1" },
    { id: 2, alt: "Foundation laying ceremony" },
    { id: 3, alt: "Initial ground work" },
    { id: 4, alt: "Site preparation activities" }
  ];

  const phaseImages = [
    { id: 1, alt: "Phase 1 master plan" ,url:img2 },
    { id: 2, alt: "Capacity planning diagram" ,url :img3 },
    
  ];

  const connectivityImages = [
    { id: 1, alt: "Road connectivity map" },
    { id: 2, alt: "Expressway connections" },
    { id: 3, alt: "Regional transport network" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Noida International Airport</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Noida International Airport
              </h1>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">9.5 km</div>
                  <div className="text-xs text-gray-600 mt-1">From Anugrah Homes</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Building2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">13,000</div>
                  <div className="text-xs text-gray-600 mt-1">Acres Land</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2024</div>
                  <div className="text-xs text-gray-600 mt-1">Two-runway Ready</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">PPP</div>
                  <div className="text-xs text-gray-600 mt-1">Partnership Model</div>
                </div>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4 mb-8">
              {/* Location Section - Only 9.5 Kms */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('location')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Only 9.5 Kms From Anugrah Homes
                  </h3>
                  {expandedSections.location ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.location && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-4">
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={img1} 
                          alt="Location map showing proximity" 
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Stage I(i):</strong> Three more runways (1338 Ha, 1310 Ha, 1792 Ha) have been approved by State Govt. Land acquisition for 1338 Ha, 1792 Ha has been approved by the State Govt. For Anugrah and NREO (Abanindranath), Repair & Overhauling LNO flat, land acquisition is in process. Global bid is to be Board.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Phase Design Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('phase')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Phase, Design, Capacity, and Project Cost (Stage 1)
                  </h3>
                  {expandedSections.phase ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.phase && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {phaseImages.map((img) => (
                        <div key={img.id} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={img.url}
                            alt={img.alt}
                            className="w-full h-70 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        <strong>Phase 1:</strong> The initial phase includes development of a two-runway airport system with capacity to handle 12 million passengers annually. The project spans 1,334 hectares with an estimated cost of ₹10,050 crores.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Future Expansion:</strong> The master plan envisions expansion to a six-runway facility spread across 6,200 acres, with capacity to serve up to 70 million passengers per year by completion.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Development Images */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('development')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Project Development Images
                  </h3>
                  {expandedSections.development ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.development && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {developmentImages.map((img) => (
                        <div key={img.id} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={`/api/placeholder/400/300`}
                            alt={img.alt}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      Early development phase showcasing the transformation from initial site preparation to active construction activities.
                    </p>
                  </div>
                )}
              </div>

              {/* Present Project Images */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('present')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Present Project Images
                  </h3>
                  {expandedSections.present ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.present && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {presentProjectImages.map((img) => (
                        <div key={img.id} className="bg-gray-100 rounded-lg overflow-hidden group">
                          <img 
                            src={`/api/placeholder/400/300`}
                            alt={img.alt}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="p-2 bg-white">
                            <p className="text-xs text-gray-600">{img.alt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        Current construction progress showing significant advancement in terminal buildings, runway development, and supporting infrastructure facilities.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Connectivity Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('connectivity')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Connectivity
                  </h3>
                  {expandedSections.connectivity ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.connectivity && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      {connectivityImages.map((img) => (
                        <div key={img.id} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={`/api/placeholder/350/250`}
                            alt={img.alt}
                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        The Uttar Pradesh government has proposed a greenfield airport at Jewar, aimed at connecting cities like Agra, Mathura, and Gautam Buddh Nagar to the global aviation network. This development is expected to drive industrial growth by integrating local industries with global value chains. Enhanced air connectivity will also facilitate recruiting visitors to existing attractions and encouraging the creation of new tourist hubs. Additionally, the airport aims to reduce congestion at Delhi's Indira Gandhi International Airport, improving overall capacity.
                      </p>
                      <p className="leading-relaxed">
                        The project will follow a public-private partnership (PPP) model, with Zurich Airport International AG selected as the developer. The initial phase includes a two-runway airport by 2024, with future expansion to a 6,200-acre, six-runway facility. The foundation stone was laid by Prime Minister Narendra Modi on November 26, 2021. YEIDA has allocated 13,000 acres for the project, with the first phase spanning 12,334 hectares.
                      </p>
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                        <p className="text-sm font-semibold text-gray-800 mb-2">Key Connectivity Features:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Located 10 km from State Highway SH-22A</li>
                          <li>Near the Yamuna Expressway</li>
                          <li>Connected to Palwal-Khurja Expressway</li>
                          <li>Links to 100-meter-wide Eastern Peripheral Expressway</li>
                          <li>Easy access to Palwal, Manesar, Ghaziabad, Baghpat, and Meerut</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Related Posts
              </h3>
              <ul className="space-y-3">
                {relatedPosts.map((post, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-700
                       hover:text-[#3c92a9] transition text-sm leading-relaxed block py-2 border-b border-gray-100 last:border-0"
                    >
                      {post}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact CTA */}
              <div className="mt-8 bg-gradient-to-br from-[#3c92a9] to-[#206c81] rounded-lg p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Interested in Plots Near Airport?</h4>
                <p className="text-sm mb-4 text-blue-50">
                  Get exclusive details about our properties near Noida International Airport
                </p>
                <button className="w-full bg-white text-[#3c92a9] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}