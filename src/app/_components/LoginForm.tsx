"use client"
import React from 'react'
import { loginAction } from '../actions/auth'

const LoginForm = () => {
  return (
    <form action={loginAction} className="space-y-4">
      <div>
        <label className='block text-sm font-medium text-gray-700'>Email</label>
        <input type="email" name="email" placeholder='Enter your email' required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>Password</label>
        <input type="password" name="password" placeholder='Enter your password' required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        Login
      </button> 
    </form>
  );
};

export default LoginForm
