import React from 'react'

function CompleteTask({ data }) {
  return (
    <div className='bg-blue-100 rounded-lg shadow-md p-4'>
      <div className='flex justify-between items-center mb-2'>
        <span className='bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded'>{data.category}</span>
        <span className='text-sm text-gray-600'>{data.taskDate}</span>
      </div>
      <h3 className='text-lg font-semibold mb-2'>{data.taskTitle}</h3>
      <p className='text-sm text-gray-700 mb-4'>{data.taskDescription}</p>
      <div className='bg-green-500 text-white text-center py-2 rounded'>
        Completed
      </div>
    </div>
  )
}

export default CompleteTask

