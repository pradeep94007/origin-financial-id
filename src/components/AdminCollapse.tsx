"use client";
import React, { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type props = {
  title: string;
  badge: boolean;
  children: ReactNode;
  open: boolean;
};
const AdminCollapse = ({
  title,
  badge = true,
  children,
  open = false,
}: props) => {
  const [isOpen, setIsOpen] = useState(open);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#DFE5EF] px-3 py-1 rounded-md my-3">
      <button
        className="w-full px-4 py-2 text-left  focus:outline-none"
        onClick={toggleCollapse}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl capitalize">
            {title}
            {badge ? (
              <span className="mx-2 inline-flex items-center rounded-md bg-[#D31145] px-4 py-1 text-sm capitalize  font-medium text-white ">
                new
              </span>
            ) : (
              ""
            )}
          </h3>
          <FiChevronDown
            className={`w-6 h-6 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transform transition-all duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
};

export default AdminCollapse;
