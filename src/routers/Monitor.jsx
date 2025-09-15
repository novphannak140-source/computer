"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import logo from "../assets/logo product/logo monitor -next slider.jpg";
import img1 from "../assets/Phontos-Slider/slider monitor/silder-1.jpg";
import img2 from "../assets/Phontos-Slider/slider monitor/silder-2.jpg";
import img3 from "../assets/Phontos-Slider/slider monitor/silder-3.jpg";
import img4 from "../assets/Phontos-Slider/slider monitor/silder-4.jpg";
import AOS from "aos";
import "aos/dist/aos";
import { useEffect } from "react";

const Monitor = ({ data }) => {
  const slides = [img1, img2, img3, img4];
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="w-full h-auto bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black,black)]">
      {/* Slider */}
      <div className="w-full mx-auto py-6 px-5" data-aos="zoom-in">
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
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-2xl shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Logo */}
      <div
        className="w-full h-auto py-5 px-5 flex justify-center"
        data-aos="zoom-in"
      >
        <img
          src={logo}
          alt="Logo Monitor"
          className="w-full max-w-8xl rounded-2xl"
        />
      </div>

      {/* Monitor Cards */}
      <div className="w-full h-auto px-5 py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <Link
              data-aos="zoom-in"
              key={item.id}
              to={`/monitoruser/${item.id}`}
              className="bg-white rounded-2xl  flex   transition-all duration-800  flex-col justify-center  overflow-hidden shadow-lg hover:scale-99 object-cover hover:shadow-gray-700 "
            >
              <img
                src={item.image}
                alt={item.brand}
                className=" bg-gray-900 flex justify-center   "
              />
              <div className="p-3 text-center font-bold font-sans  text-[15px] md:text-lg lg:text-md ">
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

export default Monitor;
