import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import RoomFormComp from './RoomFormComp';

function RoomsInfoModa({ details, isOpen , onClose }) {
  const {
    image = '',
    features = [],
    name = '',
    price = '',
    description = '',
  } = details || {};

  return (
    <>
      {isOpen && (
        <>
          {/* Enhanced Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={onClose}
          />

          {/* Modal Container - Responsive */}
          <div
            className="fixed 
              top-4 left-4 right-4 bottom-4 
              sm:top-6 sm:left-6 sm:right-6 sm:bottom-6
              md:top-[8vh] md:left-[4vw] md:right-[4vw] md:h-[84vh] md:bottom-auto
              z-50 bg-white rounded-2xl shadow-2xl overflow-hidden 
              flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg z-60"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {/* Left Panel: Room Details - Responsive */}
            <div className="w-full md:w-3/5 h-1/2 md:h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
              <div className="p-4 pt-12 sm:p-6 sm:pt-14 md:p-8 md:pt-16">
                {/* Room Image */}
                {image && (
                  <div className="relative mb-4 sm:mb-6 md:mb-8 overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-40 sm:h-48 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}

                {/* Title & Price */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  {name && (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-2 md:mb-3 leading-tight">
                      {name}
                    </h2>
                  )}
                  {price && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-600">{price}</span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-600 font-light">per night</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {description && (
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                      {description}
                    </p>
                  </div>
                )}

                {/* Features */}
                {features.length > 0 && (
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl font-serif text-gray-900 mb-3 md:mb-4">
                      Amenities & Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                          <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Section */}
                <div className="border-t border-gray-200 pt-4 sm:pt-6 md:pt-8">
                  <div className="text-center">
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                      Questions about your stay?
                    </p>
                    <button className="inline-flex items-center gap-2 sm:gap-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
                      <Phone size={16} className="sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base md:text-lg">+91-9816017904</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Booking Form - Responsive */}
            <div className="w-full md:w-2/5 h-[75%] md:h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black">
              <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
                <RoomFormComp />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default RoomsInfoModa;