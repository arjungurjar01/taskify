import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { userData, login } = useAuth();

    

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setError('');

        if (email === 'admin@example.com' && password === '123') {
            login({ role: 'admin', firstName: 'Admin' });
        } else {
            const employee = userData.find(user => user.email === email && user.password === password);
            if (employee) {
                login(employee);
            } else {
                setError('Invalid email or password');
            }
        }

        setEmail('');
        setPassword('');
    }

    return (
        <div className='flex flex-col gap-4 h-screen w-screen items-center justify-center bg-gray-100'>
           
            <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
                <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>
                
                <form onSubmit={onSubmitHandler} className='space-y-6'>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            id="email"
                            // value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                            required 
                            type="email" 
                            name='email' 
                            placeholder='Enter your email' 
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input 
                            id="password"
                            // value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                            required 
                            type="password" 
                            name='password' 
                            placeholder='Enter password' 
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button 
                        type="submit"
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        Login
                    </button>
                </form>
            </div>
            <div className='flex flex-col bg-white rounded-md p-4 w-80 text-sm text-gray-600'>
                <h2 className='font-semibold'>Demo Credentials for Testing</h2>
               <p> <span className='font-semibold'>Admin Email:</span>  admin@example.com</p>
                <p> <span className='font-semibold'>Employee Email : </span> employee1@example.com 
                 to employee5@example.com  </p> 
              <p>  <span className='font-semibold'>password :</span> 123</p>
            </div>
        </div>
    )
}

export default Login

