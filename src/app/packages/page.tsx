import React from 'react'
import MainLayout from './../../components/layout/MainLayout';
import Navbar from '@/components/common/header/Navbar';
import HomePackage from '@/components/HomePackage/HomePackage';
import HomeCategoryButtons from '@/components/product/CategoryButtons/HomeCategoryButtons';

function packages() {

  return (
    <div data-theme='white'><div>
      <Navbar />
     
      <MainLayout />
      <HomeCategoryButtons />
    </div>
      <div className="mt-10">
        <HomePackage limits={100} />
      </div>
    </div>
  )
}

export default packages