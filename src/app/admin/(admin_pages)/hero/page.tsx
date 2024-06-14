import getData from "@/app/utils/getData";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";

export default async function HomeHeroPage() {
  const herosecdata = await getData("/api/herosection");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Hero section" />
      <PageSubHeader subheader="Customize the hero section" />
      <span className="text-[#BFBFBF] text-[15px]">3/3</span>
      <div className="mt-10 space-y-4">
        <TextboxEdit
          title={"Title"}
          data={herosecdata}
          forField={"title"}
          section={"herosection"}
          value={herosecdata.title}
          editText={"Edit Title"}
        />
        <TextboxEdit
          title={"Description"}
          data={herosecdata}
          section={"herosection"}
          forField={"description"}
          value={herosecdata.description}
          editText={"Edit Description"}
        />
        <TextboxEdit
          title={"Button Text"}
          section={"herosection"}
          data={herosecdata}
          forField={"buttonText"}
          value={herosecdata.buttonText}
          editText={"Edit Button Text"}
        />
      </div>
    </section>
  );
}
