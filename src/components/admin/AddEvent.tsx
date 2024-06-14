"use client";

import React, { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { customRevalidateTag } from "@/lib/revalidateTag";
import { postData } from "@/lib/postData";

export default function AddEvent() {
  const [data, setData] = useState({});

  const addEventHandler = async () => {
    await postData({ data: data, section: "event" });
  };

  return (
    <AdminCollapse title={"Add Event"} badge={false} open>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <div>
            <TextboxAdd
              setData={setData}
              title={"Event Date time"}
              fieldFor={"dateOfEvent"}
            />

            <div className=" mt-10">
              <div className="space-y-4">
                <TextboxAdd
                  setData={setData}
                  title={"Title"}
                  fieldFor={"title"}
                />
                <TextboxAdd
                  setData={setData}
                  title={"Name"}
                  fieldFor={"name"}
                />
                <TextboxAdd
                  isTextbox={true}
                  setData={setData}
                  title={"Description"}
                  fieldFor={"description"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <TextboxAdd
              setData={setData}
              title={"Event Location"}
              fieldFor={"location"}
            />
            <div className="mt-10">
              <UploadImage
                fieldFor="bannerImage"
                setData={setData}
                title="Event Image"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-[#00D26D] mt-5 py-1 px-5 ml-3 text-white capitalize rounded-md"
            onClick={addEventHandler}
          >
            Add
          </button>
        </div>
      </div>
    </AdminCollapse>
  );
}
