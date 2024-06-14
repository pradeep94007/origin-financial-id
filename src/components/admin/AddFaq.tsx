"use client";

import React, { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { postData } from "@/lib/postData";

export default function AddFaq() {
  const [data, setData] = useState({});

  const addFaqHandler = async () => {
    await postData({ data: data, section: "faqs" });
  };

  return (
    <AdminCollapse title="Add Faq" open badge={false}>
      <div className="mt-5 space-y-4">
        <TextboxAdd
          setData={setData}
          title={"Question"}
          fieldFor={"question"}
        />
        <TextboxAdd setData={setData} title={"Answer"} fieldFor={"answer"} />
      </div>
      <button
        className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
        onClick={addFaqHandler}
      >
        Add
      </button>
    </AdminCollapse>
  );
}
