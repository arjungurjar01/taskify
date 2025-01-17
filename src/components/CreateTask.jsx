import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

function CreateTask() {
  const { userData, updateUserData } = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskNumber: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    const updatedUserData = userData.map(user => {
      if (user.id === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCount: {
            ...user.taskCount,
            newTask: (user.taskCount?.newTask || 0) + 1
          }
        };
      }
      return user;
    });
    
    updateUserData(updatedUserData);
    cleanForm();
  }

  const cleanForm = () => {
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  }

  return (
    <div className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800'>Create New Task</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='taskTitle'>
            Task Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-150 ease-in-out'
            id='taskTitle'
            type='text'
            placeholder='Enter task title'
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='taskDescription'>
            Task Description
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-150 ease-in-out'
            id='taskDescription'
            placeholder='Enter task description'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            rows={4}
          />
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='taskDate'>
            Due Date
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-150 ease-in-out'
            id='taskDate'
            type='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='assignTo'>
            Assign To
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-150 ease-in-out'
            id='assignTo'
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            required
          >
            <option value=''>Select an employee</option>
            {userData.filter(user => user.role === 'employee').map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>
            Category
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-150 ease-in-out'
            id='category'
            type='text'
            placeholder='Enter task category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
          type='submit'
        >
          Create Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask

