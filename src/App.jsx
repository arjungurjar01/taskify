import React, { useContext } from 'react'
import { AuthProvider, AuthContext } from './context/AuthProvider'
import Login from './components/Auth/Login'
import Header from './components/Header'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList/TaskList'
import AllTask from './components/AllTask'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
function AppContent() {
  const { currentUser  } = useContext(AuthContext);

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div  className='min-h-screen bg-gray-100 scrollbar'>
      <Header />
      <div  className='container mx-auto p-4 scrollbar'>
        {currentUser.role === 'admin' ? (
          <div className='space-y-8'>
            {/* <CreateTask /> */}
            {/* <AllTask /> */}
            <AdminDashboard data={currentUser}/>
          </div>
        ) : (
          // <TaskList />
          <EmployeeDashboard  data={currentUser} />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App


