import React from "react";

const WhatsAppButton: React.FC = () => {
  const whatsappLink =
    "https://wa.me/2348163216169?text=Hello%20Apex%20Advocates%20I%20need%20legal%20assistance";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
    >
      <span className="material-icons text-white text-3xl">chat</span>
    </a>
  );
};

export default WhatsAppButton;