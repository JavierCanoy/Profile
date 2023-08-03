// export async function getdata4(endPoint: any, cacheche: any) {
//   try {
//     const res = await fetch(endPoint, cacheche);
//     const data = res.json();
//     if (!res.ok) {
//       throw new Error(" failed to get data");
//     }
//     // return new Promise((resolve) => {
//     //   setTimeout(() => {
//     //     resolve(data);
//     //     return resolve;
//     //   }, 5000);
//     // });
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function getdata4() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {
      cache: `no-cache`,
    });
    if (!res.ok) {
      throw new Error(" failed to get data noy ! ");
    }
    const data = res.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        return resolve;
      }, 2000);
    });
    // return data;
  } catch (error) {
    console.log(error);
  }
}
