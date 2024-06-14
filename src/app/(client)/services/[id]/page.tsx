"use client";

import LearnButton from "@/components/(custom buttons)/learnbutton";
import BreadCrumbs from "@/components/BreadCrumbs";
import HomeHeader from "@/components/HomeHeader";
import {
  SlideInFromLeft,
  SlideInFromRight,
} from "@/components/animations/animations";
import InsuranceCardsGrid from "@/components/insuranceCardsGrid";
import Image from "next/image";
import { useFetchDataOnClient } from "../../../../../utils/useFetchDataOnClient";

export default function Services() {
  const productsData: any = useFetchDataOnClient("products");
  return (
    <>
      <HomeHeader visibleSection="Products-scroll" />
      <section className="relative flex flex-col items-start justify-start text-start bg-whitesmoke lg:h-max text-white">
        <div className="space-y-3 py-20 p-5 max-screen mx-auto w-full ">
          <div className="flex flex-col md:flex-row lg:gap-32">
            <div className="space-y-6 lg:max-w-[600px]  md:max-w-[500px] ml-1 md:order-1 order-2">
              <div className="mb-5">
                <BreadCrumbs
                  items={[
                    { label: "Services", path: "/#Products" },
                    { label: "Savings and investment plans" },
                  ]}
                />
              </div>
              <h1 className="text-dark font-bold md:text-6xl text-5xl ">
                Keep a roof over your family.
              </h1>
              <p className="text-gray-500">
                In today's unpredictable economic landscape, securing your
                financial future is more important than ever. Savings and
                Investment Plans offer a dual benefit, combining the safety and
                steadiness of savings with the growth potential of investments.
                Tailored to meet the long-term financial goals of individuals,
                these plans provide a disciplined approach to saving regularly
                while offering the opportunity to grow wealth over time.
              </p>
              <LearnButton text={"Learn how"} href="#How" deg />
            </div>
            <div className="order-1 md:order-2">
              <Image
                draggable={false}
                src="/Assets/Home-section/Thoughts.svg"
                width={500}
                height={500}
                alt="avatars"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-start place-items-start max-screen p-5 mx-auto md:my-10 overflow-hidden">
        <h1 className="text-5xl italic font-semibold my-3">How it works?</h1>
      </div>
      {[...new Array(3)].map((_, j: number) => (
        <section
          className="text-gray-700  body-font overflow-hidden my-10"
          id="How"
        >
          <div className="max-screen mx-auto h-max flex px-5 py-12 md:flex-row flex-col items-center lg:gap-32 ">
            <SlideInFromLeft
              className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:mb-0 text-start ${
                j % 2 === 0 ? "md:order-1 order-2" : "md:order-2 order-2"
              }`}
            >
              <h1 className="title-font md:text-5xl text-2xl my-4 font-bold text-gray-900">
                Savings and investment plans
              </h1>
              <p className="text-md mt-5">
                In today's unpredictable economic landscape, securing your
                financial future is more important than ever. Savings and
                Investment Plans offer a dual benefit, combining the safety and
                steadiness of savings with the growth potential of investments.
                Tailored to meet the long-term financial goals of individuals,
                these plans provide a disciplined approach to saving regularly
                while offering the opportunity to grow wealth over time.
              </p>
            </SlideInFromLeft>
            <SlideInFromRight
              className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:mb-0 text-start ${
                j % 2 === 0 ? "md:order-2 order-1" : "md:order-1 order-1"
              }`}
            >
              <div className="max-w-[500px] lg:max-w-[850px] mx-auto md:mb-10 ">
                <Image
                  draggable={false}
                  src="/Assets/Home-section/Thoughts.svg"
                  width={500}
                  height={0}
                  alt="avatars"
                />
              </div>
            </SlideInFromRight>
          </div>
        </section>
      ))}

      <section className="mb-5 p-5 max-screen mx-auto">
        <div className="my-20 max-screen mx-auto">
          <InsuranceCardsGrid
            productsData={productsData}
            buttonText="Get a quote"
            text="Other ways to get you protected"
          />
        </div>
      </section>
    </>
  );
}
