import React from "react";
import CreateTask from "../CreateTask";
import AllTask from "../AllTask";

function AdminDashboard() {
  return (
    <div className="w-full text-white p-7">
      <CreateTask />
      <AllTask />
    </div>
  );
}
export default AdminDashboard;
