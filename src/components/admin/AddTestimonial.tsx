"use client";

import { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { postData } from "@/lib/postData";

export default function AddTestimonial() {
  const [data, setData] = useState({});

  const addTestimonialHandler = async () => {
    await postData({ data: data, section: "origintestimonial" });
  };

  return (
    <AdminCollapse title="Add Testimonial" open badge={false}>
      <div className="mt-5">
        <div className="space-y-4">
          <TextboxAdd setData={setData} title={"Name"} fieldFor={"name"} />
          <TextboxAdd setData={setData} title={"Role"} fieldFor={"role"} />
          <TextboxAdd
            setData={setData}
            title={"Testimonial"}
            fieldFor={"testimonialDesc"}
          />
          <UploadImage
            fieldFor="image"
            setData={setData}
            title="Service Image"
          />
        </div>
      </div>
      <button
        className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
        onClick={addTestimonialHandler}
      >
        Add
      </button>
    </AdminCollapse>
  );
}
