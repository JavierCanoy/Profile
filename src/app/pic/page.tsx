import React from "react";
import { getdata } from "../libs/getData";

export default async function GetPic() {
  const data: any = await getdata(
    "https://jsonplaceholder.typicode.com/photos/2"
  );

  return (
    <div>
      <div>
        <p>{data.title}</p>
      </div>
    </div>
  );
}
