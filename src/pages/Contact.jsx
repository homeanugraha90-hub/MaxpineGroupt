import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Home } from 'lucide-react';
import img1 from "../assets/All home imgs/people-1.jpg"

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
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <div className="flex items-center gap-3 text-lg">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <span>›</span>
            <span className="text-[#3c92a9]">Contact</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white flex items-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#afcdd5] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#3c92a9]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 md:px-10 text-center">H-174, Ground Floor, Sector-63, Noida, Uttar Pradesh 201301 , Anugrah Homes, Jattari,
Aligarh Palwal Road,
Uttar Pradesh 202137</p>
            </div>

            <div className="bg-white flex items-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#add2dc] rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#3c92a9]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 text-center ">+91-911-525-3545, +91-120-410-7573, <br /> +91 767-827-9151 ,Every Day : 24x7</p>
            </div>

            <div className="bg-white flex items-center justify-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#3c92a9]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">info@anugrahhomes.com<br />info@maxpinegroup.in</p>
            </div>

            <div className="bg-white flex items-center justify-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#acd0db] rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#3c92a9]" />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent outline-none transition"
                      placeholder="Name"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent outline-none transition"
                      placeholder="abc@gmail.com"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent outline-none transition"
                      placeholder="+91 000-000-0000"
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
    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent outline-none transition"
  >
    <option value="buy">100 Sq. Yards Plot</option>
    <option value="sell">200 Sq. Yards Plot</option>
    <option value="rent">300 Sq. Yards Plot</option>
    <option value="invest">400 Sq. Yards Plot</option>
    <option value="custom">Custom</option>
  </select>

  {/* ✅ Agar custom select kiya to input dikhega */}
  {formData.propertyType === "custom" && (
    <input
      type="text"
      name="customProperty"
      value={formData.customProperty || ""}
      onChange={handleChange}
      placeholder="Enter your custom requirement"
      className="mt-3 w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent outline-none transition"
    />
  )}
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3c92a9] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#3c92a9] hover:bg-[#1a7088] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* Google Map Embed */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
             



              <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d448266.48399162124!2d77.3798317!3d28.6273072!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef986ec80253%3A0xcda30717d6f6e933!2sMAXPINE%20GROUP%20H-174%2C%20Ground%20Floor%20Sector%2063%20Noida%2C%20Uttar%20Pradesh%20201309!3m2!1d28.627307199999997!2d77.3798317!5e0!3m2!1sen!2sin!4v1759313308812!5m2!1sen!2sin" width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maxpine Group Location"></iframe>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}