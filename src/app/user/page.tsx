import React from "react";
import { getdata } from "../libs/getData";

export default async function User() {
  const fetch: any = await getdata(
    `https://jsonplaceholder.typicode.com/users`
  );

  return (
    <div id="data" className=" w-full ">
      {fetch.map((data: any) => {
        return (
          <div key={data.id}>
            <p className="  ">
              {data.username} {data.email}
            </p>
          </div>
        );
      })}
    </div>
  );
}
