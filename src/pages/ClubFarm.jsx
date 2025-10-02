import React, { useState } from 'react';
import { MapPin, Calendar, Home, TrendingUp, CheckCircle, Download, Phone, TreeDeciduous, Hotel, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from "../assets/ClubForm/1.png"
import img2 from "../assets/ClubForm/2.jpeg"
import img3 from "../assets/ClubForm/3.jpg"
import img4 from "../assets/ClubForm/4.jpg"
import img5 from "../assets/ClubForm/5.jpg"
import img6 from "../assets/ClubForm/6.jpg"
import img7 from "../assets/All home imgs/new-update-1.jpeg"
import pdf from "../assets/ClubForm/A4-TCF.pdf"

export default function ClubFarm() {
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        img1, img2, img3, img4, img5, img6, img7
    ];

    const features = [
        '24X7 CCTV surveillance',
        '25 Acre 5 Star Resort',
        '50 Feet Wide Roads',
        'Electrification',
        'Sanskar School',
        'Security',
        'Well Connectivity',
        'Wellness Centre',
        'White Sandalwood Farmland'
    ];

    const projectHighlights = [
        {
            icon: <TreeDeciduous className="w-6 h-6" />,
            title: 'Farming Land',
            desc: 'Dedicated White Sandalwood farming – high-value, long-term asset.'
        },
        {
            icon: <Hotel className="w-6 h-6" />,
            title: '25 Acre 5-Star Resort',
            desc: 'Premium stay options amidst nature and serenity.'
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: '5 Acre Wellness Centre',
            desc: 'Yoga, meditation, naturopathy, and stress-free living.'
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: '5 Acre Sanskar School',
            desc: 'Rooted in culture, modern in outlook – education with values.'
        }
    ];

    const infrastructure = [
        'Ganga Expressway',
        'Delhi-Lucknow Greenfield Corridor',
        'Widening of NH-9',
        'New Railway Infrastructure'
    ];

    const whyChoose = [
        'Peaceful & pollution-free natural setting',
        'High-value White Sandalwood investment',
        'Weekend Getaway + long-term returns',
        'Resort, wellness, and cultural living in one ecosystem',
        'Government-supported development for rapid growth'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Header */}
            <div className="bg text-[#5e6e6c]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">The Club Farm</h1>
                    {/* <div className="flex flex-wrap gap-2">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              FEATURED
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              FARMING-LAND
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              ON-GOING
            </span>
          </div> */}
                </div>
            </div>

            {/* Gallery */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-3 md:row-span-2">
                        <img
                            src={images[activeImage]}
                            alt="Main Property View"
                            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
                            onClick={() => setActiveImage((activeImage + 1) % images.length)}
                        />
                    </div>
                    {images.slice(1).map((img, idx) => (
                        <div key={idx} className="hidden md:block">
                            <img
                                src={img}
                                alt={`Property View ${idx + 2}`}
                                className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => setActiveImage(idx + 1)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Overview */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-emerald-600 pb-2 inline-block">
                                Overview
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white p-6 rounded-lg text-center shadow-lg">
                                    <Home className="w-8 h-8 mx-auto mb-2 opacity-80" />
                                    <p className="text-sm opacity-90 mb-1">Property Type</p>
                                    <p className="text-2xl font-bold">Farming-Land</p>
                                </div>
                                <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white p-6 rounded-lg text-center shadow-lg">
                                    <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-80" />
                                    <p className="text-sm opacity-90 mb-1">Land Area</p>
                                    <p className="text-2xl font-bold">250+ Acre</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-emerald-600 pb-2 inline-block">
                                Description
                            </h2>
                            <h3 className="text-xl font-bold text-emerald-700 mb-4 mt-6">
                                The Club Farm – White Sandalwood Farming-Land & Wellness Living by the Ganga
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                <span className="font-semibold text-emerald-700">Welcome to The Club Farm</span>, an exclusive 250+ acre Farming-Land project located in the spiritual heart of <span className="font-semibold">Garh Mukteshwar</span>, right on the banks of the sacred <span className="font-semibold">River Ganga</span>. Designed to blend <span className="font-semibold">luxury, wellness, and tradition</span>, this one-of-a-kind project offers fertile <span className="font-semibold">Farming Land for White Sandalwood Cultivation</span>, alongside premium lifestyle amenities for a truly holistic life experience.
                            </p>

                            {/* Project Highlights */}
                            <h3 className="text-2xl font-bold text-emerald-700 mt-8 mb-4">Project Highlights:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {projectHighlights.map((item, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-3">
                                            <div className="text-emerald-600 mt-1">{item.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Prime Location */}
                            <h3 className="text-2xl font-bold text-emerald-700 mt-8 mb-4">Prime Location – Garh Mukteshwar:</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Situated just a short drive from Delhi-NCR, <span className="font-semibold">Garh Mukteshwar</span> is rapidly emerging as a <span className="font-semibold">spiritual tourism hotspot</span> and <span className="font-semibold">high-demand weekend destination</span>. Known for its holy significance and natural beauty, the region is being transformed by the <span className="font-semibold">Uttar Pradesh Government's riverfront development model</span>—inspired by the Sabarmati Riverfront project.
                            </p>

                            {/* Major Infrastructure */}
                            <h3 className="text-2xl font-bold text-emerald-700 mt-8 mb-4">Major Infrastructure Boost:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {infrastructure.map((infra, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{infra}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Why Choose */}
                            <h3 className="text-2xl font-bold text-emerald-700 mt-8 mb-4">Why Choose The Club Farm?</h3>
                            <ul className="space-y-3">
                                {whyChoose.map((reason, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Address */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-emerald-600 pb-2 inline-block">
                                Address
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <p className="text-emerald-700 font-semibold mb-1">Address</p>
                                    <p className="text-gray-700">Garh Ganga, Brijghat, Uttar Pradesh</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <p className="text-emerald-700 font-semibold mb-1">City</p>
                                    <p className="text-gray-700">Garh Mukteshwar</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <p className="text-emerald-700 font-semibold mb-1">State/County</p>
                                    <p className="text-gray-700">Uttar Pradesh</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <p className="text-emerald-700 font-semibold mb-1">Zip/Postal Code</p>
                                    <p className="text-gray-700">245205</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <p className="text-emerald-700 font-semibold mb-1">Area</p>
                                    <p className="text-gray-700">Brijghat</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                                    <p className="text-emerald-700 font-semibold mb-1">Country</p>
                                    <p className="text-gray-700">India</p>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-emerald-600 pb-2 inline-block">
                                Features
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-emerald-50 p-3 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Property Details</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-3">
                                    <p className="text-emerald-600 font-semibold mb-1">Property Size</p>
                                    <p className="text-gray-800 text-lg">250+ Acre</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <p className="text-emerald-600 font-semibold mb-1">Property Type</p>
                                    <p className="text-gray-800">Farming-Land</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <p className="text-emerald-600 font-semibold mb-1">Property Status</p>
                                    <p className="text-gray-800">On-going Project</p>
                                </div>
                                <div className="pb-3">
                                    <p className="text-emerald-600 font-semibold mb-1 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Updated
                                    </p>
                                    <p className="text-gray-800">July 11, 2025</p>
                                </div>
                            </div>

                            <div className="space-y-6 flex flex-col mt-6">
                                <Link to="/contact">
                                    <button className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                                        <Phone className="w-5 h-5" />
                                        Contact Us
                                    </button>
                                </Link>
                                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                                    <Download className="w-5 h-5" />
                                    <a
                                        href={pdf}
                                        download
                                        className="w-full block text-center text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                                    >
                                        Download Brochure
                                    </a>


                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}