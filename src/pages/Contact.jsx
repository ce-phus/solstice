import React from 'react'
import { contact } from '../assets'

const Contact = () => {
  return (
    <>
    <div className='flex h-screen justify-center pt-20 overflow-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto'>
        <img
        src={contact}
        className='h-[400px] contain hidden md:block'
        />
        <div className='mx-4'>
          <h1 className='text-secondary text-3xl font-bold mb-3'>Contact Us</h1>
          <p className='text-lg font-medium text-gray-300 mb-4'>Please use this form to get in touch with us. We’ll be happy to assist you with any inquiries or requests.</p>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 mb-6 md:mb-2'>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>First Name</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder='Mary'/>
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>Last Name</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder='Jane'/>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6 md:mb-2'>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>Email Address</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder='someone@gmail.com'/>
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>Phone Number</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder='0700000000'/>
              </div>
            </div>
            <div className='mt-2'>
              <label className=' font-medium block tracking-wide'>Subject of Inquiry</label>
              <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder=''/>
                <label className='flex flex-col mt-3'>
                  <span className='font-medium mb-4'> Message</span>
                  <textarea
                    rows={7}
                    name='message'
                    
                    placeholder='What you want to say?'
                    className='bg-secondary border border-white shadow py-4 px-6 placeholder:text-white text-primary rounded-lg outline-none border-none font-medium'
                  />
                </label>
            </div>
            
            <div className='flex space-x-5 flex-col md:flex-row'>
              <div className='mt-5 space-y-2'>
                <h1 className='font-medium mb-3'>Preferred Contact</h1>
                <div className='flex space-x-3'>
                  <input
                  name='Email'
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Email</label>
                </div>
                <div className='flex space-x-3'>
                  <input
                  name='Email'
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Phone Call</label>
                </div>
                <div className='flex space-x-3'>
                  <input
                  name='Email'
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Text Message</label>
                </div>
              </div>

              <div className='mt-5 space-y-2 md:pl-20'>
                <h1 className='font-medium mb-3'>Urgency of Inquiry</h1>
                <div className='flex space-x-3'>
                  <input
                  name='Email'
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Urgent</label>
                </div>
                <div className='flex space-x-3'>
                  <input
                  name='Email'
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Normal</label>
                </div>
                <div className='flex space-x-3'>
                  <input
                  name='Email'
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Not Urgent</label>
                </div>
              </div>
              
            </div>
            <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-2'
          >
            {"Send"}
          </button>
          </form>
        </div>
      </div>
      
    </div>
    <div className='absolute z-[60] w-[30%] h-[35%] top-0 pink__gradient'/>
    <div className='absolute z-[70] w-[20%] h-[80%] top-0 white__gradient'/>
    <div className='absolute z-[50] w-[20%] h-[50%] top-0 blue__gradient'/>
    </>
  )
}

export default Contact