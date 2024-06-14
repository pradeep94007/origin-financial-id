export default async function getData(endpoint: string) {
  const apitag = endpoint.split("/api/")[1];
  try {
    const res = await fetch(process.env.URL + endpoint, {
      next: {
        revalidate: 0,
        tags: [`${apitag}`],
      },
    });
    if (!res.ok) throw new Error(`Error while fetchig data at : ${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
