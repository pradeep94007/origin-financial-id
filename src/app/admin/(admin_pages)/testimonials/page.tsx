import React from "react";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import { FiChevronDown } from "react-icons/fi";
import TestimonialCollapse from "@/components/AdminCollapse";
import AdminImageDragAndDrop from "@/components/AdminImageDragAndDrop";
import AdminTestimonialCard from "@/components/AdminTestimonialCard";
import getData from "@/app/utils/getData";
import AddTestimonial from "@/components/admin/AddTestimonial";
import DeleteDataButton from "@/components/admin/DeleteDataButton";

export default async function HomeTestimonialsSection() {
  const teamtestimonial = await getData("/api/teamtestimonial");
  const ourTeamtestimonial = await getData("/api/origintestimonial");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Testimonials section" />
      <PageSubHeader subheader="Customize the mission and vision section" />
      <span className="text-[#BFBFBF] text-[15px]">2/2</span>
      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        {/* PUBLIC TESTIMONIALS CARD */}
        <div>
          <div className="flex-auto lg:flex-1 bg-slate-100 p-5 rounded-md">
            <PageHeader header="Public Testimonials cards" />
            {teamtestimonial.map((testimonial: any, index: number) => {
              if (testimonial.status == "rejected") return null;
              return (
                <TestimonialCollapse
                  title={`New testimonial ${index + 1}`}
                  badge={index == 0 ? true : false}
                  open
                >
                  <AdminTestimonialCard
                    id={testimonial.id}
                    createdBy={testimonial.name}
                    createDate="29 Feb 2024"
                    approvedBy=""
                    title={`New testimonial ${index + 1}`}
                    description={testimonial.description}
                    status={testimonial.status}
                  />
                </TestimonialCollapse>
              );
            })}
          </div>
        </div>
        {/* ORIGINS TESTIMONIALS CARD */}
        <div>
          <div className="flex-auto lg:flex-1 bg-slate-100 p-5 rounded-md ">
            <PageHeader header="Origins Testimonials cards" />
            <AddTestimonial />
            {ourTeamtestimonial.map((testimonial: any, index: number) => (
              <TestimonialCollapse
                title={`testimonial ${index + 1}`}
                badge={false}
                open={false}
              >
                <div className="space-y-4 ">
                  <TextboxEdit
                    title={"Name"}
                    section="origintestimonial"
                    value={testimonial.name}
                    forField={"name"}
                    data={testimonial}
                    editText={"Edit name"}
                  />
                  <TextboxEdit
                    title={"Role"}
                    forField={"role"}
                    section="origintestimonial"
                    data={testimonial}
                    value={testimonial.role}
                    editText={"Role Edit"}
                  />
                  <TextboxEdit
                    title={"Testimonial"}
                    data={testimonial}
                    section="origintestimonial"
                    forField={"testimonialDesc"}
                    value={testimonial.testimonialDesc}
                    editText={"Edit testimonial"}
                  />
                  <SectionImageUploader
                    title={"Testimonial image"}
                    data={testimonial}
                    fieldFor="image"
                    section={"origintestimonial"}
                  />
                </div>
                <DeleteDataButton
                  id={testimonial.id}
                  section="origintestimonial"
                />
              </TestimonialCollapse>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
