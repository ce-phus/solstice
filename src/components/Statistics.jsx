import React from 'react'
import { statistics1, statistics2, statistics3, statistics4 } from '../assets'

const Statistics = () => {
  return (
    <>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-grade text-lg tracking-wide mb-5'>Our Statistics</h1>
                <div>
                <h1 className='text-5xl font-bold text-primary tracking-wide'>Some of Our Achievements</h1>
                </div>
            </div>
        </div>
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center pt-20 mb-10'>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
            <img
            src={statistics1}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-5 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>2,390</h2>
            <p className='text-secondary text-xl '>Global Projects</p>
        </div>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
            <img
            src={statistics2}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-5 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
            4,587</h2>
            <p className='text-secondary text-xl '>Happy Clients</p>
        </div>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
            <img
            src={statistics3}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-4 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
                100%</h2>
            <p className='text-secondary text-xl '>Work Guarantee</p>
        </div>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
            <img
            src={statistics4}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-4 py-5 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
            7845</h2>
            <p className='text-secondary text-xl'>Experts Team</p>
        </div>
    </div>
    </>
    
    
  )
}

export default Statistics