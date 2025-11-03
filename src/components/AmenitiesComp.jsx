import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Waves, Mountain, Utensils, Dumbbell, Users } from 'lucide-react';
import ResortCarousel from './ResortFeatureCarousel';
import GalleryViewModal from './GalleryViewModal';
import FacilitiesComp from './FacilitiesComp';

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

        const facilities = [
        {
            "title": "Well-Appointed Rooms",
            "desc": "Comfortable accommodations with all essential amenities for a relaxing stay."
        },
        {
            "title": "Complimentary Wi-Fi",
            "desc": "Stay connected with free high-speed internet throughout the property."
        },
        {
            "title": "Rooftop Restaurant",
            "desc": "Enjoy a variety of delicious cuisines with scenic rooftop views."
        },
        {
            "title": "Bonfire",
            "desc": "Cozy up with a bonfire experience, available upon request."
        },
        {
            "title": "Convenient Parking",
            "desc": "Ample parking space for hassle-free guest convenience."
        },
        {
            "title": "Wellness Zone",
            "desc": "Sauna, steam bath, and massage center services available for your rejuvenation."
        },
        {
            "title": "Conference Hall",
            "desc": "Ideal for meetings, small events, and business gatherings."
        },
        {
            "title": "Games Room",
            "desc": "Indoor fun with pool and table tennis for entertainment."
        },
        {
            "title": "Live Music",
            "desc": "Delight in live musical performances for a vibrant evening."
        },
        {
            "title": "Exclusive Discotheque",
            "desc": "Private discotheque access for our in-house guests."
        },
        {
            "title": "Guest Services",
            "desc": "Front desk, room service, laundry, doctor-on-call, and 24/7 hot water for a seamless stay."
        },
        {
            "title": "24/7 Security Surveillance",
            "desc": "CCTV coverage in main areas to ensure guest safety."
        },
        {
            "title": "Elevator Access",
            "desc": "Lift service available for added ease and comfort."
        },
        {
            "title": "Scenic River View",
            "desc": "Marvel at the breathtaking views of the River Beas."
        },
        {
            "title": "Prime Location",
            "desc": "Just 200 meters from the bustling Mall Road—easily walkable."
        },
        {
            "title": "Power Backup",
            "desc": "Generator backup ensures uninterrupted electricity supply."
        }
    ]


     const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };


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

        <section className="py-16  backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6">
                       <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
                                Our Facilities
                            </span>
                        </div>
                        <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
                            What Motivate Us
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                           we provide an world class facilities in our rooms
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }} 
                        >

                            {facilities.map((item)=> <FacilitiesComp key={item.title} title={item.title} desc={item.desc} variants={fadeInUp}/>)}

                    </motion.div>
                </div>
            </section>

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
