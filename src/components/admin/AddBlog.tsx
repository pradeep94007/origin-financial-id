"use client";

import React, { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxEdit from "../AdminTextboxEdit";
import ToggleButton from "./ToggleButton";
import { toast } from "react-toastify";
import SectionImageUploader from "../ui/SectionImageUploader";
import UploadImage from "./UploadImage";
import TextboxAdd from "./TextboxAdd";
import { postData } from "@/lib/postData";
import AdmindropList from "./AdmindropList";
import BlogDropList from "@/app/admin/(admin_pages)/blogs/BlogDropList";
import BlogDetails from "@/app/admin/(admin_pages)/blogs/BlogDetails";

export default function AddBlog({ blogsTags }: { blogsTags: any }) {
  const [data, setData] = useState({
    isFeatured: false,
  });

  const addBlogHandler = async () => {
    await postData({ data: data, section: "blog" });
  };

  return (
    <AdminCollapse title={"Add Blog"} badge={false} open>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <div className="space-y-4 ">
            <TextboxAdd setData={setData} title={"Name"} fieldFor={"name"} />
            <TextboxAdd
              setData={setData}
              title={"Description"}
              fieldFor={"description"}
            />
            <BlogDropList list={blogsTags} setData={setData} />
            <div className="flex items-center gap-3">
              <p>Featured Blog</p>
              <ToggleButton
                data={data}
                isAdding={true}
                section={"blog"}
                setData={setData}
                fieldFor={"isFeatured"}
              />
            </div>
          </div>
        </div>
        <div>
          <UploadImage fieldFor="image" setData={setData} title="Blog Image" />
        </div>
      </div>
      <div className="mt-5">
        <BlogDetails setData={setData} />
      </div>
      <div>
        <button
          className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
          onClick={addBlogHandler}
        >
          Add
        </button>
      </div>
    </AdminCollapse>
  );
}
