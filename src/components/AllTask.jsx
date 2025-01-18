import React, { useContext } from 'react'
import { useAuth } from '../context/AuthProvider'

function AllTask() {
  const { userData} = useAuth();
  
//  console.log(userData,'userdata at alltask')
  return (
    <div  className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <h2 className='text-2xl font-bold p-4 bg-gray-100 text-gray-800'>All Tasks-</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead className='bg-gray-300 text-gray-700'>
            <tr>
              <th className='py-3 px-4 text-left'>Employee Name</th>
              <th className='py-3 px-4 text-left'>New Tasks</th>
              <th className='py-3 px-4 text-left'>Active Tasks</th>
              <th className='py-3 px-4 text-left'>Completed Tasks</th>
              <th className='py-3 px-4 text-left'>Failed Tasks</th>
            </tr>
          </thead>
          <tbody className='text-gray-600'>
            {userData.filter(user => user.role === 'employee').map((employee, index) => (
              <tr key={employee.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className='py-3 px-4'>{`${employee.firstName} ${employee.lastName}`}</td>
                <td className='py-3 px-4 text-blue-600'>{employee.taskCount?.newTask || 0}</td>
                <td className='py-3 px-4 text-yellow-600'>{employee.taskCount?.active || 0}</td>
                <td className='py-3 px-4 text-green-600'>{employee.taskCount?.completed || 0}</td>
                <td className='py-3 px-4 text-red-600'>{employee.taskCount?.failed || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTask

