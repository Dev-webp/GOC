import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/918970667999?text=Hello%2C%20I%20need%20more%20information"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-10 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="WhatsApp"
    >
      <BsWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppIcon;
