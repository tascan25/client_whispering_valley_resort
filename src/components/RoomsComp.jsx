import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import RoomsInfoModa from './RoomsInfoModa';
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
import { toast } from 'react-toastify';


function RoomsComp() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleRooms, setVisibleRooms] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailRoomInfo,setDetailRoomInfo] = useState({});

  function handleModal(image,features,name,price, description){
    const roomData = {
    image: image,
    features: features,
    name:name,
    price: price,
    description:description

    }
    setDetailRoomInfo(roomData)
    setIsModalOpen(true)

  }

  const rooms = [
    {
      id: 1,
      category: "Deluxe",
      name: 'Deluxe',
      price: 'Price Info',
      image: deluxe1,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Big windows offering majestic vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 4.9,
      description: 'A cozy and elegant space designed for comfort, our Deluxe Rooms offer a peaceful retreat with modern amenities, perfect for couples and solo travellers'
    },
    {
      id: 2,
      category: "Deluxe",
      name: 'Deluxe',
      price: 'Price Info',
      image: deluxe2,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Big windows offering majestic vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 5.0,
      description: 'A cozy and elegant space designed for comfort, our Deluxe Rooms offer a peaceful retreat with modern amenities, perfect for couples and solo travellers'
    },
    {
      id: 3,
      category: "Premium",
      name: 'Premium',
      price: 'Price Info',
      image: premium1,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 4.7,
      description: 'Soak in spectacular valley views from your balcony in our Premium Rooms, where refined interiors and thoughtful touches create a truly relaxing escape.'
    },
    {
      id: 4,
      category: "Premium",
      name: 'Premium',
      price: 'Price Info',
      image: premium2,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 4.7,
      description: 'Soak in spectacular valley views from your balcony in our Premium Rooms, where refined interiors and thoughtful touches create a truly relaxing escape.'
    },
    {
      id: 5,
      category: "Premium",
      name: 'Premium',
      price: 'Price Info',
      image: premium3,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 4.7,
      description: 'Soak in spectacular valley views from your balcony in our Premium Rooms, where refined interiors and thoughtful touches create a truly relaxing escape.'
    },
    {
      id: 6,
      category: "Family",
      name: 'Family Suite',
      price: 'Price Info',
      image: family1,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 5.0,
      description: 'Spacious and serene, our Family Suites feature two double beds and a balcony ideal for families or groups looking to unwind in comfort and style.'
    },
    {
      id: 7,
      category: "Family",
      name: 'Family Suite',
      price: 'Price Info',
      image: family2,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 5.0,
      description: 'Spacious and serene, our Family Suites feature two double beds and a balcony ideal for families or groups looking to unwind in comfort and style.'
    },
    {
      id: 8,
      category: "Family",
      name: 'Family Suite',
      price: 'Price Info',
      image: family3,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 5.0,
      description:'Spacious and serene, our Family Suites feature two double beds and a balcony ideal for families or groups looking to unwind in comfort and style.'
    },
    {
      id: 9,
      category: "Family",
      name: 'Family Suite',
      price: 'Price Info',
      image: family4,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 5.0,
      description: 'Spacious and serene, our Family Suites feature two double beds and a balcony ideal for families or groups looking to unwind in comfort and style.'
    },
    {
      id: 10,
      category: "Family",
      name: 'Family Suite',
      price: 'Price Info',
      image: family5,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Balcony With Majestic Vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 5.0,
      description: 'Spacious and serene, our Family Suites feature two double beds and a balcony ideal for families or groups looking to unwind in comfort and style.'
    },
     {
      id: 11,
      category: "Deluxe",
      name: 'Deluxe',
      price: 'Price Info',
      image: deluxe3,
      features: ['Cozy Bedding', 'LED TV', 'Free WiFi', 'Coffee Table', 'Heater','Room Dining','Big windows offering majestic vistas','24*7 Hot and Cold Water', 'Electricity Backup'],
      rating: 4.9,
      description: 'A cozy and elegant space designed for comfort, our Deluxe Rooms offer a peaceful retreat with modern amenities, perfect for couples and solo travellers'
    },
  ];

  function handlePriceView(){
     toast.success("For Price, Please contact +91-9816017904", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
  }

  const categories = ['All', 'Deluxe', 'Premium', 'Family'];

  const filteredRooms = activeFilter === "All"
    ? rooms
    : rooms.filter((room) => room.category === activeFilter);

  const currentRooms = filteredRooms.slice(0, visibleRooms);

  return (
    <section id="rooms" className="py-20 px-4 bg-slate-800">
     <RoomsInfoModa isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} details={detailRoomInfo}/>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our collection of elegantly designed rooms and suites, each offering unique experiences and premium amenities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setVisibleRooms(6);
              }}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-400 to-emerald-400 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-[#10182c] text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentRooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="bg-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-600/30 hover:border-blue-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                />
                 <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {room.category}
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white font-semibold">{room.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-400"><button onClick={handlePriceView}>{room.price}</button></div>
                    <div className="text-sm text-gray-400">per night</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 text-white rounded-full text-sm border border-blue-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 sm:text-sm
                  cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={()=>handleModal(room.image, room.features, room.name, room.price, room.description)}
                >
                  BOOK YOUR STAY
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleRooms < filteredRooms.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setVisibleRooms(prev => prev + 3)}
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default RoomsComp;
