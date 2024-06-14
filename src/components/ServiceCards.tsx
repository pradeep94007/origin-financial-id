import Image from "next/image";
import { SlideInFromLeft } from "./animations/animations";
import { Suspense } from "react";
import LoadingSkeleton from "@/app/loading";
import { CcardDetails } from "@/app/Constants";
import { Button } from "./ui/button";
import LearnButton from "./(custom buttons)/learnbutton";
import { useFetchDataOnClient } from "../../utils/useFetchDataOnClient";

// Color pallet inspiration from sonomad.com (travel insurance website)

export default function ServicesCards({ doNotAdd }: { doNotAdd?: number }) {
  const bgColors = ["DDEAE4", "FCD6CA", "EFEDFF"];
  const serviceSecData: any = useFetchDataOnClient("service");
  return (
    <div className="max-screen w-full relative mx-auto">
      {serviceSecData.map((card: any, j: number) => {
        const bgIndex = (j + 3) % 3;
        return (
          <SlideInFromLeft
            className="w-full group cursor-pointer mx-auto mb-6 shadow-md rounded-2xl min-h-[300px] overflow-hidden my-6 flex md:flex-row flex-col items-start"
            backgroundColor={"#" + bgColors[bgIndex]}
            key={j}
          >
            <div className="flex justify-center md:justify-start items-center md:w-1/3 lg:w-1/4 m-5 h-full">
              <Suspense fallback={<LoadingSkeleton />}>
                <Image
                  draggable={false}
                  src={card.serviceImage}
                  width={150}
                  height={150}
                  priority
                  alt={card.serviceName}
                  className="w-1/2 h-auto object-cover text-dark border"
                />
              </Suspense>
            </div>
            <div className="flex flex-1 p-5 justify-between my-auto ">
              <div className="p-4 space-y-8 justify-between flex flex-col">
                <div className="uppercase flex gap-2 lg:text-3xl text-xl text-dark font-bold">
                  {card.serviceName}
                </div>
                <h1 className="mt-5 text-dark/90 text-xl">
                  {card.serviceDescription}{" "}
                </h1>
                <LearnButton text="Learn more" href={card.redirectTo} />
              </div>
            </div>
          </SlideInFromLeft>
        );
      })}
    </div>
  );
}
