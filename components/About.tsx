"use client";
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";

export default function About() {
  return (
    <div id="about">
      <div className=" h-auto md:py-24 w-full  bg-[#D1D5DB]  ">
        <div className=" grid grid-cols-12 pb-10 lg:pb-0 my-auto lg:grid    lg:pt-40">
          <div className=" flex  justify-center col-span-12 lg:col-span-6   pt-20 lg:pt-0 ">
            <Avatar
              alt="Javier"
              className=" my-10 border-4 border-[#012C40] "
              src="/images/avatar/javier.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <div className=" px-5 p-10 col-span-12 border-4 border-[#012C40] rounded-lg  mx-4 md:max-w-md md:mx-auto  lg:col-span-6  ">
            <div className=" lg:flex lg:h-full ">
              <div className="lg:my-auto  ">
                <h1 className=" text-center py-2 text-[#012C40] font-bold mx-6 border-b-4 border-[#012C40] ">
                  About Me
                </h1>
                <h2 className=" text-center text-[#012C40]  font-bold">
                  Front end developer
                </h2>
                <p className="  text-center leading-relaxed  py-5  text-[#012C40] ">
      
                  Hello, my name is Javier B. Canoy and Im from the Philippines. 
                   I enjoyed the creative process of designing graphics, 
                   but ultimately decided to pursue a career in technology.
                                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
