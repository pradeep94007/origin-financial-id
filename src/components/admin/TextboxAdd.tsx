import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

type TextboxEditProps = {
  setData: any;
  title: string;
  rows?: number;
  fieldFor: string;
  isTextbox?: boolean;
};

export default function TextboxAdd({
  setData,
  title,
  rows,
  fieldFor,
  isTextbox,
}: TextboxEditProps) {
  const handleFoeldUpdate = () => {};

  return (
    <div className="w-full max-w-[550px] bg-[#EFF3F9] px-6 py-4 rounded">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <form onSubmit={handleFoeldUpdate}>
        {isTextbox ? (
          <textarea
            rows={rows || 8}
            placeholder={"Enter Value Here"}
            onChange={(e) =>
              setData((prevData: any) => ({
                ...prevData,
                [fieldFor]: e.target.value,
              }))
            }
            className="border-0 bg-transparent outline-1 p-1 w-full outline-slate-400"
          />
        ) : (
          <input
            type="text"
            placeholder={"Enter Value Here"}
            onChange={(e) =>
              setData((prevData: any) => ({
                ...prevData,
                [fieldFor]: e.target.value,
              }))
            }
            className="border-0 bg-transparent outline-1 p-1 w-full outline-slate-400"
          />
        )}
      </form>
    </div>
  );
}
