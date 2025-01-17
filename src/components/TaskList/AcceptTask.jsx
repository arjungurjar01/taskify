import React from 'react'

function AcceptTask({ data, onAction }) {
  return (
    <div className='bg-yellow-100 rounded-lg shadow-md p-4'>
      <div className='flex justify-between items-center mb-2'>
        <span className='bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded'>{data.category}</span>
        <span className='text-sm text-gray-600'>{data.taskDate}</span>
      </div>
      <h3 className='text-lg font-semibold mb-2'>{data.taskTitle}</h3>
      <p className='text-sm text-gray-700 mb-4'>{data.taskDescription}</p>
      <div className='flex justify-between'>
        <button 
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => onAction(data.taskNumber, 'complete')}
        >
          Complete Task
        </button>
        <button 
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => onAction(data.taskNumber, 'fail')}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask

