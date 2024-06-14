"use client";
import { cProductArray } from "@/app/Constants";
import Image from "next/image";
import LearnButton from "./(custom buttons)/learnbutton";
import { DynamicIcon } from "./DynamicIcon";
import { Button } from "./ui/button";

type Props = {
  text: string;
  buttonText: string;
  productsData: any;
};

interface Product {
  image: string;
  title: string;
  desc: string;
  icons: string;
  category: string;
}

const InsuranceCardsGrid = ({ text, buttonText, productsData }: Props) => {
  // Define a function to compare categories
  function compareCategories(a: Product, b: Product) {
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
    <section className="relative">
      <div className="grid md:grid-cols-3 lg:grid-cols-2 grid-row-auto gap-10 ">
        {/* sticky title */}
        <div
          className="h-full relative md:col-span-1 lg:col-span-1 "
          id="Products-scroll"
        >
          <div className="md:sticky md:top-36 self-start ">
            <p className="lg:text-4xl text-3xl md:mb-5 w-full font-extrabold text-dark  ">
              {text}
            </p>
            <div className="w-max my-10">
              <Button className="hidden md:block ">{buttonText}</Button>
            </div>
          </div>
        </div>

        {/* Products content */}
        <div className="md:col-span-2 lg:col-span-1 ">
          <div className="grid-cols-2 grid gap-6  ">
            {productsData &&
              productsData
                .sort(compareCategories)
                .map((item: any, index: number) => {
                  return (
                    <div
                      className={`p-3 md:p-8 lg:min-h-[450px]  flex flex-col justify-stretch rounded-2xl group transition-transform duration-300 ease-in-out  cursor-pointer h-full   hover:scale-[1.02] hover:shadow-2xl`}
                      key={index}
                      style={{
                        backgroundColor: item.color ? item.color : "#FFFFFF",
                      }}
                      onClick={() => (window.location.href = `/services/01`)}
                    >
                      <div className="space-y-2 mt-3">
                        {/* Icons */}
                        <DynamicIcon size={"25"} iconName={item.icons} />

                        <h1 className="lg:text-2xl text-xl  font-bold mb-6 md:w-full">
                          {item.name}
                        </h1>
                      </div>
                      <div className="my-auto">
                        <Image
                          draggable={false}
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="">
                        <LearnButton
                          text="Get Protected Now!"
                          className="text-sm"
                          href="/services/01"
                          text_color="whitesmoke"
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCardsGrid;
