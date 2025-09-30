import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Shield
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const legalPages = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-[#90cc35]">△</span> Maxpine
              <span className="text-[#90cc35]">Group</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in real estate. We help you find your dream home with expert guidance and personalized service.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-[#90cc35]" />
                <span>+91-120-410-7573</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-[#90cc35]" />
                <span>info@maxpinegroup.in</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-[#90cc35] mt-0.5" />
                <span>Noida , Delhi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4 text-[#90cc35]" />
                <span>Every Day: 24x7</span>
              </div>
            </div>
          </div>

          {/* Legal & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#90cc35]">Quick Links</h4>
            <ul className="space-y-2">
              {legalPages.map((page, index) => (
                <li key={index}>
                  <a 
                    href={page.href}
                    className="text-gray-300 hover:text-[#90cc35] transition-colors duration-200 text-sm"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6 p-3 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-[#90cc35] text-sm">Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#90cc35]"
                />
                <button className="px-3 py-2 bg-[#90cc35] hover:bg-[#90cc35] rounded transition-colors text-xs font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Media & License */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3 text-[#90cc35]">Follow Us</h4>
              <div className="flex gap-2">
                {[
                  { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
                  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
                  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
                  { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-700 hover:bg-[#90cc35] rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* License */}
            <div className="bg-gray-800 p-3 rounded-lg">
              <h5 className="font-semibold mb-1 text-[#90cc35] text-sm">Licensed Agent</h5>
              <p className="text-xs text-gray-400">
                License #RE123456789<br />
                Ukraine Real Estate Board
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-gray-700 bg-gray-800/50">
        <div className=" mx-auto px-4 py-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-base font-semibold text-[#90cc35] mb-3">Disclaimer</h4>
            <div className="text-xs text-gray-300 space-y-1  ">
              <p className="">
                <strong>Property Information:</strong> All information is subject to change. Photos are for illustrative purposes only.
             
                <strong>Investment Advice:</strong> Information is for guidance only. Consult professionals before making decisions.
             
                <strong>Equal Housing:</strong> All properties available regardless of race, color, religion, sex, or national origin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
    
    </footer>
  );
}