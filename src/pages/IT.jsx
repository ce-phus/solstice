import React from 'react'
import { TiTickOutline } from "react-icons/ti";
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
      
      <div className='flex items-center justify-center pt-20 max-w-7xl mx-auto flex-col'>
        <h1 className='text-3xl mx-10 font-bold tracking-wide'>Don’t waste your time and money on technology that doesn’t fit your business.</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-5 gap-7'>
          <div className='mx-11'>
            <p className='tracking-wide text-lg text-secondary'>Technology development projects such as implementing new business software or migrating to the cloud are vital to a company's growth and its ability to adapt to change. However, they are not without risk, as an uninformed decision may lead to technology that is not compatible or appropriate. A poorly handled project’s low ROI is bad enough, but an ineffective multi-year technology strategy can be even worse. Fortunately, these problems can be avoided with the right application of knowledge and expertise during the development process.</p>

            <p className='mt-5 tracking-wide text-lg text-secondary'>Solistice IT Solutions employs a highly skilled team of IT consultants with decades of experience helping companies use new technology to enhance their business and plan a comprehensive IT roadmap, and we can do the same for you. You’ll get honest advice and solutions that fully align with your organization’s goals and budget; we’ll never recommend the most expensive products just to make a commission. Already have in-house IT personnel? We have experience supplementing existing IT departments, and our diverse team of experts can fill in any knowledge gaps.</p>
          </div>
          <div className='border border-gray-700 flex mx-11 px-5 flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mt-10 lg:mt-0'>With IT Consulting and Project Planning Services from Solstice IT Solutions, You Can Stop Worrying About:</h1>
              <div className='gap-y-3'>
              <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-lg text-secondary'>Wasting time and money searching for the appropriate technology solutions</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-lg text-secondary'>Ineffective technology strategies that hamper company growth and agility</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-lg text-secondary'>Knowledge gaps in your IT department</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-lg text-secondary'>Poor ROI from technology purchases</p>
                </div>
                <div className='flex mt-4 mb-7 lg:mb-0'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-lg text-secondary'>Sleepless nights worrying about your company’s technology future</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      
      <Partners />
      <div className='pt-20 pb-10'>
        <Blogs />
      </div>
      <Footer />
    </>
  )
}

export default IT