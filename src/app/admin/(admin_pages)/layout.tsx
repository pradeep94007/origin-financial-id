import AdminHeader from "@/components/AdminHeader";
import Sidebar from "@/components/AdminSidebar";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EdgeStoreProvider } from "@/lib/edgestore";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AdminHeader />
      <ToastContainer />
      <section className="flex flex-1">
        <div className="flex-1 max-w-[200px] border-r hidden lg:block">
          <Sidebar />
        </div>
        <div className="lg:flex-1">
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </div>
      </section>
    </section>
  );
}
