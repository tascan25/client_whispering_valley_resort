import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import ContactFormComp from './ContactFormComp';

function ContactComp() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Ready to experience paradise? Contact us to make your reservation.
          </p>
        </motion.div>

        {/* two‑column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-700/50 p-8 md:p-12 rounded-2xl">
          {/* left: form */}
          <div className="w-full">
            <ContactFormComp />
          </div>

          {/* right: info cards */}
          <div className="grid grid-cols-1 gap-6">
            {[{
              Icon: MapPin,
              title: 'Location',
              content: (
                <>
                  Left Bank Road, near Beas Bridge,<br />
                  Distt. - Kullu, Manali, Himachal Pardesh - 175131
                </>
              ),
              delay: 0.1
            },{
              Icon: Phone,
              title: 'Phone',
              content: (
                <>
                  +91-9816017904<br />
                  +91-9816417904<br/>
                  <span className='font-semibold text-sm'>Available 24/7</span>
                </>
              ),
              delay: 0.2
            },{
              Icon: Mail,
              title: 'Email',
              content: (
                <>
                  whisperinggroup@gmail.com<br />
                  {/* booking@wishperingvalleyresort.in */}
                </>
              ),
              delay: 0.3
            }].map(({ Icon, title, content, delay }) => (
              <motion.a href={title === 'Phone'? `tel:+919816017904` : title === 'Email' ? `mailto:whisperinggroup@gmail.com` : title === 'Location' ? 'https://maps.app.goo.gl/7ZcsxYrvnpkDPcav8?g_st=ipc' : '#'} target='_blank'>
                      <motion.div
                key={title}
                className="bg-slate-900/60 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 text-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-300 text-sm">{content}</p>
              </motion.div>
              </motion.a>
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComp;
