import React from "react";
import { FiChevronDown } from "react-icons/fi";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";

async function getCareerPageData() {
  try {
    const res = await fetch(`${process.env.URL}/api/careerpage`, {
      next: {
        revalidate: 30,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getCareerSecData() {
  try {
    const res = await fetch(`${process.env.URL}/api/careersection`, {
      next: {
        revalidate: 30,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default async function HomeCareerSection() {
  const careerPageData = await getCareerPageData();
  const careerSectionData = await getCareerSecData();

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <div className="grid grid-cols-2">
        <div>
          <PageHeader header="Career section" />
          <PageSubHeader subheader="Customize the career section" />
          <span className="text-[#BFBFBF] text-[15px]">5/5</span>
          <div className="mt-10 space-y-4">
            <TextboxEdit
              title={"Title"}
              forField={"title"}
              section="careersection"
              value={careerSectionData.title}
              data={careerSectionData}
              editText={"Edit title"}
            />
            <TextboxEdit
              title={"Description"}
              forField={"description"}
              section="careersection"
              value={careerSectionData.description}
              data={careerSectionData}
              editText={"Edit Description"}
            />
            <TextboxEdit
              title={"Button Text"}
              forField={"button1Text"}
              section="careersection"
              value={careerSectionData.button1Text}
              data={careerSectionData}
              editText={"Edit button text"}
            />
            <TextboxEdit
              title={"Button Text"}
              forField={"button2Text"}
              section="careersection"
              value={careerSectionData.button2Text}
              data={careerSectionData}
              editText={"Edit button text"}
            />
          </div>
        </div>
        <div>
          <PageHeader header="Career page" />
          <PageSubHeader subheader="Customize the career page" />
          <span className="text-[#BFBFBF] text-[15px]">3/3</span>
          <div className="mt-10 space-y-4">
            <TextboxEdit
              forField={"title"}
              title={"Title"}
              section="careerpage"
              data={careerPageData}
              value={careerPageData.title}
              editText={"Edit title"}
            />
            <TextboxEdit
              title={"RT description"}
              section="careerpage"
              forField={"RTDescription"}
              data={careerPageData}
              value={careerPageData.RTDescription}
              editText={"Edit Description"}
            />
            <TextboxEdit
              title={"Button Text"}
              data={careerPageData}
              section="careerpage"
              forField={"buttonText"}
              value={careerPageData.buttonText}
              editText={"Edit button text"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
