import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Home } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'buy',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', propertyType: 'buy', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Header with Background Image */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200)',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <div className="flex items-center gap-3 text-lg">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <span>›</span>
            <span className="text-blue-400">Contact</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600">123 Real Estate Ave<br />Suite 456<br />City, State 12345</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600">+1 (555) 123-4567<br />Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">info@realestate.com<br />support@realestate.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Office Hours</h3>
              <p className="text-slate-600">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              
              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="buy">Buying a Property</option>
                      <option value="sell">Selling a Property</option>
                      <option value="rent">Renting a Property</option>
                      <option value="invest">Investment Opportunities</option>
                      <option value="consult">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Our Location</p>
                  <p className="text-blue-100 mt-2">123 Real Estate Ave, Suite 456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}