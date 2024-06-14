import React from "react";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import AdminCollapse from "@/components/AdminCollapse";
import AdminImageDragAndDrop from "@/components/AdminImageDragAndDrop";
import AdminFaqQuestion from "@/components/AdminFaqQuestion";
import getData from "@/app/utils/getData";
import DeleteDataButton from "@/components/admin/DeleteDataButton";
import AddFaq from "@/components/admin/AddFaq";

export default async function HomeFaqSection() {
  const faqSection = await getData("/api/faqsection");
  const faqData = await getData("/api/faqs");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="FAQ section" />
      <PageSubHeader subheader="Customize the FAQ section" />
      <span className="text-[#BFBFBF] text-[15px]">2/2</span>
      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        {/* TITLE */}
        <div>
          <TextboxEdit
            title={"Name"}
            forField={"title"}
            section="faqsection"
            data={faqSection}
            value={faqSection.title}
            editText={"Edit name"}
          />
          <div className="flex-auto lg:flex-1 bg-[#EFF3F9] p-5 mt-5 rounded-md">
            <PageHeader header="Questions" />
            <AddFaq />
            {faqData.map((faq: any, index: number) => (
              <AdminCollapse
                title={`Question ${index + 1}`}
                badge={false}
                open={false}
              >
                <div className="space-y-4">
                  <TextboxEdit
                    section="faqs"
                    forField={"question"}
                    data={faq}
                    title={"Question"}
                    value={faq.question}
                    editText={""}
                  />
                  <TextboxEdit
                    section="faqs"
                    forField={"answer"}
                    data={faq}
                    title={"Answer"}
                    value={faq.answer}
                    editText={""}
                  />
                  <DeleteDataButton id={faq.id} section="faqs" />
                </div>
              </AdminCollapse>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
