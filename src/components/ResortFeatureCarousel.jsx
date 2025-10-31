import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Coffee, Waves, Utensils, Dumbbell, Heart } from 'lucide-react';

import sevice1 from '../assets/services/services_1.jpg'
import sevice2 from '../assets/services/services_2.jpg'
import sevice3 from '../assets/services/services_3.jpg'
import sevice4 from '../assets/services/services_4.jpg'
import sevice5 from '../assets/services/services_5.jpg'
import sevice6 from '../assets/services/services_6.jpg'
import sevice7 from '../assets/services/services_7.jpg'
import sevice8 from '../assets/services/services_8.jpg'
import sevice9 from '../assets/services/services_9.jpg'
import sevice10 from '../assets/services/services_10.jpg'
import sevice11 from '../assets/services/services_11.jpg'
import sevice12 from '../assets/services/services_12.jpg'
import sevice13 from '../assets/services/services_13.jpg'

const ResortCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const SLIDE_DURATION = 5000; // 5 seconds per slide
  

   // Auto-progress effect
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);
 const amenities = [   {
      id: 1,
      title: "Snooker Table",
      description: "Stunning infinity pool overlooking the ocean with panoramic views",
      image: sevice1,
      icon: Waves,
      features: [""]
    },
    // {
    //   id: 2,
    //   title: "Scenic View",
    //   description: "Full-service spa with rejuvenating treatments and wellness programs",
    //   image: sevice2,
    //   icon: Heart,
    //   features: ["Massage Therapy", "Wellness Center", "Aromatherapy"]
    // },
    // {
    //   id: 3,
    //   title: "Fine Dining",
    //   description: "World-class restaurants featuring international and local cuisine",
    //   image: sevice3,
    //   icon: Utensils,
    //   features: ["Michelin Rated", "Ocean View", "Wine Cellar"]
    // },
    // {
    //   id: 4,
    //   title: "Fine Dining",
    //   description: "State-of-the-art fitness facility with personal training services",
    //   image: sevice4,
    //   icon: Dumbbell,
    //   features: ["24/7 Access", "Personal Trainers", "Yoga Classes"]
    // },
    // {
    //   id: 5,
    //   title: "Premium Suites",
    //   description: "Elegantly appointed suites with private balconies and ocean views",
    //   image: sevice5,
    //   icon: MapPin,
    //   features: ["Ocean View", "Private Balcony", "Butler Service"]
    // },
    // {
    //   id: 6,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice6,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 7,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice7,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 8,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice8,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 9,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice9,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 10,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice10,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 11,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice11,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 12,
    //   title: "Premium Suites",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice12,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
    // {
    //   id: 13,
    //   title: "Scenic View",
    //   description: "Exclusive beachfront access with water sports and lounging areas",
    //   image: sevice13,
    //   icon: Coffee,
    //   features: ["Private Beach", "Water Sports", "Beach Bar"]
    // },
  ];



  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === amenities.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? amenities.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentAmenity = amenities[currentIndex];

  return (
    <div className="relative w-full mx-auto bg-slate-900 overflow-hidden">
      {/* Main Container */}
      <div className="relative h-screen max-h-[800px] min-h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={currentAmenity.image}
                alt={currentAmenity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/40"></div>
            </div>

            {/* Icon in Top Right Corner */}
            <motion.div 
              className="absolute top-8 right-8 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <currentAmenity.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 gap-12 items-center ml-14 md:ml-10">
                  
                  {/* Text Content */}
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                          Premium Amenity
                        </span>
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl lg:text-5xl font-bold text-white leading-tight"
                      >
                        {currentAmenity.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm md:text-xl text-gray-300 leading-relaxed max-w-xl"
                      >
                        {currentAmenity.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-3"
                      >
                        {currentAmenity.features.map((feature, index) => (
                          <span
                            key={feature}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </motion.div>

                      {/* <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300"
                      >
                        <span>Explore More</span>
                        <ChevronRight className="w-5 h-5" />
                      </motion.button> */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-3 h-3 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-3 h-3 md:w-6 md:h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-80">
        <div className="bg-white/20 backdrop-blur-sm rounded-full h-1 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/70 hover:text-white text-xs transition-colors"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <span className="text-white/70 text-xs">
            {currentIndex + 1} / {amenities.length}
          </span>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {amenities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResortCarousel;
