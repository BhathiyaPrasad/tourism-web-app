'use client'
import { useEffect } from 'react';

const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66e52f8f50c10f7a00a9c67d/1i7nk3j3a';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToChat;
