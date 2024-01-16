"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full   bg-[#012C40] fixed  z-10">
        <div className="justify-between grid grid-cols-12 grid-flow-row px-4   mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="logo col-span-12   ">
            <div className="flex items-center justify-between   md:py-5 ">
              {/* LOGO */}
              <h1 className=" my-2 md:my-0 text-slate-50 font-extrabold  shadow-lg  rounded-xl py-2 border-1 shadow-green-700 px-10">
                JAV<span className=" text-green-500">i</span>ER
              </h1>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none text-green-500 focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
              </div>
            </div>
          </div>
          <div className="nav col-span-12 ">
            <div
              className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className=" grid grid-flow-row md:h-auto  place-items-center    md:flex ">
                <li className="pb-6 md:pb-0  text-xl  text-white py-2 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 px-10    border-green-700  md:hover:text-green-500 md:hover:bg-transparent">
                  <Link
                    href="/#home"
                    className=" hover:border-b-2 pb-2 "
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>
                <li className="pb-6  md:pb-0 text-xl text-white py-2 md:py-0  md:px-6 text-center  border-b-2 md:border-b-0  px-10    border-green-700   md:hover:text-green-500 md:hover:bg-transparent">
                  <Link
                    href="../components/about"
                    className=" hover:border-b-2 pb-2 "
                    onClick={() => setNavbar(!navbar)}
                  >
                    About
                  </Link>
                </li>
                <li className="pb-6  md:pb-0 text-xl text-white py-2 md:py-0  md:px-6 text-center  border-b-2 md:border-b-0  px-10    border-green-700   md:hover:text-green-500 md:hover:bg-transparent">
                  <Link
                    href="/#projects"
                    className=" hover:border-b-2 pb-2 "
                    onClick={() => setNavbar(!navbar)}
                  >
                    Project
                  </Link>
                </li>

                <li>
                  <button className="relative my-10 md:my-0 rounded-md h-[50px] w-40 overflow-hidden border border-green-500 bg-white text-green-700 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-green-700 hover:before:w-2/4 hover:before:bg-green-700 hover:after:w-2/4 hover:after:bg-green-700">
                    <Link
                      href="../components/hire-me"
                      className="relative z-10 font-semibold"
                    >
                      Hire Me
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
