import HomeSvg2 from "@/app/(SVG)/HomeFamily";
import { SlideInFromLeft } from "./animations/animations";
import { Button } from "./ui/button";
import { useFetchDataOnClient } from "../../utils/useFetchDataOnClient";

type Props = {};

const HeroSection = (props: Props) => {
  const heroSectionData: any = useFetchDataOnClient("herosection");

  return (
    <section
      id="Home"
      className="max-screen lg:rounded-xl mx-auto md:grid grid-cols-2 h-full md:gap-24  items-start  justify-start flex flex-col-reverse md:flex-row p-5 2xl:gap-32"
    >
      {heroSectionData ? (
        <SlideInFromLeft className="">
          <h1 className="2xl:text-6xl lg:text-5xl leading-none text-3xl font-bold text-dark w-full md:mt-10 ">
            {heroSectionData.title}
          </h1>
          <div>
            <p className="text-slate-500 2xl:my-12 lg:my-10 md:my-5 my-10 lg:text-lg md:text-md  ">
              {heroSectionData.description}
            </p>
            {heroSectionData.buttonText && (
              <Button className="relative">{heroSectionData.buttonText}</Button>
            )}
          </div>
        </SlideInFromLeft>
      ) : null}
      <HomeSvg2 className="2xl:-mt-10" />
    </section>
  );
};

export default HeroSection;
