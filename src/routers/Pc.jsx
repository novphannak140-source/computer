"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import logo from "../assets/logo product/logo-desktop-pc.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos";
import { useEffect, useState } from "react";

// Skeleton Loader
function PcSkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-40 bg-gray-900"></div>
      <div className="px-3 py-4 text-center">
        <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto mb-2"></div>
        <div className="h-3 bg-gray-800 rounded w-1/3 mx-auto"></div>
      </div>
    </div>
  );
}

function PcSkeletonSlide() {
  return (
    <div className="w-full h-56 bg-gray-900 rounded-2xl animate-pulse"></div>
  );
}

const Pc = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({});
    const timer = setTimeout(() => setLoading(false), 2000); // simulate API call
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="w-full mx-auto py-6 px-7 bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black,black)]">
      {/* Swiper */}
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
        {loading
          ? slides.map((s) => (
              <SwiperSlide key={s.id}>
                <PcSkeletonSlide />
              </SwiperSlide>
            ))
          : data.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-2xl w-full h-auto overflow-hidden shadow-md">
                  <img src={item.image} alt={item.brand} className="bg-gray-900" />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      {/* Logo */}
      <div
        className="w-full h-auto py-5 flex justify-center"
        data-aos="zoom-in"
      >
        <img
          src={logo}
          alt="Logo Monitor"
          className="w-full object-center rounded-2xl"
        />
      </div>

      {/* PC Cards */}
      <div className="w-full h-auto py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <PcSkeletonCard key={i} />
              ))
            : data.map((item) => (
                <Link
                  data-aos="zoom-in"
                  key={item.id}
                  to={`/cardpc/${item.id}`}
                  className="bg-white rounded-2xl flex flex-col justify-center overflow-hidden shadow-lg hover:scale-99 hover:shadow-gray-800 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="bg-gray-900"
                  />
                  <div className="px-3 flex flex-col py-6 text-center font-bold font-sans text-[10px] md:text-lg lg:text-md">
                    <h2 className="font-bold text-red-500">{item.price}</h2>
                    <p>{item.RTX}</p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Pc;
