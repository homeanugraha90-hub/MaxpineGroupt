import React, { useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Tip's about Real Estate Recent Conditions from Agent.",
      author: "Hamilton Siza",
      date: "07 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Importance of Build quality of modern Real Estate.",
      author: "Garry Sobana",
      date: "15 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Most Popular Real Estate area you can choose from.",
      author: "Shane Watson",
      date: "10 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "The Home Buying Process: A Comprehensive Guide.",
      author: "Hamilton Siza",
      date: "07 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "The Best Types Of Real Estate Investment Properties.",
      author: "Garry Sobana",
      date: "15 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "How Much Does Land Survey Cost in 2022?.",
      author: "Shane Watson",
      date: "10 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "18 Best Real Estate Apps For Buyers, Sellers & Investors.",
      author: "Hamilton Siza",
      date: "07 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Ultimate Guide to Buying a Vacation Rental Property.",
      author: "Garry Sobana",
      date: "15 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Do You Qualify For Real Estate Line Of Credit?",
      author: "Shane Watson",
      date: "10 December, 21",
      excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop"
    }
  ];

  const handleGetListed = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32 px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=600&fit=crop')"
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-sm tracking-widest mb-4 uppercase">Our Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest Blog Post</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Huge number of properties available here for buy and sell also you can find here co-living property as you like
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-64">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-sm text-amber-600 mb-3">
                <span className="text-gray-600">{post.author} on</span>
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <button className="flex items-center gap-2 text-gray-900 font-medium group-hover:text-amber-600 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-900 group-hover:bg-amber-600 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {[1, 2, 3, 4, '...', 21].map((page, idx) => (
            <button
              key={idx}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                page === 1 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20 px-4">
        {/* Background Image */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop')"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Are you a Home Owner?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Put your email address and get listed.
            </p>
            
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here..."
                className="flex-1 px-5 py-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                onClick={handleGetListed}
                className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Get Listed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}