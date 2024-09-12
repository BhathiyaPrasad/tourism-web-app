'use client'

import React from 'react';

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d126706.40998575329!2d79.8278143771098!3d7.05908282339561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3ae2e53c90c5fccb%3A0x330fe93bfc82930f!2sMinuwangoda!3m2!1d7.1842076!2d79.9500477!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!5e0!3m2!1sen!2slk!4v1726141615944!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapEmbed;

