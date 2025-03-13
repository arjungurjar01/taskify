// localStorage.clear();

export const employees = [
  {
    id: 1,
    role:"employee",
    firstName: "Aarav",
    lastName:"Kohli",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Prepare Report",
        taskDescription: "Create the monthly sales report.",
        taskDate: "2025-01-08",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Client Meeting",
        taskDescription: "Attend a meeting with the client to discuss requirements.",
        taskDate: "2025-01-10",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        taskTitle: "System Update",
        taskDescription: "Update the internal system with the latest data.",
        taskDate: "2025-01-12",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    role:"employee",
    firstName: "Vihaan",
    lastName:"Gurjar",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Code Review",
        taskDescription: "Review the latest code commits by the development team.",
        taskDate: "2025-01-07",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Training Session",
        taskDescription: "Conduct a training session on new tools.",
        taskDate: "2025-01-11",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    role:"employee",
    firstName: "Ishaan",
    lastName:"Sharma",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Market Research",
        taskDescription: "Research competitor pricing models.",
        taskDate: "2025-01-08",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    role:"employee",
    firstName: "Advika",
    lastName:"Sharma",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Content Creation",
        taskDescription: "Write 3 new blog posts for the company website.",
        taskDate: "2025-01-09",
        category: "Content",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Social Media Management",
        taskDescription: "Schedule posts for the week.",
        taskDate: "2025-01-06",
        category: "Social Media",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    role:"employee",
    firstName: "Anaya",
    lastName:"Sharma",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve high-priority bugs in the system.",
        taskDate: "2025-01-07",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Deployment",
        taskDescription: "Deploy the latest build to production.",
        taskDate: "2025-01-05",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        taskTitle: "Documentation",
        taskDescription: "Update the project documentation.",
        taskDate: "2025-01-10",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

  
  export const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
      firstName:"Admin"
    }
  ];
 
  export const setLocalStorage = (employees,admin)=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));

  }

  export const getLocalStorage = () =>{
        const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
        const adminData = JSON.parse(localStorage.getItem('admin')) || null;

        return {employees:employeesData,admin:adminData}
  }
  
  // Initialize localStorage with the employee data if it's empty
if (!localStorage.getItem('employees')) {
  setLocalStorage(employees, null);
}

  //console.log('LocalStorage after update:', JSON.parse(localStorage.getItem('employees')));
