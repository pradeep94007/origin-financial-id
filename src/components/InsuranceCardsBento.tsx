
'use client'
import Image from "next/image";
import LearnButton from "./(custom buttons)/learnbutton";
import { cProductArray } from "@/app/Constants";
import { DynamicIcon } from "./DynamicIcon";


//* Maxium 4 featured post

export default function InsuranceCardsBento() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-auto gap-3 md:gap-6 "  >
      {
        cProductArray.map((card, i) => {
          let baseClassName = 'shadow-md rounded-2xl flex  group flex-col overflow-hidden relative transition-transform duration-300 ease-in-out cursor-pointer';

          // Append additional classes based on the id
          baseClassName += 
          // Money / savings
          i === 0 ? ' md:row-span-2 md:col-span-3  bg-[#fffaa0]' :
          i === 1 ? ' md:col-span-2 md:row-span-2  bg-[#fffaa0] ' :
          i === 2 ? ' md:row-span-3 md:col-span-2  bg-[#fffaa0]' :
          // Hospital / Accident
          i === 3 ? ' md:row-span-3 md:col-span-3  bg-[#efedff]' :
          i === 4 ? ' md:row-span-1 md:col-span-3  bg-[#efedff]' :
          i === 5 ? ' md:row-span-1 md:col-span-2  bg-[#efedff]' :
          // Travel insurance 
          i === 6 ? ' md:col-span-2 md:row-span-3 bg-[#eef2e4]' :
          // Corporate soloutions
          i === 7 ? ' md:col-span-3 md:row-span-3 text-white bg-[#627d9f]' :
          //General insurance
          i === 8 ? ' md:col-span-3 md:row-span-1 bg-[#ddeae4]' :
          // Legacy planning
          i === 9 ? ' md:col-span-2  bg-[#fcd6ca]' : '';
                   
          return (
            // Accepts the class name to style the grid
            <div id="Products-scroll" className={`${baseClassName} p-3 md:p-8 justify-between  hover:scale-[1.02] hover:shadow-2xl`}  key={i}
              onClick={() => window.location.href = `/services/01`}>
              <div className="space-y-2 mt-3">
                <DynamicIcon iconName={card.icons}/>
                <h1 className="lg:text-4xl text-xl   font-bold mb-6 md:w-full">
                  {card.title}
                </h1>
              </div>
              <div className="relative w-full h-full max-h-[500px] ">
                <Image
                  draggable={false}
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <LearnButton text="Get Protected Now!" className="text-sm" href="/services/01" text_color="whitesmoke" />
            </div>
          )
        })
      }
    </div>
  );
}

