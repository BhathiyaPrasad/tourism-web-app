import React from "react";
import Image from "next/image";
import product from '../../../public/assets/sigiriya.jpg';

const Gallery: React.FC = () => (
  <>
    <section className="text-gray-600 body-font bg-white z-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Explore our curated selection of packages designed to rejuvenate and inspire.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-105">
              <div className="flex relative">
                <Image
                  width={400}
                  height={300}
                  alt={`gallery-${index}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-in-out hover:opacity-70"
                  src={product}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    {['Shooting Stars', 'The Catalyzer', 'The 400 Blows', 'Neptune', 'Holden Caulfield', 'Alper Kamu'][index]}
                  </h1>
                  <p className="leading-relaxed text-gray-600">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Gallery;
