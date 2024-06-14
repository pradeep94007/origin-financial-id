"use client"
import { useFetchDataOnClient } from '../../../utils/useFetchDataOnClient'
import EventCard from '../EventCard'
import { SlideInFromLeft } from '../animations/animations'
import { Button } from './button'

type Props = {
  limit?: number,
  text?: string,
}

const AllEvents = ({ limit, text, events }: any) => {
  return (
    <section className="max-screen mx-auto ">
      <div className='flex items-start flex-col gap-5 mb-3 px-5 max-screen'>
        <h1 className='md:text-5xl text-3xl text-start text-dark font-bold md:px-0'>{text ? text : "Featured events"}</h1>
      </div>
      <div className="flex flex-col gap-6 p-5">
        {events.map((event: any, index: number) => (
          <SlideInFromLeft key={index}>
            <EventCard key={index} id={event.id} name={event.name} description={event.description} location={event.location} dateOfEvent={event.dateOfEvent} bannerImage={event.bannerImage} />
          </SlideInFromLeft>
        ))}
      </div>
      <div className="my-10 text-center flex justify-center items-center w-full">
        <Button >Load more</Button>
      </div>
    </section>
  )
}

export default AllEvents