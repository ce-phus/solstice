import React from 'react'
import { service7, itservices3, itservices4, statistics1, statistics2, statistics3, statistics4 } from '../assets'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { banner, circle } from '../assets';
import { Blogs, Footer, Partners } from '../components';

const IT = () => {
  return (
    
    <>
      <div className='relative bg-hero-it bg-cover min-h-[500px]'>
        <div className='flex flex-col items-center justify-center max-w-7xl mx-auto pt-20'>
        <h1 className='text-7xl font-bold tracking-wide'>IT Consulting</h1>
          <p className='mt-10 text-4xl  tracking-wide'>
          To Secure Your Company’s Future
          </p>
        </div>
      </div>

      <div className='bg-white pt-20 pb-10'>
          <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-primary pb-20 max-w-7xl mx-auto gap-5`}>
            <div className='flex flex-col'>
                <h1 className='text-grade text-lg tracking wide font-bold'>Why Choose Us</h1>
                <h1 className='text-4xl font-bold tracking wide mt-3'>Expert Support to Leverage New Technology.</h1>
                <p className='text-secondary font-medium tracking-wide text-lg mt-5'>
                Solstice Technologies Limited boasts a team of highly skilled IT consultants with decades of experience. Our experts help companies leverage new technology to enhance their business and plan comprehensive IT roadmaps. We provide honest advice and solutions that align with your organization’s goals and budget, prioritizing your needs over commissions. Even if you have in-house IT personnel, we can supplement your team, filling in any knowledge gaps to ensure a robust and effective IT strategy.
                </p>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Experienced Team</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Comprehensive IT Roadmaps</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Honest Advice</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Supplement In-House IT</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Customer-Centric Approach</p>
                </div>
                <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
            </div>

            <div className='relative mt-10'>
                <img
                src={itservices4} alt='banner'
                className='w-full h-full'/>
                <div className='absolute -top-10 -right-10'>
                    <img
                    src={circle}
                    className=''/>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-primary pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full'>
            <img src={itservices3}
            alt='tft1'
            className='w-full h-full'/>
          </div>
          <div className='mt-10 md:mt-20 mx-3'>
            <div className='flex flex-col '>
              <h1 className='text-4xl font-bold tracking-wide mt-6 mb-3 '>Choose Technology Wisely</h1>
              <h1 className='text-accent font-bold'>""</h1>
              <h1 className='text-2xl font-bold tracking-wide mt-6 mb-3'>Expert Solutions</h1>
              <p className='tracking-wide text-ls mt-5 mx-3 md:mx-0 md:w-3/4 mb-3'>Technology development projects, such as implementing new business software or migrating to the cloud, are crucial for company growth and adaptability. However, these projects carry risks, including selecting incompatible or inappropriate technology. An uninformed decision can lead to a low ROI, and an ineffective multi-year technology strategy can be detrimental. Fortunately, these problems can be avoided with the right application of knowledge and expertise during the development process.</p>
              <h1 className='text-accent font-bold text-xl'>Key Factors"</h1>
              <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Vital Projects:</p>
                  <p className='ml-3 text-sm mt-2'>Implementing new software and migrating to the cloud are essential for growth and adaptability.</p>
                </div>
              </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Risks Involved:</p>
                  <p className='ml-3 text-sm mt-2'> Potential for selecting incompatible or inappropriate technology.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Low ROI:</p>
                  <p className='ml-3 text-sm mt-2'>Uninformed decisions can result in poor return on investment.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Detrimental Strategies:</p>
                  <p className='ml-3 text-sm mt-2'>Ineffective multi-year technology strategies can harm your business.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Expert Solutions:</p>
                  <p className='ml-3 text-sm mt-2'>Proper knowledge and expertise can avoid these issues.</p>
                </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 pb-10 bg-white'>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-grade text-lg tracking-wide mb-5'>Ease your concerns with our expert services.</h1>
                <h1 className='text-5xl font-bold text-primary tracking-wide flex items-center ml-4 justify-center'>Stop Worrying with Solstice IT Consulting</h1>
                <div>
                
                </div>
            </div>
        </div>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center pt-20 mb-10'>
            <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-9 px-12 hover:bg-gray-400'>
                <img
                src={statistics1}
                alt='statistics1'
                className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-5 rounded-full mb-5'/>
                <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>Wasting Time and Money</h2>
                <p className='text-secondary text-xl hover:text-white'>We'll find the appropriate technology solutions for your business</p>
            </div>
            <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-12 px-12 hover:bg-gray-400'>
                <img
                src={statistics4}
                alt='statistics1'
                className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-4 py-5 rounded-full mb-5'/>
                <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
                Secure Your Tech Future</h2>
                <p className='text-secondary text-xl hover:text-white'>Our planning ensures peace of mind.</p>
            </div>
            <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
                <img
                src={statistics3}
                alt='statistics1'
                className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-4 rounded-full mb-5'/>
                <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
                Knowledge Gaps in Your IT Department</h2>
                <p className='text-secondary text-xl hover:text-white'>Our team can supplement and enhance your existing IT capabilities.</p>
            </div>
            <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
                <img
                src={statistics4}
                alt='statistics1'
                className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-4 py-5 rounded-full mb-5'/>
                <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
                Poor ROI from Technology Purchases</h2>
                <p className='text-secondary text-xl hover:text-white'>Our comprehensive planning secures your technological future</p>
            </div>
            <div className='bg-gray-200 flex flex-col items-center min-h-[280px] py-5 px-12 hover:bg-gray-400'>
                <img
                src={statistics2}
                alt='statistics1'
                className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w- px-5 py-5 rounded-full mb-5'/>
                <h2 className='text-3xl font-bold tracking-wide text-primary mb-3'>
                Ineffective Technology Strategies</h2>
                <p className='text-secondary text-xl hover:text-white'>Our expertise ensures your strategies support company growth and agility.</p>
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

export default IT