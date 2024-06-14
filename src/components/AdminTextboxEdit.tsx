"use client";

import { customRevalidateTag } from "@/lib/revalidateTag";
import updateData from "@/lib/updateData";
import { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

type TextboxEditProps = {
  title: string;
  value: string;
  editText: string;
  data: any;
  forField: any;
  section: string;
  isTextArea?: boolean;
  rows?: number;
};

export default function TextboxEdit({
  title,
  value,
  editText,
  data,
  forField,
  section,
  isTextArea,
  rows,
}: TextboxEditProps) {
  const inputRef = useRef(null);
  const [updatedField, setUpdatedField] = useState(value);
  const [editing, setEditing] = useState(false);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const updatedData = {
      ...data,
      [forField]: updatedField,
    };
    await updateData({ section: section, updatedData: updatedData });
    customRevalidateTag(section);
    setEditing(false);
  };

  useEffect(() => {
    if (editing) {
      // @ts-ignore
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <div className="w-full max-w-[550px] bg-[#EFF3F9] px-6 py-4 rounded">
      <div className="flex items-center justify-between mb-5">
        <h1 className="sm:text-xl text-lg font-bold">{title}</h1>
        <button
          className="flex items-center gap-2 text-[13px]"
          onClick={() => setEditing((prev) => !prev)}
        >
          <FiEdit2 /> {editText}
        </button>
      </div>
      <form onSubmit={handleUpdate}>
        {isTextArea ? (
          <>
            <textarea
              ref={inputRef}
              rows={rows || 8}
              placeholder={editText}
              value={updatedField}
              disabled={!editing}
              onChange={(e) => setUpdatedField(e.target.value)}
              className="border-0 bg-transparent outline-1 p-1 w-full outline-slate-400"
            ></textarea>
            <button className="px-2 border border-slate-500 rounded">
              Save
            </button>
          </>
        ) : (
          <input
            ref={inputRef}
            type="text"
            placeholder={editText}
            value={updatedField}
            disabled={!editing}
            onChange={(e) => setUpdatedField(e.target.value)}
            className="border-0 bg-transparent outline-1 p-1 w-full outline-slate-400"
          />
        )}
      </form>
    </div>
  );
}
