"use client";

import LoadingSkeleton from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SlideInFromLeft } from "./animations/animations";
import { Button } from "./ui/button";
import FeaturedBlogPost from "./FeaturedBlog";

type props = {
  text?: string;
  blogPosts: Iblogs[];
  limit?: number;
  padding?: string;
  heading?: string;
  show_featured_grid: boolean;
};

export interface Iblogs {
  id: string;
  name: string;
  description: string;
  details: string;
  image: string;
  isFeatured: true;
  tag: {
    name: string;
  };
}

const blogs = [
  {
    id: 1,
    title:
      "Common Pediatric illnesses and this is some long text that shold truncate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: false,
    image: "/Assets/blog_post_image_01.jpg",
  },
  {
    id: 2,
    title: "Common Pediatric illnesses 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: false,
    image: "/Assets/blog_post_image_01.jpg",
  },
  {
    id: 3,
    title: "Common Pediatric illnesses 102",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: false,
    image: "/Assets/blog_post_image_01.jpg",
  },
  {
    id: 4,
    title: "Common Pediatric illnesses 103",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: false,
    image: "/Assets/blog_post_image_01.jpg",
  },
  {
    id: 5,
    title:
      "Common Pediatric illnesses and this is some long text that shold truncate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: true,
    image: "/Assets/event_bg_02.jpg",
  },
  {
    id: 6,
    title: "Common Pediatric illnesses 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: true,
    image: "/Assets/event_bg_02.jpg",
  },
  {
    id: 7,
    title: "Common Pediatric illnesses 102",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: true,
    image: "/Assets/event_bg_02.jpg",
  },
  {
    id: 8,
    title: "Common Pediatric illnesses 103",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
    category: "Insurance",
    featured: true,
    image: "/Assets/event_bg_02.jpg",
  },
];

// Show feature grid if show_feature_grid flag is true
// Show feature gird flag is false , show everything

export default function BlogPosts({
  text,
  limit,
  padding,
  heading,
  show_featured_grid,
  blogPosts,
}: props) {
  let displayedBlogs: Iblogs[] = [];
  let featuredBlogsArray: Iblogs[] = [];

  // Show all blogs if Show_featured_grid is false
  if (!show_featured_grid) {
    displayedBlogs = [...blogPosts];
  } else {
    // If show_featured_grid is false, exclude featured blogs from displayedBlogs
    displayedBlogs = blogPosts.filter((blog: any) => !blog.isFeatured);

    // Collect featured blogs into the featuredBlogs array
    featuredBlogsArray = blogPosts.filter((blog: any) => blog.isFeatured);
  }

  // Sort the blogs to always show featured blogs first
  const sortedBlogs = displayedBlogs
    .sort((a: Iblogs, b: Iblogs) => {
      return Number(b.isFeatured) - Number(a.isFeatured);
    })
    .slice(0, limit);

  return (
    <div className="bg-dove max-screen mx-auto mb-20 ">
      <div
        className={`${
          text == "/" ? "hidden" : "flex"
        }items-start flex-col gap-5  ${padding ? padding : "px-5"}`}
      >
        <p className="text-xl  font-semibold italic text-light tracking-[1px]">
          {heading ? heading : ""}
        </p>
        <h1 className="md:text-5xl text-3xl text-start text-dark font-bold md:mb-20 mb-5">
          {text || text == "/" ? text : "Featured Blogs"}
        </h1>
      </div>
      <SlideInFromLeft className={"flex flex-col gap-8 m-5"}>
        {/* If show_featured_grid is true  */}
        {show_featured_grid && (
          <FeaturedBlogPost featuredBlogArray={featuredBlogsArray} />
        )}
        {sortedBlogs.map((b) => (
          <Link href={`/blog/${b.id}`} key={b.id}>
            <SlideInFromLeft
              className={`${
                show_featured_grid && "lg:mx-10"
              } bg-whitesmoke rounded-l-md rounded-t-md overflow-hidden md:p-0 hover:shadow-2xl `}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Image
                      draggable={false}
                      src={b.image}
                      width={500}
                      height={350}
                      loading="lazy"
                      alt="events pic"
                      className="object-cover object-top md:min-h-[200px]  h-auto max-h-[250px] w-full md:w-auto rounded-tl-md"
                    />
                  </Suspense>
                </div>
                <div className="py-5 p-5">
                  <div className="flex flex-row space-x-3">
                    {/* Show feature flag */}
                    {b.isFeatured && (
                      <div className="flex md:flex-row flex-col gap-2 bg-purple text-white w-max rounded-2xl p-2 mb-5 lg:mx-0 font-semibold text-sm">
                        <span className="border-none">Featured</span>
                      </div>
                    )}
                    <div className="flex md:flex-row flex-col gap-2 text-yellow bg-green w-max rounded-2xl p-2 mb-5 lg:mx-0 font-semibold text-sm">
                      <span className="border-none">{b.tag.name}</span>
                    </div>
                  </div>
                  <div className="tracking-wide md:text-3xl text-xl text-dark font-bold line-clamp-4 md:line-clamp-2 ">
                    {b.name}
                  </div>
                  <p className="mt-2 text-slate-500 line-clamp-2">
                    {b.description}
                  </p>
                </div>
              </div>
            </SlideInFromLeft>
          </Link>
        ))}
      </SlideInFromLeft>
      <div className="my-10 text-center flex justify-center items-center w-full">
        <Button>Load more</Button>
      </div>
    </div>
  );
}
