import Header from "@/components/Header";

import { FiSearch } from "react-icons/fi";
import ProjectsRow from "./_dashboardComponents/ProjectsRow";

const PROJECT_DATA = [
  {
    id: "1",
    name: "Iconly Pro",
    sub_name: "Iconly.pro",
    icon: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date_created: "21/04/2024",
    about_title: "Icon Design",
    about_detail: "Design Icons in various styles",
    members: 30,
    member_capacity: 50,
  },
  {
    id: "2",
    name: "TaskMaster",
    sub_name: "taskMaster.io",
    icon: "https://images.pexels.com/photos/7191994/pexels-photo-7191994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date_created: "15/06/2023",
    about_title: "Task Management",
    about_detail: "Organize tasks efficiently",
    members: 15,
    member_capacity: 20,
  },
  {
    id: "3",
    name: "CodeCraft",
    sub_name: "codecraft.app",
    icon: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date_created: "03/11/2022",
    about_title: "Software Development",
    about_detail: "Develop software applications",
    members: 20,
    member_capacity: 100,
  },
  {
    id: "4",
    name: "MarketSavvy",
    sub_name: "marketsavvy.in",
    icon: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date_created: "10/09/2024",
    about_title: "Market Analysis",
    about_detail: "Analyze market trends and data",
    members: 12,
    member_capacity: 30,
  },
];

export default function page() {
  const pages = 5;

  return (
    <section>
      <Header />
      <section className="p-2 sm:p-4">
        <div className="flex flex-col gap-2">
          <h1 className="tetx-xl sm:text-3xl font-semibold">Organizations</h1>
          <p>View and Manage your organization</p>
          <span className="flex items-center border-slate-300 border rounded-sm w-min px-2 py-1 gap-3">
            <FiSearch />
            <input
              type="text"
              placeholder="Search for organizations"
              className="sm:w-72"
            />
          </span>
          <div className="flex justify-end">
            <div className="flex gap-2">
              {[...new Array(pages)].map((_, index) => (
                <button className="pt-[2px] flex w-5 aspect-square items-center justify-center bg-slate-400 rounded-sm">
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="border rounded-2xl mt-2">
            <h2 className="font-semibold p-4 py-5">All Projects</h2>
            <div className="tablewrapper overflow-x-scroll scroll">
              <table className="w-full border-collapse border-spacing-x-7 min-w-[950px]">
                <thead className="py-3">
                  <tr className="bg-blue-100">
                    <th className="text-left p-2 py-5">Name</th>
                    <th className="text-left p-2 py-5">Date Created</th>
                    <th className="text-left p-2 py-5">About</th>
                    <th className="text-left p-2 py-5">Members</th>
                    <th className="text-left p-2 py-5">Total Members</th>
                    <th className="text-left p-2 py-5"></th>
                  </tr>
                </thead>
                <tbody>
                  {PROJECT_DATA.map((data, index) => (
                    <ProjectsRow key={index} data={data} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
