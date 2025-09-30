import { useState } from 'react';
import { Building2, MapPin, Bed, Bath, Square, Calendar, DollarSign, Filter, Search, ChevronDown, Star, TrendingUp } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Sky Heights Residency',
      location: 'Downtown District',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      status: 'Under Construction',
      price: '$450,000',
      completion: '2026',
      units: 156,
      bedrooms: '2-4',
      bathrooms: '2-3',
      area: '1200-2500',
      rating: 4.8,
      featured: true,
      type: 'Residential'
    },
    {
      id: 2,
      name: 'Green Valley Villas',
      location: 'Suburban Area',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      status: 'Ready to Move',
      price: '$680,000',
      completion: 'Completed',
      units: 45,
      bedrooms: '3-5',
      bathrooms: '3-4',
      area: '2000-3500',
      rating: 4.9,
      featured: true,
      type: 'Villa'
    },
    {
      id: 3,
      name: 'Marina Bay Towers',
      location: 'Waterfront District',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      status: 'Pre-Launch',
      price: '$550,000',
      completion: '2027',
      units: 234,
      bedrooms: '1-3',
      bathrooms: '1-2',
      area: '800-1800',
      rating: 4.7,
      featured: false,
      type: 'Apartment'
    },
    {
      id: 4,
      name: 'Luxury Square Complex',
      location: 'Business Bay',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      status: 'Under Construction',
      price: '$890,000',
      completion: '2025',
      units: 89,
      bedrooms: '3-4',
      bathrooms: '3-4',
      area: '1800-2800',
      rating: 4.9,
      featured: true,
      type: 'Penthouse'
    },
    {
      id: 5,
      name: 'Garden Heights Estate',
      location: 'Green Valley',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      status: 'Ready to Move',
      price: '$720,000',
      completion: 'Completed',
      units: 67,
      bedrooms: '4-6',
      bathrooms: '4-5',
      area: '2500-4000',
      rating: 4.8,
      featured: false,
      type: 'Villa'
    },
    {
      id: 6,
      name: 'Urban Living Apartments',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      status: 'Under Construction',
      price: '$380,000',
      completion: '2026',
      units: 178,
      bedrooms: '1-2',
      bathrooms: '1-2',
      area: '650-1200',
      rating: 4.6,
      featured: false,
      type: 'Apartment'
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '50+', icon: Building2 },
    { label: 'Happy Clients', value: '2,500+', icon: Star },
    { label: 'Years Experience', value: '15+', icon: Calendar },
    { label: 'Investment Value', value: '$500M+', icon: TrendingUp }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.status.toLowerCase().includes(filter);
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) || 
                         project.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200)',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 opacity-85"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our Projects</h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-6 text-center max-w-2xl">
            Discover premium properties crafted with excellence
          </p>
          <div className="flex items-center gap-3 text-lg">
            <a href="/" className="hover:text-slate-300 transition-colors">Home</a>
            <span>›</span>
            <span className="text-slate-300">Projects</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by project name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Status Filter */}
            <div className="md:w-64">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
              >
                <option value="all">All Projects</option>
                <option value="ready">Ready to Move</option>
                <option value="under">Under Construction</option>
                <option value="pre">Pre-Launch</option>
              </select>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-slate-200 grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Price Range</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>All Prices</option>
                  <option>Under $500K</option>
                  <option>$500K - $700K</option>
                  <option>Above $700K</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Bedrooms</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Any</option>
                  <option>1-2 BHK</option>
                  <option>3-4 BHK</option>
                  <option>5+ BHK</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredProjects.length}</span> projects
          </p>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                  {project.status}
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                  {project.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-slate-900">{project.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-200 my-4">
                  <div className="text-center">
                    <Bed className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-slate-900">{project.bedrooms}</div>
                    <div className="text-xs text-slate-500">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-slate-900">{project.bathrooms}</div>
                    <div className="text-xs text-slate-500">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-slate-900">{project.area}</div>
                    <div className="text-xs text-slate-500">Sq.Ft</div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div>
                    <span className="text-slate-500">Total Units: </span>
                    <span className="font-semibold text-slate-900">{project.units}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Completion: </span>
                    <span className="font-semibold text-slate-900">{project.completion}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                  <button className="px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                    <Building2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
            <p className="text-slate-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our experts can help you find the perfect property that matches your requirements
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}