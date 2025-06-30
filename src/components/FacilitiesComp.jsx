import React from 'react';
import { motion } from 'framer-motion';

function FacilitiesComp({ title, desc, variants = {} }) {
  return (
    <motion.div
      className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <h4 className="text-lg font-semibold
             bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
             bg-clip-text mb-4 text-cyan-400">
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default FacilitiesComp;
