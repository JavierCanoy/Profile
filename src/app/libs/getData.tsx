export async function getdata(endPoint: any) {
  try {
    const res = await fetch(endPoint);
    const data = res.json();
    if (!res.ok) {
      throw new Error("  hahahahahahahahaha");
    }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(data);
    //     return resolve;
    //   }, 3000);
    return data;
    // });
  } catch (error) {
    console.error(error);
    console;
  }
}
