'use client'
import React, { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import {useRouter} from 'next/navigation';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    router.push('/book');
    
    console.log('Book a tour clicked!');
  };

  return (
    <>
      {isVisible && (
         <button
         onClick={handleClick}
         className="fixed bottom-6 left-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 group"
       >
         <CalendarCheck size={28} className="group-hover:animate-pulse" />
         <span className="hidden sm:inline text-lg">Book a Tour</span>
       </button>
      )}
    </>
  );
};

export default FloatingButton;