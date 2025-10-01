import { useState } from "react";
import { Home, Download, ZoomIn, ZoomOut, Maximize2, MapPin, Navigation, ArrowRight, AlertCircle, Map } from "lucide-react";

export default function LayOutCF() {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const recentPosts = [
    { title: "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group", link: "#" },
    { title: "A Joyous Celebration at Anugrah Homes: Family Carnival Success!", link: "#" },
    { title: "Lights, Camera, Action: Progress at International Film City (YIFIDA)", link: "#" },
    { title: "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity", link: "#" },
    { title: "A Festive Affair: Diwali at Maxpine Group", link: "#" }
  ];

  const plotCategories = [
    { color: "#e91e63", label: "Premium Plots", range: "500-700 sq yards" },
    { color: "#f57c00", label: "Standard Plots", range: "300-500 sq yards" },
    { color: "#00bcd4", label: "Compact Plots", range: "100-300 sq yards" },
    { color: "#4caf50", label: "Green Spaces", range: "Park & Recreation" },
    { color: "#ffeb3b", label: "Commercial", range: "Retail & Office" }
  ];

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-24 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <a href="/" className="hover:text-[#3c92a9] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Layout</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#3c92a9]
       to-[#1c687d] text-white py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="flex items-center gap-3 mb-4">
            <Map className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Layout</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Explore our detailed project layout featuring premium residential plots with modern amenities and green spaces.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Layout Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Controls Bar */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-[#3c92a9]" />
                  <span className="font-semibold">Project Layout - The Club Farm</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomOut}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                    title="Reset View"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <span className="text-white text-sm ml-2 bg-white/10 px-3 py-2 rounded-lg">
                    {Math.round(zoom * 100)}%
                  </span>
                </div>
              </div>

              {/* Layout Container */}
              <div
                className="relative bg-gray-100 overflow-hidden"
                style={{ height: "700px", cursor: isDragging ? "grabbing" : "grab" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                    transition: isDragging ? "none" : "transform 0.3s ease",
                    transformOrigin: "center center"
                  }}
                  className="w-full h-full flex items-center justify-center p-8"
                >
                  {/* Replace this with your actual layout image */}
                  <div className="bg-white rounded-lg shadow-2xl border-4 border-yellow-500 max-w-4xl">
                    <img
                      src="/downloads/LayoutCF.png"
                      alt="Project Layout"
                      className="w-full h-auto rounded-lg"
                      draggable="false"
                    />
                  </div>
                </div>

                {/* Zoom Hint */}
                {zoom === 1 && !isDragging && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm backdrop-blur-sm animate-pulse">
                    Click and drag to pan • Use controls to zoom
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="border-t bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#3c92a9]" />
                  Plot Categories & Legend
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plotCategories.map((category, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200"
                    >
                      <div
                        className="w-6 h-6 rounded flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{category.label}</p>
                        <p className="text-xs text-gray-500">{category.range}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border-t border-amber-200 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Disclaimer:</p>
                    <p className="text-sm text-amber-800">
                      The layout shown is for illustrative purposes only and is subject to change without prior notice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="p-6 border-t bg-white">
                <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#3c92a9] hover:bg-[#1c7b95] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="w-5 h-5" />
                  Download Layout
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">200+ Plots</h4>
                <p className="text-sm text-gray-600">Variety of plot sizes to choose from</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Well Planned</h4>
                <p className="text-sm text-gray-600">Modern urban planning with wide roads</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Prime Location</h4>
                <p className="text-sm text-gray-600">Near NH-09 & upcoming developments</p>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="bg-gradient-to-r from-[#3c92a9] to-[#3c92a9] rounded-lg shadow-lg p-8 mt-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Total Area
                  </h4>
                  <p className="text-white/90 ml-4">50+ Acres of planned development</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Road Width
                  </h4>
                  <p className="text-white/90 ml-4">30-60 feet wide internal roads</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Green Coverage
                  </h4>
                  <p className="text-white/90 ml-4">25% dedicated to parks & gardens</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Amenities
                  </h4>
                  <p className="text-white/90 ml-4">Clubhouse, sports facilities & more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#3c92a9]">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-[#3c92a9] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <p className="text-sm text-gray-700 group-hover:text-[#3c92a9] transition-colors leading-relaxed">
                      {post.title}
                    </p>
                  </a>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Need More Information?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our sales team to get detailed plot information and booking details.
                </p>
                <button className="w-full bg-[#3c92a9] hover:bg-[#20738a] text-white py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}