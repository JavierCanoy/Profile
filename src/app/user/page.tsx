import React from "react";
import { getdata } from "../libs/getData";

export default async function Page() {
  const data: any = await getdata(`https://jsonplaceholder.typicode.com/users`);

  return (
    <div id="data" className=" w-full ">
      {data.map((data: any) => {
        return (
          <div key={data.id}>
            <p className=" text-center my-2 ">
              {data.username} {data.email}
            </p>
          </div>
        );
      })}
    </div>
  );
}
