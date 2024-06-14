"use client";
import { SingleImageDropzone } from "../SingleImageDropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";
import { toast } from "react-toastify";

type SectionImageUploaderProps = {
  data: any;
  fieldFor: string;
  section: string;
  title: string;
};

export default function SectionImageUploader({
  data,
  fieldFor,
  section,
  title,
}: SectionImageUploaderProps) {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const { edgestore } = useEdgeStore();

  const uploadImage = async () => {
    if (!file) return;
    setLoading(true);
    const res = await edgestore.publicFiles.upload({
      file,
      onProgressChange: (progress) => {
        // you can use this to show a progress bar
      },
    });
    try {
      const response = await fetch(`/api/${section}`, {
        method: "PUT",
        body: JSON.stringify({
          ...data,
          [fieldFor]: res.url,
        }),
      });
      if (response.status !== 200) throw new Error("Error updating Field");
      toast.success("Updated Successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
    setLoading(false);
    setFile(undefined);
  };

  return (
    <div className="p-5 rounded bg-[#EFF3F9]">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xl font-bold">{title}</span>
        <button className="text-[15px]" onClick={uploadImage}>
          Save changes
        </button>
      </div>
      <SingleImageDropzone
        value={file}
        loading={loading}
        onChange={(file) => {
          setFile(file);
        }}
      />
    </div>
  );
}
