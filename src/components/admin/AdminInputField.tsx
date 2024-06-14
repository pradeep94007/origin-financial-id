"use client";

import updateData from "@/lib/updateData";
import { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

type AdminInputFieldProps = {
  name: string;
};

export default function AdminInputField({ name }: AdminInputFieldProps) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="w-full max-w-[500px] bg-[#EFF3F9] px-6 py-4 rounded">
      <div className="flex items-center justify-between mb-5">
        <h1 className="sm:text-xl text-lg font-bold">{"Edit"}</h1>
        <button
          className="flex items-center gap-2 text-[13px]"
          type="button"
          onClick={() => setEditing((prev) => !prev)}
        >
          <FiEdit2 /> Edit Text
        </button>
      </div>
      <input type="text" defaultValue={"Enter Text"} name={name}/>
    </div>
  );
}
