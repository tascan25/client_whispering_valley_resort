import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, FileText, Clock, CreditCard, MapPin, Users, Wifi, Car, Phone, ServerCog, ShieldCheck } from 'lucide-react';
import FloatingSocialButtons from './SocialIconComp';

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    { id: 1, icon: Clock, question: 'What are the check-in and check-out times?', answer: 'Check-in: 12:00 PM | Check-out: 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.' },
    { id: 2, icon: Wifi, question: 'Do you offer free Wi-Fi?', answer: 'Yes, we offer complimentary high-speed Wi-Fi throughout the property.' },
    { id: 3, icon: Car, question: 'Is parking available at the resort?', answer: 'Yes, we provide ample parking space free of charge for our guests.' },
    { id: 4, icon: MapPin, question: 'How far is the resort from Mall Road, Manali?', answer: 'We are conveniently located just 200 meters (a short walk) from Mall Road.' },
    { id: 5, icon: Users, question: 'Are pets allowed at the resort?', answer: 'Currently, we do not allow pets at the resort.' },
    { id: 6, icon: ServerCog, question: 'Do you have a restaurant on-site?', answer: 'Yes, our rooftop restaurant serves a variety of cuisines with beautiful views of the valley and river.' },
    { id: 7, icon: Phone, question: 'Is room service available?', answer: 'Yes, we offer room service to ensure your comfort and convenience.' },
    { id: 8, icon: ServerCog, question: 'Are there wellness facilities available?', answer: 'Yes, we have a Sauna, Steam Bath, and Massage Centre available on request and chargeable.' },
    { id: 9, icon: Users, question: 'Do you have any entertainment options?', answer: 'Guests can enjoy a games room (Pool & Table Tennis), live music evenings, a private discotheque (for in-house guests only), and bonfire on request.' },
    { id: 10, icon: FileText, question: 'Do you offer conference or event facilities?', answer: 'Yes, we have a conference hall ideal for small events, meetings, or gatherings.' },
    { id: 11, icon: ServerCog, question: 'Is there electricity backup?', answer: 'Yes, the resort is equipped with a generator for uninterrupted power supply.' },
    { id: 12, icon: ShieldCheck, question: 'What safety measures are in place?', answer: 'We have CCTV surveillance in common areas and a 24/7 front desk to ensure your safety and comfort.' },
    { id: 13, icon: FileText, question: 'What documents are required at check-in?', answer: 'All guests must present a valid government-issued photo ID (Aadhar card, passport, driving license, etc.) at check-in.' },
    { id: 14, icon: CreditCard, question: 'Can I cancel or modify my booking?', answer: 'Yes, cancellation and modification policies vary based on your booking source and dates. Please refer to our Cancellation Policy or contact us directly for details.' },
    { id: 15, icon: Phone, question: 'How do I contact the resort?', answer: 'Phone: 9816017904 / 9816417904 | Email: whisperinggroup@gmail.com' }
  ];

  const toggleFAQ = (id) => setOpenFAQ(openFAQ === id ? null : id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-lg md:text-2xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Help & Information
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Find answers to common questions and important policies
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex justify-center space-x-4 mt-5">
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'faq'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}>
            <HelpCircle className="w-5 h-5" />
            <span>FAQ</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'terms'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}>
            <FileText className="w-5 h-5" />
            <span>Terms & Privacy</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'faq' ? (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <faq.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                    </div>
                    <motion.div animate={{ rotate: openFAQ === faq.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-20">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-cyan-400" />
                  <span>Terms & Conditions</span>
                </h2>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">1. Booking and Reservation</h3>
                  <ul className="list-disc list-inside">
                    <li>All bookings are subject to availability and confirmation.</li>
                    <li>Guests are required to provide a valid ID proof at the time of check-in (Aadhar card, passport, driving license, etc.).</li>
                    <li>Advance payment may be required to confirm reservations.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">2. Check-in and Check-out</h3>
                  <p>Check-in time: 12:00 PM | Check-out time: 11:00 AM</p>
                  <p>Early check-in or late check-out is subject to availability and may incur additional charges.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">3. Cancellation and Refund Policy</h3>
                  <ul className="list-disc list-inside">
                    <li>Cancellations made 7 days before the check-in date will be eligible for a full refund.</li>
                    <li>Cancellations within 7 days of arrival may incur charges or be non-refundable, depending on the booking source and season.</li>
                    <li>No-shows will be charged the full booking amount.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">4. Guest Conduct</h3>
                  <ul className="list-disc list-inside">
                    <li>Guests are expected to behave respectfully and responsibly during their stay.</li>
                    <li>Any damage to the property or its contents will be chargeable.</li>
                    <li>The resort reserves the right to refuse service or evict guests who engage in inappropriate or unlawful behavior.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">5. Visitors</h3>
                  <ul className="list-disc list-inside">
                    <li>Visitors are not allowed in guest rooms after 9:00 PM.</li>
                    <li>Any visitors staying overnight must be registered at the front desk and may incur additional charges.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">6. Pets</h3>
                  <p>Pets are not allowed on the premises unless specifically mentioned in your booking confirmation.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">7. Use of Amenities</h3>
                  <p>Use of facilities such as the sauna, steam bath, massage center, discotheque, and bonfire is subject to availability and may incur additional charges. Management is not responsible for any injuries or accidents while using recreational facilities.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">8. Security and Personal Belongings</h3>
                  <ul className="list-disc list-inside">
                    <li>CCTV surveillance is in place in common areas for guest safety.</li>
                    <li>Guests are advised to lock their rooms and take care of their valuables. The resort is not responsible for the loss of any personal belongings.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">9. Smoking and Alcohol</h3>
                  <ul className="list-disc list-inside">
                    <li>Smoking is strictly prohibited in non-smoking rooms and indoor public areas.</li>
                    <li>Consumption of alcohol is permitted only in designated areas and must comply with local laws.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">10. Power Backup</h3>
                  <p>A generator is available to ensure continuous electricity supply in case of power outages.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">11. Website and Pricing</h3>
                  <ul className="list-disc list-inside">
                    <li>All rates displayed on our website are subject to change without prior notice.</li>
                    <li>Whispering Valley Resort is not responsible for discrepancies due to third-party booking platforms.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">12. Legal Jurisdiction</h3>
                  <p>Any disputes shall be subject to the jurisdiction of the courts in Manali, Himachal Pradesh.</p>
                </section>

                <div className="mt-8 p-6 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                  <p className="text-sm text-cyan-300">
                    <strong>Last Updated:</strong> June 2025<br />
                    These terms and conditions are subject to change without notice. Please review them periodically for updates.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
                  <ShieldCheck className="w-8 h-8 text-cyan-400" />
                  <span>Privacy Policy</span>
                </h2>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h3>
                  <ul className="list-disc list-inside">
                    <li><strong>Personal Information:</strong> Name, contact number, email address, postal address, government-issued ID, and payment details.</li>
                    <li><strong>Booking Details:</strong> Dates of stay, room preferences, and any special requests.</li>
                    <li><strong>Usage Data:</strong> Information collected through cookies and analytics tools when you browse our website (e.g., IP address, browser type, pages visited).</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">2. How We Use Your Information</h3>
                  <ul className="list-disc list-inside">
                    <li>Processing bookings and managing reservations.</li>
                    <li>Providing guest services during your stay.</li>
                    <li>Sending confirmation emails, updates, and promotional offers (with your consent).</li>
                    <li>Improving our website and services based on your feedback and usage data.</li>
                    <li>Ensuring safety and compliance with legal requirements.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">3. Sharing of Information</h3>
                  <p>We do not sell, rent, or trade your personal information. However, we may share your data with trusted third-party service providers (e.g., payment gateways, IT support) strictly for operational purposes and government authorities if required by law or for security purposes.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">4. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of online transmission or storage is completely secure.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">5. Cookies and Tracking Technologies</h3>
                  <p>Our website may use cookies or similar technologies to improve user experience and gather website usage data. You can control cookie settings through your browser preferences.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">6. Your Rights</h3>
                  <ul className="list-disc list-inside">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request corrections to inaccurate or outdated information.</li>
                    <li>Withdraw consent for marketing communications at any time.</li>
                    <li>Request deletion of your data, subject to legal obligations.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">7. Third-Party Links</h3>
                  <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-white mb-2">8. Changes to This Policy</h3>
                  <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised effective date.</p>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FAQPage;
