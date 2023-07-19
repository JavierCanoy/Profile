"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  bg-green-600 fixed  z-10">
        <div className="justify-between py-5 grid grid-cols-12 grid-flow-row px-4   mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="logo col-span-12   ">
            <div className="flex items-center justify-between   md:py-5 ">
              {/* LOGO */}
              <Link href="/">
                <h1 className=" font-bold">JAViER</h1>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                <li className="pb-6 md:pb-0  text-xl  text-white py-2 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 px-10   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6  md:pb-0 text-xl text-white py-2 md:py-0  md:px-6 text-center  border-b-2 md:border-b-0  px-10   hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Abouts
                  </Link>
                </li>
                <li className="pb-6 md:pb-0 text-xl text-white py-2 md:py-0 md:px-6 text-center  border-b-2 md:border-b-0 px-10  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li
                  className="my-10 py-2 md:my-0    text-xl text-white md:pt-2 md:pb-2  md:px-6  text-center  border-2    px-10 hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent
                   rounded-full
                "
                >
                  <Link
                    href="#projects"
                    className="   "
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>
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
