import React from 'react';
import { Clock, Calendar } from 'lucide-react';

const Schedule = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dog with clock"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Check-in Time
            </h2>

            <div className="space-y-8">
              {/* Morning Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Morning Drop-off</h3>
                </div>
                <p className="text-gray-600 mb-2">Perfect for busy mornings before work</p>
                <p className="text-2xl font-bold text-orange-500">7:00 AM - 10:00 AM</p>
              </div>

              {/* Evening Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Evening Pick-up</h3>
                </div>
                <p className="text-gray-600 mb-2">Convenient after-work pickup times</p>
                <p className="text-2xl font-bold text-blue-500">4:00 PM - 7:00 PM</p>
              </div>
            </div>

            <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;