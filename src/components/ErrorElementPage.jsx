import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ErrorElementPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-9xl font-extrabold text-white"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          404
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-purple-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Oops! The page you are looking for does not exist.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
      {/* Decorative circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full opacity-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      />
    </div>
  );
};

export default ErrorElementPage;
