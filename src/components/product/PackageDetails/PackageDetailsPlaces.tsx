import React from "react";
import Image from "next/image";
import test from '../../../../public/assets/south/15.jpg'

interface RouteProps {
  name?: string;
}

const PackageDetailsPlaces: React.FC<RouteProps> = ({ name }) => {
return (
<div>
  <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-1 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-200">
        <div className="py-10 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 w-full mb-6 flex-shrink-0 flex flex-col items-center">
            <Image
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              alt="this is test"
              src={test}
            />
          </div>
          <div className="md:flex-grow w-full md:ml-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 title-font mb-4">
              {name}
            </h2>
            <p className="leading-relaxed text-base sm:text-lg text-gray-600">
            Pinnawala Elephant Orphanage is an orphanage, nursery and captive breeding ground for wild Asian elephants located at Pinnawala village, 13 km (8.1 mi) northwest of Kegalle town in Sabaragamuwa Province of Sri Lanka. Pinnawala is notable for having the largest herd of captive elephants in the world. In 2011, there were 88 elephants, including 37 males and 51 females from 3 generations, living in Pinnawala.
The orphanage was originally founded in order to afford care and protection to many of the orphaned unweaned wild elephants found wandering in and near the forests of Sri Lanka. It was established in 1975 by the Sri Lanka Department of Wildlife Conservation (DWC).

.
            </p>
            <a className="text-indigo-600 hover:text-indigo-800 inline-flex items-center mt-6 transition-colors duration-300 ease-in-out">
              Learn More
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Second Section */}
        <div className="py-10 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 w-full mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default PackageDetailsPlaces;