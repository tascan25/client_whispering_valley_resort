import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function RoomFormComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    days: '',
    remarks: '',
    roomType: ''              // ← new field
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
    if (!formData.location || formData.location.length < 2) {
      newErrors.location = 'Please enter your location';
    }
    if (!formData.days || formData.days < 1 || formData.days > 30) {
      newErrors.days = 'Please enter a number between 1 and 30';
    }
    if (!formData.roomType) {
      newErrors.roomType = 'Please select a room type';
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
        'service_dddymsp',       // your service ID
        'template_v03fuyb',      // your template ID
        formData,                // includes roomType now
        'Nv8pdkZ5MHoKJQIG0'      // your public key
      );

      toast.success(`${formData.name}, your room enquiry has been sent successfully!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setStatus('success');
    } catch (error) {
      toast.error(`Error sending message: ${error.text || error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setStatus('idle');
    }
  };

  const handleChange = (field, value) => {
    if (field === 'days') {
      value = value === '' ? '' : parseInt(value);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Sending screen
  if (status === 'sending') {
    return (
      <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl p-6">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4"></div>
        <h2 className="text-white text-xl font-semibold">Sending Your Reservation...</h2>
      </div>
    );
  }

  // Success screen
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-80 bg-green-500/80 rounded-xl p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-white text-2xl font-semibold mb-2">Reservation Confirmed!</h2>
        <p className="text-white/90 text-center">Thank you, {formData.name}. We look forward to hosting you!</p>
      </div>
    );
  }

  // Form (idle)
  return (
    <div className="w-full max-w-sm">
      <div className="mb-4 md:mb-6 text-center">
        <h3 className="text-2xl font-serif text-white md:mb-2 mt-20 md:mt-1">Book Your Stay</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-amber-200">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-base"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-300 text-xs">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-amber-200">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-base"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-300 text-xs">{errors.email}</p>}
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-amber-200">Current Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={e => handleChange('location', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-base"
            placeholder="City, Country"
          />
          {errors.location && <p className="text-red-300 text-xs">{errors.location}</p>}
        </div>

        {/* Days */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-amber-200">Duration (nights)</label>
          <input
            type="number"
            value={formData.days}
            onChange={e => handleChange('days', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-base"
            placeholder="e.g., 3"
            min="1"
            max="30"
          />
          {errors.days && <p className="text-red-300 text-xs">{errors.days}</p>}
        </div>

        {/* Room Type (radio) */}
        <fieldset className="space-y-1">
          <legend className="block text-sm font-medium text-amber-200">Room Type</legend>
          <div className="flex space-x-4">
            {['Deluxe', 'Premium', 'Family'].map(type => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="roomType"
                  value={type.toLowerCase()}
                  checked={formData.roomType === type.toLowerCase()}
                  onChange={e => handleChange('roomType', e.target.value)}
                  className="h-4 w-4 text-amber-500 focus:ring-amber-400"
                />
                <span className="text-white">{type}</span>
              </label>
            ))}
          </div>
          {errors.roomType && <p className="text-red-300 text-xs">{errors.roomType}</p>}
        </fieldset>

        {/* Remarks */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-amber-200">
            Special Requests <span className="text-white/60 font-normal">(optional)</span>
          </label>
          <textarea
            value={formData.remarks}
            onChange={e => handleChange('remarks', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 resize-none text-base"
            placeholder="Any special requests or preferences?"
            rows={3}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
}

export default RoomFormComp;
