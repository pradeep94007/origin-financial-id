import Image from "next/image";
import { Iblogs } from "./BlogPosts";
import LoadingSkeleton from "@/app/loading";
import { Suspense } from "react";
import Link from "next/link";

type Props = {
  featuredBlogArray: Iblogs[];
};

const FeaturedBlog = ({ featuredBlogArray }: Props) => {
  return (
    <div className="lg:grid relative  flex flex-col gap-8 lg:grid-cols-4 md:grid-rows-1 mb-20 ">
      {featuredBlogArray.map((fb, i) => {
        return (
          // Grid set up
          <Link
            key={i}
            href={`/blog/${fb.id}`}
            className={` ${
              i == 0
                ? "col-span-2 row-span-2"
                : i == 1
                ? "col-span-2 row-span-1"
                : i == 2
                ? ""
                : i == 3
                ? ""
                : ""
            }
            `}
          >
            <div className="h-full w-full overflow-hidden relative rounded-2xl group flex">
              <Suspense fallback={<LoadingSkeleton />}>
                <Image
                  draggable={false}
                  src={fb.image}
                  width={400}
                  height={350}
                  loading="lazy"
                  alt="events pic"
                  className="object-cover object-top w-full h-full rounded-2xl cursor-pointer duration-300 group-hover:scale-[1.1]"
                />
              </Suspense>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-600 via-gray-900/40"></div>
              <div className="absolute  bottom-0 p-5">
                <div className="flex space-x-3">
                  <div className="flex md:flex-row flex-col gap-2 bg-purple text-white w-max rounded-2xl  p-2 mb-2 lg:mx-0 font-semibold text-sm">
                    <span className="border-none">Featured</span>
                  </div>
                  <div className="flex md:flex-row flex-col gap-2 text-yellow bg-green w-max  rounded-2xl p-2 mb-2 lg:mx-0 font-semibold text-sm">
                    <span className="border-none">{fb.tag.name}</span>
                  </div>
                </div>
                <h1 className="z-10 mt-3 md:text-2xl text-xl font-bold text-white w-full line-clamp-2">
                  {fb.name}
                </h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FeaturedBlog;
