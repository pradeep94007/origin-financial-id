"use client";

import { arrayToHtmlString } from "@/app/utils/arrayToHtmlString";
import { parseHtmlString } from "@/app/utils/parseHtmlString";
import { customRevalidateTag } from "@/lib/revalidateTag";
import updateData from "@/lib/updateData";
import { useEffect, useState } from "react";
import { FaHeading } from "react-icons/fa6";
import { FaParagraph } from "react-icons/fa6";

type BlogDetailsType = {
  data?: any;
  setData?: any;
};

export default function BlogDetails({ data, setData }: BlogDetailsType) {
  const [loading, setLoading] = useState(false);
  const [blogDetails, setBlogDetails] = useState<
    {
      type: string;
      value: string;
    }[]
  >([]);

  useEffect(() => {
    const parsedArray = parseHtmlString(data?.details || "<h1>Header...</h1>");
    setBlogDetails(parsedArray);
  }, []);

  const updatedBlogDetails = (value: string, index: number) => {
    const dupBlogDetails = [...blogDetails];
    if (!value) {
      dupBlogDetails.splice(index, 1);
    } else {
      dupBlogDetails[index].value = value;
    }
    setBlogDetails(dupBlogDetails);
  };

  const addField = (type: string) => {
    const dupData = [...blogDetails];
    dupData.push({ type: type, value: "Type here..." });
    setBlogDetails(dupData);
  };

  const saveBlogDetails = async () => {
    setLoading(true);
    const updatedData = {
      ...data,
      details: arrayToHtmlString(blogDetails),
    };
    if (setData) {
      setLoading(false);
      return setData((prevData: any) => ({
        ...prevData,
        details: arrayToHtmlString(blogDetails),
      }));
    }
    await updateData({ section: "blog", updatedData });
    setLoading(false);
  };

  return (
    <div>
      <h1 className="sm:text-xl text-lg font-bold">Blog Details : </h1>
      <div className="mt-3 p-3 border rounded-sm border-slate-400 space-y-4">
        <div className="space-x-3">
          <button
            className="p-2 border bg-slate-100 rounded-sm"
            onClick={() => addField("header")}
          >
            <FaHeading />
          </button>
          <button
            className="p-2 border bg-slate-100 rounded-sm"
            onClick={() => addField("paragraph")}
          >
            <FaParagraph />
          </button>
        </div>
        {blogDetails.map((detail, index) => {
          if (detail.type == "header") {
            return (
              <h1
                key={index}
                className="sm:text-xl text-lg font-bold"
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={(e) => updatedBlogDetails(e.target.innerText, index)}
              >
                {detail.value}
              </h1>
            );
          }
          return (
            <p
              key={index}
              className="sm:text-base text-sm"
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => updatedBlogDetails(e.target.innerText, index)}
            >
              {detail.value}
            </p>
          );
        })}
        <button
          className="border disabled:bg-[#3ba047] disabled:text-slate-100 bg-[#22bb33] px-4 py-1 text-slate-50 font-semibold rounded-sm"
          disabled={loading}
          onClick={saveBlogDetails}
        >
          {loading ? "Loading" : "Save"}
        </button>
      </div>
    </div>
  );
}
