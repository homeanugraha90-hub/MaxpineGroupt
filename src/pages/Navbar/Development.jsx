
import { useState } from "react";
import { Home, ChevronDown, Calendar, Camera, ArrowRight } from "lucide-react";

import img1 from "../../assets/Brij.V.Development/1.jpg"
import img2 from "../../assets/Brij.V.Development/2.jpg"
import img3 from "../../assets/Brij.V.Development/3.jpg"
import img4 from "../../assets/Brij.V.Development/4.jpg"
import img5 from "../../assets/Brij.V.Development/5.jpg"
import img6 from "../../assets/Brij.V.Development/7.jpg"
import img7 from "../../assets/Brij.V.Development/7.jpg"
import img8 from "../../assets/Brij.V.Development/8.jpg"
import img9 from "../../assets/Brij.V.Development/9.jpg"
import img10 from "../../assets/Brij.V.Development/10.jpg"
import img11 from "../../assets/Brij.V.Development/11.jpg"
import img12 from "../../assets/Brij.V.Development/12.jpg"
import img13 from "../../assets/Brij.V.Development/13.jpg"
import img14 from "../../assets/Brij.V.Development/14.jpg"
import img15 from "../../assets/Brij.V.Development/15.jpg"
import img16 from "../../assets/Brij.V.Development/16.jpg"
import img17 from "../../assets/Brij.V.Development/17.jpg"
import img18 from "../../assets/Brij.V.Development/18.jpg"
import img19 from "../../assets/Brij.V.Development/19.jpg"
import img20 from "../../assets/Brij.V.Development/20.jpg"
import img21 from "../../assets/Brij.V.Development/21.jpg"
import img22 from "../../assets/Brij.V.Development/22.jpg"
import img23 from "../../assets/Brij.V.Development/23.jpg"
import img24 from "../../assets/Brij.V.Development/24.jpg"
import img25 from "../../assets/Brij.V.Development/26.jpg"
import img26 from "../../assets/Brij.V.Development/28.jpg"

export default function Development() {
  const [openSection, setOpenSection] = useState(null);

  const updates = [
    {
      id: 1,
      title: "Project Development Images - (June 2025)",
      date: "June 2025",
      images: [img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12],
      description: "Latest construction progress showcasing structural completion and finishing work."
    },
    {
      id: 2,
      title: "Project Development Images - (Apr-2025)",
      date: "April 2025",
      images: [img1,img13,img14,img15],
      description: "Mid-phase development showing interior work and facade completion."
    },
    {
      id: 3,
      title: "Project Development Images - (Mar-2025)",
      date: "March 2025",
      images: [img16,img17,img18,img19 ],
      description: "Foundation and structural framework completion milestones."
    },
    {
      id: 4,
      title: "Project Development Images - (Jan-2025)",
      date: "January 2025",
      images: [img20,img21,img22,img23 ],
      description: "Early construction phase with foundation laying and ground work."
    },
    {
      id: 5,
      title: "Project Development Images - (Dec-2024)",
      date: "December 2024",
      images: [img24,img25,img26,img22],
      description: "Project initiation and site preparation activities."
    }
  ];

  const recentPosts = [
    { title: "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group", link: "#" },
    { title: "A Joyous Celebration at Anugrah Homes: Family Carnival Success!", link: "#" },
    { title: "Lights, Camera, Action: Progress at International Film City (YIFIDA)", link: "#" },
    { title: "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity", link: "#" },
    { title: "A Festive Affair: Diwali at Maxpine Group", link: "#" }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-24 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <a href="/" className="hover:text-[#3c92a9] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Development Updates</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#3c92a9] 
      to-[#23778e] text-white py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Development Updates</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Track our project progress with regular photo updates showcasing construction milestones and developments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Updates Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(update.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#3c92a9]/10 p-3 rounded-lg">
                        <Camera className="w-6 h-6 text-[#3c92a9]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{update.date}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#3c92a9] transition-transform duration-300 ${
                        openSection === update.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openSection === update.id
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="px-6 pb-6 border-t">
                      <p className="text-gray-600 mb-6 mt-4">{update.description}</p>
                      
                      {/* Image Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {update.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                          >
                            <img
                              src={img}
                              alt={`${update.title} - Image ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-sm font-medium">View Image</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#3c92a9]">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-[#3c92a9] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <p className="text-sm text-gray-700 group-hover:text-[#3c92a9] transition-colors leading-relaxed">
                      {post.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}