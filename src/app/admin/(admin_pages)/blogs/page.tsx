import React from "react";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import AdminCollapse from "@/components/AdminCollapse";
import AdminImageDragAndDrop from "@/components/AdminImageDragAndDrop";
import getData from "@/app/utils/getData";
import ToggleButton from "@/components/admin/ToggleButton";
import AddBlog from "@/components/admin/AddBlog";
import DeleteDataButton from "@/components/admin/DeleteDataButton";
import AdmindropList from "@/components/admin/AdmindropList";
import BlogDropList from "./BlogDropList";
import BlogDetails from "./BlogDetails";

export default async function Blogs() {
  const blogsData = await getData("/api/blog");
  const blogsTags = await getData("/api/blogtags");

  console.log(blogsTags);

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Blog section" />
      <PageSubHeader subheader="Customize the Blog section" />
      <span className="text-[#BFBFBF] text-[15px]">3/3</span>
      <div className="grid gap-5 mt-10">
        {/* Blogs */}
        <div>
          <div className="flex-auto lg:flex-1 bg-slate-100 p-5 rounded-md">
            <PageHeader header="Blogs" />
            <AddBlog blogsTags={blogsTags} />
            {blogsData.map((blog: any) => (
              <AdminCollapse
                title={blog.name}
                badge={false}
                open={false}
                key={blog.id}
              >
                <div className="grid lg:grid-cols-2 gap-5">
                  <div>
                    <div className="space-y-4 ">
                      <TextboxEdit
                        section="blog"
                        forField={"name"}
                        data={blog}
                        title={"Name"}
                        value={blog.name}
                        editText={"Edit name"}
                      />
                      <TextboxEdit
                        section="blog"
                        data={blog}
                        forField={"description"}
                        value={blog.description}
                        title={"Description"}
                        editText={"Edit Description"}
                      />
                      <BlogDropList list={blogsTags} data={blog} />
                      <div className="flex items-center gap-3">
                        <p>Featured Blog</p>
                        <ToggleButton
                          section={"blog"}
                          data={blog}
                          fieldFor={"isFeatured"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <SectionImageUploader
                      title={"Blog Image"}
                      data={blog}
                      fieldFor="image"
                      section={"blog"}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <BlogDetails data={blog} />
                </div>
                <DeleteDataButton id={blog.id} section="blog" />
              </AdminCollapse>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
