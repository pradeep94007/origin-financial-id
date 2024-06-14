import LoadingSkeleton from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SlideInFromLeft } from "./animations/animations";

export default function EventCard({
  id,
  name,
  description,
  dateOfEvent,
  location,
  bannerImage,
}: any) {
  return (
    <Link href={`/events/${id}`}>
      {/* // <Link href={`/events/01`} > */}
      <SlideInFromLeft className="mx-auto bg-whitesmoke lg:rounded-l-md rounded-t-md overflow-hidden md:p-0 hover:shadow-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <Image
                draggable={false}
                src={bannerImage}
                width={500}
                height={350}
                loading="lazy"
                alt="events pic"
                className="object-cover aspect-[2.5/1.5] md:min-h-[200px] md:h-auto max-h-[250px] w-full md:w-auto lg:rounded-l-md md:rounded-t-none  rounded-t-md"
              />
            </Suspense>
          </div>
          <div className="py-5 md:p-8 p-1">
            <div className="flex md:flex-row flex-col gap-2 text-white bg-purple md:w-max rounded-2xl p-2  lg:mx-0 font-semibold text-sm lg:text-md">
              <span className="pe-2 border-e-[3px] md:border-slate-300 ">
                {dateOfEvent}
              </span>
              <span className="pe-2 border-e-[3px] md:border-purple border-slate-300">
                {location}
              </span>
            </div>
            <div className="p-2">
              <div className="tracking-wide md:text-2xl text-xl my-5 text-dark font-bold">
                {name}
              </div>
              <p className=" text-slate-500 line-clamp-4">{description}</p>
            </div>
          </div>
        </div>
      </SlideInFromLeft>
    </Link>
  );
}
