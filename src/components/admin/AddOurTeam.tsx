"use client";

import React, { useState } from "react";
import AdminCollapse from "../AdminCollapse";
import TextboxAdd from "./TextboxAdd";
import UploadImage from "./UploadImage";
import { postData } from "@/lib/postData";

export default function AddOurTeam() {
  const [data, setData] = useState({});

  const addEventHandler = async () => {
    await postData({ data: data, section: "ourteam" });
  };

  return (
    <AdminCollapse title={"Add Event"} badge={false} open>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <div>
            <TextboxAdd
              setData={setData}
              title={"Full Name"}
              fieldFor={"fullName"}
            />

            <div className=" mt-10">
              <div className="space-y-4">
                <TextboxAdd
                  rows={4}
                  isTextbox={true}
                  setData={setData}
                  title={"Professional Qualifications"}
                  fieldFor={"professionalQualifications"}
                />
                <TextboxAdd
                  rows={4}
                  isTextbox={true}
                  setData={setData}
                  title={"Certification Qualification"}
                  fieldFor={"certificationQualification"}
                />
                <TextboxAdd
                  isTextbox={true}
                  setData={setData}
                  title={"Description"}
                  fieldFor={"description"}
                />
                <TextboxAdd
                  setData={setData}
                  title={"Means To You"}
                  fieldFor={"meansToYou"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <TextboxAdd
              setData={setData}
              title={"Team Role"}
              fieldFor={"role"}
            />
            <div className="mt-10 space-y-4">
              <UploadImage
                fieldFor="profileImage"
                setData={setData}
                title="Profile Image"
              />
              <UploadImage
                fieldFor="bannerImage"
                setData={setData}
                title="Banner Image"
              />
              <TextboxAdd
                setData={setData}
                title={"Hobbies"}
                fieldFor={"hobbies"}
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
