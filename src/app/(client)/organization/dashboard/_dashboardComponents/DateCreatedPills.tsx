import React from "react";

export default function DateCreatedPills({ date }: { date: string }) {
  return (
    <span className="text-sm font-semibold bg-blue-200 text-blue-700 px-[10px] py-[2px] pt-[4px] rounded-full">
      {date}
    </span>
  );
}
