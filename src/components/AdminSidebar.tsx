"use client";

import { SIDEBAR_LINKS } from "@/Constants/SidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Sidebar({ setSidebarOpen }: { setSidebarOpen?: any }) {
  const pathName = usePathname();

  return (
    <div className="flex flex-col mt-3 p-3">
      <h2 className="text-xl">Pages</h2>
      <div className="mt-3">
        {SIDEBAR_LINKS.map((link) => {
          if (link.sub_links) {
            return <DropdownLinks link={link} key={link.link_name} />;
          } else {
            if (setSidebarOpen) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`px-3 py-2 ps-[35px] rounded flex items-center gap-2 ${
                    pathName == link.href ? "bg-[#B2ADF4] text-white" : ""
                  }`}
                >
                  {link.link_name}
                </Link>
              );
            } else {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 ps-[35px] rounded flex items-center gap-2 ${
                    pathName == link.href ? "bg-[#B2ADF4] text-white" : ""
                  }`}
                >
                  {link.link_name}
                </Link>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

type DropdownLinksPropTypes = {
  link: {
    link_name: string;
    sub_links: {
      link_name: string;
      href: string;
    }[];
  };
};

function DropdownLinks({ link }: DropdownLinksPropTypes) {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isActive = link.sub_links.some(
      (sub_link) => sub_link.href === pathName
    );
    setActive(isActive);
  }, [pathName, link.sub_links]);

  return (
    <div>
      <div
        className={`px-3 py-2 rounded flex items-center gap-2 cursor-pointer ${
          active ? "bg-[#B2ADF4] text-white" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <FiChevronDown
          className={`transition-all duration-500 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        {link.link_name}
      </div>
      <div
        className={`transition-all transform duration-500 overflow-hidden flex flex-col gap-2 ms-5 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        {link.sub_links.map((sub_link) => (
          <Link
            href={sub_link.href}
            className={`px-3 py-2 relative before:inline-block before:absolute before:w-[4px] before:rounded before:left-0 before:top-1/2 before:-translate-y-1/2  before:h-[80%] ${
              sub_link.href == pathName ? "before:bg-[#B2ADF4]" : ""
            }`}
            key={sub_link.href}
          >
            {sub_link.link_name}
          </Link>
        ))}
      </div>
    </div>
  );
}
