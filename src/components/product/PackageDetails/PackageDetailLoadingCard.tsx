import React from  'react'
import { FaCalendarAlt, FaUserFriends, FaMapMarkerAlt, FaStar } from 'react-icons/fa';



const PackageDetailLoadingCard = () => {
      
       



    return (
        <div>
        <section className="text-gray-600 body-font bg-white">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            {/* Image skeleton */}
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden shadow-lg">
              <div className="skeleton w-full h-80 bg-gray-300 animate-pulse"></div>
            </div>
      
            {/* Details skeleton */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              {/* Title skeleton */}
              <div className="skeleton h-10 w-2/3 bg-gray-300 animate-pulse mb-4"></div>
              
              {/* Description skeleton */}
              <div className="skeleton h-6 w-full bg-gray-300 animate-pulse mb-8"></div>
      
              {/* Feature skeletons */}
              <div className="flex flex-wrap mb-8 w-full">
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <FaCalendarAlt className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="skeleton h-4 w-1/2 bg-gray-300 animate-pulse"></span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <FaUserFriends className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="skeleton h-4 w-1/2 bg-gray-300 animate-pulse"></span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <FaMapMarkerAlt className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="skeleton h-4 w-1/2 bg-gray-300 animate-pulse"></span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <FaStar className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="skeleton h-4 w-1/2 bg-gray-300 animate-pulse"></span>
                  </div>
                </div>
              </div>
      
              {/* Price skeleton */}
              <div className="skeleton h-6 w-1/4 bg-gray-300 animate-pulse mb-4"></div>
      
              {/* Button skeleton */}
              <div className="skeleton h-10 w-28 bg-gray-300 animate-pulse"></div>
            </div>
            
          </div>
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
  {/* Destinations Image skeleton */}
  <div className="lg:w-1/6 md:w-1/4 w-2/3 sm:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <div className="skeleton w-full h-40 bg-gray-300 animate-pulse"></div>
  </div>

  <div className="lg:flex-grow md:w-1/2 w-full lg:pl-10 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
    {/* Title skeleton */}
    <div className="skeleton h-8 w-full bg-gray-300 animate-pulse mb-2"></div>
    <div className="skeleton h-8 w-5/6 bg-gray-300 animate-pulse mb-2"></div>
    <div className="skeleton h-8 w-4/6 bg-gray-300 animate-pulse mb-2"></div>
  </div>
</div>

<div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
  {/* Destinations Image skeleton */}
  <div className="lg:w-1/6 md:w-1/4 w-2/3 sm:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <div className="skeleton w-full h-40 bg-gray-300 animate-pulse"></div>
  </div>

  <div className="lg:flex-grow md:w-1/2 w-full lg:pl-10 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
    {/* Title skeleton */}
    <div className="skeleton h-8 w-full bg-gray-300 animate-pulse mb-2"></div>
    <div className="skeleton h-8 w-5/6 bg-gray-300 animate-pulse mb-2"></div>
    <div className="skeleton h-8 w-4/6 bg-gray-300 animate-pulse mb-2"></div>
  </div>
</div>

        </section>
        
      </div>
      
    )
}
export default PackageDetailLoadingCard;