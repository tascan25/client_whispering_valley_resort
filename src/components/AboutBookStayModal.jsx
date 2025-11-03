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

      {/* Centered Modal Wrapper with Scrolling */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-full flex items-center justify-center py-4">
          {/* Modal Container */}
          <div
            className="relative rounded-2xl shadow-2xl max-w-[40vw] md:max-w-[40vw] w-full my-auto bg-gradient-to-br from-slate-800 via-slate-900 to-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg z-10"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {/* Form Container - Scrollable if needed */}
            <div className="overflow-y-auto max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] w-[40vw] md:w-[40vw]">
              <RoomFormComp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBookStayModal;