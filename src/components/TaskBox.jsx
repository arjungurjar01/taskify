import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function TaskBox() {
  const { userData, employeeId } = useContext(AuthContext);

  const employee = userData.find((emp) => emp.id === employeeId);

  const boxes = [
    {
      title: "New Task",
      count: employee?.taskCount?.newTask || 0,
      color: "bg-blue-500",
    },
    {
      title: "Active Task",
      count: employee?.taskCount?.active || 0,
      color: "bg-yellow-500",
    },
    {
      title: "Completed Task",
      count: employee?.taskCount?.completed || 0,
      color: "bg-green-500",
    },
    {
      title: "Failed Task",
      count: employee?.taskCount?.failed || 0,
      color: "bg-red-500",
    },
  ];
  console.log(userData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-2 sm:gap-6 lg:gap-8 mt-5">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`py-6 px-9 ${box.color} w-full flex flex-col justify-between rounded-md`}
        >
          <h2 className="text-xl sm:text-2xl font-medium">{box.count}</h2>
          <h3 className="text-lg sm:text-xl font-medium">{box.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TaskBox;
