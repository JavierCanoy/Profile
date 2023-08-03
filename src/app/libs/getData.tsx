export async function getdata(endPoint: any) {
  try {
    const res = await fetch(endPoint);
    if (!res.ok) {
      throw new Error("  hahahahahahahahaha");
    }
    const data = res.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        return resolve;
      }, 5000);
    });
    // return data;
    // });
  } catch (error) {
    console.error(error);
    console;
  }
}
