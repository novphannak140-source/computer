"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos";

import img1 from "../assets/Phontos-Slider/Slider-Mouse/Slider-muse-1.jpg";
import img2 from "../assets/Phontos-Slider/Slider-Mouse/Slider-muse-2.jpg";
import img3 from "../assets/Phontos-Slider/Slider-Mouse/Slider-muse-3.jpg";
import img4 from "../assets/Phontos-Slider/Slider-Mouse/Slider-muse-4.jpg";
import img5 from "../assets/Phontos-Slider/Slider-Mouse/Slider-muse-5.jpg";

const Mouse = ({ data }) => {
  const [loading, setLoading] = useState(true);

  const slides = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];

  useEffect(() => {
    AOS.init({});
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full p-5 space-y-6 animate-pulse">
        {/* Fake slider */}
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gray-800 rounded-2xl"></div>

        {/* Fake mouse cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array(4)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-2xl h-56 flex flex-col overflow-hidden"
              >
                <div className="w-full h-32 bg-gray-700"></div>
                <div className="p-3">
                  <div className="h-4 bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2 mb-1"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)] mx-auto py-6 px-5">
      <Swiper
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="rounded-2xl shadow-lg"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img src={item.img} alt={`Slide ${item.id}`} className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mouse Cards */}
      <div className="w-full h-auto py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <Link
              data-aos="zoom-in"
              key={item.id}
              to={`/cardmouse/${item.id}`}
              className="rounded-2xl overflow-hidden bg-gray-900 flex flex-col justify-center shadow-lg hover:scale-99 hover:shadow-gray-900 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.brand}
                className="bg-gray-900 object-center"
              />
              <div className="px-3 py-1 text-center bg-white font-bold font-sans text-[10px] md:text-lg lg:text-md">
                <h2 className="font-bold text-red-500">{item.Price}</h2>
                <p>{item.brand}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mouse;
