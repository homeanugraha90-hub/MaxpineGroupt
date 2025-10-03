import { useState } from "react";
import img1 from "../../assets/green-3.jpg"
import img2 from "../../assets/green-4.jpg"
import img3 from "../../assets/green-5.jpg"
import img4 from "../../assets/green-6.jpeg"
import img5 from "../../assets/green-7.png"

import anu1 from "../../assets/All home imgs/upadate-34.jpeg"
import anu2 from "../../assets/All home imgs/update--14.jpeg"
import anu3 from "../../assets/All home imgs/update-01.jpeg"
import anu4 from "../../assets/All home imgs/update-02.jpeg"
import anu5 from "../../assets/All home imgs/update-03.jpeg"
import anu6 from "../../assets/All home imgs/update-04.jpeg"
import anu7 from "../../assets/All home imgs/update-05.jpeg"
import anu8 from "../../assets/All home imgs/update-06.jpeg"
import anu9 from "../../assets/All home imgs/update-07.jpeg"
import anu10 from "../../assets/All home imgs/update-08.jpeg"
import anu11 from "../../assets/All home imgs/update-11.jpeg"

export default function PropertyGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Number of items to show initially
  const INITIAL_ITEMS = 6;

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
      title: "Garden View"
    },
    {
      id: 6,
      category: "maxpine",
      image: img2,
      title: "Garden View"
    },
    {
      id: 7,
      category: "maxpine",
      image: img3,
      title: "Garden View"
    },
    {
      id: 8,
      category: "skyLine",
      image: img4,
      title: "Garden View"
    },
    {
      id: 9,
      category: "anugrahHome",
      image: img5,
      title: "Garden View"
    },
    {
      id: 10,
      category: "maxpine",
      image: img1,
      title: "Garden View"
    },
    {
      id: 11,
      category: "skyLine",
      image: img2,
      title: "Garden View"
    },
    {
      id: 12,
      category: "anugrahHome",
      image: anu1,
      title: "Garden View"
    },
    {
      id: 13,
      category: "anugrahHome",
      image: anu2,
      title: "Garden View"
    },
    {
      id: 14,
      category: "anugrahHome",
      image: anu3,
      title: "Garden View"
    },
    {
      id: 15,
      category: "anugrahHome",
      image: anu4,
      title: "Garden View"
    },
    {
      id: 16,
      category: "anugrahHome",
      image: anu5,
      title: "Garden View"
    },
    {
      id: 17,
      category: "anugrahHome",
      image: anu6,
      title: "Garden View"
    },
    {
      id: 18,
      category: "anugrahHome",
      image: anu7,
      title: "Garden View"
    },
    {
      id: 19,
      category: "anugrahHome",
      image: anu9,
      title: "Garden View"
    },
    {
      id: 20,
      category: "anugrahHome",
      image: anu10,
      title: "Garden View"
    },
    {
      id: 21,
      category: "anugrahHome",
      image: anu11,
      title: "Garden View"
    },
  ];

  // Filter items based on active category
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Determine how many items to display
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, INITIAL_ITEMS);

  // Check if there are more items to show
  const hasMoreItems = filteredItems.length > INITIAL_ITEMS;

  // Handle filter change
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false); // Reset to show limited items when changing filter
  };

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
                onClick={() => handleFilterChange(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#20ae9b] text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6">
          {itemsToShow.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
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
                    <span className="text-[#20ae9b] text-sm font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-[#20ae9b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {hasMoreItems && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-[#20ae9b] hover:bg-[#2c6c64] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {showAll ? "Show Less" : `Load More Images (${filteredItems.length - INITIAL_ITEMS} more)`}
            </button>
          </div>
        )}
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