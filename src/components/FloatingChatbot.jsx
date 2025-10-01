import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      color: 'bg-green-500',
      action: () => window.open('https://wa.me/+919115253545', '_blank')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Call Us',
      color: 'bg-cyan-500',
      action: () => window.location.href = 'tel:+91-91152-53545'
    },
   {
  icon: <Mail className="w-6 h-6" />,
  label: 'Contact Form',
  color: 'bg-indigo-600',
  action: () => window.open('mailto:info@maxpinegroup.in', '_blank'),
}

  ];

  return (
    <div className="fixed left-6 bottom-6 z-50">
      {/* Options Menu */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={option.action}
            className={`${option.color} text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all flex items-center justify-center group relative`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {option.icon}
            <span className="absolute left-16 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {option.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#3c92a9] to-[#20778f] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
}