"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Phontos-Slider/Slider-keyborad/Slider-keyborad-1.jpg";
import img2 from "../assets/Phontos-Slider/Slider-keyborad/Slider-keyborad-2.jpg";
import img3 from "../assets/Phontos-Slider/Slider-keyborad/Slider-keyborad-3.jpg";
import img4 from "../assets/Phontos-Slider/Slider-keyborad/Slider-keyborad-4.jpg";
import img5 from "../assets/Phontos-Slider/Slider-keyborad/Slider-keyborad-5.jpg";
import img6 from "../assets/Phontos-Slider/Slider-keyborad/Slider-keyborad-6.jpg";
import logo from "../assets/logo product/img4.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos";
import { useEffect, useState } from "react";

const Keyborad = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({});
    const timer = setTimeout(() => setLoading(false), 1500); // fake YouTube delay
    return () => clearTimeout(timer);
  }, []);

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
      img: img5,
      title: "Pc in black",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 6,
      img: img6,
      title: "Pc in black",
      desc: "Surround sound for ultimate immersion.",
    },
  ];

  if (loading) {
    return (
      <div className="w-full p-6 space-y-6 animate-pulse">
        {/* Fake slider */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px] bg-gray-800 rounded-2xl"></div>

        {/* Fake logo */}
        <div className="w-full h-28 bg-gray-700 rounded-2xl"></div>

        {/* Fake cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array(4)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-2xl h-48 flex flex-col overflow-hidden"
              >
                <div className="w-full h-28 bg-gray-700"></div>
                <div className="p-3">
                  <div className="h-4 bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)] mx-auto py-6 px-6">
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
              <img src={item.img} alt={item.title} className="w-full" />
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
          className="w-full max-w-8xl rounded-2xl"
        />
      </div>

      {/* CardKeyborad */}
      <div className="w-full h-auto py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <Link
              data-aos="zoom-in"
              key={item.id}
              to={`/cardkeyborad/${item.id}`}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-center shadow-lg hover:scale-99 hover:shadow-gray-900 transition-all duration-300"
            >
              <img src={item.image} alt={item.brand} className="bg-gray-900" />
              <div className="p-3 text-center font-bold font-sans text-[10px] md:text-lg lg:text-md">
                <h2 className="font-bold">{item.brand}</h2>
                <p className="text-red-500">{item.Price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyborad;
