// "use client";
// import NavBar from "../../components/NavBar";
// import Home from "../../components/Home";
// import About from "../../components/About";
// import Contact from "../../components/Contact";
// import Project from "../../components/Project";
// import React from "react";
// import Dogs from "./dog/page";
// import User from "./user/page";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { SkeletonTheme } from "react-loading-skeleton";
// import { Suspense } from "react";
// import BounceLoader from "react-spinners/BounceLoader";
// import SyncLoader from "react-spinners/SyncLoader";
// import { useErrorBoundary } from "react-error-boundary";
// import { ErrorBoundary } from "react-error-boundary";

// export default function Main() {
//   return (
//     <div className="main  w-full">
//       {/* <NavBar /> */}
//       <div className="  ">
//         <div className=" mt-10 grid grid-cols-2 justify-items-center  ">
//           <div className=" image-using-skeleton-and-snipper">
//             <h1 className=" my-10 font-bold uppercase pt-20">
//               display image using skeleton !
//             </h1>
//             {/* SkeletonTheme */}
//             <ErrorBoundary fallback={<p> faiild ! </p>}>
//               <SkeletonTheme
//                 baseColor="#0C6BA3"
//                 highlightColor="#012C40"
//                 width={300}
//               >
//                 <Suspense
//                   fallback={<Skeleton className="   my-2  " count={5} />}
//                 >
//                   <Dogs />
//                 </Suspense>
//               </SkeletonTheme>
//             </ErrorBoundary>
//             <h1 className=" my-10 font-bold uppercase pt-20">
//               display image using pinner ! !
//             </h1>
//             {/* SkeletonTheme */}
//             <SkeletonTheme
//               // properties
//               baseColor="#0C6BA3"
//               highlightColor="#012C40"
//               width={300}
//             >
//               {/* Suspense */}
//               <Suspense
//                 fallback={
//                   <SyncLoader color="#36d7b7" loading margin={5} size={15} />
//                 }
//               >
//                 <Dogs />
//               </Suspense>
//             </SkeletonTheme>
//           </div>
//           <div className="mt-20 ">
//             <h1 className=" my-10 font-bold uppercase">
//               text display using skeleton !
//             </h1>
//             {/* SkeletonTheme */}
//             <SkeletonTheme
//               // properties
//               baseColor="#0C6BA3"
//               highlightColor="#012C40"
//               width={300}
//             >
//               {/* Suspense */}
//               <Suspense
//                 fallback={<Skeleton className="   my-2  " count={10} />}
//               >
//                 <User />

//                 {/* <LazyUserData /> */}
//               </Suspense>
//             </SkeletonTheme>
//             <h1 className=" my-10 font-bold uppercase">
//               text display using spinner
//             </h1>
//             <div className=" flex justify-center">
//               <Suspense
//                 fallback={
//                   // loading spinner
//                   <h2> loading ! </h2>
//                 }
//               >
//                 <User />
//               </Suspense>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
