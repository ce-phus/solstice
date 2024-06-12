import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { Blogs, Footer, Partners } from '../components';
import { icon1 } from '../assets';
import { styles } from '../styles';

const IT = () => {
  return (
    
    <>
      <div className='relative bg-scroll min-h-[800px]'>
        <div className={`grid grid-cols-1 md:grid-cols-2 absolute top-[120px] max-w-7xl mx-auto pt-20 inset-0 gap-10`}>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
            IT Consulting
            </h1>
            <p className={`${styles.heroSubText} mt-2 `}>To Secure Your Company's Future</p>
          </div>
          <div className='hidden md:block'>
            <img
            src={icon1}
            className='w-full h-[500px]'/>
            
          </div>
          <div className='absolute z-[60] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[70] w-[30%] h-[80%] top-0 white__gradient'/>
        <div className='absolute z-[50] w-[50%] h-[50%] top-0 blue__gradient'/>
        </div>
      </div>
      
      <div className='flex items-center justify-center pt-20 max-w-7xl mx-auto flex-col'>
        <h1 className='text-3xl mx-10 font-bold tracking-wide'>Don’t waste your time and money on technology that doesn’t fit your business.</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-7'>
          <div className='mx-11'>
            <p className='tracking-wide text-xl text-secondary'>Technology development projects such as implementing new business software or migrating to the cloud are vital to a company's growth and its ability to adapt to change. However, they are not without risk, as an uninformed decision may lead to technology that is not compatible or appropriate. A poorly handled project’s low ROI is bad enough, but an ineffective multi-year technology strategy can be even worse. Fortunately, these problems can be avoided with the right application of knowledge and expertise during the development process.</p>

            <p className='mt-5 tracking-wide text-xl text-secondary'>Solistice IT Solutions employs a highly skilled team of IT consultants with decades of experience helping companies use new technology to enhance their business and plan a comprehensive IT roadmap, and we can do the same for you. You’ll get honest advice and solutions that fully align with your organization’s goals and budget; we’ll never recommend the most expensive products just to make a commission. Already have in-house IT personnel? We have experience supplementing existing IT departments, and our diverse team of experts can fill in any knowledge gaps.</p>
          </div>
          <div className='border border-gray-700 flex mx-11 px-5 flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mt-10 lg:mt-0'>With IT Consulting and Project Planning Services from Solstice Technologies Limited Solutions, You Can Stop Worrying About:</h1>
              <div className='gap-y-3'>
              <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Wasting time and money searching for the appropriate technology solutions</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Ineffective technology strategies that hamper company growth and agility</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Knowledge gaps in your IT department</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Poor ROI from technology purchases</p>
                </div>
                <div className='flex mt-4 mb-7 lg:mb-0'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Sleepless nights worrying about your company’s technology future</p>
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