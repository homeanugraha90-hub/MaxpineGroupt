import { useState } from "react";

const testimonials = [
  {
    name: "Ramesh Gupta",
    role: "Home Buyer, Delhi",
    text: "Maxpine ne mere sapno ka ghar sach kar diya! Saara process smooth tha aur team ne har step pe support diya.",
    rating: 5
  },
  {
    name: "Sneha Verma",
    role: "Apartment Owner, Mumbai",
    text: "Property selection aur documentation ka process bahut simple aur transparent tha. Maxpine ke saath invest karna safe aur reliable experience tha.",
    rating: 5
  },
  {
    name: "Amit Singh",
    role: "Residential Buyer, Bengaluru",
    text: "Maxpine ke staff ne har query patiently solve ki aur har step me guide kiya. Ghar ka location aur amenities bilkul expectation ke hisaab se hain.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Home Owner, Pune",
    text: "Team ka customer support excellent hai. Humare budget aur preferences ke according property choose karna easy tha.",
    rating: 4
  }
];

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-700 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <p className="text-[#3c92a9] font-semibold uppercase tracking-widest text-sm mb-2">
          Maxpine Customer Reviews
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-white drop-shadow-xl">
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-gray-800 rounded-3xl p-10 sm:p-14 lg:p-16 shadow-2xl border-2 border-[#3c92a9]">
          {/* Quote Icon */}
          <div className="text-[#3c92a9] text-6xl sm:text-7xl lg:text-8xl mb-6">❝</div>

          {/* Testimonial Text */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            {testimonials[currentTestimonial].text}
          </p>

          {/* Rating Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-xl sm:text-2xl ${
                  i < testimonials[currentTestimonial].rating ? "opacity-100" : "opacity-40"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Client Name & Role */}
          <h4 className="font-bold text-lg sm:text-xl text-indigo-50">
            {testimonials[currentTestimonial].name}
          </h4>
          <p className="text-[#3c92a9] text-sm sm:text-base mb-8">
            {testimonials[currentTestimonial].role}
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                  currentTestimonial === index
                    ? "bg-[#3c92a9] w-6 sm:w-8 h-3 sm:h-4 shadow-lg"
                    : "bg-white bg-opacity-30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
