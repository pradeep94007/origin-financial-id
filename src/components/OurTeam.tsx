import ImageCarousel from "./ImageCarousel";
import { SlideInFromLeft } from "./animations/animations";
import { Carousel, CarouselContent } from "./ui/carousel";

const Team = [
  {
    name: "Emma",
    testimonials: "Working with Origins Financial has been transformative. The team's commitment to innovative financial solutions empowers us to offer unparalleled service to our clients.",
    img: "/Assets/Team-Image/team1.png",
    role: 'Financial advisor'
  },
  {
    name: "Ethan",
    testimonials: "At Origins Financial, I've grown professionally thanks to a culture that values continuous learning and excellence in financial advising.",
    img: "/Assets/Team-Image/team2.png",
    role: 'Financial advisor'
  },
  {
    name: "Oliver",
    testimonials: "The collaborative environment at Origins Financial allows us to leverage collective expertise, ensuring the best outcomes for our clients and professional growth for advisors.",
    img: "/Assets/events-assets/event-02.jpg",
    role: 'Financial advisor'
  },
  {
    name: "Sophia",
    testimonials: "Origins Financial stands out for its forward-thinking approach and dedication to ethical financial practices. It's rewarding to be part of a team that genuinely cares about clients' financial well-being.",
    img: "/Assets/events-assets/event-01.jpg",
    role: 'Financial advisor'
  },
  {
    name: "Isabella",
    testimonials: "Being a financial advisor with Origins Financial has allowed me to truly make a difference in people's lives by helping them achieve their financial goals with confidence and clarity.",
    img: "/Assets/events-assets/event-02.jpg",
    role: 'Financial advisor'
  }
];

type props = {
  NoAnimate?: boolean
  NoShowText? :boolean 
}

export default function OurTeam({ NoAnimate, NoShowText }: props) {

  return (
    <>
      <SlideInFromLeft animate={!NoAnimate} className="overflow-x-hidden cursor-pointer flex justify-center h-full flex-col mt-10">
        <Carousel>
          <CarouselContent className="lg:max-w-[40%] md:max-w-[55%] w-[95%]" >
             <ImageCarousel TeamArray={Team}  NoShowText={!NoShowText} />
          </CarouselContent>
        </Carousel>
      </SlideInFromLeft>
    </>
  );
}
