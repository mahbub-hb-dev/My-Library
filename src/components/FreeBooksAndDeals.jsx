import React from 'react'
import { books } from '../data'

const FreeBooksAndDeals = () => {
    
  return (
    <section className='my-10 p-2.5'>

        <h2 className='common-h2'> FREE EBOOKS AND DEALS &nbsp; <a href="#"> (View All) </a> </h2>


        <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 common-div'>
            {books.map(book => {
                return (
                    <div>
                        <img src={book.url} alt="" />
                        <p> <a href="#" className='hover:underline'> {book.bookName} </a> </p>
                        <p className='text-gray-500'> {book.writer} </p>
                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default FreeBooksAndDeals






// import React, { useState } from "react";
// import { books } from "../data";

// const ImageSlider = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   // স্ক্রিন অনুযায়ী কতগুলো আইটেম দেখাবে
//   const getItemsPerView = () => {
//     if (window.innerWidth >= 1280) return 6; // xl
//     if (window.innerWidth >= 1024) return 5; // lg
//     if (window.innerWidth >= 768) return 4; // md
//     if (window.innerWidth >= 640) return 3; // sm
//     return 2; // default/mobile
//   };

//   const itemsPerView = getItemsPerView();

//   const handleNext = () => {
//     if (startIndex < books.length - itemsPerView) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   return (
//     <div className="relative w-full flex items-center">
//       {/* Slider Container */}
//       <div className="flex overflow-hidden w-full">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${startIndex * (100 / itemsPerView)}%)` }}
//         >
//           {books.map((book, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 p-2"
//               style={{ width: `${100 / itemsPerView}%` }}
//             >
//               <img src={book.url} alt={book.bookName} className="w-full rounded-lg" />
//               <p className="text-center text-sm">{book.bookName}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Next Button */}
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded"
//       >
//         Next →
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;
