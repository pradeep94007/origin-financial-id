import getData from "@/app/utils/getData";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import React from "react";

export default async function HomeMissionVision() {
  const missionData = await getData("/api/missionsection");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Mission and vision section" />
      <PageSubHeader subheader="Customize the mission and vision section" />
      <span className="text-[#BFBFBF] text-[15px]">4/4</span>
      <div className="mt-10 grid sm:grid-cols-2 gap-2">
        <div className="space-y-4">
          <TextboxEdit
            title={"Mission Title"}
            data={missionData}
            section={"missionsection"}
            forField={"missionTitle"}
            value={missionData.missionTitle}
            editText={"Edit missin title"}
          />
          <TextboxEdit
            title={"Mission Text"}
            data={missionData}
            section={"missionsection"}
            forField={"missionText"}
            value={missionData.missionText}
            editText={"Edit Description"}
          />
          <TextboxEdit
            title={"Vision Text"}
            section={"missionsection"}
            forField={"visionText"}
            value={missionData.visionText}
            data={missionData}
            editText={"Edit Vision Text"}
          />
        </div>
        <div>
          <SectionImageUploader
            title={"Section Image"}
            data={missionData}
            fieldFor="sectionImage"
            section={"missionsection"}
          />
        </div>
      </div>
    </section>
  );
}
