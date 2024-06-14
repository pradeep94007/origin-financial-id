"use client";

import { customRevalidateTag } from "@/lib/revalidateTag";
import updateData from "@/lib/updateData";
import { useEffect, useState } from "react";

type BlogDropListProps = {
  list: any;
  data?: any;
  setData?: any;
};

export default function BlogDropList({
  list,
  data,
  setData,
}: BlogDropListProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) return;
    const updatedData = {
      ...data,
      tag: {
        name: value,
      },
    };
    const updateDataTimout = setTimeout(async () => {
      customRevalidateTag("blogtags");
      await updateData({ section: "blog", updatedData });
    }, 1500);
    return () => clearTimeout(updateDataTimout);
  }, [value]);

  return (
    <div>
      <label className="flex items-center gap-2">
        <span>Blog tag :</span>
        {setData ? (
          <>
            <input
              list="ice-cream-flavors"
              onChange={(e) =>
                setData((prevData: any) => ({
                  ...prevData,
                  tag: {
                    name: e.target.value,
                  },
                }))
              }
              className="p-2 rounded-sm"
            />
            <datalist id="ice-cream-flavors">
              {list &&
                list.map((tag: any) => (
                  <option value={tag.name} key={tag.id}></option>
                ))}
            </datalist>
          </>
        ) : (
          <>
            <input
              list="ice-cream-flavors"
              onChange={(e) => setValue(e.target.value)}
              className="p-2 rounded-sm"
              defaultValue={data.tag.name}
            />
            <datalist id="ice-cream-flavors">
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
