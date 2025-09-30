import { MapPin, Home, Car, Users, Building } from "lucide-react";
import { useState } from "react";

export default function HomeparkLiving() {
  const [activeRoom, setActiveRoom] = useState("1room");

  const roomOptions = [
    { id: "1room", label: "1 Room 47m²", area: "47m²", active: true },
    { id: "2room", label: "2 Rooms 65m²", area: "65m²", active: false },
    { id: "3room", label: "3 Rooms 90m²", area: "90m²", active: false }
  ];

  const propertyDetails = [
    { 
      icon: <Building className="w-5 h-5" />, 
      label: "Total area:", 
      value: "680 metre square",
      color: "text-[#90cc35]"
    },
    { 
      icon: <Home className="w-5 h-5" />, 
      label: "Total Floor:", 
      value: "24 Floor",
      color: "text-[#90cc35]"
    },
    { 
      icon: <Car className="w-5 h-5" />, 
      label: "Parking Lot:", 
      value: "5 Large",
      color: "text-[#90cc35]"
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: "Social Area:", 
      value: "860 m²",
      color: "text-[#90cc35]"
    }
  ];

  const floorPlanImages = {
    "1room": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa' stroke='%23333' stroke-width='2'/%3E%3Crect x='20' y='20' width='180' height='120' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='220' y='20' width='160' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='220' y='120' width='160' height='60' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='20' y='160' width='80' height='120' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='120' y='160' width='80' height='120' fill='none' stroke='%23666' stroke-width='1'/%3E%3Ctext x='110' y='80' text-anchor='middle' font-size='12' fill='%23333'%3ELiving Room%3C/text%3E%3Ctext x='300' y='60' text-anchor='middle' font-size='12' fill='%23333'%3EBedroom%3C/text%3E%3Ctext x='300' y='150' text-anchor='middle' font-size='12' fill='%23333'%3EKitchen%3C/text%3E%3Ctext x='60' y='220' text-anchor='middle' font-size='12' fill='%23333'%3EBathroom%3C/text%3E%3Ctext x='160' y='220' text-anchor='middle' font-size='12' fill='%23333'%3EBalcony%3C/text%3E%3C/svg%3E",
    "2room": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'%3E%3Crect width='400' height='350' fill='%23f8f9fa' stroke='%23333' stroke-width='2'/%3E%3Crect x='20' y='20' width='160' height='120' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='200' y='20' width='180' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='200' y='120' width='90' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='310' y='120' width='70' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='20' y='160' width='160' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='20' y='260' width='180' height='70' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='220' y='220' width='160' height='110' fill='none' stroke='%23666' stroke-width='1'/%3E%3Ctext x='100' y='80' text-anchor='middle' font-size='12' fill='%23333'%3ELiving Room%3C/text%3E%3Ctext x='290' y='60' text-anchor='middle' font-size='12' fill='%23333'%3EMaster Bedroom%3C/text%3E%3Ctext x='245' y='160' text-anchor='middle' font-size='12' fill='%23333'%3EKitchen%3C/text%3E%3Ctext x='345' y='160' text-anchor='middle' font-size='12' fill='%23333'%3EBath%3C/text%3E%3Ctext x='100' y='200' text-anchor='middle' font-size='12' fill='%23333'%3EBedroom 2%3C/text%3E%3Ctext x='110' y='295' text-anchor='middle' font-size='12' fill='%23333'%3EDining%3C/text%3E%3Ctext x='300' y='275' text-anchor='middle' font-size='12' fill='%23333'%3EBalcony%3C/text%3E%3C/svg%3E",
    "3room": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 400'%3E%3Crect width='450' height='400' fill='%23f8f9fa' stroke='%23333' stroke-width='2'/%3E%3Crect x='20' y='20' width='180' height='120' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='220' y='20' width='100' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='340' y='20' width='90' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='220' y='120' width='210' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='20' y='160' width='90' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='130' y='160' width='70' height='80' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='20' y='260' width='180' height='60' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='220' y='220' width='100' height='100' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='340' y='220' width='90' height='100' fill='none' stroke='%23666' stroke-width='1'/%3E%3Crect x='20' y='340' width='410' height='40' fill='none' stroke='%23666' stroke-width='1'/%3E%3Ctext x='110' y='80' text-anchor='middle' font-size='11' fill='%23333'%3ELiving Room%3C/text%3E%3Ctext x='270' y='60' text-anchor='middle' font-size='11' fill='%23333'%3EMaster BR%3C/text%3E%3Ctext x='385' y='60' text-anchor='middle' font-size='11' fill='%23333'%3EBedroom 2%3C/text%3E%3Ctext x='325' y='160' text-anchor='middle' font-size='11' fill='%23333'%3EKitchen%3C/text%3E%3Ctext x='65' y='200' text-anchor='middle' font-size='11' fill='%23333'%3EBedroom 3%3C/text%3E%3Ctext x='165' y='200' text-anchor='middle' font-size='11' fill='%23333'%3EBath%3C/text%3E%3Ctext x='110' y='290' text-anchor='middle' font-size='11' fill='%23333'%3EDining Area%3C/text%3E%3Ctext x='270' y='270' text-anchor='middle' font-size='11' fill='%23333'%3EStudy%3C/text%3E%3Ctext x='385' y='270' text-anchor='middle' font-size='11' fill='%23333'%3EBalcony%3C/text%3E%3Ctext x='225' y='360' text-anchor='middle' font-size='11' fill='%23333'%3EGarden Terrace%3C/text%3E%3C/svg%3E"
  };

  return (
    <section className="bg-gradient-to-br md:px-20 px-10 from-gray-50 to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-6xl lg:text-8xl font-light text-gray-300"></span>
                <div className="flex items-center gap-2 text-[#90cc35]">
                  <div className="w-8 h-0.5 bg-[#90cc35]"></div>
                  <span className="text-sm font-medium uppercase tracking-wider">Property Details</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-tight">
                  <span className="text-[#90cc35] font-light">Homepark</span>{" "}
                  <span className="text-gray-800 font-normal">Living Spaces</span>
                </h2>
                <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold">
                  Decorated Flats in Pozniary - Kiev
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#90cc35]">
              <p className="text-gray-600 leading-relaxed text-lg">
                We are waiting for you in our sales office for having all these opportunities with affordable prices and appropriate payment opportunities.
              </p>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {propertyDetails.map((detail, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${detail.color} bg-amber-50 p-2 rounded-lg`}>
                      {detail.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {detail.label}
                    </span>
                  </div>
                  <p className="text-xl font-semibold text-gray-800">{detail.value}</p>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 bg-white p-4 rounded-xl shadow-sm">
              <MapPin className="w-5 h-5 text-[#90cc35]" />
              <span className="font-medium">Location: Pozniary District, Kiev, Ukraine</span>
            </div>
          </div>

          {/* Right Content - Floor Plan */}
          <div className="space-y-6">
            {/* Room Selection Tabs */}
            <div className="bg-white rounded-xl p-2 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-1">
                {roomOptions.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex-1 ${
                      activeRoom === room.id
                        ? "bg-[#90cc35] text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Floor Plan Display */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-semibold text-gray-800">
                  Floor Plan - {roomOptions.find(r => r.id === activeRoom)?.label}
                </h4>
                <span className="text-[#90cc35] font-semibold bg-amber-50 px-3 py-1 rounded-full text-sm">
                  {roomOptions.find(r => r.id === activeRoom)?.area}
                </span>
              </div>
              
              {/* Floor Plan Image */}
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-200">
                <img 
                  src={floorPlanImages[activeRoom]} 
                  alt={`${activeRoom} floor plan`}
                  className="w-full h-64 lg:h-80 object-contain"
                />
              </div>

              {/* Floor Plan Features */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeRoom === "1room" && (
                  <>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Living Room</div>
                      <div className="text-xs text-gray-500">20m²</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Bedroom</div>
                      <div className="text-xs text-gray-500">15m²</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Kitchen</div>
                      <div className="text-xs text-gray-500">12m²</div>
                    </div>
                  </>
                )}
                {activeRoom === "2room" && (
                  <>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Living Room</div>
                      <div className="text-xs text-gray-500">25m²</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Master BR</div>
                      <div className="text-xs text-gray-500">18m²</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Bedroom 2</div>
                      <div className="text-xs text-gray-500">15m²</div>
                    </div>
                  </>
                )}
                {activeRoom === "3room" && (
                  <>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Living Room</div>
                      <div className="text-xs text-gray-500">28m²</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Master BR</div>
                      <div className="text-xs text-gray-500">20m²</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-600">Bedroom 2</div>
                      <div className="text-xs text-gray-500">16m²</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}