"use client";

import updateData from "@/lib/updateData";
import { useEffect, useState } from "react";

type ProductDropListProps = {
  list: any;
  data?: any;
  setData?: any;
};

export default function ProductDropList({
  list,
  data,
  setData,
}: ProductDropListProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) return;
    const updatedData = {
      ...data,
      category: value,
    };
    const updateDataTimout = setTimeout(async () => {
      await updateData({ section: "products", updatedData });
    }, 1500);
    return () => clearTimeout(updateDataTimout);
  }, [value]);

  return (
    <div>
      <label className="flex items-center gap-2">
        <span className="flex-[0.5]">Product category :</span>
        {setData ? (
          <>
            <input
              list="dropdown-lists"
              onChange={(e) =>
                setData((prevData: any) => ({
                  ...prevData,
                  category: e.target.value,
                }))
              }
              className="p-2 rounded-sm flex-1 outline-slate-600"
            />
            <datalist id="dropdown-lists">
              {list &&
                list.map((tag: any) => (
                  <option value={tag.name} key={tag.id}></option>
                ))}
            </datalist>
          </>
        ) : (
          <>
            <input
              list="dropdown-lists"
              onChange={(e) => setValue(e.target.value)}
              className="p-2 rounded-sm flex-1 outline-slate-600"
              defaultValue={data.category}
            />
            <datalist id="dropdown-lists">
              {list &&
                list.map((tag: any) => (
                  <option value={tag.name} key={tag.id}></option>
                ))}
            </datalist>
          </>
        )}
      </label>
    </div>
  );
}
