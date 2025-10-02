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
} from "lucide-react";

export default function Footer() {
  const legalPages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Anugrah Home", href: "https://anugrahhomes.com" },
    { name: "Brij Brinda", href: "/keyPlan" },
    { name: "The Club Farm", href: "/keyplanCF" },
    { name: "Upcoming Projects", href: "/skyline" },
    { name: "Noida International", href: "/noida-international" },
    { name: "International Film City", href: "/international-film-city" },
    { name: "Medical Device Park", href: "/medical-device-Park" },
    { name: "Logistics Park", href: "#" },
    { name: "Pod Taxi", href: "#" },
    { name: "Site Visit", href: "/site-visit" },
    { name: "News Letter", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Maxpine<span className="text-[#20ae9b]">Group</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in real estate. We help you find your dream
              home with expert guidance and personalized service.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-[#20ae9b]" />
                <span>+91-120-410-7573</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-[#20ae9b]" />
                <span>info@maxpinegroup.in</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-[#20ae9b] mt-0.5" />
                <span className="pr-5">
                  H-174, Ground Floor, Sector-63, Noida, Uttar Pradesh 201301
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4 text-[#20ae9b]" />
                <span>Every Day : 24x7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#20ae9b] mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {legalPages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.href}
                    className="text-gray-300 hover:text-[#20ae9b] transition-colors duration-200 text-sm"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="space-y-6">
            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 text-[#20ae9b]">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Facebook className="w-4 h-4" />,
                    href: "https://www.facebook.com/maxpinegroupofficial",
                    label: "Facebook",
                  },
                  {
                    icon: <Twitter className="w-4 h-4" />,
                    href: "#",
                    label: "Twitter",
                  },
                  {
                    icon: <Instagram className="w-4 h-4" />,
                    href: "https://www.instagram.com/maxpinegroupofficial/",
                    label: "Instagram",
                  },
                  {
                    icon: <Linkedin className="w-4 h-4" />,
                    href: "https://www.linkedin.com/company/maxpinegroup-official/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Youtube className="w-4 h-4" />,
                    href: "https://www.youtube.com/@Maxpinegroupofficial",
                    label: "YouTube",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 hover:bg-[#20ae9b] rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-3 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-[#20ae9b] text-sm">
                Newsletter
              </h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#20ae9b]"
                />
                <button className="px-3 py-2 bg-[#20ae9b] hover:bg-[#157165] rounded transition-colors text-xs font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-700 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 space-y-6">
          <h1 className="text-sm sm:text-base text-gray-300 text-center">
            © 2025 Maxpine Group. All rights reserved.
          </h1>
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-10">
            <h4 className="text-base font-semibold text-[#20ae9b] mb-3">
              Disclaimer
            </h4>
            <div className="text-xs sm:text-sm text-gray-300 space-y-2 leading-relaxed">
              <p>
                This website belongs solely to{" "}
                <span className="font-semibold text-white">Maxpine Group</span>.
              </p>
              <p>
                All images on this website are owned by Maxpine Group. No one is
                allowed to use, copy, download, or distribute these images
                without explicit permission. Any unauthorized use is strictly
                prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
