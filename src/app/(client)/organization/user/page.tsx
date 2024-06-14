"use client";

import Header from "@/components/Header";
import Image from "next/image";
import React, { useRef } from "react";

export default function page() {
  const editBtnRef = useRef(null);
  const uploadBtnRef = useRef(null);
  const changeBtnRef = useRef(null);

  const handleBannerClick = () => {
    // // @ts-ignore
    // editBtnRef.current.style.opacity = "1";
    // // @ts-ignore
    // uploadBtnRef.current.style.opacity = "1";
    // // @ts-ignore
    // changeBtnRef.current.style.opacity = "1";
    // let timeout;
    // if (timeout) {
    //   clearTimeout(timeout);
    // }
    // timeout = setTimeout(() => {
    //   // @ts-ignore
    //   editBtnRef.current.style.opacity = "0";
    //   // @ts-ignore
    //   uploadBtnRef.current.style.opacity = "0";
    //   // @ts-ignore
    //   changeBtnRef.current.style.opacity = "0";
    // }, 2000);

  };

  const formInputDetails = [
    { id: "date-joined", label: "Date Joined" },
    { id: "prof-qualifications", label: "Professional Qualifications" },
    {
      id: "certifications-in-financial-needs",
      label: "Certifications in Financial Needs",
    },
    { id: "educations", label: "Educations" },
    { id: "hobbies", label: "Hobbies" },
    { id: "tell-us-about-yourself", label: "Tell Us About Yourself" },
    {
      id: "what-does-origin-financial-means-to-you",
      label: "What does Origin Financial Means To You",
    },
  ];
  
  return (
    <section>
      <Header />
      <section className="w-11/12 lg:w-4/5 mx-auto p-2 py-14">
        <div className="pb-16 border-b-2">
          <div
            onClick={handleBannerClick}
            className="userbanner relative rounded-xl h-[250px] sm:h-[300px] flex items-end bg-[url('/Assets/organization-assets/cover-image.png')] bg-cover"
          >
            <div className="flex justify-between py-2 px-5 items-end w-full">
              <div className="flex gap-5 items-end">
                <div className="rounded-xl w-[150px] sm:w-[200px] aspect-square transform translate-y-[20%]">
                  <Image
                    src="/Assets/girl-image.jpg"
                    alt="profile-image"
                    width={200}
                    height={150}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <button
                  ref={changeBtnRef}
                  className="absolute top-2 right-2 sm:hidden change-btn opacity-0 bg-white text-black  p-2 pt-[10px] px-5 text-xs my-2 sm:text-sm rounded-full"
                >
                  Change Banner
                </button>
                <div className="flex-col gap-1 items-start sm:flex text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Jane Williams
                  </h3>
                  <p className="text-xs">jane@acme.com</p>
                  <button
                    ref={editBtnRef}
                    className="edit-btn opacity-0 text-xs my-1 sm:text-sm p-2 pt-[10px] px-5 border bg-black border-slate-600 rounded-full"
                  >
                    Edit Photo
                  </button>
                  <button
                    ref={uploadBtnRef}
                    className="upload-btn opacity-0 bg-white text-black p-2 pt-[10px] px-5 text-xs sm:text-sm rounded-full"
                  >
                    Upload photo
                  </button>
                </div>
              </div>
              <div className="hidden sm:block">
                <button className="change-btn opacity-0 bg-white text-black  p-2 pt-[10px] px-5 text-sm rounded-full">
                  Change Banner
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <form className="grid sm:grid-cols-2 gap-5 gap-x-10">
            {formInputDetails.map((input) => (
              <div key={input.id}>
                <label className="flex flex-col">
                  <span className="font-semibold">{input.label}</span>
                  <input type="text" className="border p-2 rounded-md" />
                </label>
              </div>
            ))}
            <div className="flex items-end justify-end">
              <button className="p-2 pt-[10px] px-4 rounded-full text-sm sm:text-base bg-black text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}
