// 'use client'
// import React, { useState } from 'react';
// import { CalendarDays, Map, Info, BookOpen } from 'lucide-react';

// const TourTabs = () => {
//   const [activeTab, setActiveTab] = useState('description');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden z-20">
//       <div className="flex border-b">
//         <TabButton
//           active={activeTab === 'description'}
//           onClick={() => handleTabChange('description')}
//           icon={<Info className="w-5 h-5" />}
//         >
//           Tour Details
//         </TabButton>
//         <TabButton
//           active={activeTab === 'itinerary'}
//           onClick={() => handleTabChange('itinerary')}
//           icon={<CalendarDays className="w-5 h-5" />}
//         >
//           Itinerary
//         </TabButton>
//         <TabButton
//           active={activeTab === 'map'}
//           onClick={() => handleTabChange('map')}
//           icon={<Map className="w-5 h-5" />}
//         >
//           Map
//         </TabButton>
//         <TabButton
//           active={activeTab === 'booking'}
//           onClick={() => handleTabChange('booking')}
//           icon={<BookOpen className="w-5 h-5" />}
//         >
//           Book Now
//         </TabButton>
//       </div>

//       <div className="p-6">
//         {activeTab === 'description' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Exotic Beach Getaway</h2>
//             <p className="text-gray-600 mb-4">
//               Escape to paradise with our Exotic Beach Getaway tour. Experience pristine white sand beaches,
//               crystal-clear waters, and luxurious accommodations. Perfect for couples and families alike!
//             </p>
//             <ul className="list-disc list-inside text-gray-600">
//               <li>7 days / 6 nights all-inclusive package</li>
//               <li>Beachfront resort accommodation</li>
//               <li>Daily breakfast, lunch, and dinner included</li>
//               <li>Snorkeling and water sports activities</li>
//               <li>Sunset cruise and beach bonfire experience</li>
//             </ul>
//           </div>
//         )}
//         {activeTab === 'itinerary' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Tour Itinerary</h2>
//             <div className="space-y-4">
//               {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'].map((day, index) => (
//                 <div key={index} className="border-b pb-2">
//                   <h3 className="font-semibold text-lg">{day}</h3>
//                   <p className="text-gray-600">
//                     {index === 0
//                       ? 'Arrival and welcome dinner'
//                       : index === 6
//                       ? 'Departure and farewell'
//                       : 'Beach activities, local excursions, and relaxation'}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         {activeTab === 'map' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Tour Location</h2>
//             <div className="aspect-w-16 aspect-h-9">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15260.166566570236!2d73.90017867644897!3d18.56359636811182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1681739952629!5m2!1sen!2sin"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         )}
//         {activeTab === 'booking' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Book Your Tour</h2>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="tourDate" className="block text-sm font-medium text-gray-700">
//                   Preferred Tour Date
//                 </label>
//                 <input
//                   type="date"
//                   id="tourDate"
//                   name="tourDate"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
//                   Number of Guests
//                 </label>
//                 <select
//                   id="guests"
//                   name="guests"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 >
//                   {[1, 2, 3, 4, 5, 6].map((num) => (
//                     <option key={num} value={num}>
//                       {num}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Book Now
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const TabButton = ({ children, active, onClick, icon }) => (
//   <button
//     className={`flex-1 text-center py-4 px-2 transition-colors duration-300 ${
//       active
//         ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
//         : 'text-gray-500 hover:text-indigo-600'
//     }`}
//     onClick={onClick}
//   >
//     <div className="flex items-center justify-center space-x-2">
//       {icon}
//       <span>{children}</span>
//     </div>
//   </button>
// );

// export default TourTabs;