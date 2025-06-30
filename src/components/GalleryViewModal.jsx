import React from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import premium1 from '../assets/premium/premium_1.png'
import premium2 from '../assets/premium/premium_2.png'
import premium3 from '../assets/premium/premium_3.png'

import family1 from '../assets/family/family_1.png'
import family2 from '../assets/family/family_2.jpg'
import family3 from '../assets/family/family_3.png'
import family4 from '../assets/family/family_4.png'
import family5 from '../assets/family/family_5.png'

import deluxe1 from '../assets/deluxe/deluxe_1.png'
import deluxe2 from '../assets/deluxe/deluxe_2.jpg'
import deluxe3 from '../assets/deluxe/deluxe_3.jpg'

import service1 from '../assets/services/services_1.jpg'
import service2 from '../assets/services/services_2.jpg'
import service3 from '../assets/services/services_3.jpg'
import service4 from '../assets/services/services_4.jpg'
import service5 from '../assets/services/services_5.jpg'
import service6 from '../assets/services/services_6.jpg'
import service7 from '../assets/services/services_7.jpg'
import service8 from '../assets/services/services_8.jpg'
import service9 from '../assets/services/services_9.jpg'
import service10 from '../assets/services/services_10.jpg'
import service11 from '../assets/services/services_11.jpg'
import service12 from '../assets/services/services_12.jpg'
import service13 from '../assets/services/services_13.jpg'

const GalleryImages = [
  service1, service2, service3, service4, service5, service6, service7, service8,
  service9, service10, service11, service12, service13,
  deluxe1, deluxe2, deluxe3,
  family1, family2, family3, family4, family5,
  premium1, premium2, premium3
]

// animation variants for container and items
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05 }
}

function GalleryViewModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center gap-10 p-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-gradient-to-br from-slate-800 via-slate-900rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl h-full max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg z-10"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {/* Gallery grid */}
            <motion.div
              className="flex flex-col gap-2 p-4 overflow-y-auto"
            >
              {GalleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg bg-gray-100"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <img
                    src={img}
                    alt={`gallery-${index}`}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GalleryViewModal
