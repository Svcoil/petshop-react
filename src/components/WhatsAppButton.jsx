import React from 'react';
import { FaWhatsapp,} from "react-icons/fa";
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5585988208404"
      target="_self"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
        <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;