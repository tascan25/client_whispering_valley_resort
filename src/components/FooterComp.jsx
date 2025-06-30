import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Waves, Mountain, Utensils, Dumbbell, Users } from 'lucide-react';


export default function FooterComp() {
  return (
   <footer className="bg-slate-900 py-8 px-4 border-t border-slate-700">
         <div className="max-w-7xl mx-auto text-center">
           <motion.div
             className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4"
             whileHover={{ scale: 1.05 }}
           >
             Whispering Valley Resort
           </motion.div>
           <p className="text-gray-400">© 2025 Whispering Valley Resort. All rights reserved. Your gateway to luxury.</p>
         </div>
       </footer>
  )
}
