"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type ToggleButtonProps = {
  section: string;
  data?: any;
  isAdding?: boolean;
  setData?: any;
  fieldFor: string;
};

export default function ToggleButton({
  section,
  isAdding,
  setData,
  data,
  fieldFor,
}: ToggleButtonProps) {
  const [checked, setChecked] = useState(data[fieldFor]);

  const handleToggle = async (e: any) => {
    const isChecked = e.target.checked;
    if (isAdding) {
      setChecked(isChecked);
      return setData((prevData: any) => ({
        ...prevData,
        [fieldFor]: isChecked,
      }));
    }
    try {
      const response = await fetch("/api/blog", {
        method: "PUT",
        body: JSON.stringify({
          ...data,
          [fieldFor]: isChecked,
        }),
      });
      if (response.status !== 200) throw new Error("Error updating status!");
      toast.success("Status updated");
      setChecked(isChecked);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked || false}
        onChange={handleToggle}
      />
      <div className="relative w-10 h-5 bg-slate-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-lime-500" />
    </label>
  );
}
