import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function RoomFormComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    days: '',
    checkin: '',
    checkout: '',
    remarks: '',
    roomType: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a phone number with 10 digits';
    }
    
    if (!formData.checkin || formData.checkin.length < 2) {
      newErrors.checkin = 'Please enter a valid time for check-in';
    }

     if (!formData.checkout || formData.checkout.length < 2) {
      newErrors.checkout = 'Please enter a valid time for check-out';
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
        'service_dddymsp',
        'template_v03fuyb',
        formData,
        'Nv8pdkZ5MHoKJQIG0'
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
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl p-6">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4"></div>
        <h2 className="text-white text-xl font-semibold text-center">Sending Your Reservation...</h2>
      </div>
    );
  }

  // Success screen
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-green-500/80 rounded-xl p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-white text-2xl font-semibold mb-2 text-center">Reservation Confirmed!</h2>
        <p className="text-white/90 text-center px-4">Thank you, {formData.name}. We look forward to hosting you!</p>
      </div>
    );
  }

  // Form (idle)
  return (
    <div className="w-full max-w-md mx-auto px-3 sm:px-4 py-4 sm:py-6">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">Book Your Stay</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-amber-200">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-amber-200">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone number */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-amber-200">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => handleChange('phone', e.target.value)}
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            placeholder="10 digit number"
          />
          {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-amber-200">Current Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={e => handleChange('location', e.target.value)}
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            placeholder="City, Country"
          />
          {errors.location && <p className="text-red-300 text-xs mt-1">{errors.location}</p>}
        </div>

        {/* Days */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-amber-200">Duration (nights)</label>
          <input
            type="number"
            value={formData.days}
            onChange={e => handleChange('days', e.target.value)}
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            placeholder="e.g., 3"
            min="1"
            max="30"
          />
          {errors.days && <p className="text-red-300 text-xs mt-1">{errors.days}</p>}
        </div>

        {/* Check-in & Check-out - Side by side on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-medium text-amber-200">Check In</label>
            <input
              type="time"
              value={formData.checkin}
              onChange={e => handleChange('checkin', e.target.value)}
              className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            />
            {errors.checkin && <p className="text-red-300 text-xs mt-1">{errors.checkin}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-medium text-amber-200">Check Out</label>
            <input
              type="time"
              value={formData.checkout}
              onChange={e => handleChange('checkout', e.target.value)}
              className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 text-sm"
            />
            {errors.checkout && <p className="text-red-300 text-xs mt-1">{errors.checkout}</p>}
          </div>
        </div>

        {/* Room Type (radio) */}
        <div className="space-y-1.5">
          <div className="block text-xs sm:text-sm font-medium text-amber-200 mb-2">Room Type</div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {['Deluxe', 'Premium', 'Family'].map(type => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="roomType"
                  value={type.toLowerCase()}
                  checked={formData.roomType === type.toLowerCase()}
                  onChange={e => handleChange('roomType', e.target.value)}
                  className="h-4 w-4 text-amber-500 focus:ring-amber-400"
                />
                <span className="text-white text-sm">{type}</span>
              </label>
            ))}
          </div>
          {errors.roomType && <p className="text-red-300 text-xs mt-1">{errors.roomType}</p>}
        </div>

        {/* Remarks */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-amber-200">
            Special Requests <span className="text-white/60 font-normal">(optional)</span>
          </label>
          <textarea
            value={formData.remarks}
            onChange={e => handleChange('remarks', e.target.value)}
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 resize-none text-sm"
            placeholder="Any special requests or preferences?"
            rows={3}
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2.5 sm:py-3 rounded-xl shadow-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 mt-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default RoomFormComp;