import { useState } from "react";
import { Home, Download, ZoomIn, ZoomOut, Maximize2, MapPin, Navigation, ArrowRight } from "lucide-react";

export default function KeyPlanCF() {
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

  const landmarks = [
    { name: "Hapur", position: "top-8 left-12" },
    { name: "Garhi Mukteshwar", position: "top-12 left-1/3" },
    { name: "Towards Moradabad", position: "top-16 right-32" },
    { name: "Garhuda", position: "top-8 right-16" },
    { name: "Bulandshahr", position: "bottom-32 left-24" },
    { name: "Pahnada", position: "bottom-16 left-1/3" },
    { name: "Bhighat", position: "top-1/2 right-32" },
    { name: "Brightol Toll Plaza", position: "top-20 right-48" }
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
            <a href="/" className="hover:text-[#7575a3] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Key Plan</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#7575a3] to-[#545487] text-white py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Key Plan</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Explore our project location with nearby landmarks and connectivity details. Use zoom controls to view details.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Controls Bar */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-[#7575a3]" />
                  <span className="font-semibold">Location Map</span>
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

              {/* Map Container */}
              <div
                className="relative bg-gray-100 overflow-hidden"
                style={{ height: "600px", cursor: isDragging ? "grabbing" : "grab" }}
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
                  {/* Replace this with your actual map image */}
                  <img
                    src="/downloads/Location.png"
                    alt="Key Plan Map"
                    className="max-w-full h-auto rounded-lg shadow-2xl"
                    draggable="false"
                  />
                </div>

                {/* Zoom Hint */}
                {zoom === 1 && !isDragging && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm backdrop-blur-sm animate-pulse">
                    Click and drag to pan • Use controls to zoom
                  </div>
                )}
              </div>

              {/* Key Landmarks */}
              <div className="border-t bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#7575a3]" />
                  Nearby Landmarks
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Hapur", "Garhi Mukteshwar", "Garhuda", "Bulandshahr", "Pahnada", "Bhighat", "Brightol Toll Plaza", "NH-09"].map((landmark, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <div className="p-6 border-t bg-white">

           
                 <a
              href="/downloads/Location.png"
              download
              className="px-6 py-3  text-white font-medium rounded-lg shadow  transition"
            >
                <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#7575a3] hover:bg-[#52528f] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="w-5 h-5" />
                  Download Key Plan
                </button>
                 </a>
              </div>
            </div>

            {/* Location Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Prime Location</h4>
                <p className="text-sm text-gray-600">Strategically located near major highways and upcoming developments</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Easy Access</h4>
                <p className="text-sm text-gray-600">Well-connected to Delhi-NCR via NH-09 and major expressways</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Growing Area</h4>
                <p className="text-sm text-gray-600">Rapidly developing region with excellent investment potential</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#7575a3]">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-[#7575a3] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <p className="text-sm text-gray-700 group-hover:text-[#7575a3] transition-colors leading-relaxed">
                      {post.title}
                    </p>
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