import { useState } from "react";
import { MapPin, Home, Calendar, User, Star, Phone, Mail } from "lucide-react";
import { 
  Camera,        // CCTV
  Flame,         // Gas
           // Roads
  School,        // Schools
  Compass,       // Vaastu
  Waves,         // Swimming Pool
  Dumbbell,      // Sports
  TreePine,      // Parks
  ShieldCheck,   // Security
  Car,           // Parking
  ShoppingBag,   // Shopping Complex
  Hospital       // Healthcare
} from "lucide-react";
import img from "../../assets/All home imgs/Final-Key-Plan.png"

export default function AmritGrah() {
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const INITIAL_AMENITIES = 6;
  const INITIAL_REVIEWS = 3;

  const amenities = [
  { id: 1, icon: <Camera className="w-5 h-5 text-[#29aa8a]" />, text: "24/7 CCTV Surveillance" },
  { id: 2, icon: <Flame className="w-5 h-5 text-[#29aa8a]" />, text: "Gas" },
 
  { id: 4, icon: <School className="w-5 h-5 text-[#29aa8a]" />, text: "Schools" },
  { id: 5, icon: <Compass className="w-5 h-5 text-[#29aa8a]" />, text: "Vaastu Compliant" },
  { id: 6, icon: <Waves className="w-5 h-5 text-[#29aa8a]" />, text: "Swimming Pool" },
  { id: 7, icon: <Dumbbell className="w-5 h-5 text-[#29aa8a]" />, text: "Sports Facilities" },
  { id: 8, icon: <TreePine className="w-5 h-5 text-[#29aa8a]" />, text: "Garden & Parks" },
  { id: 9, icon: <ShieldCheck className="w-5 h-5 text-[#29aa8a]" />, text: "24/7 Security" },
  { id: 10, icon: <Car className="w-5 h-5 text-[#29aa8a]" />, text: "Parking Space" },
  { id: 11, icon: <ShoppingBag className="w-5 h-5 text-[#29aa8a]" />, text: "Shopping Complex" },
  { id: 12, icon: <Hospital className="w-5 h-5 text-[#29aa8a]" />, text: "Healthcare Center" },
];


  const reviews = [
    { id: 1, name: "Rajesh Kumar", rating: 5, date: "2 weeks ago", comment: "Excellent property with great amenities. The location is perfect and connectivity is amazing." },
    { id: 2, name: "Priya Sharma", rating: 4, date: "1 month ago", comment: "Very good property. Staff is helpful and the infrastructure is top-notch." },
    { id: 3, name: "Amit Singh", rating: 5, date: "1 month ago", comment: "Best investment decision. The project is progressing well and the area has great potential." },
    { id: 4, name: "Neha Gupta", rating: 4, date: "2 months ago", comment: "Good property with all modern facilities. Highly recommended for families." },
    { id: 5, name: "Vikram Patel", rating: 5, date: "2 months ago", comment: "Outstanding project! The connectivity and amenities are beyond expectations." },
    { id: 6, name: "Sunita Reddy", rating: 5, date: "3 months ago", comment: "Great location with excellent infrastructure. Very satisfied with the purchase." }
  ];

  const amenitiesToShow = showAllAmenities ? amenities : amenities.slice(0, INITIAL_AMENITIES);
  const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, INITIAL_REVIEWS);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#7575a3] rounded-lg flex items-center justify-center">
              <Home className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Amrit Garh</h1>
              <div className="flex gap-2 mt-1 flex-wrap">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Available</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Residential Plots</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Best Offer</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={img}
                alt="Property Map"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-8 bg-[#7575a3] rounded-full"></div>
                Overview
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold text-gray-800">Amrit Garh</p>
                <p className="text-lg">Property Type: Residential Plots</p>
                <p className="leading-relaxed">
                  Experience luxury living at Amrit Garh, strategically located in the heart of the city with excellent connectivity. 
                  This premium residential project offers modern amenities and world-class infrastructure, making it an ideal choice for families 
                  and investors alike. The project features spacious plots, wide roads, and a well-planned layout ensuring a comfortable lifestyle.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-8 bg-[#7575a3] rounded-full"></div>
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Amrit Garh presents a unique opportunity to own your dream home in a prime location. The project is designed with 
                modern architecture and offers a perfect blend of comfort and luxury. With easy access to major highways, educational 
                institutions, healthcare facilities, and shopping centers, this property ensures convenience at every step.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-[#7575a3] rounded-full"></div>
                Address
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="font-semibold text-gray-800">Aerocity, Raj Nagar Extn</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">City/Town</p>
                  <p className="font-semibold text-gray-800">Ghaziabad</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">State/County</p>
                  <p className="font-semibold text-gray-800">Uttar Pradesh</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Zip/Postal Code</p>
                  <p className="font-semibold text-gray-800">201017</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-[#7575a3] rounded-full"></div>
                Details
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Property Type</p>
                  <p className="font-semibold text-[#7575a3]">Amrit Garh</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Property Status</p>
                  <p className="font-semibold text-[#7575a3]">Available</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Licensing Type</p>
                  <p className="font-semibold text-[#7575a3]">Approved</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Updated</p>
                  <p className="font-semibold text-gray-600">Oct 16, 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-[#7575a3] rounded-full"></div>
                Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {amenitiesToShow.map((amenity) => (
                  <div 
                    key={amenity.id}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#7575a3] hover:text-white transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-2xl">{amenity.icon}</span>
                    <span className="font-medium">{amenity.text}</span>
                  </div>
                ))}
              </div>
              {amenities.length > INITIAL_AMENITIES && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="bg-[#7575a3] hover:bg-[#5f5f87] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    {showAllAmenities 
                      ? "Show Less Features" 
                      : `Show More Features (${amenities.length - INITIAL_AMENITIES} more)`
                    }
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <div className="w-1 h-8 bg-[#7575a3] rounded-full"></div>
                  Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">4.8 (12)</span>
                </div>
              </div>

              <div className="space-y-4">
                {reviewsToShow.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>

              {reviews.length > INITIAL_REVIEWS && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="bg-[#7575a3] hover:bg-[#5f5f87] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    {showAllReviews 
                      ? "Show Less Reviews" 
                      : `Load More Reviews (${reviews.length - INITIAL_REVIEWS} more)`
                    }
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#7575a3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Anugrah Homes Tour Form</h3>
                    <p className="text-sm text-gray-500">Tour Form</p>
                  </div>
                </div>
                <button className="w-full bg-[#7575a3] hover:bg-[#5f5f87] text-white font-semibold py-3 rounded-lg transition-all duration-300 mb-3">
                  Contact Agent
                </button>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} />
                    <span>+91-120-410-7573</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span>info@maxpinegroup.in</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book a Tour</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tour Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7575a3] focus:border-transparent">
                      <option>In Person</option>
                      <option>Virtual Tour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7575a3] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7575a3] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7575a3] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input 
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7575a3] focus:border-transparent"
                    />
                  </div>
                  <button className="w-full bg-[#7575a3] hover:bg-[#5f5f87] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}