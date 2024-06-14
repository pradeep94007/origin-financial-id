"use client";

import React, { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { postData } from "@/lib/postData";
import ProductDropList from "@/app/admin/(admin_pages)/product/ProductDropList";
import AdminSingleInput from "./AdminSingleInput";
import { customRevalidateTag } from "@/lib/revalidateTag";

export default function AddProduct({
  productCategories,
}: {
  productCategories: any;
}) {
  const [data, setData] = useState({});

  const addProductHandler = async () => {
    await postData({ data: data, section: "products" });
    customRevalidateTag("productcategories");
  };

  return (
    <AdminCollapse title="Add Product" open badge={false}>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <TextboxAdd setData={setData} title={"Name"} fieldFor={"name"} />
          <TextboxAdd
            setData={setData}
            title={"Description"}
            fieldFor={"description"}
          />
          <ProductDropList list={productCategories} setData={setData} />
          <AdminSingleInput
            title="Color for card"
            setData={setData}
            forField="color"
          />
          <AdminSingleInput
            title="Product Icon"
            setData={setData}
            forField="icons"
          />
        </div>
        <div className="space-y-4">
          <UploadImage
            fieldFor="image"
            setData={setData}
            title="Product Image"
          />
        </div>
      </div>
      <button
        className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
        onClick={addProductHandler}
      >
        Add
      </button>
    </AdminCollapse>
  );
}
