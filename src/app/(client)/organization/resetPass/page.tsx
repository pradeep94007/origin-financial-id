"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <section>
      <Header />
      <section className="min-h-[570px] p-2 py-16">
        <div className="flex flex-col lg:flex-row sm:w-[90%] mx-auto px-3 md:px-10 py-5 shadow-2xl rounded-2xl">
          <div className="flex-1 p-5 sm:p-16 min-h-[250px] flex items-center justify-center">
            <Image
              src="/Assets/organization-assets/reset-pass-image.png"
              alt="login-image"
              width={500}
              height={250}
            />
          </div>
          <div className="flex flex-col gap-2 py-16 flex-1 sm:px-5 md:px-16 border-t-2 lg:border-t-0 lg:border-s-2">
            <h1 className="text-3xl font-medium">Reset Password.</h1>
            <p className="text-sm">
              Enter your email and we'll send you instructions on how to reset
              your password.
            </p>
            <label className="flex flex-col mt-3 gap-3">
              <span>Email *</span>
              <input type="email" className="p-2 border-2 my-1 w-full" />
            </label>
            {/* Make this visible when emailSent is true */}
            <span className="text-xs p-3 bg-blue-700 text-white lg:w-max mx-auto rounded-md text-wrap">
              Please check your inbox for password recovery link
            </span>
            <button className="bg-black text-white p-3 rounded-full font-semibold mt-3">
              Send Instrucation
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
