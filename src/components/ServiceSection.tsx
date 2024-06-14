import React from "react";
import ServicesCards from "./ServiceCards";
import { useFetchDataOnClient } from "../../utils/useFetchDataOnClient";

type Props = {};

const ServiceSection = (props: Props) => {
  const serviceSecData: any = useFetchDataOnClient("servicesection");
  return (
    <section id="Services" className="relative">
      <div className="flex flex-col gap-3 my-32 px-5 max-screen mx-auto">
        <h1 className="lg:text-4xl text-3xl mb-5 font-extrabold text-dark">
          {serviceSecData?.serviceSectionTitle}
        </h1>
        <ServicesCards />
      </div>
    </section>
  );
};

export default ServiceSection;
