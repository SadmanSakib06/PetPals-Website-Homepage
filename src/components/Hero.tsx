import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Happy dog"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Every Pet Deserves{' '}
              <span className="text-orange-500">Celebrity Care!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              We provide the best pet care services with love, attention, and professional expertise. 
              Your furry friends deserve nothing but the best treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105">
                Book Now
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Stats Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center relative">
                {/* Paw Print Design */}
                <div className="relative">
                  <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-2">96%</div>
                      <div className="text-sm text-gray-600">Happy Pets</div>
                    </div>
                  </div>
                  
                  {/* Paw prints around the circle */}
                  <div className="absolute -top-8 -left-8 w-12 h-12 bg-orange-200 rounded-full"></div>
                  <div className="absolute -top-4 left-16 w-8 h-8 bg-blue-200 rounded-full"></div>
                  <div className="absolute top-8 -right-8 w-10 h-10 bg-pink-200 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-4 w-14 h-14 bg-orange-300 rounded-full"></div>
                  <div className="absolute -bottom-8 left-8 w-6 h-6 bg-blue-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;