import React from 'react'

function NewTask({ data, onAction }) {
  return (
    <div className='bg-green-100 rounded-lg shadow-md p-4'>
      <div className='flex justify-between items-center mb-2'>
        <span className='bg-green-500 text-white text-xs font-bold px-2 py-1 rounded'>{data.category}</span>
        <span className='text-sm text-gray-600'>{data.taskDate}</span>
      </div>
      <h3 className='text-lg font-semibold mb-2'>{data.taskTitle}</h3>
      <p className='text-sm text-gray-700 mb-4'>{data.taskDescription}</p>
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => onAction(data.taskNumber, 'accept')}
      >
        Accept Task
      </button>
    </div>
  )
}

export default NewTask

