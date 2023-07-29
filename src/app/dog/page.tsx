import React from "react";
import { getdata4 } from "../libs/getData4";
import Image from "next/image";

export default async function Dogs() {
  const images: any = await getdata4(`https://dog.ceo/api/breeds/image/random`);
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
