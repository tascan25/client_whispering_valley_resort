import { motion } from 'framer-motion';
import { Award, Users, MapPin, Clock, Star, Heart, Waves, Camera } from 'lucide-react';
import resortimg from '../assets/resort_img.jpg'
import { useState } from 'react';
import AboutBookStayModal from './AboutBookStayModal';
import FloatingSocialButtons from './SocialIconComp';
import service5 from '../assets/services/services_5.jpg'
import FacilitiesComp from './FacilitiesComp';

const AboutUsComp = () => {

    const [isOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    // const facilities = [
    //     {
    //         "title": "Well-Appointed Rooms",
    //         "desc": "Comfortable accommodations with all essential amenities for a relaxing stay."
    //     },
    //     {
    //         "title": "Complimentary Wi-Fi",
    //         "desc": "Stay connected with free high-speed internet throughout the property."
    //     },
    //     {
    //         "title": "Rooftop Restaurant",
    //         "desc": "Enjoy a variety of delicious cuisines with scenic rooftop views."
    //     },
    //     {
    //         "title": "Bonfire",
    //         "desc": "Cozy up with a bonfire experience, available upon request."
    //     },
    //     {
    //         "title": "Convenient Parking",
    //         "desc": "Ample parking space for hassle-free guest convenience."
    //     },
    //     {
    //         "title": "Wellness Zone",
    //         "desc": "Sauna, steam bath, and massage center services available for your rejuvenation."
    //     },
    //     {
    //         "title": "Conference Hall",
    //         "desc": "Ideal for meetings, small events, and business gatherings."
    //     },
    //     {
    //         "title": "Games Room",
    //         "desc": "Indoor fun with pool and table tennis for entertainment."
    //     },
    //     {
    //         "title": "Live Music",
    //         "desc": "Delight in live musical performances for a vibrant evening."
    //     },
    //     {
    //         "title": "Exclusive Discotheque",
    //         "desc": "Private discotheque access for our in-house guests."
    //     },
    //     {
    //         "title": "Guest Services",
    //         "desc": "Front desk, room service, laundry, doctor-on-call, and 24/7 hot water for a seamless stay."
    //     },
    //     {
    //         "title": "24/7 Security Surveillance",
    //         "desc": "CCTV coverage in main areas to ensure guest safety."
    //     },
    //     {
    //         "title": "Elevator Access",
    //         "desc": "Lift service available for added ease and comfort."
    //     },
    //     {
    //         "title": "Scenic River View",
    //         "desc": "Marvel at the breathtaking views of the River Beas."
    //     },
    //     {
    //         "title": "Prime Location",
    //         "desc": "Just 200 meters from the bustling Mall Road—easily walkable."
    //     },
    //     {
    //         "title": "Power Backup",
    //         "desc": "Generator backup ensures uninterrupted electricity supply."
    //     }
    // ]


    const stats = [
        { icon: Award, number: "25+", label: "Years of Excellence" },
        { icon: Users, number: "50K+", label: "Happy Guests" },
        { icon: Star, number: "4.9", label: "Guest Rating" },
        { icon: MapPin, number: "12", label: "Unique Locations" }
    ];

    const values = [
        {
            icon: Heart,
            title: "Exceptional Service",
            description: "Personalized attention and anticipating every guest's needs"
        },
        {
            icon: Waves,
            title: "Sustainable Luxury",
            description: "Eco-conscious practices without compromising on comfort"
        },
        {
            icon: Star,
            title: "Authentic Experiences",
            description: "Curated local experiences and cultural immersion"
        }
    ];

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

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

            <AboutBookStayModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
             <FloatingSocialButtons
                    position="left"
                    facebook="https://www.facebook.com/profile.php?id=61550283155207"
                    instagram="https://www.instagram.com/whisperingvalleyresort/"
                    youtube="https://www.youtube.com/watch?v=iSBXoPu9qD8"
                    whatsapp={{
                        phone: "919876543210",
                        message: "Hello from your website!"
                    }}
                    showLabels={true}
                />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={resortimg}
                        alt="Paradise Resort"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
                </div>

                <motion.div
                    className="relative z-10 text-center px-6 max-w-4xl"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl text-gray-300 leading-relaxed italic"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Luxury that listens to the whispers of the valley
                    </motion.p>
                </motion.div>
            </section>

            {/* Main Story Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            className="space-y-8"
                            {...fadeInUp}
                        >
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    <span className="text-cyan-400 text:xs md:text-sm font-semibold tracking-wider uppercase">
                                        About Whispering Valley Resort
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    Where Dreams Meet Reality
                                </h2>

                                <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                                    Tucked amidst the breathtaking Himalayan landscapes, Whispering Valley Resort is your perfect escape into the heart of Manali. Ideally located just 150 meters from the bustling Mall Road, our resort offers the best of both worlds – serene views of the snow-capped mountains and River Beas, with easy access to Manali’s most popular attractions. Whether you’re a couple seeking a romantic retreat, a family on vacation, or a traveler exploring the charm of Himachal, our resort provides a luxurious yet homely experience.
                                </p>

                                <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                                    Our commitment to excellence has earned us recognition as one of Known as one of the best hotels to stay in Manali, Whispering Valley Resort features elegant rooms with private balconies, modern amenities, a multi-cuisine restaurant, and warm, personalized service. Relax with our in-house sauna, steam bath, massage parlor, or enjoy the games room and cozy bonfire evenings. For business or leisure, our conference hall and excellent hospitality ensure every need is met..
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={service5}
                                    alt="Resort History"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <Camera className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* facilities section */}
            {/* <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
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
            </section> */}

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center space-y-4"
                                variants={fadeInUp}
                            >
                                <div className="mx-auto w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold text-white">{stat.number}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
                                Our Values
                            </span>
                        </div>
                        <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
                            What Drives Us
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Our core values shape every interaction and define the Paradise Resort experience
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">{value.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                                    alt="Our Team"
                                    className="w-full h-full.object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full.animate-pulse"></div>
                                    <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
                                        Our Team
                                    </span>
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                    Passionate People, Exceptional Service
                                </h2>

                                <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                                    Escape to Whispering Valley Resort in the heart of Manali, where mist‑kissed pines and bubbling streams set the stage for your perfect getaway. Our elegant suites blend modern luxury with rustic charm, inviting you to unwind amid panoramic mountain views and handcrafted comforts.
                                </p>

                                <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                                    Behind every extraordinary moment is our devoted team—from award‑winning chefs serving farm‑fresh delights to certified wellness experts guiding you through rejuvenating spa rituals and sunrise yoga. We cultivate talent and a culture of excellence so that every smile, every greeting, and every personalized touch reflects our passion for unparalleled service. Book your stay today and let nature whisper, comfort embrace, and memories blossom.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
                            Ready to Create Your Own Whispering  Story?
                        </h2>
                        <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
                            Join thousands of guests who have discovered their perfect escape with us
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-xs md:text-lg shadow-xl transition-all duration-300 animate-bounce"
                            onClick={handleOpenModal}
                        >
                            <span>Book Your Stay</span>
                            <Clock className="w-4 h-4 md:w-6 md:h-6" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>


    );
};

export default AboutUsComp;
