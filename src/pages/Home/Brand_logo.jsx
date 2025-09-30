import React from "react";
import img1 from "../../assets/Brij-Vrindra.png";
import img2 from "../../assets/Anugrah-Homes-logo.png";
import img3 from "../../assets/ClubFarm.png";
import img4 from "../../assets/LeafShade.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Brand_logo() {
  const projects = [
    {
      id: 1,
      name: "Anugrah Homes",
      logo: img2,
      status: "Anugrah Homes",
      url: "https://anugrahhomes.com",
    },
    {
      id: 2,
      name: "Brij Vrinda",
      logo: img1,
      status: "Brij Vrinda",
      url: "https://anugrahhomes.com",
    },
    {
      id: 3,
      name: "The Club Farm",
      logo: img3,
      status: "The Club Farm",
      url: "https://anugrahhomes.com",
    },
    {
      id: 4,
      name: "LeafShade",
      logo: img4,
      status: "LeafShade",
      url: "https://anugrahhomes.com",
    },
    {
      id: 3,
      name: "The Club Farm",
      logo: img3,
      status: "The Club Farm",
      url: "https://anugrahhomes.com",
    },
    {
      id: 4,
      name: "LeafShade",
      logo: img4,
      status: "LeafShade",
      url: "https://anugrahhomes.com",
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6 tracking-wide">
            PRESTIGE REDEFINED: A LEGACY OF EXCEPTIONAL PROJECTS
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our portfolio boasts renowned projects like{" "}
            <span className="font-semibold">Anugrah Homes</span>,{" "}
            <span className="font-semibold">Brij Vrinda</span>,{" "}
            <span className="font-semibold">The Club Farm</span>, and{" "}
            <span className="font-semibold">LeafShade</span>, each meticulously
            crafted to elevate your lifestyle.
          </p>
        </div>

        {/* Projects Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group cursor-pointer">
                {/* Logo Card */}
                <div className="bg-gray-300 aspect-square rounded-lg shadow-lg overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-gray-200 to-gray-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.logo}
                        alt={project.name}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  </div>
                </div>

                {/* Project Status */}
                <p className="text-center text-gray-600 text-lg font-light tracking-wide">
                  {project.status}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
