import React from 'react'
import { managed1, managed2, managed3, managed4, managed5, managed6, managed7, managed8, managed9, itservices4, circle, star, send, shield, rightArrow } from '../assets'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { Blogs, Footer, Heading, Partners } from '../components';

const Managed = () => {
  const Data = [
    {
      title: "What is a managed IT service?",
      subtitle:
        "A managed service outsources IT needs to a third-party, providing a budget-friendly IT department for smaller businesses.",
      
      image: managed5,
    },
    {
      title: "What is the difference between a Managed Service Provider and Managed IT Services?",
      subtitle:
        "Managed IT services are provided by an MSP (Managed Service Provider). Solstice Technologies Limited acts as your MSP, offering economical IT solutions for small businesses.",
      image: managed6,
    },
    {
      title: "What falls under IT?",
      subtitle:
        "IT includes systems, apps, media, content, infrastructure, communication, storage, and more. Managed IT services are customized to meet your specific business needs, ensuring you only pay for what you use",
      image: managed7,
    },
  ];
  return (
    <>
      <div className='relative bg-hero-managed bg-cover min-h-[500px]'>
        <div className='flex flex-col items-center justify-center  pt-10 mx-2 md:mx-0'>
        <h1 className='text-7xl font-bold tracking-wide'>Managed IT Services</h1>
          <p className='mt-10 text-4xl  tracking-wide md:w-1/2'>
          Streamlining operations and optimizing connections between businesses, customers, and employees
          </p>
        </div>
      </div>

      <div className=' pt-20 pb-10'>
      <div className='absolute z-[1] w-[80%] h-[30%]  blue__gradient'/>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-white pb-10 max-w-7xl mx-auto gap-10`}>
        <div className='flex flex-col'>
                <h1 className='text-grade text-lg tracking wide font-bold'>Why Choose Us</h1>
                <h1 className='text-4xl font-bold tracking wide mt-3'>Expert Managed IT Services to Boost Productivity and Efficiency</h1>
                <p className='text-secondary font-medium tracking-wide text-lg mt-5'>
                Office productivity and efficiency can suffer due to faulty IT management, reducing profit margins and customer interest. Our Managed IT Services help you stay connected, profitable, and productive with an optimized IT infrastructure.
                </p>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Optimized Connection</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Resource Management</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Business Stability</p>
                </div>
                
                <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
            </div>
            <div className='relative mt-10'>
                <img
                src={managed6} alt='banner'
                className='w-full h-full'/>
                <div className='absolute -top-10 -right-10'>
                    <img
                    src={circle}
                    className=''/>
                </div>
            </div>
        </div>
      </div>

      <div className=' pt-20 pb-20'>
      <div className='absolute z-[1] w-[20%] -left-0 h-[30%] white__gradient'/>
        <div className='flex items-center justify-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col'>
            <h1 className='text-grade text-lg tracking wide font-bold'>Services Provided</h1>
            <h1 className='text-4xl font-bold tracking wide mt-3'>What Our Managed IT Services Cover</h1>
            <p className='text-secondary font-medium tracking-wide text-lg mt-5'>
            Our services encompass everything related to your hardware, software, network, and security, providing solutions tailored to your exact needs and budget
            </p>
          </div>
          <div className='flex flex-col pl-20'>
            <div className='flex mb-10'>
              <img
              src={star}
              alt='star'
              className='bg-tertiary rounded-full px-3 w-[60px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Customized Installation:</h1>
                <p className='mt-2 text-lg text-secondary'>Aligns hardware and software with business goals.</p>
              </div>
            </div>
            <div className='flex mb-10'>
              <img
              src={send}
              alt='star'
              className='bg-tertiary rounded-full px-3 w-[60px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>24/7 Maintenance:</h1>
                <p className='mt-2 text-lg text-secondary'>Proactive infrastructure maintenance ensures fast recovery.</p>
              </div>
            </div>
            <div className='flex'>
              <img
              src={shield}
              alt='star'
              className='bg-tertiary rounded-full px-3 w-[60px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Secure Infrastructure:</h1>
                <p className='mt-2 text-lg text-secondary'>Highest levels of data security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='w-full'>
            <img
            src={managed2}
            className='w-full h-full'
            alt='managed-it'/>
          </div>
          <div className='mt-10 md:mt-20 mx-3'>
            <div className='flex flex-col text-white'>
            <h1 className='text-4xl font-bold tracking-wide mt-6 mb-3 '>Don't Be Left Out !</h1>
              <h1 className='text-accent font-bold'>""</h1>
              <h1 className='text-2xl font-bold tracking-wide mt-6 mb-3'>Benefits of Our Managed IT Services</h1>
              <p className='tracking-wide text-ls mt-5 mx-3 md:mx-0 md:w-3/4 mb-3'>Our managed IT services provide immediate benefits, from saving time to improving resource management.</p>
              <h1 className='text-accent font-bold text-xl'>Key Benefits:"</h1>
              <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Cost-efficient Up-time:</p>
                  <p className='ml-3 text-sm mt-2'>Avoid costly in-house IT staff and overtime expenses.</p>
                </div>
              </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  IT Project Management:</p>
                  <p className='ml-3 text-sm mt-2'> Access to experts in various IT fields for comprehensive project management.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-20 pb-20'>
        <div>
          <Heading title="Managed IT Services FAQs" subtitle={"What is a managed IT service?"}/>

          <div className={`${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 flex items-center justify-center pt-20 max-w-7xl mx-auto`}>
            {Data.map((data) => (
              <div className='bg-whit '>
                <div className='overflow-hidden rounded-2xl  mb-2'>
                  <img
                  src={data.image}
                  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                </div>
                <div className="space-y-2 mx-2">
                <p className="text-xs">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className=" text-sm text-gray-600">
                  {data.subtitle}
                </p>
                <img
                src={rightArrow}
                alt="rightarrow"
                className="bg-tertiary px-2 py-3 rounded-full w-[30px] hover:bg-gray-500 hover:scale-105 duration-500"/>
              </div>
              </div>
            ))}
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

export default Managed