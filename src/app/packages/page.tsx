import React from 'react'
import MainLayout from './../../components/layout/MainLayout';

import Navbar from '@/components/common/header/Navbar';
import TourPackageList from '@/components/product/PackageDetails/testpackage/TourPackageList';
function packages() {
  const packages = [
  {
    image: '',
    name: 'Package 1',
    description: 'This is a brief description of Package 1',
    inclusions: ['Hotel stay', 'Meals', 'Transportation'],
    price: 1000
  },
  {
    image: '',
    name: 'Package 1',
    description: 'This is a brief description of Package 1',
    inclusions: ['Hotel stay', 'Meals', 'Transportation'],
    price: 1000
  },
  {
    image: '',
    name: 'Package 1',
    description: 'This is a brief description of Package 1',
    inclusions: ['Hotel stay', 'Meals', 'Transportation'],
    price: 1000
  },
  {
    image: '',
    name: 'Package 1',
    description: 'This is a brief description of Package 1',
    inclusions: ['Hotel stay', 'Meals', 'Transportation'],
    price: 1000
  },{
    image: '',
    name: 'Package 1',
    description: 'This is a brief description of Package 1',
    inclusions: ['Hotel stay', 'Meals', 'Transportation'],
    price: 1000
  },{
    image: '',
    name: 'Package 1',
    description: 'This is a brief description of Package 1',
    inclusions: ['Hotel stay', 'Meals', 'Transportation'],
    price: 1000
  },
  {
    image: '',
    name: 'Package 2',
    description: 'This is a brief description of Package 2',
    inclusions: ['Hotel stay', 'Meals'],
    price: 800
  },
  // ...
];
  return (
    <div>
      <Navbar />
     <MainLayout />
     <div>
      <h1>Tour Packages</h1>
      <TourPackageList packages={packages} />
    </div>
    </div>
  )
}

export default packages