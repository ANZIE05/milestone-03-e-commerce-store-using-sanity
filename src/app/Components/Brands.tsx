import React from 'react';
import Image from 'next/image';

const BrandPage = () => {
  // Store brand data instead of components
  const brands = [
    { src: '/images/brands/daraz.png', alt: 'Daraz', width: 80, height: 80, className: '' },
    { src: '/images/brands/amzon.png', alt: 'Amazon', width: 50, height: 80, className: 'rounded-2xl' },
    { src: '/images/brands/dealcart.jpeg', alt: 'DealCart', width: 50, height: 80, className: 'rounded-2xl' },
    { src: '/images/brands/temu.png', alt: 'Temu', width: 50, height: 80, className: 'rounded' },
    { src: '/images/brands/shopify.png', alt: 'Shopify', width: 80, height: 80, className: '' },
  ];

  return (
    <>
      <div className="w-full h-24 bg-indigo-900 mt-28">
        <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-12 lg:justify-around">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center cursor-pointer">
              {/* Render the Image component dynamically */}
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className={brand.className}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandPage;
