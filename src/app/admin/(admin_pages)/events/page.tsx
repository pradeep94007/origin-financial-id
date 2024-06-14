import React from "react";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import AdminCollapse from "@/components/AdminCollapse";
import getData from "@/app/utils/getData";
import AddEvent from "@/components/admin/AddEvent";
import DeleteDataButton from "@/components/admin/DeleteDataButton";

export default async function Events() {
  const eventData = await getData("/api/event");
  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Event section" />
      <PageSubHeader subheader="Customize the Blog section" />
      <span className="text-[#BFBFBF] text-[15px]">3/3</span>
      <div className="mt-5">
        <div className="flex-auto lg:flex-1 bg-[#EFF3F9] p-5 rounded-md">
          <PageHeader header="Events" />
          <AddEvent />
          {eventData.map((event: any) => (
            <AdminCollapse title={event.title} badge={false} open={false}>
              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <div>
                    <TextboxEdit
                      section="event"
                      forField={"dateOfEvent"}
                      data={event}
                      title={"Event Date time"}
                      value={event.dateOfEvent}
                      editText={"change date"}
                    />
                    <div className=" mt-10">
                      <div className="space-y-4">
                        <TextboxEdit
                          section="event"
                          forField={"title"}
                          data={event}
                          title={"Title"}
                          value={event.title}
                          editText={"Edit title"}
                        />
                        <TextboxEdit
                          section="event"
                          forField={"name"}
                          data={event}
                          title={"Name"}
                          value={event.name}
                          editText={"Edit Name"}
                        />
                        <TextboxEdit
                          isTextArea={true}
                          section="event"
                          forField={"description"}
                          data={event}
                          title={"Description"}
                          value={event.description}
                          editText={"Edit description"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <TextboxEdit
                      section="event"
                      forField={"location"}
                      data={event}
                      title={"Event Location"}
                      value={event.location}
                      editText={"Change location"}
                    />
                    <div className="mt-10">
                      <SectionImageUploader
                        title={"Event Image"}
                        data={event}
                        fieldFor="bannerImage"
                        section={"event"}
                      />
                    </div>
                  </div>
                </div>
                <DeleteDataButton id={event.id} section="event" />
              </div>
            </AdminCollapse>
          ))}
        </div>
      </div>
    </section>
  );
}
