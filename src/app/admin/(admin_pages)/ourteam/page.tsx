import React from "react";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import AdminCollapse from "@/components/AdminCollapse";
import getData from "@/app/utils/getData";
import AddEvent from "@/components/admin/AddEvent";
import DeleteDataButton from "@/components/admin/DeleteDataButton";
import AddOurTeam from "@/components/admin/AddOurTeam";

export default async function Ourteam() {
  const ourTeamData = await getData("/api/ourteam");
  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Our Team Page" />
      <PageSubHeader subheader="Customize the team page" />
      <span className="text-[#BFBFBF] text-[15px]">1/1</span>
      <div className="mt-5">
        <div className="flex-auto lg:flex-1 bg-[#EFF3F9] p-5 rounded-md">
          <PageHeader header="Our Teams" />
          <AddOurTeam />
          {ourTeamData.map((team: any) => (
            <AdminCollapse
              title={team.fullName}
              key={team.id}
              badge={false}
              open={false}
            >
              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <div>
                    <TextboxEdit
                      section="ourteam"
                      forField={"fullName"}
                      data={team}
                      title={"Full Name"}
                      value={team.fullName}
                      editText={"change name"}
                    />
                    <div className=" mt-10">
                      <div className="space-y-4">
                        <TextboxEdit
                          rows={4}
                          isTextArea={true}
                          section="ourteam"
                          forField={"professionalQualifications"}
                          data={team}
                          title={"Professional Qualifications"}
                          value={team.professionalQualifications}
                          editText={"Edit P. Qualifications"}
                        />
                        <TextboxEdit
                          rows={4}
                          isTextArea={true}
                          section="ourteam"
                          forField={"certificationQualification"}
                          data={team}
                          title={"Certification Qualification"}
                          value={team.certificationQualification}
                          editText={"Edit C. Qualification"}
                        />
                        <TextboxEdit
                          isTextArea={true}
                          section="ourteam"
                          forField={"description"}
                          data={team}
                          title={"Description"}
                          value={team.description}
                          editText={"Edit description"}
                        />
                        <TextboxEdit
                          section="ourteam"
                          forField={"meansToYou"}
                          data={team}
                          title={"Means To You"}
                          value={team.meansToYou}
                          editText={"change meansToYou"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <TextboxEdit
                      section="ourteam"
                      forField={"role"}
                      data={team}
                      title={"Team Role"}
                      value={team.role}
                      editText={"Change role"}
                    />
                    <div className="mt-10 space-y-4">
                      <SectionImageUploader
                        title={"Profile Image"}
                        data={team}
                        fieldFor="profileImage"
                        section={"ourteam"}
                      />
                      <SectionImageUploader
                        title={"Banner Image"}
                        data={team}
                        fieldFor="bannerImage"
                        section={"ourteam"}
                      />
                      <TextboxEdit
                        section="ourteam"
                        forField={"hobbies"}
                        data={team}
                        title={"Hobbies"}
                        value={team.hobbies}
                        editText={"change hobbies"}
                      />
                    </div>
                  </div>
                </div>
                <DeleteDataButton id={team.id} section="ourteam" />
              </div>
            </AdminCollapse>
          ))}
        </div>
      </div>
    </section>
  );
}
