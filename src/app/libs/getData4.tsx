export async function getdata4(endPoint: any, cache: any) {
  try {
    const res = await fetch(endPoint, cache);
    const data = res.json();
    if (!res.ok) {
      throw new Error(" failed to get data");
    }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(data);
    //     return resolve;
    //   }, 5000);
    // });
    return data;
  } catch (error) {
    console.error(error);
  }
}
