"use client";

import { postData } from "@/lib/postData";
import updateData from "@/lib/updateData";
import { useEffect, useState } from "react";

type AdmindropListProps = {
  list: any;
  title: string;
  data?: any;
  setData?: any;
  section: string;
  fieldFor: string;
};

export default function AdmindropList({
  list,
  section,
  title,
  data,
  setData,
  fieldFor,
}: AdmindropListProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) return;
    let updatedData: any;
    if (section == "blog") {
      updatedData = {
        ...data,
        [fieldFor]: {
          name: value,
        },
      };
    } else {
      updatedData = {
        ...data,
        [fieldFor]: value,
      };
    }
    const updateDataTimout = setTimeout(async () => {
      await updateData({ section, updatedData });
    }, 1500);
    return () => clearTimeout(updateDataTimout);
  }, [value]);

  return (
    <div>
      <label className="flex items-center gap-2">
        <span>{title} :</span>
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
              defaultValue={data[fieldFor].name}
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
