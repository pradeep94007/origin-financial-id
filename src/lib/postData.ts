import { toast } from "react-toastify";
import { customRevalidateTag } from "./revalidateTag";

type postDataType = {
  data: any;
  section: string;
};

export const postData = async ({ data, section }: postDataType) => {
  try {
    const res = await fetch(`/api/${section}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (!res.ok)
      throw new Error(
        response.error ? response.error : `Error adding ${section}`
      );
    toast.success(`Data for ${section} added!`);
    customRevalidateTag(section);
  } catch (error: any) {
    console.log(error);
    toast.error(error.message);
  }
};
