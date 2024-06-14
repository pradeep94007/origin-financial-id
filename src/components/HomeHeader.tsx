"use client";

import { cProductArray } from "@/app/Constants";
import { AlignRightIcon, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DynamicIcon } from "./DynamicIcon";
import { Button } from "./ui/button";

export default function HomeHeader({
  visibleSection,
}: {
  visibleSection: string;
}) {
  const [mobileNavOpne, setMobileNavOpne] = useState(false);

  useEffect(() => {
    setMobileNavOpne(false);
  }, []);

  // Sort by category
  function compareCategories(a: any, b: any) {
    if (
      a.category === "Financial Planning" &&
      b.category !== "Financial Planning"
    ) {
      return -1; // "Financial Planning" comes before other categories
    }
    if (
      a.category !== "Financial Planning" &&
      b.category === "Financial Planning"
    ) {
      return 1; // "Financial Planning" comes after other categories
    }
    if (
      a.category === "Corporate Solutions" &&
      b.category !== "Corporate Solutions"
    ) {
      return 1; // "Corporate Solutions" comes after other categories
    }
    if (
      a.category !== "Corporate Solutions" &&
      b.category === "Corporate Solutions"
    ) {
      return -1; // "Corporate Solutions" comes before other categories
    }
    if (a.category < b.category) {
      return -1; // Alphabetical sorting for other categories
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  }

  return (
    <div className="sticky top-0 bg-dove z-50">
      <header className="2xl:px-16 xl:px-11 p-3 w-full 2xl:max-w-[1530px] xl:max-w-[1280px] lg:max-w-none xl:mx-auto 2xl:mx-auto flex items-center md:justify-between justify-between sticky top-0 z-50">
        <div className=" h-16 lg:ml-3 lg:h-20">
          <Link href="/">
            <Image
              draggable={false}
              src="/blacklogo.svg"
              priority
              width={550}
              height={550}
              alt="logo"
              className="object-contain h-full w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-[30px] font-semibold">
          <ul className="gap-5 hidden xl:flex">
            <li
              className={`relative after:absolute after:w-full after:rounded-xl after:h-[3px] after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100  after:duration-300 ${
                visibleSection == "Home" ? "after:scale-x-100  text-blue" : ""
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            {/* <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100  after:duration-300 ${visibleSection == "Our-mission"
                ? "after:scale-x-100  text-blue"
                : ""
                }`}
            >
              <Link href="/#Our-mission">Our Mission</Link>
            </li> */}
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100  after:duration-300 ${
                visibleSection == "Services"
                  ? "after:scale-x-100  text-blue"
                  : ""
              }`}
            >
              <Link href="/#Services">Services</Link>
            </li>

            <li
              className={`relative group after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100  after:duration-300 ${
                visibleSection == "Products-scroll"
                  ? "after:scale-x-100  text-blue"
                  : ""
              }`}
            >
              <div className="absolute top-full left-0 pt-3 group-hover:block hidden group-hover:duration-300">
                <ul className="w-max min-w-[420px] bg-dove shadow-md p-5">
                  <li className="grid grid-rows-3 grid-cols-2  gap-9 ">
                    {cProductArray.sort(compareCategories).map((ins, i) => {
                      return (
                        <Link
                          className="hover:text-blue hover:underline underline-offset-4 group-[link] w-max transition-all duration-75 flex space-x-2 grid-row-4  text-black"
                          href={`/services/01`}
                          key={i}
                        >
                          <div className="mt-1">
                            <DynamicIcon iconName={ins.icons} />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold group-[link]-hover:underline">
                              {ins.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </li>
                </ul>
              </div>
              <Link
                href="/#Products"
                className="flex justify-center items-center space-x-1"
              >
                <span>Products</span>
                <ChevronDown size={15} />
              </Link>
            </li>
            {/* <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300  ${visibleSection == "Why-us-scroll"
                ? "after:scale-x-100  text-blue"
                : ""
                }`}
            >
              <Link href="/#Why-us">Why us</Link>
            </li> */}
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300  ${
                visibleSection == "Career" ? "after:scale-x-100  text-blue" : ""
              }`}
            >
              <Link href="/career">Career</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100  after:duration-300 ${
                visibleSection == "Testimonials"
                  ? "after:scale-x-100  text-blue"
                  : ""
              }`}
            >
              <Link href="/#Testimonials">Testimonials</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300  ${
                visibleSection == "Faq" ? "after:scale-x-100  text-blue" : ""
              }`}
            >
              <Link href="/#Faq">FAQ</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300  ${
                visibleSection == "Our-team"
                  ? "after:scale-x-100  text-blue"
                  : ""
              }`}
            >
              <Link href="/our-team" onClick={() => window.scrollTo(0, 0)}>
                Our team
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300  ${
                visibleSection == "Blogs" ? "after:scale-x-100  text-blue" : ""
              }`}
            >
              <Link href="/blog">Blogs</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:rounded-xl after:bg-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300  ${
                visibleSection == "Events" ? "after:scale-x-100  text-blue" : ""
              }`}
            >
              <Link href="/events">Events</Link>
            </li>
          </ul>
          <Button className=" relative">Get started</Button>
          <span
            className="xl:hidden text-2xl"
            onClick={() => setMobileNavOpne(!mobileNavOpne)}
          >
            {!mobileNavOpne ? <AlignRightIcon /> : <X />}
          </span>
        </div>
      </header>
      <section
        className={`flex fixed inset-0 z-10 bg-dove text-dark w-full h-screen transition-transform duration-300 transform ${
          mobileNavOpne ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-[30px] font-semibold w-full pt-1 ">
          <ul className="gap-5 flex flex-col text-xl p-5">
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300  ${
                visibleSection == "Home"
                  ? "after:scale-x-100 translate-x-7  text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/">
                Home
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Our-mission"
                  ? "after:scale-x-100  translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="/#Our-mission"
              >
                Our Mission
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3  duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Services"
                  ? "after:scale-x-100  translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/#Services">
                Services
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3  duration-300 after:scale-x-0 hover:italic after:duration-300  ${
                visibleSection == "Products-scroll"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/#Products">
                Products
              </Link>
            </li>
            {/* <li
              className={
                `relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300   ${visibleSection == "Why-us-scroll"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""}`
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="/#Why-us"
              >
                Why us
              </Link>
            </li> */}
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Career"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/career">
                Career
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3  duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Testimonials"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="/#Testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3  duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Faq"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/#Faq">
                FAQ
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Our-team"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/our-team">
                Our Team
              </Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Blogs"
                  ? "after:scale-x-100 translate-x-7 text-blue"
                  : ""
              }`}
            >
              <Link href="/blog">Blogs</Link>
            </li>
            <li
              className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-blue after:top-0 after:left-0 after:-translate-x-3 after:translate-y-3 duration-300 after:scale-x-0 hover:italic after:duration-300   ${
                visibleSection == "Events"
                  ? "after:scale-x-100 translate-x-7  text-blue"
                  : ""
              }`}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="/events">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
