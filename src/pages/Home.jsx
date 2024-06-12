import React from 'react'
import {styles} from '../styles'
import { motion } from "framer-motion"
import { fadeIn,textVariant } from '../utils/motion'
import {robot, cyber, section} from "../assets/index"
import { About, Banner, Blogs, Footer, GetStarted, Partners, Portfolio, Section } from '../components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='relative  bg-cover min-h-screen'>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 absolute inset-0 top-[120px] gap-10`}>
          <div className=''>
            <motion.h1 
                variants={textVariant()}
                className={`${styles.heroHeadText} `}>We Simplify And Streamline I.T.</motion.h1>
                <motion.p 
                variants={textVariant()}
                className={`${styles.heroSubText} mt-2 text-white-200`}>Your Partner in Advanced Technology Solutions</motion.p>
                <div className='flex flex-col md:flex-row mt-5 gap-3'>
                  <GetStarted />
                </div>
          </div>
          <div className=''>
            <img
            src={section}
            className='shadow'
            width={900}
            />
            <div className='absolute z-[60] w-[30%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-[70] w-[20%] h-[80%] top-0 white__gradient'/>
            <div className='absolute z-[50] w-[20%] h-[50%] top-0 blue__gradient'/>
          </div>
        </div>
      </div>
      
      <div className='pb-10 mx-auto'>
        <Section/>
      </div>
      <div className='pt-20'>
        <Banner/>
      </div>
      <div className=' pb-10'>
        <Portfolio />
      </div>
      <div className='bg-primary pb-10'>
        <Partners />
      </div>
      <div className='pb-10'>
        <Blogs/>
      </div>
      <div className='bg-primary'>
        <Footer/>
      </div>
    </>
  )
}

export default Home