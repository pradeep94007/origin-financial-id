import getData from "@/app/utils/getData";
import AdminCollapse from "@/components/AdminCollapse";
import TextboxEdit from "@/components/AdminTextboxEdit";
import AddWhyChooseUs from "@/components/admin/AddWhyChooseUs";
import AdminSingleInput from "@/components/admin/AdminSingleInput";
import DeleteDataButton from "@/components/admin/DeleteDataButton";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";

export default async function whychooseus() {
  const whyChooseUsCards = await getData("/api/whyuscards");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Why Choose Us section" />
      <PageSubHeader subheader="Customize the wcu section" />
      <span className="text-[#BFBFBF] text-[15px]">1/1</span>
      <div className="bg-[#EFF3F9] p-5 mt-10 rounded">
        <PageHeader header="Why Choose Us" />
        <AddWhyChooseUs />
        {whyChooseUsCards.map((data: any) => (
          <AdminCollapse
            title={data.title}
            open={false}
            badge={false}
            key={data.id}
          >
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <TextboxEdit
                  data={data}
                  section="whyuscards"
                  title={"Title"}
                  forField={"title"}
                  value={data.title}
                  editText={"Edit title"}
                />
                <AdminSingleInput
                  title={"Color for card"}
                  section="whyuscards"
                  data={data}
                  value={data.color}
                  forField={"color"}
                />
                <AdminSingleInput
                  title={"Card Icon"}
                  section="whyuscards"
                  data={data}
                  value={data.icon}
                  forField={"icon"}
                />
              </div>
              <div className="space-y-4">
                <TextboxEdit
                  section="whyuscards"
                  data={data}
                  title={"RedirectTo"}
                  forField={"redirectTo"}
                  value={data.redirectTo}
                  editText={"Edit RedirectTo"}
                />
                <TextboxEdit
                  section="whyuscards"
                  isTextArea={true}
                  data={data}
                  title={"Description"}
                  forField={"description"}
                  value={data.description}
                  editText={"Edit Description"}
                />
                {/* <SectionImageUploader
                  title={"Upload Icon"}
                  data={data}
                  fieldFor="icon"
                  section={"whyuscards"}
                /> */}
              </div>
              <DeleteDataButton id={data.id} section="whyuscards" />
            </div>
          </AdminCollapse>
        ))}
      </div>
    </section>
  );
}
