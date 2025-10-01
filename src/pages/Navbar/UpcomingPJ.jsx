import { useState } from "react";
import { 
  MapPin, Home, Ruler, Star, Heart, Share2, 
  ChevronLeft, ChevronRight, X, Check, 
  Wifi, Utensils, Waves, Dumbbell, Users, Send,
  User, Mail, Phone, Calendar, TreePine, Droplets
} from "lucide-react";

import img1 from "../../assets/Leaf/leaf-1.jpeg"
import img2 from "../../assets/Leaf/leaf-2.jpeg"
import img3 from "../../assets/Leaf/leaf-3.jpeg"
import img4 from "../../assets/Leaf/leaf-4.jpeg"
import img5 from "../../assets/Leaf/leaf-5.jpeg"
import img6 from "../../assets/Leaf/leaf-7.jpeg"
import img7 from "../../assets/Leaf/leaf-6.jpeg"
import img8 from "../../assets/Leaf/leaf-8.jpeg"
import img9 from "../../assets/Leaf/leaf-10.jpeg"
import img10 from "../../assets/Leaf/leaf-11.jpeg"

export default function UpcomingPJ() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    title: '',
    review: ''
  });

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,img10
  ];

  const features = [
    { icon: TreePine, name: "Greenhouse" },
    { icon: Wifi, name: "Wifi" },
    { icon: Utensils, name: "Iron Disc Oven" },
    { icon: Waves, name: "Sauna" },
    { icon: Dumbbell, name: "Jogging Track" },
    { icon: Waves, name: "Swimming Pool" },
    { icon: Check, name: "Shed/Commercial" },
    { icon: Users, name: "Sleeping" }
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { ...reviewData, rating });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-24 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <a href="/" className="hover:text-[#3c92a9] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/properties" className="hover:text-[#3c92a9] transition-colors">For Sale</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Leaf Shade</span>
          </div>
        </div>
      </div>

      {/* Title & Badges */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-24 py-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Leaf Shade</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  For Sale
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Cottages
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-lg border transition-all ${
                  isFavorite 
                    ? 'bg-red-500 border-red-500 text-white' 
                    : 'bg-white border-gray-300 text-gray-700 hover:border-[#3c92a9]'
                }`}
              >
                <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button className="p-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-[#3c92a9] transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-black">
        <div className="container mx-auto px-4 lg:px-24 py-4">
          <div className="relative h-[500px] group rounded-lg overflow-hidden">
            <img
              src={images[currentImage]}
              alt="Property"
              className="w-full h-full object-cover"
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 py-4 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImage === idx ? 'border-[#3c92a9]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 pb-4 border-b">Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Land/Built</p>
                  <p className="font-semibold text-gray-900">NA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Id</p>
                  <p className="font-semibold text-gray-900">NA</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 pb-4 border-b">Description</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">
                  Cottages & Resort Style Living.
                </h3>
                <p>
                  A unique project offering resort-style cottages and a resort-style living experience! Surrounded by lush forests, this site offers one of the best views of the pines! It is best suited for those who seek and desire solitude, away from the buzz and noise of everyday life.
                </p>
                <p>
                  The land is nearing completion with a strong water spring and all other essentials in place and being incorporated into the eco-technology. With its six-minute walking distance to the nearest private school, everything else for daily living and infrastructure lies at the neighboring resort and the small but bustling town of Dhanachuli, a quick 3-minute drive away.
                </p>
                <p>
                  This is an exceptional dream-come-true setup. The land comes with 100% clear, verified and approved title deeds.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">Property Documents</h4>
                <div className="flex items-center gap-2 text-[#3c92a9]">
                  <Check className="w-5 h-5" />
                  <span>LandBank Brochure</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <h2 className="text-2xl font-bold">Address</h2>
                <button className="bg-[#c9a961] hover:bg-[#b89951] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  View on Map
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="font-semibold text-gray-900">
                    Leaf Shade, Balidewat,<br />
                    Dhanachuli - Mukt<br />
                    Mukteshwar, Nainital
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">State/Country</p>
                  <p className="font-semibold text-gray-900">Uttarakhand</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">City</p>
                  <p className="font-semibold text-gray-900">Nainital</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Zip/Postal Code</p>
                  <p className="font-semibold text-gray-900">263132</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Area</p>
                  <p className="font-semibold text-gray-900">Nainital</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Country</p>
                  <p className="font-semibold text-gray-900">India</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 pb-4 border-b">Details</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-b border-blue-200 bg-blue-100">
                    <p className="text-sm font-semibold text-gray-700">Property Size</p>
                  </div>
                  <div className="p-4 border-b border-blue-200">
                    <p className="text-sm text-gray-900">NA</p>
                  </div>
                  <div className="p-4 border-r border-b border-blue-200 bg-blue-100">
                    <p className="text-sm font-semibold text-gray-700">Property Type</p>
                  </div>
                  <div className="p-4 border-b border-blue-200">
                    <p className="text-sm text-gray-900">Eco|Resort</p>
                  </div>
                  <div className="p-4 border-r bg-blue-100">
                    <p className="text-sm font-semibold text-gray-700">Property Owner</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#3c92a9] font-semibold">For Sale | Upcoming Project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#3c92a9] hover:text-white transition-colors group">
                    <feature.icon className="w-5 h-5 text-[#3c92a9] group-hover:text-white" />
                    <span className="text-sm font-medium">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Nearby */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">What's Nearby?</h2>
                <span className="text-sm text-gray-500">Powered By Walk</span>
              </div>
              <p className="text-gray-600">Please verify your All links</p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <button className="bg-[#c9a961] hover:bg-[#b89951] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Contact
                </button>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">H. Hoople</p>
                  <p className="text-sm text-gray-500">Property Agent</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Listing info about "2 This Property!!</p>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">0 Reviews</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort By:</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Default Order</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-6">Leave a Review</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={reviewData.email}
                        onChange={(e) => setReviewData({...reviewData, email: e.target.value})}
                        placeholder="Email (will not be published)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={reviewData.name}
                        onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                        placeholder="Name (optional)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={reviewData.title}
                      onChange={(e) => setReviewData({...reviewData, title: e.target.value})}
                      placeholder="Review Title"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`transition-colors ${
                            star <= rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          <Star className="w-8 h-8" fill={star <= rating ? "currentColor" : "none"} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                    <textarea
                      value={reviewData.review}
                      onChange={(e) => setReviewData({...reviewData, review: e.target.value})}
                      rows="5"
                      placeholder="Write Review"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmitReview}
                    className="bg-[#3c92a9] hover:bg-[#1b7690] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6 space-y-6">
              {/* Agent Info */}
              <div className="flex items-center gap-3 pb-6 border-b">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">H. Hoople</p>
                  <p className="text-sm text-gray-500">Property Agent</p>
                </div>
              </div>

              <h3 className="text-xl font-bold">Anugrah Homes Tour Form</h3>

              {/* Contact Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tour Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent">
                    <option>In Person</option>
                    <option>Virtual Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="3"
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent"
                  ></textarea>
                </div>

                <button className="w-full bg-[#3c92a9] hover:bg-[#17738d] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[currentImage]}
            alt="Gallery"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
}