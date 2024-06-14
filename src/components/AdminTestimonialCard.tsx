"use client";

import { toast } from "react-toastify";

type AdminTestimonialCardProps = {
  id: number;
  title: string;
  description: string;
  createdBy: string;
  createDate: string;
  approvedBy: string;
  status: string;
};
function AdminTestimonialCard({
  id,
  createdBy,
  createDate,
  title,
  description,
  approvedBy,
  status,
}: AdminTestimonialCardProps) {
  const updateStatus = async (updatedStatus: string) => {
    try {
      const response = await fetch("/api/teamtestimonial", {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          status: updatedStatus,
        }),
      });
      if (response.status !== 200)
        throw new Error("Error updating testimonial");
      toast.success("Updated Successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const rejectTestimonialHandler = async () => {
    await updateStatus("rejected");
  };

  const approveTestimonialHandler = async () => {
    await updateStatus("approved");
  };

  return (
    <div>
      <p className="font-semibold text-sm">Created by : {createdBy}</p>
      <p className="font-semibold text-sm">{createDate}</p>
      {approvedBy && (
        <p className="font-semibold text-sm mt-2">Approved by: {approvedBy}</p>
      )}
      <div className="w-full max-w-[450px] bg-[#EFF3F9] px-6 py-4 rounded mt-3">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex mt-5">
        {status == "pending" ? (
          <>
            <button
              className="bg-[#D31145] py-1 px-5 text-white capitalize rounded-md"
              onClick={rejectTestimonialHandler}
            >
              reject
            </button>
            <button
              className="bg-[#00D26D] py-1 px-5 ml-3 text-white capitalize rounded-md"
              onClick={approveTestimonialHandler}
            >
              Approve
            </button>
          </>
        ) : (
          <button
            className="bg-[#D31145] py-1 px-5 text-white capitalize rounded-md"
            onClick={rejectTestimonialHandler}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default AdminTestimonialCard;
