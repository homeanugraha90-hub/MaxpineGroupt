import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, CheckCircle, ArrowRight, Building2, Car, Phone, Mail } from 'lucide-react';
import img1 from "../assets/All home imgs/video-placeholder.jpg"

export default function SiteVisit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    property: '',
    visitors: '1',
    transportation: 'own',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', date: '', time: '',
        property: '', visitors: '1', transportation: 'own', message: ''
      });
    }, 3000);
  };

  const properties = [
    { id: 1, name: 'Anugrah Homes', location: 'Downtown District', type: 'Homes' },
    { id: 2, name: 'Skyline Aera homes', location: 'Business Bay', type: 'Homes' },
    { id: 3, name: 'Brij Vrinda', location: 'Marina District', type: 'Homes' },
    { id: 4, name: 'The Club Farm', location: 'Suburban Area', type: 'Homes' }
  ];

  const benefits = [
    { icon: MapPin, title: 'Guided Tours', desc: 'Expert agents show you every detail' },
    { icon: Building2, title: 'Multiple Properties', desc: 'Visit several locations in one day' },
    { icon: Car, title: 'Free Transportation', desc: 'Complimentary pickup & drop service' },
    { icon: Clock, title: 'Flexible Timing', desc: 'Choose your preferred time slot' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/60 opacity-85"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center">Schedule a Site Visit</h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-6 text-center">Experience Your Dream Home in Person</p>
          <div className="flex items-center gap-3 text-lg">
            <a href="/" className="hover:text-blue-300 transition-colors">Home</a>
            <span>›</span>
            <span className="text-[#1cbae6]">Site Visit</span>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-[#20ae9b]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Available Properties Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#20ae9b]" />
                Featured Properties
              </h2>
              <div className="space-y-4">
                {properties.map((property) => (
                  <div key={property.id} className="border border-slate-200 rounded-lg p-4 hover:border-[#20ae9b] hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{property.name}</h3>
                        {/* <p className="text-sm text-slate-600 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {property.location}
                        </p> */}
                        <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-[#20ae9b] text-xs font-medium rounded-full">
                          {property.type}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#20ae9b] mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#20ae9b] to-[#257a92] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-[#cdd1c7] mb-4 text-sm">Our team is ready to assist you with scheduling and property selection.</p>
              <div className="space-y-3">
                <a href="tel:+15551234567" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91-911-525-3545 , +91-120-410-7573</span>
                </a>
                <a href="mailto:visits@realestate.com" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@maxpinegroup.in , info@anugrahhomes.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h2>
              <p className="text-slate-600 mb-6">Fill out the form below and we'll confirm your appointment within 24 hours</p>

              {submitted && (
                <div className="mb-6 bg-green-50 border-l-4 border-[#20ae9b] text-[#20ae9b] px-4 py-3 rounded">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Booking Confirmed!</span>
                  </div>
                  <p className="text-sm mt-1">We'll contact you shortly to confirm your site visit.</p>
                </div>
              )}

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Visit Details */}
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Visit Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Property *
                    </label>
                    <select
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                    >
                      <option value="">Choose a property</option>
                      {properties.map(p => (
                        <option key={p.id} value={p.id}>{p.name} 
                         {/* {p.location} */}
                         </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Number of Visitors
                      </label>
                      <select
                        name="visitors"
                        value={formData.visitors}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4+ People</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Car className="w-4 h-4 inline mr-1" />
                        Transportation
                      </label>
                      <select
                        name="transportation"
                        value={formData.transportation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition"
                      >
                        <option value="own">Own Transportation</option>
                        <option value="pickup">Need Pickup Service</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#20ae9b] focus:border-transparent outline-none transition resize-none"
                    placeholder="Any special requirements or questions?"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#20ae9b] hover:bg-[#20ae9b] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Confirm Site Visit
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
     
    </div>
  );
}