import React from "react";
import TaskBox from "../TaskBox";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="bg-white w-full h-[85vh] pt-4 ">
      <div className="px-4">
        {" "}
        <TaskBox />{" "}
      </div>

      <hr className="m-6" />

      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
