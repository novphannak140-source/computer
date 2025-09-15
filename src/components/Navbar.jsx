"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/logo shop.png";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import img2 from "../assets/logo product/logo google.png";

const Navbar = () => {
  const [isclose, setClose] = useState();
  const [issopping, setSopping] = useState();
  const [islogin, setLogin] = useState();
  useEffect(() => {
    AOS.init({});
  }, []);
  const [isSearch, setSearch] = useState();
  const [inDown, setDown] = useState(false);
  const [inUp, setUp] = useState(false);
  const [inOpen, setOpen] = useState();
  const drobdowlaptop = [
    { id: 1, name: "MONITOR", Link: "/monitor" },
    { id: 2, name: "LAPTOP", Link: "/laptop" },
  ];
  const drobdow = [
    { id: 1, name: "HEADPHONE", Link: "/headphone" },
    { id: 2, name: "KEYBORAD", Link: "/keyborad" },
    { id: 3, name: "MONITOR STAND", Link: "/monitorstand" },
    { id: 4, name: "TABLE", Link: "/teble" },
    { id: 5, name: "RTX", Link: "/rtx" },
    { id: 6, name: "MOUSE", Link: "/mouse" },
    { id: 7, name: "PC", Link: "/pc" },
  ];
  const NavLink = [
    { id: 1, name: "Home", Link: "/" },
    { id: 2, name: "Product Sell", Link: "/product" },
  ];
  return (
    <>
      <div
        className={` font-bold font-serif
    sticky top-0 z-60 
    transition-all duration-500 ease-in-out
    ${
      isSearch
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-10 pointer-events-none"
    }
  `}
      >
        <div className="absolute top-0 z-60 w-full h-auto flex justify-center items-center flex-col bg-white shadow-md">
          <div className="flex justify-center items-center py-4 gap-4">
            <input
              type="text"
              className="lg:w-300 md:w-150 w-70 py-2 px-4  border-gray-300 rounded-lg outline-0"
              placeholder="What are you searching for ?"
            />
            <div className="text-2xl">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div
              onClick={() => setSearch(false)}
              className="text-3xl cursor-pointer hover:text-red-500 transition"
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <hr className="lg:w-316 md:w-170 w-90  lg:pt-4 py-1" />
        </div>
      </div>
      <div className=" sticky top-0 z-50 bg-white py-1 border-2   ">
        <div className="grid grid-cols-3  font-serif ">
          <div className="col-span-1 flex justify-center items-center ">
            <h1 className="text-[6px] md:text-[15px] lg:text-[15px]  ">
              {" "}
              Web Site Sell Computers
            </h1>
          </div>
          <div className="col-span-1 flex justify-center items-center ">
            <h1 className="text-[6px] md:text-[15px] lg:text-[15px]">
              Contect : Phannak899@gamil.com
            </h1>
          </div>
          <div className="col-span-1 flex justify-center items-center ">
            <h1 className="text-[6px] md:text-[15px] lg:text-[15px]">
              Facebook page : Asus Computers
            </h1>
          </div>
        </div>
      </div>

      <div className="sticky top-5 md:top-8 z-50">
        <nav className=" bg-gray-900 py-4 px-5 shadow-xl overflow-hidden border-  ">
          <div className="flex items-center justify-between  text-white overflow-hidden  ">
            <div className="w-auto ml-3 overflow-hidden h-13 bg-white rounded-full  flex items-center justify-center">
              <Link to="/" className="">
                <img src={img1} alt="" className=" flex  w-17" />
              </Link>
            </div>
            {/* Navlink */}
            <div className="hidden lg:block ">
              <ul className="flex  items-center justify-center gap-10 bg-white text-black sm:px-8 lg:px-25  py-2 shadow-md rounded-full  ">
                {NavLink.map((items) => (
                  <li
                    key={items.id}
                    className="text-[19px]  transition-all duration-300 hover:text-red-500 hover:scale-110"
                  >
                    <Link to={items.Link}>{items.name}</Link>
                  </li>
                ))}
                <li className=" group">
                  <Link className="text-[19px] transition-all duration-300 hover:text-red-500 hover:scale-110">
                    Shopping
                  </Link>

                  {/* small yellow diamond pointer */}

                  <div className="w-4 h-4 absolute left-1/2   -translate-x-1/2 top-15 bg-neutral-800 rotate-45 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
                  {/* dropdown */}
                  <div className="absolute z-[10] left-1/2  -translate-x-1/2 top-15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-2">
                    <div className="bg-neutral-800 w-52 flex rounded-2xl flex-col items-center justify-center py-4 shadow-lg">
                      {drobdowlaptop.map((item) => (
                        <Link
                          key={item.id}
                          to={item.Link}
                          className="w-full text-center py-2 text-white hover:text-black duration-500 hover:bg-white rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className=" group  ">
                  <Link className="text-[19px] transition-all duration-300   hover:text-red-500 hover:scale-110">
                    Accessories
                  </Link>

                  {/* small yellow diamond pointer */}

                  <div className="w-4 h-4 absolute  xl:left-[57%]  -translate-x-1/2 top-15 bg-neutral-800  rotate-45 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
                  {/* dropdown */}
                  <div className="absolute z-[10]  xl:left-[57%]         -translate-x-1/2 top-15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-2">
                    <div className="bg-neutral-800  w-52 flex rounded-2xl flex-col items-center justify-center py-4 shadow-lg">
                      {drobdow.map((item) => (
                        <Link
                          key={item.id}
                          to={item.Link}
                          className="w-full text-center py-2 hover:bg-white text-white hover:text-black duration-500 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" flex items-center justify-center gap-5 ">
              {/* search  */}
              <div className="hidden sm:block">
                <div className="flex gap-2 justify-center items-center relative">
                  <div
                    onClick={() => setSearch(!isSearch)}
                    className="text-2xl cursor-pointer transition-all duration-300 hover:text-red-500 hover:scale-110"
                  >
                    <ion-icon name="search-outline"></ion-icon>
                  </div>
                </div>
              </div>
              {/* search moblie phone */}
              <div className="block sm:hidden   ">
                <div className=" group flex gap-2  justify-center py-2  items-center ">
                  <div
                    className="text-2xl   "
                    onClick={() => setSearch(!isSearch)}
                  >
                    <ion-icon name="search-outline"></ion-icon>
                  </div>
                </div>
              </div>
              <div className="flex mx-2 gap-3.5">
                <div className="text-2xl transition-all  ">
                  <div className="group  ">
                    <div
                      onClick={() => setLogin(!islogin)}
                      className="hover:text-red-300  hover:scale-110 transition-all duration-500"
                    >
                      <ion-icon
                        name={islogin ? "close" : "person-outline"}
                      ></ion-icon>
                    </div>
                    <div
                      className={`${
                        islogin
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      } w-4 absolute h-4 rotate-45 md:top-13  transition-all duration-500  top-18  bg-white`}
                    ></div>
                    <div
                      className={` ${
                        islogin
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      } w-full  absolute md:top-15 top-20 h-auto sm:w-[12%] md:w-[45%] lg:w-[23%] md:h-[45vh] lg:h-[55vh] transition-all duration-500  overflow-hidden rounded-2xl shadow-lg md:right-10 right-0  bg-white    `}
                    >
                      <div className=" flex  flex-col justify-center items-center font-bold font-serif  h-[55vh] ">
                        <div className="w-20 ">
                          <img src={img1} alt="" />
                        </div>
                        <div className="text-sm ">
                          <h1 className="text-black my-3 text-[10px] ">
                            Welcome Back Plase enter your details.
                          </h1>
                        </div>
                        <div className="flex flex-col ">
                          <label className="text-[12px] text-black py-2">
                            Phone Number :
                          </label>
                          <input
                            className="w-68 text-[10px] px-3 rounded-lg py-1.5 text-black border-1 border-black"
                            type="text"
                            placeholder="Phone Number ........."
                          />
                        </div>
                        <div className="flex flex-col py-1">
                          <label className="text-[12px] text-black py-2">
                            Password :
                          </label>
                          <input
                            className="w-68 text-[10px] px-3 py-1.5 text-black border-1 rounded-lg border-black"
                            type="text"
                            placeholder="Password"
                          />
                          <h1 className="text-[12px] text-blue-700 py-1">
                            Forgot Password
                          </h1>
                        </div>
                        <button
                          type="button "
                          className="bg-blue-600 w-68 text-[15px] py-1.5 rounded-lg shadow-md"
                        >
                          Login
                        </button>
                        <div className="flex my-3 py-1  justify-center items-center w-68 border-1 shadow-md border-gray-500 rounded-lg">
                          <img src={img2} className="w-5 " alt="" />
                          <button
                            type="button"
                            className="text-[15px] text-black px-5"
                          >
                            Sign in with Google
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-2xl hidden   lg:block ">
                  <div className=" transition-all duration-300  hover:text-red-500 hover:scale-110">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="">
                    <div className="absolute top-5.5 right-15 text-[10px] bg-red-500 px-1 rounded-full ">
                      0
                    </div>
                  </div>
                </div>
                {/* button shopping laptop */}
                <div className="text-2xl hidden   md:block group">
                  <div
                    onClick={() => setSopping(!issopping)}
                    className=" transition-all duration-300 hover:text-red-500 hover:scale-110"
                  >
                    <ion-icon name="cart-outline"></ion-icon>
                  </div>
                  <div className=" flex justify-center items-center">
                    <div className="absolute top-5.5  right-17 lg:right-6 hidden  sm:block text-[10px]  bg-red-500 px-1  rounded-full ">
                      0
                    </div>
                    <div
                      className={`${
                        issopping
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      } absolute top-0  font-bold font-serif text-[18px] transition-al    right-0 duration-500 bg-white w-auto  h-screen text-black`}
                    >
                      <div className=" ">
                        <div className="flex w-full shadow-2xl  justify-between px-5 py-2">
                          <div
                            onClick={() => setSopping()}
                            className="text-[30px] hover:text-red-500 transition-all  duration-500 rounded-full "
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </div>
                          <div className="text-[30px] py-1 text-red-900">
                            <ion-icon name="heart-outline"></ion-icon>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 py-4 px-4">
                          <div className="w-30 ">
                            <img src={img1} alt="" />
                          </div>
                          <h1> Your bag is empty</h1>
                          <h1>
                            Check out our latest arrivals stay up-to-date with
                            latest styles
                          </h1>
                          <h1>Start shopping items</h1>
                          <Link
                            to="monitor"
                            className="flex justify-center items-center"
                          >
                            <button
                              onClick={() => setSopping(!issopping)}
                              type="button"
                              className="  rounded-2xl text-md  hover:text-white hover:bg-blue-600  transition-all duration-500 hover:scale-99 text-black border-2 border-red-300 px-55 py-2 shadow-lg "
                            >
                              BUY ITEM
                            </button>
                          </Link>
                          <Link
                            to="pc"
                            className="flex justify-center items-center"
                          >
                            <button
                              onClick={() => setSopping(!issopping)}
                              type="button"
                              className=" text-black border-2 hover:text-white hover:bg-red-500  hover:scale-99 transition-all duration-500 border-blue-700 rounded-2xl px-50 py-2 shadow-lg "
                            >
                              ACCESSORIES
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Moblie phone shopping */}

                {/* <div className="text-2xl block md:hidden  bg-amber-950 ">
                <div className=" transition-all duration-300 hover:text-red-500 hover:scale-110">
                  <ion-icon name="cart-outline"></ion-icon>
                </div>
                <div>
                  <div className="absolute top-5 right-12 text-[10px] bg-red-400 px-1 rounded-full ">
                    0
                  </div>
                </div>
              </div> */}
                <div
                  className="text-3xl  block lg:hidden"
                  onClick={() => setOpen(!inOpen)}
                >
                  <ion-icon name={inOpen ? "close" : "Menu"}></ion-icon>
                </div>
              </div>
            </div>
            {/* moblie phone */}

            <ul
              className={` ${inOpen ? "right-0" : "right-[100%]"}
            block lg:hidden absolute top-21 bg-[radial-gradient(circle,black,#1A120B)]  w-full h-auto transition-all duration-500 z-50`}
            >
              <div className="flex flex-col ">
                {NavLink.map((items) => (
                  <li
                    key={items.id}
                    className="text-[19px] py-6 pl-6 hover:bg-white transition-all duration-300 hover:text-black/50   hover:scale-100 shadow-md"
                  >
                    <Link
                      to={items.Link}
                      onClick={() => setOpen()}
                      className=""
                    >
                      {items.name}{" "}
                    </Link>
                  </li>
                ))}
                <li className="relative text-[19px] py-6 pl-6 shadow-md ">
                  {/* Main Button */}
                  <button
                    onClick={() => setDown(!inDown)} // ✅ use setDown here
                    className="flex  items-center justify-between w-full pr-6"
                  >
                    <span>Shopping</span>
                    <span className="ml-2">{inDown ? "▲" : "▼"}</span>
                  </button>

                  {/* Dropdown */}
                  {inDown && (
                    <div
                      className="mt-3  rounded-md w-100 z-50"
                      onClick={() => setDown(false)}
                    >
                      {drobdowlaptop.map((item) => (
                        <Link
                          key={item.id}
                          to={item.Link}
                          onClick={() => setOpen()}
                          // closes dropdown after click
                          className="block px-1 py-5 text-white transition-all duration-500 hover:text-black hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                {/* dropdown Accessories */}
                <li className="relative text-[19px] py-6 pl-6 shadow-md ">
                  {/* Main Button */}
                  <button
                    onClick={() => setUp(!inUp)} // ✅ use setDown here
                    className="flex  items-center justify-between w-full pr-6"
                  >
                    <span>Accessories </span>
                    <span className="ml-2">{inUp ? "▲" : "▼"}</span>
                  </button>

                  {/* Dropdown */}
                  {inUp && (
                    <div
                      className="mt-3  rounded-md w-100 z-50"
                      onClick={() => setUp(false)}
                    >
                      {drobdow.map((item) => (
                        <Link
                          key={item.id}
                          to={item.Link}
                          onClick={() => setOpen()}
                          // closes dropdown after click
                          className="block px-1 py-5 text-white transition-all duration-500 hover:text-black hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
