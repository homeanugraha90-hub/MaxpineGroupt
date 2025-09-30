import { useState } from "react";
import { 
  MapPin, Home, Ruler, BedDouble, Bath, Car, Calendar, 
  Phone, Mail, User, Star, Send, Heart, Share2, 
  ChevronLeft, ChevronRight, X, ZoomIn, Check
} from "lucide-react";

export default function SkyLine() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=700&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=700&fit=crop"
  ];

  const propertyDetails = {
    title: "Skyline Township",
    price: "₹12.5 Thousand",
    type: "Premium Residential Plots",
    location: "Hapur, Meerut Rd, Uttar Pradesh",
    size: "NA",
    plotArea: "100-200 sq yards",
    description: "More Details Coming Soon",
    features: [
      "Gated Community",
      "24/7 Security",
      "Green Spaces",
      "Modern Infrastructure",
      "Easy EMI Options",
      "Clear Title"
    ]
  };

  const amenities = [
    { name: "Clubhouse", icon: Home },
    { name: "Swimming Pool", icon: Home },
    { name: "Gym", icon: Home },
    { name: "Parks", icon: Home },
    { name: "Kids Play Area", icon: Home },
    { name: "Sports Facility", icon: Home }
  ];

  const similarProperties = [
    {
      title: "Starting From ₹48.35 Lakh",
      location: "Noida Extension, Ghaziabad",
      size: "1000 Sq Yards",
      price: "Details",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
    },
    {
      title: "Plot ₹7.55 Lakh",
      location: "Jewar, Noida • Near Greater Noida",
      size: "80 Sq. Yard",
      price: "Details",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop"
    },
    {
      title: "1.5+2 Kanal",
      location: "Whalton, Ghaziabad, Uttar Pradesh",
      size: "NA",
      price: "Details",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      title: "Skyline Heights",
      location: "Raj Nagar Extension, Ghaziabad",
      size: "1000 Square Feet",
      price: "Details",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Image Gallery */}
      <div className="relative bg-black">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="relative h-[500px] group">
            <img
              src={images[currentImage]}
              alt="Property"
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
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

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 hover:bg-white'
                }`}
              >
                <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm">
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowGallery(true)}
                className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            {/* Image Counter */}
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
                  currentImage === idx ? 'border-[#29aa8a]' : 'border-transparent opacity-60 hover:opacity-100'
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
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Price */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{propertyDetails.title}</h1>
                  <p className="flex items-center text-gray-600 text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-[#29aa8a]" />
                    {propertyDetails.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Starting Price</p>
                  <p className="text-3xl font-bold text-[#29aa8a]">{propertyDetails.price}</p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mt-2">
                    PRE LAUNCH PRICES
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Ruler className="w-6 h-6 mx-auto mb-2 text-[#29aa8a]" />
                  <p className="text-sm text-gray-500">Plot Size</p>
                  <p className="font-semibold">{propertyDetails.plotArea}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 mx-auto mb-2 text-[#29aa8a]" />
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-semibold">Residential</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-[#29aa8a]" />
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-semibold">Pre Launch</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-[#29aa8a]" />
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">Hapur</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex border-b">
                {['overview', 'description', 'address', 'details'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 text-sm font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? 'bg-[#29aa8a] text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">NA</h3>
                    <p className="text-gray-600 mb-6">By NA%</p>
                    
                    <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {propertyDetails.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {propertyDetails.description}
                    </p>
                  </div>
                )}

                {activeTab === 'address' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Address</h3>
                    <p className="text-gray-700 flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-[#29aa8a] mt-1 flex-shrink-0" />
                      <span>{propertyDetails.location}</span>
                    </p>
                    <div className="mt-6 h-64 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                        alt="Location Map"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Starting Price</p>
                        <p className="font-semibold text-lg">{propertyDetails.price}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Property Type</p>
                        <p className="font-semibold text-lg">Residential</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Plot Size</p>
                        <p className="font-semibold text-lg">{propertyDetails.plotArea}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">EMI Options</p>
                        <p className="font-semibold text-lg">Available</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#29aa8a] hover:text-white transition-colors group">
                    <amenity.icon className="w-6 h-6 text-[#29aa8a] group-hover:text-white" />
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Reviews (0)</h3>
                <button className="bg-[#29aa8a] hover:bg-[#238b73] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Leave a Review
                </button>
              </div>

              {/* Review Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Review title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} className="text-gray-300 hover:text-yellow-400 transition-colors">
                        <Star className="w-8 h-8" fill="currentColor" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                  <textarea
                    rows="4"
                    placeholder="Write your review..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  ></textarea>
                </div>

                <button className="bg-[#29aa8a] hover:bg-[#238b73] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Submit Review
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">H. Hoppe</p>
                  <p className="text-sm text-gray-500">Property Agent</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Anugrah Homes Tour Form</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tour Type*</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#29aa8a] focus:border-transparent">
                    <option>In Person</option>
                    <option>Virtual Tour</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#29aa8a] hover:bg-[#238b73] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Schedule Tour
                </button>
              </form>

              <div className="mt-6 pt-6 border-t space-y-3">
                <a
                  href="tel:+911204107573"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#29aa8a]" />
                  <span className="text-gray-700">+91-120-410-7573</span>
                </a>
                <a
                  href="mailto:info@maxpinegroup.in"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#29aa8a]" />
                  <span className="text-gray-700">info@maxpinegroup.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8">Similar Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProperties.map((property, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#29aa8a] text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{property.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-start gap-1">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{property.location}</span>
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <p className="text-xs text-gray-500">Size</p>
                      <p className="font-semibold text-sm">{property.size}</p>
                    </div>
                    <button className="bg-[#29aa8a] hover:bg-[#238b73] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      {property.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={images[currentImage]}
            alt="Gallery"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}