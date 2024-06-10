import React, { useEffect, useRef } from 'react'
import { styles } from '../styles'
import { aboutimg4, aboutimg5 } from '../assets'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

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
const About = () => {
  return (
    <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-primary pb-10 max-w-7xl mx-auto gap-5 text-white`}>
      <div className='absolute z-[3] -left-1/2  w-[50%] h-[20%] rounded-full white__gradient'/>
        <div className='relative mt-10 mb-10'>
            <img
            src={aboutimg5} alt='aboutimage2'
            className='w-3/4'/>
            <div className='absolute -left-5 -bottom-10'>
                <img
                src={aboutimg4}
                className='w-1/2'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl font-medium tracking-wide'>About Us</h1>
            <div className='mt-5'>
                <h1 className='text-5xl font-bold'>Provides Best Tech Solutions</h1>
            </div>
            <div className='mt-5'>
                <p className='tracking-wide  font-normal text-lg'>
                At Solstice Technologies Limited, we specialize in providing comprehensive technology solutions tailored to meet the unique needs of your business. From robust cybersecurity measures to expert IT consulting, managed IT services, and cutting-edge cloud computing solutions, we ensure your business operates smoothly, securely, and efficiently.
                </p>
            </div>
            <div className='flex flex-col cols-pan-2 items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 mt-5'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumber value={500}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumber value={200}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumber value={25}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark
                        dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                    </div>
            </div>
            <div>
            <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default About