import React from 'react'
import { rightArrow, service1, service2, service3, service4, service5, service6 } from '../assets'
import { Link } from 'react-router-dom'

const Section = () => {
  return (
    <>
        <div className='pt-20 md:flex items-center justify-center flex-col'>
            <h1 className='text-accent text-2xl tracking-wide font-bold mb-5 mx-3'>Our Services</h1>
            <h2 className='text-6xl font-bold mx-3'>We Offer Professional Security</h2>
            <h2 className='text-7xl font-bold mx-3'>Solutions</h2>
        </div>
    
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 flex items-center justify-center pt-20 max-w-7xl mx-auto mb-10'>
            <Link to={"/cyber"}>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80 hover:scale-105 duration-500'>
                <img
                src={service1}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Cyber Security</h2>
                <p className='font-medium tracking-wide text-secondary mb-5 text-xl'>Protect your IT infrastructure and business data with top-notch cybersecurity services. Our expert team offers complete protection against all cyber threats, safeguarding your valuable information and maintaining your business's credibility. We provide ongoing threat monitoring, immediate action against risks, and 24/7 protection to keep your operations secure..</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            </Link>
            <Link to={"/managedITsolutions"}>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80 hover:scale-105 duration-500'>
                <img
                src={service2}
                alt='service2'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Managed IT Services</h2>
                <p className='font-medium tracking-wide text-secondary mb-5 text-xl'>Streamline operations and optimize connections between your business, customers, and employees with our Managed IT Services. We handle everything from desktop setups to remote network access, providing proactive maintenance, secure infrastructure, and cost-efficient uptime. Our services help you stay organized and connected, maximizing productivity and efficiency.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            </Link>
            <Link to={"/it"}>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80 hover:scale-105 duration-500'>
                <img
                src={service3}
                alt='service3'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>IT Consulting</h2>
                <p className='font-medium tracking-wide text-secondary mb-5 text-xl'>Secure your company’s future with our expert IT consulting services. We help you navigate the complexities of technology development, from implementing new business software to migrating to the cloud. Our experienced consultants provide honest advice and tailored solutions that align with your goals and budget, ensuring you make informed decisions that drive growth and adaptability.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            </Link>
            <div></div>
            <Link to={"/cloud"}>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80 hover:scale-105 duration-500'>
                <img
                src={service6}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Cloud Solutions</h2>
                <p className='font-medium tracking-wide text-secondary mb-5 text-xl'>Transform your business with our innovative cloud computing solutions. By storing your important data and software in secure, off-site data centers, you gain access from anywhere with an internet connection. Our cloud experts will custom-build and implement a solution based on your needs, offering benefits like reduced capital expenditure, enhanced security, and seamless scalability.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
            </Link>
        </div>
    </>
  )
}

export default Section