'use client'
import React, { use, useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact'
import { useRouter } from 'next/navigation'

type ContactFormProps = {
  action: (prevState:any, formData: FormData) => Promise<any>
  contact? : ContactType
}

const ContactForm = ({action,contact}: ContactFormProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null)
  useEffect(() => {
    if(state?.success){
      router.push('/contact');
    }
  },[state, router])
  return (
    <form action={formAction} className="space-y-4">
      <input type = "hidden" name = "id" value = {contact?.id}/>
      <div>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
        <input type="text" name="name" defaultValue={contact?.name || ""} placeholder='Enter your name' required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" />
      </div>
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
        <input type="email" name="email" defaultValue={contact?.email || ""}placeholder='Enter your email' required className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" />
      </div>
      {state?.error && (
        <div className='text-red-500 text-sm'>{state.error}</div>
      )}
      <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Save Contact
      </button> 
    </form>
  )
}

export default ContactForm
