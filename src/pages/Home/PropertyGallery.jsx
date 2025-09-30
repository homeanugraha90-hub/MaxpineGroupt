import { useState } from "react";
import img1 from "../../assets/green-3.jpg"
import img2 from "../../assets/green-4.jpg"
import img3 from "../../assets/green-5.jpg"
import img4 from "../../assets/green-6.jpeg"
import img5 from "../../assets/green-7.png"




export default function PropertyGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "View All" },
    { id: "maxpine", label: "Maxpine" },
    { id: "anugrahHome", label: "AnugrahHome" },
    { id: "skyLine", label: "SkyLine" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "anugrahHome",
      image: img1,
      title: "Modern Living Room"
    },
   
    {
      id: 6,
      category: "maxpine",
      image:img2,
      title: "Modern Architecture"
    },
    {
      id: 7,
      category: "maxpine",
      image:img3,
      title: "Contemporary Facade"
    },
    {
      id: 8,
      category: "skyLine",
      image: img4,
      title: "Swimming Pool"
    },
    {
      id: 9,
      category: "anugrahHome",
      image: img5,
      title: "Office Space"
    },
    {
      id: 10,
      category: "maxpine",
      image:img1,
      title: "Garden View"
    },
    {
      id: 11,
      category: "skyLine",
      image: img2,
      title: "Fitness Center"
    },
    
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="md:px-28 py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Maxpine | Anugrah | SkyLine
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#29aa8a] text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6 ">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                // Create different heights for masonry effect
                index % 8 === 0 || index % 8 === 3 ? "row-span-2" :
                index % 8 === 1 || index % 8 === 6 ? "row-span-1" : "row-span-1"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`relative ${
                index % 8 === 0 || index % 8 === 3 ? "h-80 lg:h-[90vh]" : "h-60 lg:h-72"
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <span className="text-[#29aa8a] text-sm font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-[#29aa8a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-[#29aa8a] hover:bg-[#b8834a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
            Load More Images
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}