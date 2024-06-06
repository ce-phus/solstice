import React from 'react'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { banner, circle } from '../assets';

const Banner = () => {
  return (
    <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-primary pb-20 max-w-7xl mx-auto gap-5`}>
        <div className='flex flex-col'>
            <h1 className='text-grade text-lg tracking wide font-bold'>Why Choose Us</h1>
            <h1 className='text-4xl font-bold tracking wide mt-3'>The Solstice Advantage</h1>
            <p className='text-secondary font-medium tracking-wide text-lg mt-5'>
            Choosing Solstice Technologies Limited means partnering with a team of dedicated experts who prioritize your business needs. With decades of experience, we offer tailored solutions in cybersecurity, IT services, managed IT consulting, and cloud computing. Our commitment to excellence ensures your technology infrastructure is secure, efficient, and aligned with your business goals. Trust us to help your business thrive in today's digital landscape.
            </p>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                    Expertise</p>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Customized Solutions</p>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Proactive Approach</p>
            </div>
            <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
        </div>

        <div className='relative mt-10'>
            <img
            src={banner} alt='banner'
            className='w-full'/>
            <div className='absolute -top-10 -right-10'>
                <img
                src={circle}/>
            </div>
        </div>
    </div>
  )
}

export default Banner