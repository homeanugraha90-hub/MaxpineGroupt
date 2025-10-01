import { MapPin, Home, Tag, CheckCircle } from "lucide-react";
import img from "../../assets/All home imgs/Gate-1170x785.png"

export default function AnugrahCard() {
  return (
    <div className="w-80  bg-white rounded-xl shadow-2xl border overflow-hidden">
      <img
        src={img}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">Anugrah Homes</h3>
        <p className="flex items-center text-sm text-gray-600">
          <MapPin className="w-6 h-6 mr-1" /> Anugrah Homes, Jattari,
Aligarh Palwal Road,
Uttar Pradesh 202137
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
        <button className="mt-3 w-full bg-[#4cd1d1] text-white py-2 rounded-lg hover:bg-[#29acac] transition">
          View Details
        </button>
        </a>
      </div>
    </div>
  );
}