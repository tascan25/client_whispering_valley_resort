import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Waves, Mountain, Utensils, Dumbbell, Users } from 'lucide-react';
import ResortCarousel from './ResortFeatureCarousel';
import GalleryViewModal from './GalleryViewModal';

function AmenitiesComp() {

  const [isOpen,setIsOpen] = useState(false );

    const amenities = [
        { icon: Waves, name: 'Infinity Pool', desc: 'Stunning infinity pool overlooking the ocean' },
        { icon: Utensils, name: 'Fine Dining', desc: 'World-class restaurants with international cuisine' },
        // { icon: Spa, name: 'Luxury Spa', desc: 'Full-service spa with rejuvenating treatments' },
        { icon: Dumbbell, name: 'Fitness Center', desc: 'State-of-the-art gym with modern equipment' },
        { icon: Wifi, name: 'Free WiFi', desc: 'High-speed internet throughout the resort' },
        { icon: Car, name: 'Valet Parking', desc: 'Complimentary valet parking service' },
        { icon: Mountain, name: 'Adventure Tours', desc: 'Guided tours to explore local attractions' },
        { icon: Users, name: 'Event Spaces', desc: 'Elegant venues for weddings and conferences' }
      ];

      function handleGallery(){
        setIsOpen(true)
      }
  return (
  <section id="amenities" className="py-20 px-4 bg-slate-900">
    <GalleryViewModal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <motion.div
            className="text-center mb-16 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Indulge in our extensive collection of premium amenities designed to enhance your stay
            </p>
          </motion.div>

          <ResortCarousel/>

         <motion.button
            className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full text-white font-semibold text-xs md:text-sm shadow-2xl"
              onClick={handleGallery}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              
         >
          View Gallery
         </motion.button>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <amenity.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-white">{amenity.name}</h3>
                <p className="text-gray-400">{amenity.desc}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>
  )
}

export default AmenitiesComp
