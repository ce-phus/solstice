import React from 'react'
import { managed1, icon1, itservices4, circle, managed3, managed4, consult, star, execute, strategy } from '../assets'
import { TiTickOutline } from "react-icons/ti";
import { styles } from '../styles'
import { Link } from 'react-router-dom';
import { Blogs, Footer, Partners } from '../components';

const Cyber = () => {
  return (
    <>
      <div className='bg-hero-section relative bg-scroll min-h-[800px]'>
        <div className={`grid grid-cols-1 md:grid-cols-2 absolute top-[120px] max-w-7xl mx-auto pt-20 inset-0 gap-10`}>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
            Cybersecurity Services for Businesses
            </h1>
            <p className={`${styles.heroSubText} mt-2 `}>Protect your IT infrastructure and business data with top-notch cybersecurity services.</p>
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

      <div className='pt-20 pb-10 text-white'>
          <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2  pb-20 max-w-7xl mx-auto gap-5`}>
            <div className='flex flex-col mt-20'>
                <h1 className='text-grade text-lg tracking wide font-bold'>Our Services</h1>
                <h1 className='text-4xl font-bold tracking wide mt-3 text-white'>What You Get from Cybersecurity Services</h1>
                <p className='text-secondary font-medium tracking-wide text-lg mt-5'>
                Cybercriminals can infiltrate your business and access your data if your IT system and network are left unprotected. Our solutions include:
                </p>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Virus protection</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Spam and scam email filtering</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Internal threat management</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Emerging threat monitoring</p>
                </div>
                <div className='flex mt-5'>
                    <TiTickOutline className='border border-primary rounded-full mt-1'/>
                    <p className='ml-3 font-bold'>
                    Ransomware defense</p>
                </div>
                <Link to={"/profile.pdf"} target={'_blank'} className='  flex items-center justify-center w-1/2 px-3 py-4 border border-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-primary mt-7 mb-5 text-xl font-bold tracking-wide hover:scale-105 duration-500' download={true}>Learn More</Link>
            </div>

            <div className='relative mt-10'>
                <img
                src={managed1} alt='banner'
                className='w-full h-[800px]'/>
                <div className='absolute -top-10 -right-10'>
                    <img
                    src={circle}
                    className=''/>
                </div>
            </div>
        </div>
      </div>

      <div className='pt-20 pb-10 '>
      <div className='absolute z-[70] w-[30%] h-[80%]  white__gradient'/>
        <div className='flex flex-col items-center justify-center  grid grid-cols-1 md:grid-cols-2 gap-5 mx-5'>
          <div className="">
            <h1 className='text-4xl font-bold tracking-wide mb-5'>Common Cyber Threats to Your Business</h1>
            <p className='text-xl tracking-wide mb-5'>Your business faces many threats daily. Our cybersecurity services address issues such as:</p>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Hackers targeting SMBs:</p>
                  <p className='ml-3 text-sm mt-2'>Small and medium businesses are prime targets for hackers seeking valuable customer databases and financial records.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Loss of credibility:</p>
                  <p className='ml-3 text-sm mt-2'>Cyberattacks result in data loss and damage your business's reputation.</p>
                </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <h1 className='text-4xl font-bold tracking-wide mb-5'>Cybersecurity Services for Complete Protection</h1>
            <p className='text-xl tracking-wide mb-5'>Cyber threats are a constant concern for businesses of all sizes. Our services provide comprehensive protection, giving you and your stakeholders peace of mind.</p>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Over half of cyberattacks target small businesses: </p>
                  <p className='ml-3 text-sm mt-2'>These breaches often cost over $100k, which can be devastating.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Suspension of operations:</p>
                  <p className='ml-3 text-sm mt-2'>Nearly a quarter of cyberattacks force businesses to suspend operations, often leading to permanent closure.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Smart cyberattacks: </p>
                  <p className='ml-3 text-sm mt-2'>Modern attacks can easily deceive employees or open systems.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-primary '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full'>
            <img src={managed4}
            alt='tft1'
            className='w-full h-full'/>
          </div>
          <div className='mt-10 md:mt-20 mx-3'>
            <div className='flex flex-col '>
              <h1 className='text-4xl font-bold tracking-wide mt-6 mb-3 '>Our Services</h1>
              <h1 className='text-accent font-bold'>""</h1>
              <h1 className='text-2xl font-bold tracking-wide mt-6 mb-3'>What You Get from Cybersecurity Services</h1>
              <p className='tracking-wide text-ls mt-5 mx-3 md:mx-0 md:w-3/4 mb-3'>Cybercriminals can infiltrate your business and access your data if your IT system and network are left unprotected. Our solutions include:</p>
              <h1 className='text-accent font-bold text-xl'>Key Factors"</h1>
              <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Virus protection</p>
                  
                </div>
              </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Spam and scam email filtering</p>
                  
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Emerging threat monitoring</p>
                  
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Ransomware defense</p>
                 
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-20 pb-20'>
        <div className='flex items-center justify-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col'>
            <h1 className='text-grade text-lg tracking wide font-bold'>How It's Done</h1>
            <h1 className='text-4xl font-bold tracking wide mt-3'>How Solstice Technologies Limited Protects Your Business</h1>
            <p className='text-secondary font-medium tracking-wide text-lg mt-5'>
            At Solstice Technologies Limited, we begin by consulting with you to review and enhance your existing cybersecurity measures. Next, we strategize to develop a customized plan that bolsters your cybersecurity without disrupting your current operations. Finally, we execute this plan, continuously monitoring and addressing any issues swiftly to ensure your business remains secure and fully operational.
            </p>
          </div>
          <div className='flex flex-col pl-20'>
            <div className='flex mb-10'>
              <img
              src={consult}
              alt='star'
              className='bg-tertiary rounded-full px-3 py-2 w-[80px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Consult</h1>
                <p className='mt-2 text-lg text-secondary'>Review and improve your current cyber protection programs.</p>
              </div>
            </div>
            <div className='flex mb-10'>
              <img
              src={execute}
              alt='star'
              className='bg-tertiary rounded-full px-3 py-2 w-[80px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Strategize</h1>
                <p className='mt-2 text-lg text-secondary'>Develop a plan to enhance cybersecurity without disrupting operations</p>
              </div>
            </div>
            <div className='flex'>
              <img
              src={strategy}
              alt='star'
              className='bg-tertiary rounded-full px-3 py-2 w-[80px]'/>
              <div className='flex flex-col ml-5'>
                <h1 className='text-xl font-bold'>Execute</h1>
                <p className='mt-2 text-lg text-secondary'>Launch and monitor the new cybersecurity plan, addressing any issues promptly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 pb-10 text-white bg-primary'>
        <div className='flex flex-col items-center justify-center  grid grid-cols-1 md:grid-cols-2 gap-5 mx-5'>
          <div className="">
            <h1 className='text-4xl font-bold tracking-wide mb-5'>Why Choose Solstice Technologies Limited for Cybersecurity Services</h1>
            <p className='text-xl tracking-wide mb-5'>Our dedicated cybersecurity team is highly trained in threat monitoring, management, and disposal, ensuring you stay protected against both existing and emerging threats.

</p>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Expertise in Cybersecurity:</p>
                  <p className='ml-3 text-sm mt-2'> Years of experience handling all threat levels.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  24/7 Maintenance:</p>
                  <p className='ml-3 text-sm mt-2'>Continuous monitoring and proactive maintenance.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Over half of cyberattacks target small businesses: </p>
                  <p className='ml-3 text-sm mt-2'>These breaches often cost over $100k, which can be devastating.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Simplified Service: </p>
                  <p className='ml-3 text-sm mt-2'>Reduce complexity and cost by using a single provider for all IT needs. </p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Up-to-date Threat Monitoring: </p>
                  <p className='ml-3 text-sm mt-2'> Constant vigilance for new threats and vulnerabilities.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Fast Response:  </p>
                  <p className='ml-3 text-sm mt-2'> Immediate action against threats to keep your business running smoothly.</p>
                </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <h1 className='text-4xl font-bold tracking-wide mb-5'>Areas of Cybersecurity Services </h1>
            <p className='text-xl tracking-wide mb-5'>Cybersecurity goes beyond firewalls and antivirus software. Our solutions cover:</p>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Network Security: </p>
                  <p className='ml-3 text-sm mt-2'>Monitor and halt suspicious network activity.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Information Security:  </p>
                  <p className='ml-3 text-sm mt-2'>Protect business information in storage, transfers, and sharing. </p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Risk Management:</p>
                  <p className='ml-3 text-sm mt-2'>Identify and amend vulnerabilities to manage both active and potential risks.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-scroll min-h-[500px]'>
        <div className='flex items-center justify-center pt-20 flex-col '>
          <h1 className='text-3xl font-bold tracking-wide md:mb-10'>Industries that Benefit from Cybersecurity Solutions</h1>
          <p className='text-7xl mx-4 md:w-3/4'>"As businesses move to the digital landscape, cybercriminals gain more access. Protect your business with our cybersecurity solutions."</p>
        </div>
      </div>

      <div className='pt-20 pb-10 flex flex-col'>
        <div className='flex items-center justify-center '>
          <h1 className='text-5xl font-bold tracking-wide'>Cyber Security Services FAQs</h1>
        </div>
        <div className='mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white pt-20'>
          <div className='bg-tertiary flex items-center justify-center flex-col px-3 py-2 rounded-2xl hover:scale-105 duration:500'>
            <h1 className='text-xl font-bold mb-5'>What is Cyber Security ?</h1>
            <p className='tracking-wide mb-5 md:w-3/4 text-secondary'>Cybersecurity protects systems, networks, programs, and infrastructure from digital attacks aimed at retrieving sensitive data.</p>
          </div>
          <div className='bg-tertiary flex items-center justify-center flex-col px-3 py-2 rounded-2xl hover:scale-105 duration:500'>
            <h1 className='text-xl font-bold mb-5'>What types of threats are there ?</h1>
            <p className='tracking-wide mb-5 md:w-3/4 text-secondary'>Common threats include phishing, malware, ransomware, DoS attacks, MitM attacks, SQL injection attacks, and more. Our services cover all types of attacks, from simple to complex.</p>
          </div>
          <div className='bg-tertiary flex items-center justify-center flex-col px-3 py-2 rounded-2xl hover:scale-105 duration:500'>
            <h1 className='text-xl font-bold mb-5'>Do cybersecurity services also fix damage related to cyberattacks?</h1>
            <p className='tracking-wide mb-5 md:w-3/4 text-secondary'>Our services aim to prevent attacks. If an attack occurs under our protection, we act to remove it. If you've already experienced an attack, we will assess the damage during the consultation.</p>
          </div>
        </div>
        <div className='flex items-center justify-center pt-10'>
          <div className='flex flex-col bg-tertiary items-center justify-center px-3 py-2 rounded-2xl text-white hover:scale-105 duration:500'>
            <h1 className='text-xl font-bold mb-5'>Is there a difference between a cyberattack, threat, or risk ?</h1>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Cyberattack:</p>
                  <p className='ml-3 text-sm mt-2'>An action taken against you.</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Cyberthreat:</p>
                  <p className='ml-3 text-sm mt-2'> The possibility of an attack.</p>
                </div>
            </div>
            <div className='flex mt-5 ml-12 pl-12'>
                <TiTickOutline className='border border-primary rounded-full mt-1'/>
                <div className='flex flex-col '>
                  <p className='ml-3 font-bold text-lg'>
                  Cyber risk:</p>
                  <p className='ml-3 text-sm mt-2'> The probability and vulnerability to an attack.</p>
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

export default Cyber