import React from 'react';
import './t.css'
import Image from 'next/image';
const TourPackageCard = ({ packageData }) => {
  return (
    <div className="tour-package-card">
      <Image src={packageData.image} alt={packageData.name} width={1000} height={2000}/>
      <h3>{packageData.name}</h3>
      <p>{packageData.description}</p>
      <ul>
        {packageData.inclusions.map((inclusion, index) => (
          <li key={index}>{inclusion}</li>
        ))}
      </ul>
      <p>
        <strong>Price:</strong> ${packageData.price}
      </p>
      <button>Book Now</button>
    </div>
  );
};

const TourPackageList = ({ packages }) => {
  return (
    <div className="tour-package-list">
      {packages.map((packageData, index) => (
        <TourPackageCard key={index} packageData={packageData} />
      ))}
    </div>
  );
};

export default TourPackageList;