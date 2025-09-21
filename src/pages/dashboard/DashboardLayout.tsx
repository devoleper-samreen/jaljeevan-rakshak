import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar + Navbar shared */}
      <Sidebar />
      <Navbar />

      {/* Page content area */}
      <main className="pt-16 px-6 py-4">
        <Outlet /> {/* Child routes yahan render honge */}
      </main>
    </div>
  );
};

export default DashboardLayout;
