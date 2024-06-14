"use client"
import BreadCrumbs from "@/components/BreadCrumbs";
import HomeHeader from "@/components/HomeHeader";
import AllEvents from "@/components/ui/allEvents";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFetchDataOnClient } from "../../../../../utils/useFetchDataOnClient";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


export default function EventDetails({ params }: { params: { id: string } }) {
  const [event, setEvent]: any = useState({})
  const [pastEvents, setPastEvent]: any = useState([])

  const fetchEvent = async () => {
    try {
      const events = await fetch(`/api/event?id=${params.id}&show=true`);
      const resp = await events.json();
      setEvent(resp.event);
      setPastEvent(resp.pastEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [params.id]);


  return (
    <div className="bg-dove">
      <HomeHeader visibleSection="Events" />
      <div className="h-[350px] lg:h-[450px] relative">
        <Image draggable={false}
          src={event.bannerImage}
          alt="event main pic"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center rounded-2xl"
        />
        {/* <div className="absolute lg:ml-16 left-3 bottom-8 bg-whitesmoke text-[rgb(23,15,71)] font-semibold px-10 py-3 pt-[14px] text-xl lg:text-2xl rounded-full">
          Paid
        </div> */}
      </div>
      <section className="max-screen mx-auto p-5 mb-20">
        <div className="mb-5">
          <BreadCrumbs
            items={[
              { label: "Events", path: "/events" },
              { label: event.name },
            ]}
          />
        </div>
        <div className="mt-10 mb-10 flex flex-col gap-6 ">
          <div className="flex md:flex-row flex-col gap-2 md:w-max text-white bg-purple p-2 rounded-2xl font-semibold text-md lg:text-xl">
            <span className="pe-2 border-e-[3px] md:border-slate-300 ">{event.dateOfEvent}</span>
            <span className="pe-2 border-e-[3px] md:border-purple border-slate-300">{event.location}</span>
          </div>
          <div className="flex lg:flex-row flex-col md:my-10 my-2 gap-6 lg:gap-10 items-start lg:items-center justify-between">
            <h1 className="lg:text-5xl text-2xl font-semibold">
              {event.title}
            </h1>
          </div>
          <p className="text-gray-500 text-md ">
            {event.description}
          </p>
          
        </div>
        <Button className="my-5 md:w-1/5 w-full">Sign up</Button>
      </section>
      <AllEvents limit={5} text="Other Events" events={pastEvents}/>
    </div>
  );
}
