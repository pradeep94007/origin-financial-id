import { toast } from "react-toastify";
import { customRevalidateTag } from "./revalidateTag";

type updateDataProps = {
  section: string;
  updatedData: any;
};

export default async function updateData({
  section,
  updatedData,
}: updateDataProps) {
  try {
    const response = await fetch(`/api/${section}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(
        data.error ? data.error : `Error updating Field for ${section}`
      );
    toast.success("Updated Successfully");
    customRevalidateTag(section);
  } catch (error: any) {
    console.log(error);
    toast.error(error.message);
  }
}
