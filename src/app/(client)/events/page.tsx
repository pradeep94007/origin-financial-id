"use client";
import BreadCrumbs from "@/components/BreadCrumbs";
import HomeHeader from "@/components/HomeHeader";
import AllEvents from "@/components/ui/allEvents";
import { useFetchDataOnClient } from "../../../../utils/useFetchDataOnClient";

export default function Events() {
  const events = useFetchDataOnClient("event");
  return (
    <>
      <HomeHeader visibleSection="Events" />
      <section className="relative h-full flex flex-col items-start justify-start text-start text-white">
        <div className="space-y-4 pt-20 p-5 max-screen mx-auto w-full ">
          <BreadCrumbs
            items={[{ label: "Home", path: "/" }, { label: "Events" }]}
          />
          <h1 className="text-dark font-bold md:text-6xl text-3xl ">
            Past events
          </h1>
          <h2></h2>
        </div>
      </section>
      <AllEvents limit={10} text=" " events={events} />
    </>
  );
}
