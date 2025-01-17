"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "You want Authentic, here you go!",
    description:
        "Discover unique products that inspire your style. From statement jewellery to stunning dresses and trendy bags, explore innovation and elegance in every piece. Shop now and transform your look!",
     buttonText: "Get Started",
    heroImage: "/images/hero1.png", 
  },
  {
    title: "You want Authentic, here you go!",
    description:
      "Discover unique products that inspire your style. From statement jewellery to stunning dresses and trendy bags, explore innovation and elegance in every piece. Shop now and transform your look!",
    buttonText: "Get Started",
    heroImage: "/images/hero2.png",
  },
  {
    title: "You want Authentic, here you go!",
    description:
      "Discover unique products that inspire your style. From statement jewellery to stunning dresses and trendy bags, explore innovation and elegance in every piece. Shop now and transform your look!",
    buttonText: "Get Started",
    heroImage: "/images/hero3.png",  
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (

    <section className=" py-10 md:py-6 md:px-16 gap-24 flex flex-col md:flex-row items-center justify-center overflow-hidden">


      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-pink-500 font-medium">
        Your Go-To Destination for Fashion and Style Essentials...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 leading-tight mt-2">
          {current.title}
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {current.description}
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-[16px] rounded font-semibold py-3 px-6 mt-6 hover:bg-pink-600 transition-all duration-300 lg:w-1/3 sm:w-1/2 text-center"
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Column: hero Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
          <Image
            src={current.heroImage}
            alt="Product Image"
            width={900}
            height={689}
            className="object-contain w-full h-auto rounded-2xl"
          />
        </div>
   

      {/* Navigation Dots */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-5 h-5 rounded-full ${
              currentSlide === index
                ? "bg-pink-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
  onClick={handlePrevSlide}
  className="absolute left-4 top-auto bottom-16 lg:bottom-48 transform translate-y-0 bg-pink-500 border border-gray-300 rounded-full p-2 hover:bg-indigo-900 z-10"
>
  &#8249;
</button>
<button
  onClick={handleNextSlide}
  className="absolute right-4 top-auto bottom-16 lg:bottom-48 transform translate-y-0 bg-pink-500 border border-gray-300 rounded-full p-2 hover:bg-indigo-900 z-10"
>
  &#8250;
</button>




    </section>
  );
}

export default HeroSection;