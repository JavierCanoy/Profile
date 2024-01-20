"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import NavBar from "../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";

export default function About() {
  return (
    <div id="home">
      <NavBar />
      <div className=" h-auto md:py-40 w-full   ">
        <div className=" grid grid-cols-12 pb-10 lg:pb-0 my-auto lg:grid    lg:pt-32">
          <div className=" flex justify-center col-span-12 lg:col-span-6   pt-20 lg:pt-0 ">
            <div className=" border-green-600 border-2 rounded-full ">
              <Image
                alt="Javier"
                className=" p-2 rounded-full shadow-lg   "
                src="/images/avatar/javier.jpg"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div
            className="
            flex justify-center col-span-12 my-5 md:my-0   md:max-w-md md:mx-auto  lg:col-span-3  
            "
          >
            <div className=" lg:flex lg:h-full ">
              <div className="lg:my-auto  ">
                <div className="flex justify-center lg:justify-start ">
                  <p className=" flex content-center border-2  p-2 rounded-md border-green-300 ">
                    <span className=" text-lg font-bold text-green-500">
                      About Me
                    </span>
                  </p>
                  <div className="flex items-center px-4">
                    <FontAwesomeIcon
                      className=" text-green-600"
                      icon={faSmile}
                      size="2x"
                    />
                  </div>
                </div>
                <p className="  text-center text-lg lg:indent-8 lg:text-left  leading-relaxed mx-2 md:mx-0 mt-5  py-5">
                  As a fledgling front-end developer, my commitment to learning
                  is unwavering, and my enthusiasm for growth knows no bounds.
                  Coupled with a positive and adaptable character, I eagerly
                  embrace challenges as opportunities to expand my skill set and
                  contribute meaningfully to the ever-evolving landscape of web
                  development using
                  <span className=" text-green-500 font-bold"> React</span>,
                  <span className=" text-green-500 font-bold">HTML</span> ,
                  <span className=" text-green-500 font-bold"> CSS</span>,
                  <span className=" text-green-500 font-bold">
                    Tailwind CSS
                  </span>
                  , and
                  <span className=" text-green-500 font-bold"> Node.js</span> .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
