import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Home() {
  return (
    <div id="home">
      <div className="  lg:h-screen w-full    ">
        <div className=" grid grid-cols-12 pb-10  my-auto lg:grid lg:grid-rows-2   w-full lg:pt-40">
          <div className=" flex justify-center col-span-12 lg:col-span-6   pt-20 lg:pt-0 ">
            <Avatar
              alt="Javier"
              className=" my-10 border-2 border-green-700 "
              src="/images/avatar/me.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <div className=" px-5 col-span-12 border-2 border-green-600 rounded-lg  mx-4 md:max-w-md md:mx-auto  lg:col-span-6  ">
            <div className=" lg:flex lg:h-full ">
              <div className="lg:my-auto  ">
                <h1 className=" text-center py-2 font-bold mx-6 border-b-2 border-green-800 ">
                  Javier B. Canoy
                </h1>
                <h2 className=" text-center  font-bold">Front end developer</h2>
                <p className="  text-center leading-relaxed  py-5">
                  As a skilled front-end developer, I am dedicated to turning
                  ideas into innovative web applications. Explore my latest
                  projects and articles, showcasing my expertise in React.js and
                  web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
