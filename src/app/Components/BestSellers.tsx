import React from 'react'
import Image from 'next/image'

const BestSellersPage = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-8 px-4'>
        <h1 className='text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500'>Trending Products</h1>
    </div>

    <div className=" container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-center mb-6">
  <div className="w-full max-w-xs p-4 bg-gray-100 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <Image
      className="p-3 rounded-t-lg"
      src="/images/new-arrivals/n-a2.png"
      alt="product image"
      width={300}
      height={300} 
    />
    <div className="px-4 pb-4">
      <a href="#">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        24-Piece Black Square Medium Press-On Nails with Glossy Finish, for Everyday & Special Occasions
        </h5>
      </a>
      <div className="flex items-center mt-2 mb-4">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {/* Repeat the SVG stars */}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Rs.834
        </span>
        <p
          className="text-pink-500 text-base pr-4 font-semibold"
        >
          3.3k sold
        </p>
      </div>
    </div>
  </div>


  <div className="w-full max-w-xs bg-gray-100 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <Image
      className="p-3 rounded-t-lg"
      src="/images/new-arrivals/n-a1.png"
      alt="product image"
      width={300}
      height={300} 
    />
    <div className="px-4 pb-4">
      <a href="#">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        5pcs Vintage Elegant Alloy Ear Studs Set. Perfect for Daily & Party Wear, Special gift for Valentine&apos;S Day
        </h5>
      </a>
      <div className="flex items-center mt-2 mb-4">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {/* Repeat the SVG stars */}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Rs.1230
        </span>
        <p
          className="text-pink-500 text-base pr-4 font-semibold"
        >
          684 sold
        </p>
      </div>
    </div>
  </div>


  <div className="w-full max-w-xs bg-gray-100 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <Image
      className="p-3 rounded-t-lg"
      src="/images/new-arrivals/n-a3.png"
      alt="product image"
      width={300}
      height={300} 
    />
    <div className="px-4 pb-4">
      <a href="#">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        2PC Black Fine Long Lasting Liquid Eyeliner Water Pen Waterproof Quick-drying Makeup Tools
        </h5>
      </a>
      <div className="flex items-center mt-2 mb-4">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {/* Repeat the SVG stars */}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
        Rs.550
        </span>
        <p
          className="text-pink-500 text-base pr-4 font-semibold"
        >
          3.5k sold
        </p>
      </div>
    </div>
  </div>


  <div className="w-full max-w-xs bg-gray-100 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <Image
      className="p-3 rounded-t-lg"
      src="/images/new-arrivals/n-a4.png"
      alt="product image"
      width={300}
      height={300} 
    />
    <div className="px-4 pb-4">
      <a href="#">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Butterfly TPU Case with Pearl Crystal Bracelet, Sparkly Dreamy Design - Ideal Gift for Any Occasion
        </h5>
      </a>
      <div className="flex items-center mt-2 mb-4">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {/* Repeat the SVG stars */}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
        Rs.1460
        </span>
        <p
          className="text-pink-500 text-base pr-4 font-semibold"
        >
          1.2k sold
        </p>
      </div>
    </div>
  </div>


</div>
    </>
  
  )
}

export default BestSellersPage