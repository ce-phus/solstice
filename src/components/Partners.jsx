import React from 'react'
import logo from "/sologo.png"
import { partner1, partner2, partner3, partner4, partner5 } from '../assets'

const Partners = () => {
  return (
    <>
        <div className='flex justify-center'>
        <div className='absolute z-[3] left-1/2  w-[50%] h-[50%] rounded-full white__gradient'/>
            <img
            src={logo}
            alt='logo'/>
        </div>
        <div className='py-8 mt-24 hidden md:block '>
            <div className=''>
                <div className='grid grid-cols-5 gap-3 place-items-center opacity-50 '>
                    <img src={partner1}
                    alt='partner1'
                    className='w-[200px]'/>
                    <img src={partner2}
                    alt='partner1'
                    className='w-[200px]'/>
                    <img src={partner3}
                    alt='partner1'
                    className='w-[200px]'/>
                    <img src={partner4}
                    alt='partner1'
                    className='w-[200px]'/>
                    <img src={partner5}
                    alt='partner1'
                    className='w-[200px]'/>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Partners