import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function ContactFormComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    remarks: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.location || formData.location.length < 2) {
      newErrors.location = 'Please enter your location';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('sending');

    try {
      await emailjs.send(
        'service_m51k1cb',
        'template_3ue6oj7',
        formData,
        'Nv8pdkZ5MHoKJQIG0'
      );
      toast.success(`${formData.name} your contact form has been sent successfully!`, { position: "top-right" });
      setStatus('success');
    } catch (error) {
      toast.error(`Error: ${error.text || error}`, { position: "top-right" });
      setStatus('idle');
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  if (status === 'sending') {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white mb-4"></div>
        <h2 className="text-white text-lg font-medium">Sending Your Reservation...</h2>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-green-500/80 rounded-xl p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-white text-xl font-semibold mb-1">Submission Confirmed!</h2>
        <p className="text-white/90 text-center text-sm">Thank you, {formData.name}. We will connect with you soon!</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900/70 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/40">
      <div className="mb-4 md:mb-6 text-center">
        <h3 className="text-2xl font-serif text-white md:mb-2 mt-20 md:mt-1">Contact Us</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { id: 'name', label: 'Full Name', type: 'text', field: 'name', placeholder: 'Enter your full name' },
          { id: 'email', label: 'Email Address', type: 'email', field: 'email', placeholder: 'you@example.com' },
          { id: 'phone', label: 'Mobile Number', type: 'tel', field: 'phone', placeholder: '9876543210', maxLength: 10 },
          { id: 'location', label: 'Current Location', type: 'text', field: 'location', placeholder: 'City, Country' }
        ].map(({ id, label, type, field, placeholder, maxLength }) => (
          <div key={field} className="space-y-1">
            <label htmlFor={id} className="block text-sm font-medium text-amber-200">{label}</label>
            <input
              id={id}
              type={type}
              value={formData[field]}
              onChange={e => handleChange(field, e.target.value)}
              placeholder={placeholder}
              maxLength={maxLength}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
            {errors[field] && <p className="text-red-300 text-xs">{errors[field]}</p>}
          </div>
        ))}

        {/* Remarks */}
        <div className="space-y-1">
          <label htmlFor="remarks" className="block text-sm font-medium text-amber-200">
            Remarks <span className="text-white/60 font-normal">(*)</span>
          </label>
          <textarea
            id="remarks"
            rows={3}
            value={formData.remarks}
            onChange={e => handleChange('remarks', e.target.value)}
            placeholder="Any special requests or preferences?"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 font-semibold text-white rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactFormComp;
