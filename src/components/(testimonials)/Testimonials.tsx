import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ReviewItems from "./ReviewItems";
import { SlideInFromLeft } from "../animations/animations";

type props = {
  name?: string;
  animate?: boolean;
};

export default function Testimonials({ name, animate, testimonials }: any) {
  console.log(testimonials);
  return (
    <section className="px-3 lg:px-0">
      <div className="flex max-screen flex-col gap-3 mb-9 xl:w-4/5 lg:mx-10">
        <h1 className="md:text-5xl p-2 text-xl font-bold ">
          Here are some things that people say about {name ? name : "us"}.
        </h1>
      </div>
      {JSON.stringify(testimonials)}
      <SlideInFromLeft
        animate={animate}
        className="overflow-x-hidden cursor-pointer"
      >
        <Carousel className="w-[90%] lg:w-4/5 mx-auto">
          <CarouselContent className="-ml-1 gap-3">
            {/* Basis is to control the size of the review cards (basis-1/3)*/}
            {testimonials &&
              testimonials.map((data: any, index: number) => (
                <CarouselItem
                  key={index}
                  className="pl-1 lg:max-w-[85%]  w-full"
                >
                  <div className="p-1">
                    <Card className="bg-yellow rounded-2xl">
                      <CardContent>
                        <ReviewItems data={data} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="sm:flex hidden shadow-none " />
          <CarouselNext className="sm:flex hidden shadow-none  transform-none" />
        </Carousel>
      </SlideInFromLeft>
    </section>
  );
}
