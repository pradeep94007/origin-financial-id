"use client";

import { customRevalidateTag } from "@/lib/revalidateTag";
import updateData from "@/lib/updateData";
import { useState } from "react";

type AdminSingleInputProps = {
  section?: string;
  data?: any;
  setData?: any;
  value?: string;
  title?: string;
  forField: string;
};

export default function AdminSingleInput({
  section,
  data,
  value,
  forField,
  setData,
  title,
}: AdminSingleInputProps) {
  const [updatedField, setUpdatedField] = useState(value);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    if (!section) return;
    const updatedData = {
      ...data,
      [forField]: updatedField,
    };
    await updateData({ section: section, updatedData: updatedData });
    customRevalidateTag(section);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="flex-[0.5]">{title} : </span>
      {setData ? (
        <input
          type="text"
          className="flex-1 border-0 bg-white outline-1 p-2 outline-slate-600"
          onChange={(e) =>
            setData((prevData: any) => ({
              ...prevData,
              [forField]: e.target.value,
            }))
          }
        />
      ) : (
        <form onSubmit={handleUpdate} className="flex-1">
          <input
            type="text"
            className="w-full border-0 bg-white outline-1 p-2 outline-slate-600"
            value={updatedField}
            onChange={(e) => setUpdatedField(e.target.value)}
          />
        </form>
      )}
    </div>
  );
}
