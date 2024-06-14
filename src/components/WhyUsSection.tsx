import { cWhyUs } from "@/app/Constants";
import StackCards from "./StackCards";
import { useFetchDataOnClient } from "../../utils/useFetchDataOnClient";

const WhyUsSection = () => {
  const whyChooseUsData = useFetchDataOnClient("whyuscards");
  return (
    <section className="max-screen mx-auto p-5 md:my-32 mt-20 relative">
      <div id="Why-us">
        <StackCards content={whyChooseUsData} />
      </div>
    </section>
  );
};

export default WhyUsSection;
