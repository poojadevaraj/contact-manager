"use client"

import React from 'react'
import { logoutAction } from '../actions/auth'
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();  // router only used in client components
  const handleLogout = async () => {
    try {
      await logoutAction();
      //The redirect happeen in server action
      //The client-side redirect is a fallback
      router.push('/login');
      router.refresh();
    }catch (error) {
      console.error("Logout failed:", error);
    }
    await logoutAction(); 
  }
  return <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 tracking-colors cursor-pointer' onClick={handleLogout}>Logout</button>
}

export default LogoutButton
