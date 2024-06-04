import React from 'react'
import { rightArrow, service1, service2, service3, service4, service5, service6 } from '../assets'

const Section = () => {
  return (
    <>
        <div className='pt-20 md:flex items-center justify-center flex-col'>
            <h1 className='text-accent text-2xl tracking-wide font-bold mb-5 mx-3'>Our Services</h1>
            <h2 className='text-6xl font-bold mx-3'>We Offer Professional Security</h2>
            <h2 className='text-7xl font-bold mx-3'>Solutions</h2>
        </div>
    
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 flex items-center justify-center pt-20 max-w-7xl mx-auto mb-10'>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service1}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Network Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service2}
                alt='service2'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Database Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service3}
                alt='service3'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Web Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service4}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Locker Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service5}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Data Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service6}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Cloud Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
        </div>
    </>
  )
}

export default Section