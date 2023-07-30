import React from "react";
import { getdata4 } from "../libs/getData4";
import Image from "next/image";

// async function get() {
//   try {
//     const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {
//       cache: `no-cache`,
//     });
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function Dogs() {
  // const images: any = await getdata4(
  //   `https://dog.ceo/api/breeds/image/random`,
  //   { cache: `no-cache` }
  // );
  const images: any = await getdata4();
  console.log(images, " javier");
  return (
    <div>
      <div>
        <Image
          src={images.message}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
