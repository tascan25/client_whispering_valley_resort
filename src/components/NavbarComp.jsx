import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { label } from 'framer-motion/client';

function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home',      label: 'Home',      path: '/' },
    { id: 'rooms',     label: 'Accomodation',     path: '/#rooms' },
    { id: 'amenities', label: 'Amenities', path: '/#amenities' },
    { id: 'contact',   label: 'Contact',   path: '/#contact' },
    { id: 'about',     label: 'About',     path: '/about' },
    {id: 'faq', label:'FAQ', path:'/faq'}
  ];

  // track scroll for transparent → solid bg
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // whenever the URL changes, decide which tab is active—and scroll if there's a hash
  useEffect(() => {
    const { pathname, hash } = location;

    if (pathname === '/about') {
      setActiveSection('about');
      return;
    }
    if(pathname=== '/faq'){
      setActiveSection('faq');
      return
    }

    // any other route: if hash present, scroll & highlight that id
    if (hash) {
      const id = hash.replace('#', '');
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
        // slight delay to let React render page first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    } else {
      // no hash + not /about → highlight home
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header id="navbar">
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 gap-2">
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('/')}
            >
              Whispering Valley Resort
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5">
              {navItems.map(({ id, label, path }) => (
                <motion.button
                  key={id}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => handleNavClick(path)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X size={24} color='white' /> : <Menu size={24} color='white'/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-slate-900/95 backdrop-blur-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map(({ id, label, path }) => (
                  <button
                    key={id}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
                    onClick={() => handleNavClick(path)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default NavbarComp;
