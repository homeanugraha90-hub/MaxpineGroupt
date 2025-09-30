import img1 from "../../assets/maxpine-Offici.avif"

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

// src/components/About.jsx

export default function About() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-32 bg-white">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image with Badge */}
        <div className="relative   lg:h-[70vh]">
          {/* <div className="absolute -top-6 -left-6 w-60 h-6 bg-[#90cc35] opacity-30"></div> */}
          <img
            src={img1}
            effect="blur"
            alt="Building"
            className="w-full h-full rounded-lg shadow-lg border-8 border-white "
          />
          {/* Badge */}
          <div className="absolute bottom-1 -left-10 bg-[#90cc35] px-6 py-4 text-white font-medium shadow-lg">
          20+ years of <br /> experience
          </div>
        </div>

        {/* Right Content */}
        <div className=" ">
          <p className="text-[#90cc35] uppercase tracking-wide font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Building Dreams, <br /> Shaping Communities
          </h2>
          <p className="text-lg text-gray-700 font-medium mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-[#90cc35] mr-3"></span>
            We provide an essential service for you
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 md:pr-32">
            Maxpine Group is a premier real estate company with over 20 years of experience
            in developing premium residential and commercial properties. We are committed
            to delivering excellence, innovative designs, and sustainable living solutions
            that enrich communities and elevate lifestyles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 md:pr-32">
            Our portfolio includes luxury apartments, townships, and commercial spaces
            across prime locations. Every project reflects our dedication to quality,
            attention to detail, and customer satisfaction.
          </p>
          <Link to="/about">
          <button className="bg-[#90cc35] text-white font-medium px-8 py-3 rounded-full shadow hover:bg-[#8cdb15] transition">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
