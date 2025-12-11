import React from "react";
import DashboardCards from "../../components/AdminPanel/DashboardCards";
import ProjectTable from "../../components/AdminPanel/ProjectTable";
import RecentEnquiries from "../../components/AdminPanel/RecentEnquiries";
import EditProjectForm from "../../components/AdminPanel/EditProjectForm";

export default function Dashboard() {
  return (
    <div className="w-full space-y-6">

      
      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Project Status Table */}
      <ProjectTable />

<EditProjectForm/>
      {/* Recent Enquiries */}
      <RecentEnquiries />

    </div>
  );
}
