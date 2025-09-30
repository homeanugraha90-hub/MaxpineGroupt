import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {Link} from "react-router-dom"
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import vid from "../../assets/video.mp4";

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    title: "Discover Your Dream Home with Maxpine",
    subtitle: "Premium Properties in Prime Locations",
    price: "₹45,00,000",
    description: "Experience luxury living with world-class amenities and modern architecture",
    video: vid,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    title: "Invest in Excellence",
    subtitle: "Maxpine Group - Building Your Future",
    price: "₹65,00,000",
    description: "Strategic locations with high appreciation potential and premium amenities",
    video: vid,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    title: "Luxury Redefined",
    subtitle: "Where Comfort Meets Elegance",
    price: "₹85,00,000",
    description: "Spacious layouts, modern design, and premium finishes in every detail",
    video: vid,
  },
];

export default function Banner() {
  const [videoModal, setVideoModal] = useState({ isOpen: false, url: "" });
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setVideoModal({ isOpen: false, url: "" });
      }
    };

    if (videoModal.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [videoModal.isOpen]);

  return (
    <section className="relative w-full h-screen bg-black">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 container mx-auto px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="border-4 border-[#90cc35] p-8 md:p-10 max-w-2xl bg-black/20 backdrop-blur-sm"
                >
                  <span className="text-[#90cc35] font-semibold text-lg tracking-wide mb-2 inline-block">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-6">{slide.description}</p>

                  <div className="flex items-center gap-4">
                    <Link to="/site-visit">
                    <button className="bg-[#90cc35] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#a3cb69] hover:text-black transition-all duration-300 hover:shadow-xl">
                      Schedule a Visit
                    </button>
                    </Link>
                    <button
                      onClick={() =>
                        setVideoModal({ isOpen: true, url: slide.video })
                      }
                      className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-4 hover:bg-white/30 transition-all duration-300 group"
                    >
                      <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-left md:text-right"
                >
                  <div className="inline-block bg-black/40 backdrop-blur-sm border-2 border-[#90cc35] p-8 rounded-lg">
                    <p className="text-xl text-gray-300 font-medium mb-2">
                      Starting Price
                    </p>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#90cc35] mb-3">
                      {slide.price}
                    </p>
                    <p className="text-gray-400 text-sm">
                      *Prices may vary based on unit and floor
                    </p>
                    <button className="mt-6 w-full bg-white text-[#3b3835] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
                      Get Details
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !w-12 !h-12 !left-6 !top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg cursor-pointer hover:bg-white transition-all duration-300 after:!content-none flex items-center justify-center">
          <ChevronLeft className="w-6 h-6 text-[#3b3835]" />
        </div>
        <div className="swiper-button-next !w-12 !h-12 !right-6 !top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg cursor-pointer hover:bg-white transition-all duration-300 after:!content-none flex items-center justify-center">
          <ChevronRight className="w-6 h-6 text-[#3b3835]" />
        </div>
      </Swiper>

      {/* Video Modal */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div
            ref={modalRef}
            className="relative w-full max-w-3xl rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setVideoModal({ isOpen: false, url: "" })}
              className="absolute top-2 right-2 text-white z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src={videoModal.url}
              controls
              autoPlay
              className="w-full h-auto max-h-[70vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
