"use client";
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="about">
      <div className=" lg:h-screen  w-full bg-green-700 ">
        <div
          className=" grid grid-cols-12 lg:grid-rows-2 mx-4 py-20  "
          data-aos="slide-right"
        >
          <div className=" col-span-12 lg:col-span-6  flex justify-center my-auto   ">
            <Avatar
              alt="Javier"
              className=" my-10 border-2 border-white "
              src="/images/avatar/javier.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <div className=" col-span-12 md:max-w-md md:mx-auto  lg:col-span-6 border-2  rounded-lg   ">
            <div className=" mx-5">
              <h2 className=" text-center text-[#012C40]  font-bold py-4 border-b-2 mx-20">
                About Me
              </h2>
              <p className="  text-center leading-relaxed  py-5 text-[#012C40] ">
                Hi, my name is Habib Anwash. I'm a skilled web developer with
                expertise in front-end development, as well as back-end
                programming and database management. I have a good understanding
                in React, Node JS and also have been practicing myself with it
                by building projects. With a commitment to delivering
                exceptional results and a collaborative approach, I am dedicated
                to creating unique and user-friendly websites that meet the
                specific needs of my clients.
              </p>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className=" ">
          <h1 className=" text-center">Skills</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
