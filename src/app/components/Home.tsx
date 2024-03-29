import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div id="home">
      <NavBar />
      <div className=" h-auto md:py-24 w-full   ">
        <div className=" grid grid-cols-12 pb-10 lg:pb-0 my-auto lg:grid    lg:pt-32">
          <div className=" flex justify-center col-span-12 lg:col-span-6   pt-20 lg:pt-0 ">
            <div>
              <Image
                alt="Javier"
                className=" my-10  rounded-lg shadow-lg   "
                src="/images/avatar/me.jpg"
                width={250}
                height={250}
              />
              <div className=" m-5">
                <a
                  href="https://www.facebook.com/javier.canoy.9"
                  type="button"
                  className="m-1 h-9 w-9 mx-4  shadow-lg   py-2 border-1 shadow-blue-500 rounded-full border-2 uppercase leading-normal   focus:outline-none focus:ring-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-white bg-blue-500 hover:text-blue-500 hover:bg-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-full w-4  "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                <a
                  href="https://mail.google.com/"
                  type="button"
                  className="m-1 h-9 w-9 mx-4  shadow-lg   py-2 border-1 shadow-red-500  rounded-full border-2  uppercase leading-normal border-red-500 text-[#012C40]transition  focus:outline-none focus:ring-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-white bg-red-500 hover:text-red-500 hover:bg-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-full w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/JavierBernadas"
                  type="button"
                  className="m-1 h-9 w-9 mx-4 shadow-lg   py-2 border-1 shadow-black   rounded-full border-2  uppercase leading-normal border-black   focus:outline-none focus:ring-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-white bg-black hover:text-black hover:bg-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-full w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="
            flex justify-center col-span-12   md:max-w-md md:mx-auto  lg:col-span-3  
            "
          >
            <div className=" lg:flex lg:h-full ">
              <div className="lg:my-auto  ">
                <div className=" flex  justify-center lg:justify-start text-center ">
                  <div className=" lg:w-96">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Hi im Javier B. Canoy",
                        2500, // wait 1s before replacing "Mice" with "Hamsters"
                        "A Front End Developer",
                        2500,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{
                        justifyContent: "center",
                        fontSize: "2em",
                        display: "inline-block",
                        color: "green",
                        fontWeight: "bold",
                      }}
                      repeat={Infinity}
                    />
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start ">
                  <p className="  border-2  p-2 rounded-md border-green-600 ">
                    {/* <p className=" border-b-2 w-36  text-center px-2 font-normal border-green-500 shadow-md p-1  rounded-md shadow-green-500 pb-2 "> */}
                    From Philippines
                  </p>
                </div>
                <p className=" text-center lg:indent-8  text-xl  leading-relaxed mx-2 md:mx-0 mt-5  py-5">
                  I create intuitive and visually appealing user interfaces
                  using
                  <span className=" text-green-500 font-bold"> React </span>
                  and
                  <span className=" text-green-500 font-bold">
                    {" "}
                    Tailwindcss
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
