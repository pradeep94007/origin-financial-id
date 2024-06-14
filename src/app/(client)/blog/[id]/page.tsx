import LoadingSkeleton from "@/app/loading";
import getData from "@/app/utils/getData";
import BlogPosts from "@/components/BlogPosts";
import BreadCrumbs from "@/components/BreadCrumbs";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import { Suspense } from "react";

export default async function IndiBlog({ params }: { params: { id: string } }) {
  const blogPosts = await getData("/api/blog");
  const otherBlogPosts = blogPosts.filter((blog: any) => blog.id !== params.id);
  const [currentBlog] = blogPosts.filter((blog: any) => blog.id == params.id);

  return (
    <>
      <HomeHeader visibleSection="Blogs" />
      <section className="max-screen mx-auto lg:mt-20 p-5">
        <div className="my-5 mx-1">
          <BreadCrumbs
            items={[
              { label: "All Blogs", path: "/blog" },
              { label: "Blog title" },
            ]}
          />
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-xl font-bold mb-5">
            {currentBlog.name}
          </h1>
          <span>14 July 2024</span>
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <Image
            draggable={false}
            src={currentBlog.image}
            priority
            width={500}
            height={500}
            alt="blog-post-image"
            className="max-h-[500px] object-cover object-top rounded-2xl w-full"
          />
        </Suspense>
        <div
          className="mt-5 py-10 flex flex-col gap-5 me-2 ms-2  rounded-2xl blogDetail"
          dangerouslySetInnerHTML={{ __html: currentBlog.details }}
        ></div>
      </section>
      <div className="m-5">
        <BlogPosts
          blogPosts={otherBlogPosts}
          limit={10}
          text="Other releated blogs"
          show_featured_grid={false}
        />
      </div>
    </>
  );
}
