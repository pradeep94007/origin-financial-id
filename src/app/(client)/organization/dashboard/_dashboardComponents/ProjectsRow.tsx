import React from "react";
import AvatarLine from "./AvatarLine";
import MemberBar from "./MemberBar";
import { FiMoreVertical } from "react-icons/fi";
import DateCreatedPills from "./DateCreatedPills";
import NameComponent from "./NameComponent";

export default function ProjectsRow({ data }: any) {
  return (
    <tr className="my-2">
      <td className="px-2 py-4">
        <NameComponent
          name={data.name}
          sub_name={data.sub_name}
          icon={data.icon}
        />
      </td>
      <td className="px-2 py-4">
        <DateCreatedPills date={data.date_created} />
      </td>
      <td className="px-2 py-4">
        <div>
          <h3 className="font-semibold">{data.about_title}</h3>
          <p className="text-sm text-gray-500">{data.about_detail}</p>
        </div>
      </td>
      <td className="px-2 py-4">
        <AvatarLine
          avatarNumbers={data.members}
          totalMembers={data.member_capacity}
        />
      </td>
      <td className="px-2 py-4">
        <MemberBar number={data.members} maxNumber={data.member_capacity} />
      </td>
      <td className="px-2 py-4">
        <div className="flex items-center gap-3">
          <span>{data.member_capacity} Members</span>
          <span className="text-lg">
            <FiMoreVertical />
          </span>
        </div>
      </td>
    </tr>
  );
}
