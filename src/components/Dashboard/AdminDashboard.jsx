import React, { useContext } from "react";
import CreateTask from "../CreateTask";
import AllTask from "../AllTask";
import { AuthContext } from "../../context/AuthProvider";

function AdminDashboard() {
  const { userData } = useContext(AuthContext);
  return (
    <div className="w-full text-white p-7">
      <CreateTask />
      <AllTask userData={userData} />
    </div>
  );
}
export default AdminDashboard;
