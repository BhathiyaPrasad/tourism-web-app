'use client'
import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
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
          className="fixed bottom-4 right-4 bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <BookOpen size={24} />
          <span className="hidden sm:inline">Book a Tour</span>
        </button>
      )}
    </>
  );
};

export default FloatingButton;