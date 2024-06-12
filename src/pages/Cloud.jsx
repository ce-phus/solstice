import React from 'react'
import { slider1, slider } from '../assets'
import { styles} from '../styles'
import { TiTickOutline } from "react-icons/ti";

import { Blogs, Footer, Partners } from '../components'

const Cloud = () => {
   
  return (
    <>
    <div className='relative bg-cover min-h-[800px]'>
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
                <div className='absolute z-[60] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[70%] h-[80%] top-0 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] top-0 blue__gradient'/>
          </div>
        </div>
    </div>

    <div className='flex items-center justify-center pt-20 max-w-7xl mx-auto flex-col'>
        <h1 className='text-3xl mx-10 font-bold tracking-wide'>Solve countless problems with a single cloud solution.</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-7'>
          <div className='mx-11'>
            <p className='tracking-wide text-xl text-secondary'>The cloud, as you may have heard, is being touted by many as revolutionary, and they’re not wrong. A simple example of a cloud computing model is a video streaming service. You no longer have to buy physical media or a player; movies are stored and played from a central location and all you need is a device with an internet connection. Business cloud solutions are similar, in that your important data and software are handled at a secure, off-site data center on top-of-the-line server farms. Connect to the internet from anywhere and you get access.</p>

            <p className='mt-5 tracking-wide text-xl text-secondary'>The benefits of Solstice IT’s business cloud services are many, and our cloud experts will empower your business to take full advantage of them. You won’t have to spend capital investing in expensive servers or software and a monthly fee gives you unlimited access. Your apps and important files will be safe and secure at these data centers, no matter what disaster might befall your workplace. These are just a couple of the many advantages our business cloud solutions can offer, contact us to explore all of your options.</p>
          </div>
          <div className='border border-gray-700 flex mx-11 px-5 flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mt-10 lg:mt-0'>With Business Cloud Services from Solstice IT Solutions, You Can Stop Worrying About:</h1>
              <div className='gap-y-3'>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Constantly updating and buying new software and hardware; the cloud improves itself at no cost of time or money to you</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Losing data forever after a disaster; your information is secured at hardened, geo-redundant data centers</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Being trapped at the office; access your network and files from anywhere with any internet-connected device</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Finding the right cloud solution; our cloud experts will custom-build and implement a solution based on your needs</p>
                </div>
                <div className='flex mt-4 mb-7 lg:mb-0'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Extended, expensive network downtime; cloud data centers are stable, reliable, and monitored 24/7/365</p>
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

export default Cloud