import React from "react";
import JobseekerNavbar from "../components/navbar/JobseekerNavbar";
import { Outlet } from "react-router-dom";
import JobseekerFooter from "../components/footer/JobseekerFooter";

const JobSeekerLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <JobseekerNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <JobseekerFooter />
      </div>
    </>
  );
};

export default JobSeekerLayout;
