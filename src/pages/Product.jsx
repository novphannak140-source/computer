"use client";
import Headphone from "../assets/Product/headphone in grid.jpg";
import Deigame from "../assets/Product/dei game.jpg";
import Coolet from "../assets/Product/coolet pc grid.jpg";
import Rtx from "../assets/Product/rtx grid.jpg";
import CardProduct from "../assets/ui/CardProduct";
import img6 from "../assets/logo product/img6.jpg";
import img2 from "../assets/logo product/img2.jpg";
import img1 from "../assets/logo product/img1.jpg";
import img7 from "../assets/logo product/img7.jpg";
import img4 from "../assets/logo product/img4.jpg";
import img5 from "../assets/logo product/logo mouse.jpg";
import img8 from "../assets/logo product/logo monitor stand.jpg";
import img9 from "../assets/logo product/logo headphone.jpg";
import img10 from "../assets/logo product/table gaming.jpg";

import CardpProudctRtx from "../assets/ui/CardpProudctRtx";
import CardProductMnitor from "../assets/ui/CardProductMnitor";
import CardProducTaptop from "../assets/ui/CardProducTaptop";
import CardProductDesktop from "../assets/ui/CardProductDesktop";
import CardProductkeyborak from "../assets/ui/CardProductkeyborak";
import CardProductMouse from "../assets/ui/CardProductMouse";
import CardProductMonitorStand from "../assets/ui/CardProductMonitorStand";
import CardProductHeadphone from "../assets/ui/CardProductHeadphone";
import CardProductTableGaming from "../assets/ui/CardProductTableGaming";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Product = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="w-full h-auto  bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black,black)]">
      <h1></h1>
      <div className="flex items-center justify-center w-full h-auto  bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)]">
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-3 p-7 ">
          <div className="col-span-2 flex items-center justify-center   ">
            <img
              src={Rtx}
              alt=""
              className=" w-full h-auto object-cover overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-gray-200 hover:scale-101"
            />
          </div>
          <div className="col-span-2 flex items-center justify-center ">
            <img
              src={Coolet}
              alt=""
              className="  w-full h-auto  object-cover overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-gray-200 hover:scale-101"
            />
          </div>
          <div className="col-span-2 flex items-center justify-center ">
            <img
              src={Headphone}
              alt=""
              className=" lg:h-[60vh] w-full h-auto  object-cover overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-gray-200 hover:scale-101"
            />
          </div>
          <div className="col-span-2 flex items-center justify-center ">
            <img
              src={Deigame}
              alt=""
              className=" lg:h-[60vh] w-full h-auto  object-cover overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-gray-200 hover:scale-101"
            />
          </div>
        </div>
      </div>
      {/* golo product */}
      <div className="px-8  bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)] w-full h-auto">
        <h1 className="text-2xl font-serif text-white  hover:text-red-600 transition-all duration-800">
          <span className=" text-red-600 hover:text-white transition-all duration-800">
            TRENDING
          </span>{" "}
          THIS WEEK
        </h1>
      </div>
      {/* CardProduct img scroll */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <CardProduct />
      </div>
      {/* logo rtx  */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img6} alt="" className="w-full  h-auto md:h-85" />
          </div>
        </div>
      </div>
      {/* Card Rtx  */}
      <div
        className="w-full h-auto py-7"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div>
          <CardpProudctRtx />
        </div>
      </div>
      {/* logo monitor  gamng */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img1} alt="" className="w-full  h-auto md:h-65" />
          </div>
        </div>
      </div>
      {/* Card monitor gaming  */}
      <div>
        <div
          className="w-full h-auto py-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <CardProductMnitor />
        </div>
      </div>
      {/* logo laptop  */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img2} alt="" className="w-full  h-auto md:h-80" />
          </div>
        </div>
      </div>
      {/* Card laptop asus */}
      <div
        className="w-full h-auto py-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div>
          <CardProducTaptop />
        </div>
      </div>
      {/* logo Desktop  */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img7} alt="" className="w-full  h-auto md:h-80" />
          </div>
        </div>
      </div>
      {/* Card Dedktop */}
      <div
        className="w-full h-auto py-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div>
          <CardProductDesktop />
        </div>
      </div>
      {/* Logo keyborak  */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img4} alt="" className="w-full  h-auto md:h-80" />
          </div>
        </div>
      </div>
      {/* Card key borak */}
      <div
        className="w-full h-auto py-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div>
          <CardProductkeyborak />
        </div>
      </div>
      {/* Logo Mouse */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img5} alt="" className="w-full  h-auto md:h-85" />
          </div>
        </div>
      </div>
      {/* Card Mouse */}
      <div
        className="w-full h-auto py-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div>
          <CardProductMouse />
        </div>
      </div>
      {/* Logo Monitor stand */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img8} alt="" className="w-full  h-auto md:h-89" />
          </div>
        </div>
      </div>
      {/* Card Monitor stand */}
      <div
        className="w-full h-auto py-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div>
          <CardProductMonitorStand />
        </div>
      </div>
      {/* Logo Headphone */}
      <div className="w-full h-auto px-7 pb-5">
        <div
          className="grid grid-cols-3"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="col-span-3 flex items-center justify-center">
            <img src={img9} alt="" className="w-full  h-auto md:h-100" />
          </div>
        </div>
      </div>
      {/* Card HeadPhone */}
      <div className="w-full h-auto py-5">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <CardProductHeadphone />
        </div>
      </div>
      {/* Logo Table gaming */}
      <div
        className="w-full h-auto px-7 pb-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 flex items-center justify-center">
            <img src={img10} alt="" className="w-full  h-auto md:h-100" />
          </div>
        </div>
      </div>
      {/* Card Table gaming */}
      <div
        className="w-full h-auto py-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <CardProductTableGaming />
        </div>
      </div>
    </div>
  );
};

export default Product;
