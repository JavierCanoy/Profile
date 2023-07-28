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
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LazyUserData = React.lazy(() => import("./user/page")); // Assuming this is the name of your component file

export default function Main() {
  return (
    <div className="main  w-full">
      <NavBar />

      <Home />
      <About />
      <Contact />
      <Project />

      <div className=" mx-auto  flex justify-center">
        <div className=" mt-10">
          <h1 className=" my-10 font-bold uppercase">display users !</h1>
          <SkeletonTheme
            baseColor="#B4E3D3"
            highlightColor="#50BE97"
            width={300}
          >
            <Suspense fallback={<Skeleton className="   my-2  " count={10} />}>
              <LazyUserData />
            </Suspense>
          </SkeletonTheme>
          <h1 className=" my-10 font-bold uppercase">2nd users !</h1>

          <Suspense
            fallback={
              <ClipLoader
                color="#B4E3D3"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
          >
            <LazyUserData />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
