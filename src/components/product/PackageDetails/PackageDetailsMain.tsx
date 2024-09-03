'use client';
import React, { useState } from 'react';
import styles from './TourTabs.module.css'; // You can create a CSS module for styling

const TourTabs = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState('description');

  // Handler function to change active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      {/* Tab Buttons */}
      <div className={styles.tabButtons}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'description' ? styles.active : ''}`} 
          onClick={() => handleTabChange('description')}
        >
          Tour Description
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'process' ? styles.active : ''}`} 
          onClick={() => handleTabChange('process')}
        >
          Process
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'map' ? styles.active : ''}`} 
          onClick={() => handleTabChange('map')}
        >
          Map and Path
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'booking' ? styles.active : ''}`} 
          onClick={() => handleTabChange('booking')}
        >
          Booking Form
        </button>
      </div>

      {/* Content Sections */}
      <div className={styles.tabContent}>
        {activeTab === 'description' && (
          <div>
            <h2>Tour Description</h2>
            <p>Here you can add a detailed description of the tour...</p>
          </div>
        )}
        {activeTab === 'process' && (
          <div>
            <h2>Process</h2>
            <p>Explain the process involved in the tour...</p>
          </div>
        )}
        {activeTab === 'map' && (
          <div>
            <h2>Map and Path</h2>
            {/* Replace with your actual map component or iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096393!2d144.9537353153159!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d6e8b1e4a56!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sau!4v1615946832861!5m2!1sen!2sau" 
              width="600" 
              height="450" 
              style={{ border: '0' }} 
               
              loading="lazy"
            ></iframe>
          </div>
        )}
        {activeTab === 'booking' && (
          <div>
            <h2>Booking Form</h2>
            <form>
              {/* Add your booking form fields here */}
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="tourDate">Tour Date:</label>
                <input type="date" id="tourDate" name="tourDate" />
              </div>
              <button type="submit">Book Now</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourTabs;
