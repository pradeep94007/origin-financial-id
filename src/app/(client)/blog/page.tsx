import getData from "@/app/utils/getData";
import BlogPosts from "@/components/BlogPosts";
import BreadCrumbs from "@/components/BreadCrumbs";
import HomeHeader from "@/components/HomeHeader";

export default async function Blog() {
  const blogPosts = await getData("/api/blog");
  return (
    <>
      <HomeHeader visibleSection="Blogs" />
      <section
        className="relative h-full flex flex-col items-start justify-start text-start text-white"
        id="Blogs"
      >
        <div className="space-y-5 z-10 pt-20 p-5 max-screen mx-auto w-full ">
          <div className="-mb-2">
            <BreadCrumbs
              items={[{ label: "Home", path: "/" }, { label: "Blogs" }]}
            />
          </div>
          <h1 className="md:text-6xl text-5xl font-bold text-dark">Insights</h1>
        </div>
      </section>
      <BlogPosts text=" " show_featured_grid={true} blogPosts={blogPosts} />
    </>
  );
}
