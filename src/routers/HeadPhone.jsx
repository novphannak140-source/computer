"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Phontos-Slider/Slider-headphone/Slider-headphone-1.jpg";
import img2 from "../assets/Phontos-Slider/Slider-headphone/Slider-headphone-2.jpg";
import img3 from "../assets/Phontos-Slider/Slider-headphone/Slider-headphone-3.jpg";
import img4 from "../assets/Phontos-Slider/Slider-headphone/Slider-headphone-4.jpg";
import img5 from "../assets/Phontos-Slider/Slider-headphone/Slider-headphone-5.jpg";
import img6 from "../assets/Phontos-Slider/Slider-headphone/Slider-headphone-6.jpg";
import logo from "../assets/logo product/logo headphone.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos";
import { useEffect } from "react";

const HeadPhone = ({ data }) => {
  useEffect(() => {
    AOS.init({});
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
      title: "Pc in black ",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 5,
      img: img5,
      title: "Pc in black ",
      desc: "Surround sound for ultimate immersion.",
    },
    {
      id: 6,
      img: img6,
      title: "Pc in black ",
      desc: "Surround sound for ultimate immersion.",
    },
  ];

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
          320: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
          1280: { slidesPerView: 3 }, // large desktop
        }}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-[520px]  "
              />
              {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-center">
                  {item.desc}
                </p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Logo */}
      <div
        className="w-full h-auto py-5  flex justify-center"
        data-aos="zoom-in"
      >
        <img src={logo} alt="Logo Monitor" className="w-full  rounded-2xl" />
      </div>
      {/* CardHeadPhone */}
      <div className="w-full h-auto  py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <Link
              data-aos="zoom-in"
              key={item.id}
              to={`/cardHeadphone/${item.id}`}
              className="bg-white rounded-2xl flex flex-col  justify-center overflow-hidden shadow-lg hover:scale-99 hover:shadow-gray-800 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.brand}
                className="  bg-gray-900"
              />
              <div className="p-3 text-center font-bold font-sans text-[10px] md:text-lg lg:text-md ">
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

export default HeadPhone;
