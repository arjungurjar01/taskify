import React from "react";
import { useAuth } from "../context/AuthProvider";

function TaskBox() {
  const { userData,currentUser } = useAuth();

  // console.log(userData,currentUser);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-2 sm:gap-6 lg:gap-8 mt-5">
       <div className='bg-blue-100 rounded-lg shadow-md p-4'>
        <h2 className='text-2xl font-bold text-blue-800'>{currentUser.taskCount?.newTask || 0}</h2>
        <h3 className='text-lg font-medium text-blue-600'>New Tasks</h3>
      </div>
      <div className='bg-yellow-100 rounded-lg shadow-md p-4'>
        <h2 className='text-2xl font-bold text-yellow-800'>{currentUser.taskCount?.active || 0}</h2>
        <h3 className='text-lg font-medium text-yellow-600'>Active Tasks</h3>
      </div>
      <div className='bg-green-100 rounded-lg shadow-md p-4'>
        <h2 className='text-2xl font-bold text-green-800'>{currentUser.taskCount?.completed || 0}</h2>
        <h3 className='text-lg font-medium text-green-600'>Completed Tasks</h3>
      </div>
      <div className='bg-red-100 rounded-lg shadow-md p-4'>
        <h2 className='text-2xl font-bold text-red-800'>{currentUser.taskCount?.failed || 0}</h2>
        <h3 className='text-lg font-medium text-red-600'>Failed Tasks</h3>
      </div>
    </div>
  );
}

export default TaskBox;
