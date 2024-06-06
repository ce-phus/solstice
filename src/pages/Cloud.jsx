import React, { useEffect, useRef } from 'react'
import { slider1, slider, service8, aboutimg4, cloud, rightArrow, service1, service2, service3, service4, service5, service6, statistics1, statistics2, statistics3, statistics4  } from '../assets'
import { styles} from '../styles'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Blogs, Footer, Partners, Statistics } from '../components'

const Cloud = () => {
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
  return (
    <>
    
    <div className='relative bg-hero-cloud bg-cover min-h-[800px]'>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 absolute inset-0 top-[120px] gap-10`}>
            <div className=''>
                <h1 className={`${styles.heroHeadText} `}>Cloud Computing Solutions for Businesses</h1>
                <p className={`${styles.heroSubText} mt-2 text-white-200`}>To Take You to the Next Level</p>
            </div>
            <div className='hidden md:block flex items-center  place-items-center ml-10 relative'>
                <img
                src={slider1}
                className='shadow'
                width={600}
                />
                <div className='absolute top-0'>
                    <img src={slider}/>
                </div>
                <div className='absolute bottom-0 hover:animate-pulse'>
                    <img src={slider}/>
                </div>
                <div className='absolute top-0 right-0 hover:animate-pulse'>
                    <img src={slider}/>
                </div>
                <div className='absolute bottom-0 right-0 hover:animate-pulse'>
                    <img src={slider}/>
                </div>
          </div>
        </div>
    </div>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-primary pb-10 max-w-7xl mx-auto gap-12 text-white pt-20`}>
        <div className='relative mt-10 mb-10'>
            <img
            src={cloud} alt='aboutimage2'
            className='w-full h-full'/>
            <div className='absolute -left-5 -bottom-10'>
                <img
                src={aboutimg4}
                className='w-1/2'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl font-medium tracking-wide'>Current Trends</h1>
            <div className='mt-5'>
                <h1 className='text-5xl font-bold'>Solve Countless Problems with a Single Cloud Solution</h1>
            </div>
            <div className='mt-5'>
                <p className='tracking-wide  font-normal text-lg'>
                The cloud is being hailed as revolutionary, and for good reason. Imagine a video streaming service where movies are stored and played from a central location, eliminating the need for physical media or players. Similarly, business cloud solutions store and manage your important data and software at secure, off-site data centers equipped with top-of-the-line servers. All you need is an internet connection to access them from anywhere.
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
    <div className='pt-20  bg-white pb-10'>
        <Statistics />
    </div>
    <div className='pt-20 md:flex items-center justify-center flex-col'>
            <h1 className='text-accent text-2xl tracking-wide font-bold mb-5 mx-3'>Why Choose Solstice Technologies Limited?</h1>
            <p className='text-4xl font-bold mx-3 md:w-1/2'>The benefits of Solstice Technologies Limited's business cloud services are numerous. Our cloud experts will help your business harness these benefits fully:</p>
            
        </div>
    
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 flex items-center justify-center pt-20 max-w-7xl mx-auto mb-10'>
            <div className='shadow-card bg-tertiary flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-tertiary/80'>
                <img
                src={service1}
                alt='service1'
                className='w-9 mb-5'/>
                <h2 className='font-bold text-xl mb-5'>Cost Savings</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>No need to invest in expensive servers or software. A simple monthly fee provides unlimited access.</p>
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
                <h2 className='font-bold text-xl mb-5'>Accessibility</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'> Connect to your network and files from anywhere using any internet-connected device.</p>
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
                <h2 className='font-bold text-xl mb-5'>Customization</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Our cloud experts will tailor a solution to your specific needs.</p>
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
                <h2 className='font-bold text-xl mb-5'>Reliability</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Our data centers are stable, reliable, and monitored 24/7/365, ensuring minimal network downtime.</p>
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
                <p className='font-medium tracking-wide text-secondary mb-5'>Your apps and files are safe and secure at our data centers, protected against any workplace disaster.</p>
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
                <h2 className='font-bold text-xl mb-5'>Cloud Solutions</h2>
                <p className='font-medium tracking-wide text-secondary mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat arem nulla pariatur.</p>
                <img 
                src={rightArrow}
                alt='rightArrow'
                className='w-15 border border-white py-4 px-4 rounded-full hover:scale-105 duration-500 hover:bg-gray-300'/>
            </div>
        </div>
        <div className='bg-white pt-20 pb-10'>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold text-primary tracking-wide flex items-center ml-4 justify-center md:w-1/2'>With Business Cloud Services from Solstice Technologies Limited, You Can Stop Worrying About:</h1>
                <div>
                
                </div>
            </div>
        </div>
        
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center pt-20 mb-10 justify-evenly'>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
            <img
            src={statistics1}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-5 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>Constant Updates and New Purchases</h2>
            <p className='text-secondary text-xl '>The cloud updates and improves itself, saving you time and money.</p>
        </div>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-10 px-12 hover:bg-gray-400'>
            <img
            src={statistics2}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-5 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
            Data Loss</h2>
            <p className='text-secondary text-xl '>Your information is securely stored in hardened, geo-redundant data centers.</p>
        </div>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-10 px-12 hover:bg-gray-400'>
            <img
            src={statistics3}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-4 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
            Being Office-Bound:</h2>
            <p className='text-secondary text-xl '>Access your network and files from anywhere with an internet connection.</p>
        </div>
        <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
            <img
            src={statistics4}
            alt='statistics1'
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-4 py-5 rounded-full mb-5'/>
            <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
            Finding the Right Solution: </h2>
            <p className='text-secondary text-xl'>Our experts will custom-build and implement a cloud solution tailored to your needs.</p>
        </div>
    </div>
    </div>
    <Partners />
    <div className='bg-white pt-20 pb-10'>
        <Blogs />
    </div>
    <Footer />
    
    </>
  )
}

export default Cloud