"use client";

import { AlignRightIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();

  const [mobileNavOpne, setMobileNavOpne] = useState(false);

  useEffect(() => {
    setMobileNavOpne(false);
  }, [pathname]);

  return (
    <>
      <header className="px-5 p-3 flex items-center justify-between bg-whitesmoke shadow-xl sticky top-0 z-50">
        <div className="h-12 lg:h-14">
          <Link href="/">
            <Image draggable={false}
              src="/Assets/Black-Logo.png"
              width={250}
              height={50}
              alt="logo"
              className="object-contain h-full w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-[30px] font-semibold">
          <ul className="gap-5 hidden sm:flex">
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-text-light after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:origin-left after:rounded ${
                pathname == "/"
                  ? "text-light hover:text-light after:scale-x-100"
                  : "hover:text-light"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-text-light after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:origin-left after:rounded ${
                pathname == "/services"
                  ? "text-light hover:text-light after:scale-x-100"
                  : "hover:text-light"
              }`}
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-text-light after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:origin-left after:rounded ${
                pathname == "/events" || pathname.startsWith("/events")
                  ? "text-light hover:text-light after:scale-x-100"
                  : "hover:text-light"
              }`}
            >
              <Link href="/events">Events</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-text-light after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:origin-left after:rounded ${
                pathname == "/blog" || pathname.startsWith("/blog")
                  ? "text-light hover:text-light after:scale-x-100"
                  : "hover:text-light"
              }`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-text-light after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:origin-left after:rounded ${
                pathname == "/teamdetails"
                  ? "text-light hover:text-light after:scale-x-100"
                  : "hover:text-light"
              }`}
            >
              <Link href="/teamdetails">Team Details</Link>
            </li>
          </ul>
          <span
            className="sm:hidden text-2xl"
            onClick={() => setMobileNavOpne(!mobileNavOpne)}
          >
            {!mobileNavOpne ? <AlignRightIcon /> : <X/>}
          </span>
        </div>
      </header>
      <section
        className={`flex fixed inset-0 z-40 bg-white text-[rgb(23,15,74)] w-full h-screen transition-transform duration-300 transform ${
          mobileNavOpne ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-[30px] font-semibold w-full p-5">
          <ul className="gap-5 flex flex-col text-xl">
            <li
              className={
                pathname == "/"
                  ? "text-light hover:text-light"
                  : "hover:text-light"
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                pathname == "/services"
                  ? "text-light hover:text-light"
                  : "hover:text-light"
              }
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={
                pathname == "/events" || pathname.startsWith("/events")
                  ? "text-light hover:text-light"
                  : "hover:text-light"
              }
            >
              <Link href="/events">Events</Link>
            </li>
            <li
              className={
                pathname == "/blog" || pathname.startsWith("/blog")
                  ? "text-light hover:text-light"
                  : "hover:text-light"
              }
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={
                pathname == "/teamdetails"
                  ? "text-light hover:text-light"
                  : "hover:text-light"
              }
            >
              <Link href="/teamdetails">Team Details</Link>
            </li>
            <li>
              <Link href="/" className="rounded-full bg-[rgb(23,15,75)] text-white text-lg flex items-center gap-2 px-5 py-2">
                <IoCall />
                <span className="mt-1">1300 TO BE SURE</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
