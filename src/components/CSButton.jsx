import React, { useState, useEffect } from 'react';
import { FaCommentDots, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const CSButton = () => {
  const [isActive, setIsActive] = useState(false);  
  const [isHovered, setIsHovered] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);   

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);

      if (!mobileCheck) {
        setIsActive(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleIcons = () => {
    setIsActive(!isActive);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const shouldShowIcons = isHovered || (isActive && isMobile);

  return (
    <div 
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="https://wa.me/your_number"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${
          shouldShowIcons ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-0 opacity-0'
        } hover:opacity-80`} 
        style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}
      >
        <FaWhatsapp size={24} />
      </a>

      <a
        href="https://www.instagram.com/your_instagram"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-pink-500 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${
          shouldShowIcons ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-0 opacity-0'
        } hover:opacity-80`} 
        style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}
      >
        <FaInstagram size={24} />
      </a>

      <a
        href="https://www.tiktok.com/@your_tiktok"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-black text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${
          shouldShowIcons ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-0 opacity-0'
        } hover:opacity-80`} 
        style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}
      >
        <FaTiktok size={24} />
      </a>

      <button
        onClick={toggleIcons}
        className="bg-blue-900 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center"
        style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default CSButton;
