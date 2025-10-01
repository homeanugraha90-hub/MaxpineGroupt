import { MapPin, Home, Tag, CheckCircle } from "lucide-react";
import img from "../../assets/All home imgs/people-1.jpg"

export default function AnugrahCard() {
  return (
    <div className="w-80  bg-white rounded-xl shadow-2xl border overflow-hidden">
      <img
        src={img}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">Anugrah Homes</h3>
        <p className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" /> Noida Extension, UP
        </p>
        <p className="flex items-center text-sm text-gray-600">
          <Home className="w-4 h-4 mr-1" /> 100 , 200 , 300 Sq. Yards Plot
        </p>
        <p className="flex items-center text-sm text-gray-600">
          <Tag className="w-4 h-4 mr-1" /> Starting ₹52 Lakhs
        </p>
        <p className="flex items-center text-sm font-medium text-green-600">
          <CheckCircle className="w-4 h-4 mr-1" /> Under Construction
        </p>
        <a href="https://anugrahhomes.com" target="_blank">
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
        </a>
      </div>
    </div>
  );
}