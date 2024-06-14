"use client";

// import { signOut } from "@/auth";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./AdminSidebar";
import { useState } from "react";

export default function AdminHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex border-b">
      <div
        className={`block lg:hidden fixed top-0 left-0 z-50 bg-white h-full transform transition-all duration-500 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen}/>
      </div>
      <div className="flex-1 max-w-[200px] border-r p-3 flex items-center justify-center">
        <Image
          src={"/admin_assets/logo.svg"}
          alt="website logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex-1 flex items-center justify-end p-3">
        <div className="hidden lg:flex items-center gap-3 bg-[#1F2020] text-white px-4 p-2 rounded-[5px]">
          <Image
            src={"/admin_assets/user.svg"}
            alt="user avatar"
            width={35}
            height={35}
          />
          <span className="">Hello, User</span>
        </div>
        <button
          className="text-xl block lg:hidden"
          onClick={() => setSidebarOpen((prevData) => !prevData)}
        >
          <FiMenu />
        </button>
        {/* <form
          // action={async () => {
          //   'use server';
          //   await signOut();
          // }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
  );
}
