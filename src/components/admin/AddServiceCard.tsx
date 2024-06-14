"use client";

import React, { useState } from "react";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import AdminCollapse from "../AdminCollapse";
import { postData } from "@/lib/postData";

export default function AddServiceCard() {
  const [data, setData] = useState({});

  const addServiceCardHandler = async () => {
    await postData({ data: data, section: "service" });
  };

  return (
    <AdminCollapse title="Add Service" open badge={false}>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <TextboxAdd
            setData={setData}
            title={"Name"}
            fieldFor={"serviceName"}
          />
          <TextboxAdd
            setData={setData}
            title={"Description"}
            fieldFor={"serviceDescription"}
          />
          <TextboxAdd
            setData={setData}
            title={"Redirect To"}
            fieldFor={"redirectTo"}
          />
        </div>
        <div>
          <UploadImage
            fieldFor="serviceImage"
            setData={setData}
            title="Service Image"
          />
        </div>
      </div>
      <button
        className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
        onClick={addServiceCardHandler}
      >
        Add
      </button>
    </AdminCollapse>
  );
}
