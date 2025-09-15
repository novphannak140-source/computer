import ABA from "../assets/logo product/aba.jpg";
import WIN from "../assets/logo product/Wing Bank.jpg";
import VISA from "../assets/logo product/Vasa.jpg";
import CARD from "../assets/logo product/Mastercard.jpg";
("use client");
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos";

const NavlocalContect = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <>
      <div className="w-full h-auto px-6 lg:py-8  py-4 md:py-10  text-white bg-[radial-gradient(circle,#3C2A21,gray,black,#3C2A21,black,black)] ">
        <div className="grid grid-cols-3">
          <div
            data-aos="fade-up"
            className="col-span-1 flex flex-col text-[8px] md:text-[15px] lg:text-[17px] font-bold  font-serif "
          >
            <div className="flex flex-col justify-center items-center">
              <h1 className="pt-3 text-[10px] md:text-[20px] lg:text-[25px] flex justify-center items-center  ">
                Contact Us
              </h1>
              <div className="pt-2">
                <div className="flex    md:py-1 lg:py-1 py-2    ">
                  <div className="flex  pr-3 justify-center items-center text-[15px]">
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <h1> Phannak899@gamil.com</h1>
                </div>
                <div className="flex md:py-1 lg:py-1 py-2 ">
                  <div className=" flex justify-center items-center pr-3 text-[14px]">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <h1 className="">(+885) 15 203 6836</h1>
                </div>
                <div className="flex md:py-1 lg:py-1 py-2 ">
                  <div className="flex justify-center items-center  pr-3 text-[15px]">
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  <h1>
                    N0 112 St.205 Sangkat Veal Vong, <br /> Khan 7Makara ( Phsar
                    Depo 1 ) Phnom Penh
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-span-1 flex justify-center items-center "
          >
            <div className="flex flex-col justify-center items-center text-[8px] md:text-[15px] lg:text-[17px] font-bold  font-serif ">
              <h1 className="pt-3 text-[10px] md:text-[20px] lg:text-[25px]   ">
                Quick Link
              </h1>
              <div className="flex justify-center pt-2 flex-col  ">
                <div className=" py-1 flex  items-center">
                  <Link to="laptop">Laptop</Link>
                </div>
                <div className=" py-1 flex  items-center">
                  <Link to="monitor" className="">
                    Monitor
                  </Link>
                </div>
                <div className=" py-1 flex  items-center">
                  <Link to="pc">Desktop</Link>
                </div>
                <div className=" py-1 flex  items-center">
                  <Link to="headphone">HeadPhoe</Link>
                </div>
                <div className=" py-1 flex  items-center">
                  <Link to="teble">Table gaming</Link>
                </div>
                <div className=" py-1 flex items-center">
                  <Link to="monitorstand">Monitor Stand</Link>
                </div>
                <div className=" py-1 flex  items-center">
                  <Link to="rtx">RTX</Link>
                </div>
                <div className=" py-1 flex  items-center">
                  <Link to="keyborad">Keyborad</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-span-1 flex flex-col  items-center  "
          >
            <div className="flex flex-col justify-center items-center text-[8px] md:text-[15px] lg:text-[17px] font-bold  font-serif ">
              <h1 className="pt-3 text-[10px] md:text-[20px] lg:text-[25px] ">
                Conditions Apply
              </h1>
              <div className="flex justify-center flex-col pt-2  ">
                <div className=" py-1 flex  items-center">
                  <h1>Terms & Conditions</h1>
                </div>
                <div className=" py-1 flex  items-center">
                  <h1 className="">Privacy Policy</h1>
                </div>
                <div className=" py-1 flex  items-center">
                  <h1>About us</h1>
                </div>
                <div className=" py-1 flex  items-center">
                  <h1>Help</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-3 bg-gray-800 flex justify-center items-center  ">
        <div className="grid grid-cols-2 md:grid:col-2 lg:grid-cols-2 md:py-2 justify-center items-center gap-5">
          <div className="col-span-1 flex justify-center items-center w-full h-auto ">
            <div className="text-lg md:text-2xl lg:text-2xl md:py-2 md:px-2 lg:px-2  sm:px-1 sm:py-1  lg:py2 px-1 py-1 rounded-3xl bg-blue-600 mr-3 flex justify-center items-center  hover:bg-blue-200 transition-all duration-500 hover:scale-110">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl md:py-2 md:px-2 lg:px-2 lg:py2 sm:px-1 sm:py-1 rounded-3xl bg-white mr-3  flex justify-center items-cente hover:bg-blue-200 transition-all duration-500 hover:scale-110">
              <ion-icon name="logo-tiktok"></ion-icon>
            </div>
            <div className="text-lg md:text-2xl lg:text-2xl md:py-2 md:px-2 lg:px-2 sm:px-1 sm:py-1  lg:py2 px-1 py-1 rounded-3xl bg-red-700 mr-3  flex justify-center items-cente hover:bg-blue-200 transition-all duration-500 hover:scale-110">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className="text-lg md:text-2xl lg:text-2xl md:py-2 md:px-2 lg:px-2 sm:px-1 sm:py-1  lg:py2 px-1 py-1 rounded-3xl bg-emerald-600 mr-3  flex justify-center items-cente hover:bg-blue-200 transition-all duration-500 hover:scale-110">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
          </div>

          <div className="col-span-1 w-full h-auto ">
            <div className="flex justify-center items-center gap-2 md:gap-5  md:w-60 lg:w-90 w-40">
              <div className="w-[75px]  ">
                <img
                  src={ABA}
                  alt="ABA"
                  className=" hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-gray-400 "
                />
              </div>
              <div className="w-[75px]">
                <img
                  src={WIN}
                  className="  hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-gray-400 "
                  alt="WIN BANK"
                />
              </div>
              <div className="w-[75px] ">
                <img
                  src={VISA}
                  className=" hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-gray-400 "
                  alt="VISA CARD"
                />
              </div>
              <div className="w-[75px]">
                <img
                  src={CARD}
                  alt="MASTER CARD "
                  className=" hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-gray-400 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-auto bg-white py-2  flex justify-center items-center text-black font-bold font-serif hover:text-white  transition-all duration-500 hover:bg-black ">
        <div className=" md:text-[20px]  text-[10px]  hover:scale-105 transition-all duration-500">
          WEB SITE SELL COMPUTERS
        </div>
      </div>
    </>
  );
};

export default NavlocalContect;
