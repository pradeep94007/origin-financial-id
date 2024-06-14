"use client";
import LearnButton from "@/components/(custom buttons)/learnbutton";
import BreadCrumbs from "@/components/BreadCrumbs";
import HomeHeader from "@/components/HomeHeader";
import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchDataOnClient } from "../../../../utils/useFetchDataOnClient";

type Props = {};

const Team = [
  {
    name: "Emma",
    testimonials:
      "Working with Origins Financial has been transformative. The team's commitment to innovative financial solutions empowers us to offer unparalleled service to our clients.",
    img: "/Assets/Team-Image/team1.png",
    role: "Financial advisor",
  },
  {
    name: "Ethan",
    testimonials:
      "At Origins Financial, I've grown professionally thanks to a culture that values continuous learning and excellence in financial advising.",
    img: "/Assets/Team-Image/team2.png",
    role: "Financial advisor",
  },
  {
    name: "Oliver",
    testimonials:
      "The collaborative environment at Origins Financial allows us to leverage collective expertise, ensuring the best outcomes for our clients and professional growth for advisors.",
    img: "/Assets/events-assets/event-02.jpg",
    role: "Financial advisor",
  },
  {
    name: "Sophia",
    testimonials:
      "Origins Financial stands out for its forward-thinking approach and dedication to ethical financial practices. It's rewarding to be part of a team that genuinely cares about clients' financial well-being.",
    img: "/Assets/events-assets/event-01.jpg",
    role: "Financial advisor",
  },
  {
    name: "Isabella",
    testimonials:
      "Being a financial advisor with Origins Financial has allowed me to truly make a difference in people's lives by helping them achieve their financial goals with confidence and clarity.",
    img: "/Assets/events-assets/event-02.jpg",
    role: "Financial advisor",
  },
];

const page = (props: Props) => {
  const careerSection: any = useFetchDataOnClient("careersection")
  const careerTestimonials: any = useFetchDataOnClient("origintestimonial")
  return (
    <>
      <HomeHeader visibleSection="Career" />
      <section
        className="relative h-full mx-auto flex flex-col items-start justify-start text-start text-white"
        id="Career"
      >
        <div className="space-y-3 z-10 p-5 mx-auto max-w-[1400px] w-full ">
          <div className="-mb-2">
            <BreadCrumbs
              items={[{ label: "Home", path: "/" }, { label: "Career" }]}
            />
          </div>
          <h1 className="text-dark py-10 md:text-6xl font-bold text-3xl ">
            Career with us.
          </h1>
        </div>
      </section>

      <section className="mt-10 p-5 my-20 flex flex-col justify-center gap-5 rounded-2xl container  ">
        <div className="space-y-8">
          <h1 className="font-bold md:text-4xl text-2xl">
            {careerSection?.title}
          </h1>
          <br />
          <p className="text-lg text-slate-500">{careerSection?.description}</p>
          <br />
          <br />
          <div className='flex justify-center overflow-x-hidden cursor-pointer'>
            <Carousel className=''>
              <CarouselContent className='lg:max-w-[40%] md:max-w-[55%] w-[95%] animate-loop-scroll'>
                <ImageCarousel TeamArray={careerTestimonials} NoAnimate />
              </CarouselContent>
              <CarouselPrevious className="sm:flex hidden shadow-none " />
              <CarouselNext className="sm:flex hidden shadow-none  transform-none" />
            </Carousel>
          </div>
          <div className=" gap-8 flex items-center   ">
            <div>
              <LearnButton
                text={careerSection?.button1Text}
                className="text-black"
                href="/our-team"
              />
            </div>
            <a href="/career" className="w-1/2">
              <Button>{careerSection?.button2Text}</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
