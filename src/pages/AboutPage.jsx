import React, { useEffect, useRef } from 'react'
import { section1, aboutimg4, header1 } from '../assets'
import { styles } from '../styles'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TiTickOutline } from "react-icons/ti";
import { Blogs, Footer, Partners, Statistics, Testimonial } from '../components'


const AnimatedNumber = ({value})=>{
  const ref =useRef(null);

  const motionValue =useMotionValue(0);
  const springvalue =useSpring(motionValue, {duration: 3000});
  const isInView =useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  
   
  }, [isInView, value, motionValue])

  useEffect(() => {
    springvalue.on("change",(latest)=>{
      // console.log('spring', latest)
      if(ref.current && latest.toFixed(0)<= value){
        ref.current.textContent=latest.toFixed(0)
      }
    })
  
    
  }, [springvalue, value])
  

  return <span ref={ref}></span>
}

const AboutPage = () => {
  return (
    <>
      <div className='relative bg-hero-about bg-cover min-h-[600px]'>
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto pt-20">
          <h1 className='text-7xl font-bold tracking-wide'>Solstice Tech</h1>
          <p className='mt-10 text-4xl  tracking-wide'>
          We Simplify And Streamline I.T.
          </p>
        </div>
      </div>
      <div className='bg-whit pt-20'>
      <div className='absolute z-[1] w-[80%] h-[30%]  white__gradient'/>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-primary pb-10 max-w-7xl mx-auto gap-10`}>
          <div className='flex flex-col'>
              <div className='mt-5'>
                  <h1 className='text-5xl font-bold text-white'>Why We Exist ?</h1>
              </div>
              <div className='mt-5 text-white'>
                  <p className='tracking-wide  font-normal text-lg'>
                  Your business runs on IT systems. Every now and then, you run into technical hitches that could possibly stall operations. We are here to take care of I.T. and streamline the process so you don't have to.
                  </p>
                  <p className='mt-3 text-lg'>It is all about YOU. We architect, implement,
                    manage and secure IT solutions that
                    maximize the value of technology geared
                    towards adding value to your business</p>
              </div>
              
              <div className='flex flex-col cols-pan-2 items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 mt-5 text-white'>
                
                  <div className='flex flex-col items-end justify-center xl:items-center text-white'>
                      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                          <AnimatedNumber value={50}/>+
                      </span>
                      <h2 className='text-xl font-medium capitalize text-dark dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Engineering Sectors</h2>
                  </div>
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                      <AnimatedNumber value={20}/>+
                      </span>
                      <h2 className='text-xl font-medium capitalize text-dark dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Healthcare Sectors</h2>
                  </div>
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                      <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                      <AnimatedNumber value={10}/>+
                      </span>
                      <h2 className='text-xl font-medium capitalize text-dark
                      dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Energy Sectors</h2>
                  </div>
                      
              </div>
                <div>
                <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
                </div>
              <h1 className='text-lg font-bold tracking-wide text-white'>Industries Served</h1>
          </div>
          <div className='relative mt-10 mb-10 ml-10'>
              <img
              src={section1} alt='aboutimage2'
              className='h-[500px]'/>
              <div className='absolute -top-4 -left-4'>
                  <img
                  src={aboutimg4}
                  className='w-1/2'/>
              </div>
          </div>
        </div>
      </div>
      
      <div className='bg-primary'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-center justify-center'>
            <img src={header1}
            alt='tft1'
            className=''/>
          </div>
          <div className='mt-10 md:mt-20 mx-3'>
          <div className='absolute z-[0] w-[20%] h-[50%]  blue__gradient'/>
            <div className='flex flex-col '>
              <h1 className='text-4xl font-bold tracking-wide mt-6 mb-3 '>Background Information</h1>
              <h1 className='text-accent font-bold'>2017</h1>
              <h1 className='text-2xl font-bold tracking-wide mt-6 mb-3'>Founding Year</h1>
              <p className='tracking-wide text-ls mt-5 mx-3 md:mx-0 md:w-3/4 mb-3'>Since our founding in 2017, we have established ourselves as a trusted provider of comprehensive IT solutions and services to businesses across a diverse range of industries. From the engineering and healthcare sectors to the energy and marketing/advertising industries, our team of experts has consistently delivered innovative and tailored solutions that streamline operations, enhance productivity, and safeguard our clients' critical data and infrastructure. With a steadfast commitment to customer success, we continue to expand our reach and impact throughout Kenya and the broader East African region.</p>
              <h1 className='text-accent font-bold text-xl'>Industries Served</h1>
              <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Healthcare Sectors</p>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Engineering Sectors</p>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Energy Sectors</p>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Marketing & Advertising Sector</p>
            </div>
            <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-20  pb-10'>
        <Statistics />
      </div>
      <div className='pt-20 pb-10'>
        <Testimonial />
      </div>
      <div>
        <Partners/>
      </div>
      <div className='pb-10'>
      <Blogs/>
      </div>
      <Footer/>

    </>
  )
}

export default AboutPage