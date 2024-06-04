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
      <div className='relative bg-hero-pattern bg-cover min-h-screen'>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 absolute inset-0 top-[120px] gap-10`}>
          <div className=''>
            <motion.h1 
                variants={textVariant()}
                className={`${styles.heroHeadText} `}>Empowering Business Security with Advanced Cyber Defense</motion.h1>
                <motion.p 
                variants={textVariant()}
                className={`${styles.heroSubText} mt-2 text-white-200`}>We protect your company from evolving cyber threats. Trust our expertise to keep your data safe and your operations running smoothly</motion.p>
                <div className='flex mt-5'>
                  <GetStarted />
                  <Link to={"/profile.pdf"} target={'_blank'} className='bg-primary/40 text-white ml-4 flex items-center justify-center w-1/4 rounded-lg border border-white hover:bg-accent hover:text-primary mt-3 text-xl font-bold tracking-wide' download={true}>Profile</Link>
                </div>
          </div>
          <div className='hidden md:block'>
            <img
            src={section}
            className='shadow'
            width={900}
            />
          </div>
        </div>
      </div>
      <div className='pt-20 bg-white'>
        <About/>
      </div>
      <div className=' bg-hero-section bg-scroll min-h-screen pb-10 mx-auto'>
        <Section/>
      </div>
      <div className='bg-white pt-20'>
        <Banner/>
      </div>
      <div className='bg-gray-300 pb-10'>
        <Portfolio />
      </div>
      <div className='bg-primary pb-10'>
        <Partners />
      </div>
      <div className='bg-white pb-10'>
        <Blogs/>
      </div>
      <div className='bg-primary'>
        <Footer/>
      </div>
    </>
  )
}

export default Home