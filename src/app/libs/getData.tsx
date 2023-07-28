export async function getdata(endPoint: any) {
  try {
    const res = await fetch(endPoint);
    const data = res.json();
    if (!res.ok) {
      throw new Error(" failed to get data");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  } catch (error) {
    console.error(error);
  }
}
