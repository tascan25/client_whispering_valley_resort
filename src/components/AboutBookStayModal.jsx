import React from 'react';
import { X } from 'lucide-react';
import RoomFormComp from './RoomFormComp';

function AboutBookStayModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Centered Modal Wrapper */}
      <div
        className="
          fixed inset-0 flex items-center justify-center
          z-50
          p-4 sm:p-6
        "
        onClick={onClose}
      >
        {/* Modal Container */}
        <div
          className="
            relative  rounded-2xl shadow-2xl
            max-w-md w-full
            overflow-hidden
            bg-gradient-to-br from-slate-800 via-slate-900 to-black
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4
              p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow
              z-10
            "
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-700" />
          </button>

          {/* Padded Form Container */}
          <div className="p-6 ">
            <RoomFormComp />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBookStayModal;
