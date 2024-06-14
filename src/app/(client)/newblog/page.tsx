import TipTap from "@/components/TipTap/TipTap";
import { FaUpload } from "react-icons/fa";

export default function NewBlog() {
  return (
    <section className="min-h-screen p-3 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold underline underline-offset-8">Add Blogs Here</h1>
      <input
        type="text"
        placeholder="Blog title.."
        className="border w-full p-2 text-3xl mt-3"
      />
      <div className="flex items-center gap-2 mt-3 text-lg">
        <span className="mt-1">Upload Image</span>
        <span>
            <label className="cursor-pointer">
                <FaUpload />
                <input type="file" name="image" className="hidden"/>
            </label>
        </span>
      </div>
      <TipTap />
    </section>
  );
}
