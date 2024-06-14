"use client";

import { customRevalidateTag } from "@/lib/revalidateTag";
import { useState } from "react";
import { toast } from "react-toastify";

type DeleteDataButtonProps = {
  id: string;
  section: string;
};

export default function DeleteDataButton({
  id,
  section,
}: DeleteDataButtonProps) {
  const [loading, setLoading] = useState(false);

  const deleteDataHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/${section}`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
      });
      if (response.status !== 200)
        throw new Error(`Error deleting ${section} card!`);
      toast.success(`${section} deleted successfully`);
      customRevalidateTag(section);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="mt-5">
      <button
        disabled={loading}
        className="bg-[#D31145] disabled:bg-[#ca466a] py-1 px-5 text-white capitalize rounded-md"
        onClick={deleteDataHandler}
      >
        Delete
      </button>
    </div>
  );
}
