"use client";
import NavBar from "../../components/NavBar";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Project from "../../components/Project";
import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Suspense } from "react";

import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const LazyUserData = React.lazy(() => import("./user/page")); // Assuming this is the name of your component file

export default function Main() {
  //spinner properties
  return (
    <div className="main  w-full">
      <NavBar />

      {/* <Home />
      <About />
      <Contact />
      <Project /> */}

      <div className=" mx-auto  flex justify-center">
        <div className=" mt-10">
          <h1 className=" my-10 font-bold uppercase">display users !</h1>
          {/* SkeletonTheme */}
          <SkeletonTheme
            // properties
            baseColor="#B4E3D3"
            highlightColor="#50BE97"
            width={300}
          >
            {/* Suspense */}
            <Suspense fallback={<Skeleton className="   my-2  " count={10} />}>
              <LazyUserData />
            </Suspense>
          </SkeletonTheme>
          <h1 className=" my-10 font-bold uppercase">2nd users !</h1>

          <Suspense
            fallback={
              // loading spinner
              <SyncLoader
                color="#EE941F" //color is optional
                loading // loading depend in the data inside !
                size={10} //size is optional
                aria-label="Loading Spinner"
                data-testid="loader"
                className=" text-center" //to center the spinner
              />
            }
          >
            {/* <ScaleLoader
               color="#272822"
               loading
                margin={3}
                radius={99}
              speedMultiplier={1}
               width={10}
                 className=" text-center" //to center the spinner
              />
           }
         > */}
            <LazyUserData />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
