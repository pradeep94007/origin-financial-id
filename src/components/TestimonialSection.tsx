import { cTestimonials } from "@/app/Constants"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"

type Props = {}

const TestimonialSection = (props: Props) => {
  return (
    <section id="Testimonials" className=" px-5 lg:max-screen lg:my-32 lg:mx-auto ">
      <h1 className='font-bold md:text-4xl text-3xl mb-10 '>What people say</h1>

      <div className="overflow-x-hidden cursor-pointer">
        <Carousel className="mx-auto md:w-[90%] ">
          <CarouselContent className="gap-1 md:w-[100%] w-[95%]">
            {/* Basis is to control the size of the review cards (basis-1/3)*/}
            {cTestimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className=" lg:max-w-[50%] md:max-w-[75%] flex w-full "
              >
                <div key={index} className='flex md:min-h-[300px] min-h-[250px] w-full'>
                  <Card className='card bg-yellow flex  flex-grow rounded-2xl relative'>
                    <CardContent className='flex flex-col mx-5  h-full justify-between p-5 space-y-8'>
                      <h1 className='font-semibold text-3xl'>{item.title}</h1>
                      <span className="text-slate-500" >{item.quote} </span>
                      <div className="mt-auto">
                        <span className="font-semibold text-slate-600 ">{item.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious className="sm:flex hidden shadow-2xl" />
          <CarouselNext className="sm:flex hidden" />
        </Carousel>
      </div>
    </section>
  )
}

export default TestimonialSection