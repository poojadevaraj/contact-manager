import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/session';

const Navbar = async () => {
    const session = await getSession(); //dummy session variable
  return (
    // <nav className='bg-white shadow-sm'>
        <div className='container mx-auto p-4 flex justify-between items-center'>
            <Link href='/' className='text-xl font-bold text-blue-800'>
                Contact Manager
            </Link>
            <div className='flex items-center space-x-4'>
                {session ? (
                    <>
                    <Link href='/contact' className = 'text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Contacts
                    </Link>
                    <LogoutButton />
                    </>
                ) : (
                    <>
                    <Link href="/login">
                    <div className = 'text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Login
                    </div>
                    </Link>
                   <Link href="/register">
                    <div className = 'text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Register
                    </div>
                    </Link>

                    </>
                ) }
            </div>
        </div>
    // </nav>
  )
}

export default Navbar
