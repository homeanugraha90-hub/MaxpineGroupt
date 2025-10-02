import { Phone, Mail, Clock, Lock, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Anugrah from "../pages/Navbar/Anugrah";

export default function Navbar() {
  const [mobile, setMobile] = useState({ menu: false, open: {} });
  const [desktop, setDesktop] = useState({ main: null, nested: null });

  const toggle = (key) =>
    setMobile((p) => ({ ...p, open: { ...p.open, [key]: !p.open[key] } }));

  const menuData = {
    projects: [
      {
        name: "Anugrah home",
        href: "/anugrahhomes",
        sub: [
          { name: "Visit Site", href: "https://anugrahhomes.com/" },
          { name: "Key Play ", href: "/keyPlan" },
          { name: "Layout ", href: "/layout" },
          { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "Skyline Aerahomes",
        href: "/skyline",
        sub: [
          { name: "Visit Site", href: "/keyPlan" },
          { name: "Key Play ", href: "/keyPlan" },
          { name: "Layout ", href: "/layout" },
          { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "Brij Vrinda",
        href: "/brij-vrinda",
        sub: [
          { name: "Visit Site", href: "/keyPlan" },
          { name: "Key Play - Brij Vrinda", href: "/keyPlan" },
          { name: "Layout - Brij Vrinda", href: "/layout" },
          { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "The Club Farm",
        href: "/club-farm",
        sub: [
          { name: "Visit Site", href: "/keyplanCF" },
          { name: "Key Plan", href: "/keyplanCF" },
          { name: "Layout", href: "/layoutCF" },
          { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "Upcoming Projects",
        href: "#",
        sub: [
          { name: "Visit Site", href: "/upcomingPJ" },
          { name: "Leafshade", href: "/upcomingPJ" },
          { name: "Amrit Garh", href: "/amrit-grah" },
          { name: "Development Updates", href: "/development" },
        ],
      },
    ],
    developments: [
      { name: "Noida International Airport", href: "/noida-international" },
      { name: "International Film City", href: "/international-film-city" },
      { name: "Medical Device Park", href: "/medical-device-Park" },
      { name: "Logistics Park", href: "/logistics-park" },
      { name: "Personal Rapid Transit - pod Taxi", href: "/personal-rapid-transit" },
    ],
    news: [{ name: "Blogs", href: "/news" }],
  };

  const navConfig = [
    { label: "Home", type: "link", url: "/" },
    { label: "About Us", type: "link", url: "/about" },
    { label: "Projects", type: "dropdown", key: "projects", width: "w-64" },
    { label: "News Letter", type: "dropdown", key: "news", width: "w-64" },
    { label: "Developments", type: "dropdown", key: "developments", width: "w-56" },
    { label: "Contact", type: "link", url: "/contact" },
  ];

  const Dropdown = ({ items, active, width }) => (
    <div
      className={`absolute top-full left-0 ${width} bg-white shadow-lg border-t-3 border-[#20ae9b] transition-all duration-300 z-50 ${
        active
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
    >
      <div className="py-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => {
              if (item.sub) {
                setDesktop((p) => ({ ...p, nested: item.name, hoverCard: null }));
              } else {
                setDesktop((p) => ({ ...p, nested: null, hoverCard: null }));
              }
            }}
            onMouseLeave={() => {
              setDesktop((p) => ({ ...p, nested: null, hoverCard: null }));
            }}
          >
            <a
              href={item.href}
              className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#20ae9b] hover:text-white transition-colors duration-200"
            >
              <span>{item.name}</span>
              {item.sub && <ChevronRight className="w-4 h-4" />}
            </a>
            {item.sub && (
              <div
                className={`absolute left-full top-0 w-56 bg-white shadow-lg border-l-3 border-[#20ae9b] transition-all duration-300 ${
                  desktop.nested === item.name
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  {item.sub.map((s, j) => (
                    <a
                      key={j}
                      href={s.href}
                      className="block px-6 py-3 text-gray-700 hover:bg-[#20ae9b] hover:text-white transition-colors duration-200"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const MobileMenu = ({ title, items, stateKey }) => (
    <div className="py-1">
      <button
        onClick={() => toggle(stateKey)}
        className="w-full flex items-center justify-between text-white font-bold py-3 px-3 rounded hover:bg-[#272b24] transition-colors duration-200"
      >
        
        <span>{title}

        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            mobile.open[stateKey] ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          mobile.open[stateKey]
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-4 space-y-1 mt-2">
          {items.map((item, i) => (
            <div key={i}>
              {item.sub ? (
                <div className="py-1">
                  
                  <button
                    onClick={() => toggle(item.name)}
                    className="w-full flex items-center justify-between text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-sm"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobile.open[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobile.open[item.name]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 space-y-1 mt-1">
                      {item.sub.map((s, j) => (
                        <a
                          key={j}
                          href={s.href}
                          className="block text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-xs"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-sm"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="relative w-full">
      <nav className="bg-white relative">
        <div className="flex items-stretch min-h-[90px]">
          {/* Logo */}
          <Link to="/">
            <div className="flex justify-center h-full items-center px-6 lg:px-28">
              <span className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                <img
                  src="/Maxpine_logo_2.png"
                  className="md:max-w-24 max-w-18"
                  alt="Maxpine logo"
                />
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1">
            <div className="bg-[#20ae9b] flex items-stretch justify-center flex-1 px-8">
              <div className="flex items-stretch space-x-4 text-white font-medium">
                {navConfig.map((item, i) =>
                  item.type === "link" ? (
                    <a
                      key={i}
                      href={item.url}
                      className="flex items-center hover:bg-[#27746a] px-4 transition-colors duration-200 "
                    >
                      {item.label}
                    </a>
                  ) : (
                    <div
                      key={i}
                      className="relative group flex items-stretch"
                      onMouseEnter={() =>
                        setDesktop({ main: item.key, nested: null })
                      }
                      onMouseLeave={() => setDesktop({ main: null, nested: null })}
                    >
                      <a
                        href={item.url}
                        className="flex items-center gap-1 hover:bg-[#27746a] px-4 transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </a>
                      <Dropdown
                        items={menuData[item.key]}
                        active={desktop.main === item.key}
                        width={item.width}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Desktop Site Visit Button */}
            <div className="bg-white flex items-center px-10 text-black font-bold cursor-pointer hover:bg-white transition-colors duration-200 text-xl">
              <Link to="/site-visit">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Site Visit
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center px-4 ml-auto">
            <button
              onClick={() => setMobile((p) => ({ ...p, menu: !p.menu }))}
              className="text-[#20ae9b] hover:text-[#195d54] transition-colors duration-200"
            >
              {mobile.menu ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#20ae9b] transition-all duration-300 ${
            mobile.menu ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navConfig
              .filter((item) => item.type === "link" || item.type === "dropdown")
              .map((item, i) =>
                item.type === "link" ? (
                  <a
                    key={i}
                    href={item.url}
                    className="block text-white hover:bg-[#272b24] transition-colors duration-200 font-medium py-3 px-3 rounded"
                  >
                    {item.label}
                  </a>
                ) : (
                  <MobileMenu
                    key={i}
                    title={item.label}
                    items={menuData[item.key]}
                    stateKey={item.key}
                  />
                )
              )}

            {/* Mobile Site Visit */}
              <Link to="/site-visit">
            <div className="bg-[#272b24] px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold cursor-pointer hover:bg-black transition-colors duration-200 rounded mt-4">
              <Lock className="w-4 h-4" />

              Site Visit
            </div>
              </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
