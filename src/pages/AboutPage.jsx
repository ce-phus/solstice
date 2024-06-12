import React from 'react'
import { section1, aboutimg4, header1, header2, header3, header4,slider1, slider  } from '../assets'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import { Blogs, Footer, Partners, Testimonial } from '../components'

const AboutPage = () => {
  return (
    <>
      <div className='relative bg-cover min-h-[800px]'>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 absolute inset-0 top-[120px] gap-10`}>
          <div className=''>
                  <h1 className={`${styles.heroHeadText} `}>Solstice Tech</h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-200`}>We Simplify and Streamline IT</p>
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
                <div className='absolute z-[60] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[70%] h-[80%] top-0 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] top-0 blue__gradient'/>
          </div>
        </div>
      </div>
      <div className='bg-whit pt-20'>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-primary pb-10 max-w-7xl mx-auto gap-10`}>
          <div className='flex flex-col'>
              <div className='mt-5'>
                  <h1 className='text-5xl font-bold text-white'>Why We Exist ?</h1>
              </div>
              <div className='mt-5 text-white'>
                  <p className='tracking-wide  font-normal text-xl'>
                  Your business runs on IT systems. Every now and then, you run into technical hitches that could possibly stall operations. We are here to take care of I.T. and streamline the process so you don't have to.
                  </p>
                  <p className='mt-3 text-xl'>It is all about YOU. We architect, implement,
                    manage and secure IT solutions that
                    maximize the value of technology geared
                    towards adding value to your business</p>
              </div>
              
              
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
          <div className='mt-10 md:mt-20 mx-3 pb-20'>
          <div className='absolute z-[0] w-[20%] h-[50%]  blue__gradient'/>
            <div className='flex flex-col '>
              <h1 className='text-4xl font-bold tracking-wide mt-6 mb-3 '>Background Information</h1>
              <h1 className='text-accent font-bold'>2017</h1>
              <h1 className='text-2xl font-bold tracking-wide mt-6 mb-3'>Founding Year</h1>
              <p className='tracking-wide text-xl mt-5 mx-3 md:mx-0 md:w-3/4 mb-3'>Since our founding in 2017, we have established ourselves as a trusted provider of comprehensive IT solutions and services to businesses across a diverse range of industries. From the engineering and healthcare sectors to the energy and marketing/advertising industries, our team of experts has consistently delivered innovative and tailored solutions that streamline operations, enhance productivity, and safeguard our clients' critical data and infrastructure. With a steadfast commitment to customer success, we continue to expand our reach and impact throughout Kenya and the broader East African region.</p>
              <h1 className='text-accent font-bold text-xl'>Industries Served</h1>
              <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold text-lg'>
                Healthcare Sectors</p>
            </div>
            <div className='flex mt-5 text-lg'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Engineering Sectors</p>
            </div>
            <div className='flex mt-5 text-lg'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold'>
                Energy Sectors</p>
            </div>
            <div className='flex mt-5 text-lg'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <p className='ml-3 font-bold text-lg'>
                Marketing & Advertising Sector</p>
            </div>
           
            </div>
          </div>
        </div>
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