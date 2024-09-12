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
              Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
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