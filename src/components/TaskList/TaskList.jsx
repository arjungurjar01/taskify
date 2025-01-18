import React, { useContext } from 'react'
import { AuthContext, useAuth } from '../../context/AuthProvider'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList() {
  const { userData, updateUserData, currentUser } = useAuth();
  console.log(userData,updateUserData,currentUser,'tasklist')
  const handleTaskAction = (taskNumber, action) => {
    if (!currentUser) return;

    const updatedUserData = userData.map(user => {
      if (user.id === currentUser.id) {
        const updatedTasks = user.tasks.map(task => {
          if (task.taskNumber === taskNumber) {
            switch (action) {
              case 'accept':
                return { ...task, active: true, newTask: false };
              case 'complete':
                return { ...task, active: false, completed: true };
              case 'fail':
                return { ...task, active: false, failed: true };
              default:
                return task;
            }
          }
          return task;
        });

        const taskCount = updatedTasks.reduce(
          (count, task) => {
            if (task.active) count.active++;
            if (task.newTask) count.newTask++;
            if (task.completed) count.completed++;
            if (task.failed) count.failed++;
            return count;
          },
          { active: 0, newTask: 0, completed: 0, failed: 0 }
        );

        return { ...user, tasks: updatedTasks, taskCount };
      }
      return user;
    });

    updateUserData(updatedUserData);
  };

  const userTasks = currentUser?.tasks || [];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 '>
      {userTasks.map((task, index) => {
        if (task.newTask) {
          return <NewTask key={index} data={task} onAction={handleTaskAction} />
        }
        if (task.active) {
          return <AcceptTask key={index} data={task} onAction={handleTaskAction} />
        }
        if (task.completed) {
          return <CompleteTask key={index} data={task} />
        }
        if (task.failed) {
          return <FailedTask key={index} data={task} />
        }
        return null;
      })}
    </div>
  )
}

export default TaskList

