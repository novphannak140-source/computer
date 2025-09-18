"use client";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Phontos-Slider/slider laptop/slider-latop-1.jpg";
import img2 from "../assets/Phontos-Slider/slider laptop/slider-latop-2.jpg";
import img3 from "../assets/Phontos-Slider/slider laptop/slider-latop-3.jpg";
import img4 from "../assets/Phontos-Slider/slider laptop/slider-latop-4.jpg";
import logo from "../assets/logo product/logo laptop- next - slider.jpg";
import AOS from "aos";
import "aos/dist/aos";
import { useEffect, useState } from "react";

const Laptop = ({ data }) => {
  const [loading, setLoading] = useState(true);

  const slides = [
    {
      id: 1,
      img: img1,
      title: "Gaming Headset",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 2,
      img: img2,
      title: "Gaming Headset",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 3,
      img: img3,
      title: "Gaming Headset",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 4,
      img: img4,
      title: "Pc in black",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 5,
      img: img1,
      title: "Pc in black",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 6,
      img: img2,
      title: "Pc in black",
      desc: "Surround sound for ultimate immersion.",
    },
  ];

  useEffect(() => {
    AOS.init({});
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // YouTube-style shimmer loader
    return (
      <div className="w-full p-6 space-y-6 animate-pulse">
        {/* Fake slider */}
        <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gray-800 rounded-2xl"></div>

        {/* Fake logo */}
        <div className="w-full h-28 bg-gray-700 rounded-2xl"></div>

        {/* Fake cards */}
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
                  <div className="h-3 bg-gray-600 rounded w-1/3"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black,black)] mx-auto py-6 px-6">
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
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Logo */}
      <div
        className="w-full h-auto py-5 flex justify-center"
        data-aos="zoom-in"
      >
        <img src={logo} alt="Logo Laptop" className="w-full rounded-2xl" />
      </div>

      {/* Cards */}
      <div className="w-full h-auto py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <Link
              data-aos="zoom-in"
              key={item.id}
              to={`/cardlaptop/${item.id}`}
              className="bg-white rounded-2xl flex flex-col justify-center overflow-hidden shadow-lg hover:scale-99 hover:shadow-gray-800 transition-all duration-300"
            >
              <img src={item.image} alt={item.brand} className="bg-gray-900" />
              <div className="p-3 flex flex-col py-6 text-center font-bold font-sans text-[10px] md:text-lg lg:text-md">
                <h2 className="font-bold text-red-500">{item.Price}</h2>
                <p>{item.brand}</p>
                <p>{item.VGA}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
