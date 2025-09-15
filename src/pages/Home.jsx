"use client";
import { useEffect, useState } from "react";
import img1 from "../assets/photos/img1.jpg";
import img2 from "../assets/photos/img2.jpg";
import img3 from "../assets/photos/img3.jpg";
import img4 from "../assets/photos/img4.jpg";
import img5 from "../assets/photos/img5.jpg";
import img6 from "../assets/photos/img6.jpg";
import img7 from "../assets/photos/img7.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgs8 from "../assets/SliderHome/IMG-8.jpg";
import imgs9 from "../assets/SliderHome/IMG 9.jpg";
import imgs10 from "../assets/SliderHome/IMG 10.jpg";
import imgs11 from "../assets/SliderHome/IMG 11.jpg";
import imgs12 from "../assets/SliderHome/IMG 12.jpg";
import imgs14 from "../assets/SliderHome/IMG 14.jpg";
import imgs18 from "../assets/SliderHome/IMG 15.jpg";
import imgs15 from "../assets/SliderHome/IMG 16.jpg";
import imgs16 from "../assets/SliderHome/IMG 17.jpg";
import imgs17 from "../assets/SliderHome/IMG 18.jpg";
import imgs19 from "../assets/SliderHome/IMG 19.jpg";
import imgs20 from "../assets/SliderHome/IMG 20.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const item = [
    imgs8,
    imgs9,
    imgs10,
    imgs11,
    imgs12,
    imgs14,
    imgs15,
    imgs16,
    imgs17,
    imgs18,
    imgs19,
    imgs20,
  ];
  // Photo img
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Handle transition end
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play functionality (optional)
  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, 4000);

    return () => clearInterval(autoPlay);
  }, [images.length, isTransitioning]);

  return (
    <>
      <div className="relative  ">
        <div className="p-4 flex items-center justify-center flex-col bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)] ">
          {/* Main slider container */}
          <div className="relative group w-[100%] md:w-full max-w-8xl lg:h-[95vh] md:h-[40vh] sm:h-[60vh] sm:max-w-8xl  overflow-hidden  rounded-lg shadow-xl bg-gray-900">
            {/* Image container with slide effect */}
            <div
              className="flex h-full  transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-full  flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation arrows for desktop */}
            <button
              onClick={goToPrevious}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-30 hidden md:block"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-30 hidden md:block"
            >
              <ChevronRight size={20} />
            </button>

            {/* Navigation arrows for mobile */}
            <button
              onClick={goToPrevious}
              disabled={isTransitioning}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300 disabled:opacity-30 md:hidden"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300 disabled:opacity-30 md:hidden"
            >
              <ChevronRight size={18} />
            </button>

            {/* Slide indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                } disabled:opacity-50`}
              />
            ))}
          </div>

          {/* Thumbnail navigation */}
          <div
            className="flex gap-2 mt-4 overflow-x-auto pb-2 max-w-full"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-blue-500 scale-105"
                    : "border-gray-300 hover:border-gray-400"
                } disabled:opacity-50`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/*  IMG SCROLL  */}
          <div className="w-full my-10 ">
            <div className="w-full max-w-8xl mx-auto">
              <div
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                {item.map((src, index) => (
                  <div
                    key={index}
                    className=" flex-shrink-0 w-70 h-65 mx-2 my-3 snap-center  snap-always"
                  >
                    <img
                      src={src}
                      alt={`Scenery ${index}`}
                      className="w-full h-full  rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
