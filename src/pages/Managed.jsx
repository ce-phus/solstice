import React from 'react'
import { managed1, circle, star, send, shield, header1 } from '../assets'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { Blogs, Footer, Heading, Partners } from '../components';

const Managed = () => {
  return (
    <>
      <div className='relative bg-scroll min-h-[800px]'>
        <div className={`grid grid-cols-1 md:grid-cols-2 absolute top-[80px] max-w-7xl mx-auto pt-20 inset-0 gap-10`}>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
            Managed IT Services
            </h1>
            <p className={`${styles.heroSubText} mt-2 `}>Streamlining operations and optimizing connections between businesses, customers and employees</p>
          </div>
          <div className='hidden md:block'>
            <img
            src={header1}
            className='w-full h-[full]'/>
            
          </div>
          <div className='absolute z-[60] w-[40%] h-[35%] top-0 pink__gradient'/>
          <div className='absolute z-[70] w-[30%] h-[80%] top-0 white__gradient'/>
          <div className='absolute z-[50] w-[50%] h-[50%] top-0 blue__gradient'/>
        </div>
      </div>

      <div className=' pt-20 pb-10'>
      <div className='absolute z-[1] w-[80%] h-[30%]  blue__gradient'/>
        <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 text-white pb-10 max-w-7xl mx-auto gap-10`}>
        <div className='flex flex-col'>
                <h1 className='text-grade text-xl tracking wide font-bold'>Why Choose Us</h1>
                <h1 className='text-4xl font-bold tracking wide mt-3'>Expert Managed IT Services to Boost Productivity and Efficiency</h1>
                <p className='text-secondary font-medium tracking-wide text-xl mt-5'>
                Office productivity and efficiency can suffer due to faulty IT management, reducing profit margins and customer interest. Our Managed IT Services help you stay connected, profitable, and productive with an optimized IT infrastructure.
                </p>
                <h1 className='mt-5 text-2xl font-bold'>Slow and failed connections are one of the top reasons that customers leave</h1>
                <p className='mt-3 tracking-wide text-xl text-secondary'>
                When your IT infrastructure is poorly managed, your connection to the customer wavers to the point of profit loss. Through managed IT services, you can optimize your connection potential and reel in more customers.
                </p>
                <p className='mt-3 tracking-wide text-xl text-secondary'>
                Ineffective IT management wastes valuable company resources Businesses that don’t have properly managed IT waste valuable company resources. Our service helps you stay organized for better resource management.
                </p>
                <p className='mt-3 tracking-wide text-xl text-secondary'>
                A business’s downfall can be directly attributed to misunderstanding the important of IT management IT management isn’t easily understandable and often pushed aside to make room for areas that a business owner does understand better. Doing so removes a valuable asset that can easily become the downfall of your business.
                </p>
            </div>
            <div className='relative mt-10'>
                <img
                src={managed1} alt='banner'
                className='w-full h-full'/>
                <div className='absolute -top-10 -right-10'>
                    <img
                    src={circle}
                    className=''/>
                </div>
            </div>
        </div>
      </div>

      <div className='pt-20 flex flex-col items-center justify-center max-w-7xl mx-auto'>
        <h1 className='text-3xl tracking-wide mx-3 font-bold'>Solstice IT Services will manage, organize, and create an infrastructure that maintains profitability through managed IT services.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          <div className='mt-10 mx-4 lg:mx-0 flex flex-col'>
            <h1 className='text-2xl tracking-wide font-bold'>What Our Managed IT Services Cover</h1>
            <p className='mt-4 text-secondary tracking-wide text-xl'>IT is a field that encompasses everything related to your hardware, software, network, and security. With an expert team dedicated to providing managed IT services for your business, we cover everything you need to stay secure, connected, and efficient.</p>
            <p className='mt-4 text-secondary tracking-wide text-xl'>Our managed IT services addresses all of these and more to provide you with solutions that fit your exact needs while staying budget friendly.</p>
          </div>
          <div className='border border-gray-700 mt-10 flex flex-col pl-10'>
            <h1 className='mt-10 text-2xl font-bold mx-4 lg:mx-0'>Our Managed IT Services include solutions for:</h1>
            <div className='flex mt-4'>
              <TiTickOutline className='mt-1 mr-2'/>
              <p className='text-xl text-secondary'>Network Downtime</p>
            </div>
            <div className='flex mt-4'>
              <TiTickOutline className='mt-1 mr-2'/>
              <p className='text-xl text-secondary'>Slow/Malfunctioning IT</p>
            </div>
            <div className='flex mt-4'>
              <TiTickOutline className='mt-1 mr-2'/>
              <p className='text-xl text-secondary'>Costly Tech Support</p>
            </div>
            <div className='flex mt-4'>
              <TiTickOutline className='mt-1 mr-2'/>
              <p className='text-xl text-secondary'>Unresponsive/Limited IT Support</p>
            </div>
            <div className='flex mt-4 mb-10'>
              <TiTickOutline className='mt-1 mr-2'/>
              <p className='text-xl text-secondary'>One-size-fits-all Tech</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' pt-20 pb-20'>
      <div className='absolute z-[1] w-[20%] -left-0 h-[30%] white__gradient'/>
        <div className='flex items-center justify-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col mx-5'>
            <h1 className='text-grade text-xl tracking wide font-bold'>Services Provided</h1>
            <h1 className='text-4xl font-bold tracking wide mt-3'>What Our Managed IT Services Team Provides</h1>
            <p className='text-secondary font-medium tracking-wide text-xl mt-5'>
            From desktop setups to remote network access, our managed IT services team gets your company securely connected for unprecedented productivity.
            </p>
          
          <div className='flex flex-col mt-5'>
            <div className='flex mb-10'>
              <img
              src={star}
              alt='star'
              className='bg-tertiary rounded-full px-3 w-[60px] h-[60px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Customized Installation:</h1>
                <p className='mt-2 text-xl text-secondary'>Our managed IT services team installs hardware and software that align with your business goals, so you don’t pay for anything you don’t need and use only what you do.</p>
              </div>
            </div>
            <div className='flex mb-10'>
              <img
              src={send}
              alt='star'
              className='bg-tertiary rounded-full px-3 w-[60px] h-[60px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Around-the-clock Maintenance:</h1>
                <p className='mt-2 text-xl text-secondary'>Proactive maintenance of your IT infrastructure, day or night, keeps us informed and ready to tackle any issues that may arise for fast recovery.</p>
              </div>
            </div>
            <div className='flex'>
              <img
              src={shield}
              alt='star'
              className='bg-tertiary rounded-full px-3 w-[60px] h-[60px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Secure Infrastructure:</h1>
                <p className='mt-2 text-xl text-secondary'>With a team dedicated to handling your IT needs, we set up and maintain the highest levels of security around your data, keeping you protected.</p>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='mx-3 pl-10'>
            <div className='flex flex-col text-white'>
            <h1 className='text-4xl font-bold tracking-wide mt-6 mb-3 '>Don't Be Left Out !</h1>
              <h1 className='text-accent font-bold'>""</h1>
              <h1 className='text-2xl font-bold tracking-wide mt-6 mb-3'>Benefits of Our Managed IT Services</h1>
              <p className='tracking-wide text-xl text-secondary mt-5 mx-3 md:mx-0 md:w-3/4 mb-3'>From simply saving time to improving resource management, our managed IT services benefits can be seen instantly after implementation.</p>
              <h1 className='text-accent font-bold text-xl'>Key Benefits:"</h1>
              <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1 w-12'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-xl'>
                  Cost-efficient Up-time:</p>
                  <p className='ml-3 text-lg text-secondary mt-2'>Hiring in-house IT staff is costly when it comes to updating your system, often leading to overtime expenses. Our managed IT services team keeps your system up to date without the added expense or risk of system downtim</p>
                </div>
              </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1 w-12'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-xl'>
                  IT Project Management:</p>
                  <p className='ml-3 text-xl text-secondary mt-2'> Every piece of hardware, software, and IT for your business requires different personnel with expertise on that subject. With our managed IT services, you get access to experts in various IT fields to help manage any IT project.</p>
                </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='bg-tertiary/40 py-20 flex flex-col justify-center items-center  lg:mx-0'>
        
          <h1 className='text-3xl tracking-wide font-bold mx-4'>See What Managed IT Services Can Do for Your Business with a Free Consultation</h1>
          <p className='mt-5 text-xl tracking-wide text-secondary lg:w-1/2 mx-5'>Optimize your business with managed IT services that provide increased productivity, safety, and profitability. Contact us today for a free consultation and find
          out how we can improve your business’s IT without breaking your budget.</p>
          <Link to={"/contact"} className='mt-4 text-lg font-bold border border-grade/40 px-4 py-3 text-grade hover:text-white hover:bg-grade hover:scale-105 hover:duration-500'>Contact Us for a Free Consultation</Link>
        
      </div>

      <div className='pt-20 pb-20'>
        <div>
          <Heading title="Managed IT Services FAQs"/>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 flex max-w-7xl mx-auto pt-20'>
              <div className='flex items-center flex-col'>
                <h1 className='text-2xl font-bold mb-3'>What is a managed IT service?</h1>
                  <p className='text-xl text-secondary mx-3 mb-3'>A managed service is one that is outsource to a third-party. In the case of a managed IT service, all of your IT needs and activity are outsourced. For smaller businesses, this usually results in a more budget-friendly IT department.</p>
                  <p className='text-xl text-secondary mx-3'>Every business needs and IT department. If you have a website, communicate through email, and store data of any kind, then that falls under IT. Without managing your IT, you put your business at risk. Our managed IT services keeps your business protected and managed.</p>
              </div>
              <div className='flex items-center flex-col'>
                <h1 className='text-2xl font-bold mb-3'>What is the difference between a Managed Service Provider and Managed IT Services?</h1>
                  <p className='text-xl text-secondary mx-3 mb-3'>Managed IT services are fulfilled by an MSP, a Managed Service Provider. In the case of Solstice IT Services, we act as your MSP when you subscribe to our managed IT services.</p>
                  <p className='text-xl text-secondary mx-3'>Using an MSP is a better solution for small businesses who cannot afford or do not need their own in-house IT team. It is economical while keeping your valuable business efficiently running.</p>
              </div>
              <div className='flex items-center flex-col'>
                <h1 className='text-2xl font-bold mb-3'>What falls under IT?</h1>
                  <p className='text-xl text-secondary mx-3 mb-3'>Anything related to tech, essentially, falls under IT. This includes systems, apps, media, content, infrastructure, communication, storage, and more.</p>
                  <p className='text-xl text-secondary mx-3 mb-3'>Managed IT services constitutes everything related to IT that’s relevant for your company. The main areas usually include system, infrastructure, communication, and data storage.</p>
                  <p className='text-xl text-secondary mx-3'>Managed IT services are always customized for the business benefiting from them. Not every business has a need for every service that falls under IT. By narrowing your needs, we also lower the cost, so you don’t pay for what you don’t need/use. This is a feature of managed IT services that helps small businesses maintain profitability and functionality</p>
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

export default Managed