import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingSocialButtons = ({ 
  position = "left",
  facebook = "",
  instagram = "",
  youtube = "",
  whatsapp = { phone: "", message: "Hello!" },
  showLabels = true 
}) => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      url: whatsapp.phone ? `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}` : null,
      color: 'from-green-400 to-green-600',
      hoverColor: 'hover:from-green-500 hover:to-green-700',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: facebook,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: instagram,
      color: 'from-pink-500 via-red-500 to-yellow-500',
      hoverColor: 'hover:from-pink-600 hover:via-red-600 hover:to-yellow-600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: youtube,
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:from-red-600 hover:to-red-800',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ].filter(social => social.url);

  const handleClick = (url, name) => {
    if (name === 'WhatsApp') {
      window.open(url, '_blank');
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const positionClasses = {
    left: 'left-6 bottom-6 flex-col',
    right: 'right-6 top-1/2 -translate-y-1/2 flex-col',
    'bottom-left': 'bottom-6 left-6 flex-row',
    'bottom-right': 'bottom-6 right-6 flex-row'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: position.includes('left') ? -50 : position.includes('right') ? 50 : 0,
      y: position.includes('bottom') ? 50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  if (socialLinks.length === 0) return null;

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-50 flex gap-3`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          variants={itemVariants}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={() => handleClick(social.url, social.name)}
            className={`
              relative bg-gradient-to-r ${social.color} ${social.hoverColor}
              text-white p-3 rounded-full shadow-lg transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-opacity-50
              transform hover:scale-110 hover:shadow-xl
            `}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1
              }
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {social.icon}
            </motion.div>

            {/* Pulse Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-75`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
            />
          </motion.button>

          {/* Tooltip */}
          {showLabels && (
            <motion.div
              className={`
                absolute ${position.includes('left') ? 'left-full ml-3' : 'right-full mr-3'} 
                top-1/2 transform -translate-y-1/2 
                bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium 
                whitespace-nowrap opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 pointer-events-none
              `}
              initial={{ 
                x: position.includes('left') ? -10 : 10, 
                opacity: 0 
              }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              Follow us on {social.name}
              <div 
                className={`
                  absolute top-1/2 transform -translate-y-1/2 border-4 border-transparent
                  ${position.includes('left') ? 'right-full border-r-gray-800' : 'left-full border-l-gray-800'}
                `}
              ></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingSocialButtons