import React from 'react'
import { portfolio1, portfolio2, portfolio3, rightArrow } from '../assets'

const Portfolio = () => {
  return (
    <>
        <div className='pt-20 flex items-center justify-center flex-col text-primary'>
            <h1 className='text-grade text-lg tracking-wide font-bold mb-5'>Portfolio</h1>
            <h2 className='text-6xl font-bold mx-3'>Our Latest Case Studies</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 flex items-center justify-center pt-20 max-w-7xl mx-auto mb'>
            <div className='min-h-[280px] relative flex items-center justify-center hover:scale-105 duration-500'>
                <img
                src={portfolio1}
                alt='portfolio1'
                className='h-[400px] w-full'/>
                <div className='absolute bottom-5 left-8'>
                    <p className='bg-gray-300 flex items-center justify-center w-1/4 text-grade tracking-wide mb-4'>Marketing</p>
                    <h1 className='text-white tracking-wide text-lg font-bold'>
                        Enhance Trust, Compliance, And Governance
                    </h1>
                    <img
                    src={rightArrow}
                    alt='rightarrow'
                    className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300 mt-3'/>
                </div>
            </div>
            <div className='min-h-[280px] relative flex items-center justify-center hover:scale-105 duration-500'>
                <img
                src={portfolio2}
                alt='portfolio2'
                className='h-[400px] w-full'/>
                <div className='absolute bottom-5 left-8'>
                    <p className='bg-gray-300 flex items-center justify-center w-1/4 text-grade tracking-wide mb-4'>Business</p>
                    <h1 className='text-white tracking-wide text-lg font-bold'>
                        Cyber Security Protects Sensitive Data
                    </h1>
                    <img
                    src={rightArrow}
                    alt='rightarrow'
                    className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300 mt-3'/>
                </div>
            </div>
            <div className='min-h-[280px] relative flex items-center justify-center hover:scale-105 duration-500'>
                <img
                src={portfolio3}
                alt='portfolio3'
                className='h-[400px]'/>
                <div className='absolute bottom-5 left-8'>
                    <p className='bg-gray-300 flex items-center justify-center w-1/4 text-grade tracking-wide mb-4'>Agency</p>
                    <h1 className='text-white tracking-wide text-lg font-bold'>
                        The Steps to Gaining Privileged Access Security
                    </h1>
                    <img
                    src={rightArrow}
                    alt='rightarrow'
                    className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300 mt-3'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio