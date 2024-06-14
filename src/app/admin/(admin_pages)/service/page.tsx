import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import getData from "@/app/utils/getData";
import AddServiceCard from "@/components/admin/AddServiceCard";
import AdminCollapse from "@/components/AdminCollapse";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import DeleteDataButton from "@/components/admin/DeleteDataButton";

export default async function HomeServiceSection() {
  const servicesSecData = await getData("/api/servicesection");
  const servicesData = await getData("/api/service");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="service section" />
      <PageSubHeader subheader="Customize the service section" />
      <span className="text-[#BFBFBF] text-[15px]">2/2</span> 
      <div className="mt-10">
        <TextboxEdit
          title={"Title"}
          section="servicesection"
          data={servicesSecData}
          forField={"serviceSectionTitle"}
          value={servicesSecData.serviceSectionTitle}
          editText={"Edit services title"}
        />
      </div>
      <div className="bg-[#EFF3F9] p-5 mt-10 rounded">
        <PageHeader header="Services card" />
        <AddServiceCard />
        {servicesData.map((service: any) => (
          <AdminCollapse
            title={service.serviceName}
            open={false}
            badge={false}
            key={service.id}
          >
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <TextboxEdit
                  data={service}
                  section="service"
                  title={"Name"}
                  forField={"serviceName"}
                  value={service.serviceName}
                  editText={"Edit name"}
                />
                <TextboxEdit
                  section="service"
                  data={service}
                  title={"Description"}
                  forField={"serviceDescription"}
                  value={service.serviceDescription}
                  editText={"Edit Description"}
                />
                <TextboxEdit
                  section="service"
                  data={service}
                  title={"Redirect To"}
                  forField={"redirectTo"}
                  value={service.redirectTo}
                  editText={"Edit redirect"}
                />
              </div>
              <div>
                <SectionImageUploader
                  title={"Service Image"}
                  data={service}
                  fieldFor="serviceImage"
                  section={"service"}
                />
              </div>
              <DeleteDataButton id={service.id} section="service" />
            </div>
          </AdminCollapse>
        ))}
      </div>
    </section>
  );
}
