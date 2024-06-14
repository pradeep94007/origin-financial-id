"use client";

import React, { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { customRevalidateTag } from "@/lib/revalidateTag";
import { postData } from "@/lib/postData";
import AdminSingleInput from "./AdminSingleInput";

export default function AddWhyChooseUs() {
  const [data, setData] = useState({});

  const addWCUHandler = async () => {
    await postData({ data: data, section: "whyuscards" });
  };

  return (
    <AdminCollapse title="Add Why Shoose Us Card" open badge={false}>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <TextboxAdd setData={setData} title={"Title"} fieldFor={"title"} />
          <AdminSingleInput
            title="Color for card"
            setData={setData}
            forField="color"
          />
          <AdminSingleInput
            title="Card Icon"
            setData={setData}
            forField="icon"
          />
        </div>
        <div className="space-y-4">
          <TextboxAdd
            setData={setData}
            title={"RedirectTo"}
            fieldFor={"redirectTo"}
          />
          <TextboxAdd
            isTextbox={true}
            setData={setData}
            title={"Description"}
            fieldFor={"description"}
          />
        </div>
      </div>
      <button
        className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
        onClick={addWCUHandler}
      >
        Add
      </button>
    </AdminCollapse>
  );
}
