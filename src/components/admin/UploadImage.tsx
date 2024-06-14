import { useState } from "react";
import { SingleImageDropzone } from "../SingleImageDropzone";
import { useEdgeStore } from "@/lib/edgestore";

type UploadImageProps = {
  setData: any;
  fieldFor: string;
  title: string;
};

export default function UploadImage({
  setData,
  fieldFor,
  title,
}: UploadImageProps) {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const { edgestore } = useEdgeStore();

  const uploadImageHandler = async () => {
    if (!file) return;
    setLoading(true);
    const res = await edgestore.publicFiles.upload({
      file,
      onProgressChange: (progress) => {
        // you can use this to show a progress bar
      },
    });
    if (res.url) {
      setData((prevData: any) => ({
        ...prevData,
        [fieldFor]: res.url,
      }));
    }
    setLoading(false);
    setFile(undefined);
  };

  return (
    <div className="p-5 rounded bg-[#EFF3F9]">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xl font-bold">{title}</span>
        <button className="text-[15px]" onClick={uploadImageHandler}>
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
