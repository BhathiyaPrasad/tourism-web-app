'use client'

import React from 'react';

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m48!1m12!1m3!1d506209.22529291775!2d80.03536088901743!3d7.601123652585622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m33!3e0!4m5!1s0x3ae2efd7f3f7894f%3A0xbce244fafe80bdf1!2sKatunayake!3m2!1d7.1724849!2d79.8853484!4m4!1s0x3ae36890ae2f95fd%3A0x92ce8ec2bf791233!3m2!1d7.2681892999999995!2d80.5966332!4m4!1s0x3ae3662db149fbf5%3A0x8165d70ac115e887!3m2!1d7.293609!2d80.641325!4m4!1s0x3afca558c5bd3669%3A0xd1daa5c0936b764c!3m2!1d7.854914099999999!2d80.6505699!4m5!1s0x3afca16422c0e731%3A0xe98f7af01614cc1c!2sSigiriya%20Lion%20Rock%2C%20Sigiriya!3m2!1d7.9571127!2d80.760257!4m4!1s0x3afb6009a20be05d%3A0xa4d046f2f06b05f5!3m2!1d8.0156443!2d80.84467029999999!5e0!3m2!1sen!2slk!4v1726204962369!5m2!1sen!2slk"
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
