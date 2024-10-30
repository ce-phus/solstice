import React from 'react'
import { managed1, icon1, managed3,  consult, execute, strategy } from '../assets'
import { TiTickOutline } from "react-icons/ti";
import { styles } from '../styles'
import { Link } from 'react-router-dom';
import { Blogs, Footer, Partners } from '../components';

const Cyber = () => {
  return (
    <>
      <div className='relative bg-scroll min-h-[800px]'>
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

      <div className='max-w-7xl mx-auto pt-20'>
        <div className='flex flex-col items-center justify-center mx-3'>
          <h1 className='text-3xl font-bold tracking-wide'>Common Cyber Threats to Your Business</h1>
          <p className='text-xl tracking-wide lg:w-1/2 my-10'>Your business faces many threats every day. The following are just some of the issues our cybersecurity services address.</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
            <div className='flex'>
              <TiTickOutline className='mt-1 w-12 text-grade mr-3'/>
              <p className='text-xl tracking-wide  text-secondary'>Hackers attack small and medium businesses (SMBs) to access customer databases and financial records.</p>
            </div>
            <div className='flex'>
              <TiTickOutline className='mt-1 w-12 text-grade mr-3'/>
              <p className='text-xl tracking-wide  text-secondary'>Hackers prefer to attack businesses than individuals because of the amount of valuable data.</p>
            </div>
            <div className='flex'>
              <TiTickOutline className='mt-1 w-12 text-grade mr-3'/>
              <p className='text-xl tracking-wide  text-secondary'>Hackers often target SMBs because they are known to skimp on cybersecurity solutions.</p>
            </div>
          </div>
          <p className='my-10 text-secondary text-xl'>When your business falls victim to a cyberattack, you lose more than your data—you also lose your credibility.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 pt-20 mx-3'>
          <div>
            <img 
            src={managed1}
            className='w-1/2 mx-3 lg:w-full'
            alt='managed1'/>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-4xl tracking-wide font-bold'>Cybersecurity Services for Complete Protection Against All Cyberthreats</h1>
            <p className='text-xl text-secondary mt-5'>Cyberthreats are a constant worry for businesses of any size, from startups to Fortune 500 corporations. Our cyber security services provide complete protection against all cyber threats to give you, your employees, and your customers total peace of mind.</p>
            <h1 className='text-2xl tracking-wide font-bold mt-5'>More than half of all cyberattacks are targeted at small businesses</h1>
            <p className='text-xl text-secondary mt-5'>These breaches frequently cost over $100k. For businesses of any size, especially small businesses, a sum of that amount is detrimental to proper functioning and stability.</p>
            <h1 className='text-2xl tracking-wide font-bold mt-5'>Nearly ¼ of those cyberattacks force a suspension of operations</h1>
            <p className='text-xl text-secondary mt-5'>If your operations are suspended, your business cannot provide service to customers, employees, and partners. Most small businesses never recover from this.</p>
            <h1 className='text-2xl tracking-wide font-bold mt-5'>The most common cyberattacks can easily trick an open system or employee</h1>
            <p className='text-xl text-secondary mt-5'>Cyberattacks are becoming smarter, disguising themselves so well that any employee or open system can be fooled. Don’t leave your infrastructure at risk.</p>
          </div>
        </div>
        
        <div className='flex items-center justify-center pt-20 max-w-7xl mx-auto flex-col'>
        <h1 className='text-5xl mx-10 font-bold tracking-wide'>Solstice Technologies Limited Services provides total protection through continually learning, up-to-date, and fully aware cybersecurity services.</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-7'>
          <div className='mx-11'>
            <h1 className='text-3xl tracking-wide font-bold mb-4'>What You Get from Cybersecurity Services</h1>
            <p className='tracking-wide text-xl text-secondary'>The modern criminal has moved to the digital space. They can now infiltrate your business and access your data when your IT system and network are left unprotected.</p>

            <p className='mt-5 tracking-wide text-xl text-secondary mb-10'>Our cybersecurity solutions include a consulting service to help businesses find the right course of action</p>
            <Link to={"/contact"} className='w-full border border-grade px-5 py-4 text-lg font-bold text-grade hover:text-white hover:bg-grade hover:scale-105 duration-500 border-l-[3px]'>Book a Consultation Today</Link>
          </div>
          <div className='border border-gray-700 flex mx-11 px-5 flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mt-10'>When you choose Solstice Technologies Limited, you get solutions to the following problems:</h1>
              <div className='gap-y-3'>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Viruses</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Spam and scam emails</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Internal Threats</p>
                </div>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Emerging Threats</p>
                </div>
                <div className='flex mt-4 mb-7'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>Ransomware</p>
                </div>
                <p className='text-secondary text-xl tracking-wide mt-5 mb-7'>Protect your business by working with the experts.</p>
              </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-3 pt-20'>
        <h1 className='font-bold text-5xl tracking-wide'>How Solstice Technologies Limited  Protects Your Business</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 pt-20'>
          <div className='flex flex-col justify-evenly'>
            <div className='flex items-center flex-col'>
            <img
              src={consult}
              alt='consult'
              className='w-[60px] bg-tertiary rounded-lg px-3 py-4 '/>
              <p className='mt-10 text-xl font-bold tracking-wide'>Consult</p>
            </div>
              
              <p className='text-xl text-secondary tracking-wide mt-10'>Schedule a consultation to review your current cyber protection programs and determine changes to improve security.</p>
          </div>
          <div className='flex flex-col justify-evenly'>
            <div className='flex items-center flex-col'>
            <img
              src={strategy}
              alt='consult'
              className='w-[60px] bg-tertiary rounded-lg px-3 py-4 '/>
              <p className='mt-10 text-xl font-bold tracking-wide'>Strategize</p>
            </div>
              
              <p className='text-xl text-secondary tracking-wide mt-10'>Develop a plan that will enhance your organization’s cybersecurity without compromising or disrupting existing processes and operations.</p>
          </div>
          <div className='flex flex-col justify-evenly'>
            <div className='flex items-center flex-col'>
            <img
              src={execute}
              alt='consult'
              className='w-[60px] bg-tertiary rounded-lg px-3 py-4 '/>
              <p className='mt-10 text-xl font-bold tracking-wide'>Execute</p>
            </div>
              
              <p className='text-xl text-secondary tracking-wide mt-10'>Our team will launch the new cybersecurity plan and monitor its progress. We will deal with any issues swiftly to prevent disrupting your business..</p>
          </div>
        </div>
      </div>

      <div className='pt-20 flex flex-col mx-3'>
      <div className='absolute z-[1] w-[80%] h-[30%]  white__gradient'/>
        <h1 className='text-5xl tracking-wide font-bold'>Why Choose Solstice Technologies Limited for Cybersecurity Services</h1>
        <p className='text-secondary text-xl tracking-wide mt-5'>Our dedicated cybersecurity team is highly trained in threat monitoring, threat management, and threat disposals. Their expertise allows Solstice Technologies Limited Services to remain on top of existing and emerging threats and a breakneck pace, keeping you protected always. Learn how our cybersecurity can protect your business.</p>
        <h2 className='text-2xl font-bold my-5'>Expertise in Cybersecurity</h2>
        <p className='text-xl text-secondary tracking-wide'>The expertise our team has spent years gaining is put to full use against cyberattacks of all threat levels.</p>
        <h2 className='text-2xl font-bold my-5'>Around-the-clock Maintenance</h2>
        <p className='text-xl text-secondary tracking-wide'>Proactive maintenance of your IT infrastructure, day or night, keeps us informed and ready to tackle any issues that may arise for fast recovery.</p>
        <h2 className='text-2xl font-bold my-5'>Immediate Action Against Threats</h2>
        <p className='text-xl tracking-wide text-secondary'>The team always stays on top of threat, stopping them in their tracks immediately so your business can always remain fully functional.</p>
        <h2 className='text-2xl font-bold my-5'>24/7 Protection</h2>
        <p className='text-xl tracking-wide text-secondary'>With our cybersecurity services team, threats are monitored and halted 24/7 for continuous service at all times.</p>
        <h2 className='text-2xl font-bold my-5'>Benefits of Our Cybersecurity Services</h2>
        <p className='text-lg text-secondary'>Besides total protection, our cybersecurity services provide benefits that affect all facets of your business.</p>
        <h2 className='text-2xl font-bold my-5'>Simplified Service</h2>
        <p className='text-xl tracking-wide text-secondary'>Using Solstice Technologies Limited Services for all your IT needs, including cybersecurity services, you reduce complexity, confusion, and cost.</p>
        <h2 className='text-2xl font-bold my-5'>Up-to-date Threat Monitoring</h2>
        <p className='text-xl tracking-wide text-secondary'>We constantly stay alert for new threat, new types of threats, and potential areas of risk regarding the cyber safety of your business.</p>
        <h2 className='text-2xl font-bold my-5'>Fast Response</h2>
        <p className='text-xl tracking-wide text-secondary'>Our cybersecurity services team acts instantly against apparent threats to keep your business running smoothly.</p>

        <h1 className='text-4xl text-grade/40 font-bold my-10 tracking-wide'>Cyberthreats are rapidly escalating. Stay protected with cybersecurity services that are always one step ahead</h1>
        <div>
          <div className='flex'>
            <TiTickOutline  className='mt-1 w-12 mr-3'/>
            <p className='font-bold text-2xl '>Area of Cyber Security Service</p>
          </div>
          <p className='text-xl tracking-wide text-secondary my-4 ml-10'>Cybersecurity services are not as simple as installing a firewall or antivirus software. They delve much deeper into the world of shared information and connectivity. Find out what our cybersecurity can offer your business.</p>
        </div>
        <div>
          <div className='flex'>
            <TiTickOutline  className='mt-1 w-12 mr-3'/>
            <p className='font-bold text-2xl'>Network Security</p>
          </div>
          <p className='text-xl tracking-wide text-secondary my-4 ml-10'>Many threats seek to obtain precious company data and do so by either infiltrating your network or intercepting transactions. Our cybersecurity services monitor any suspicious activity on your network, internally and externally, to halt any attempt at a network attack.</p>
        </div>
        <div>
          <div className='flex'>
            <TiTickOutline  className='mt-1 w-12 mr-3'/>
            <p className='font-bold text-2xl'>Information Security</p>
          </div>
          <p className='text-xl tracking-wide text-secondary my-4 ml-10'>We live in a world of digital information, whether it’s in storage or being transferred. Information cybersecurity services protects your business information in all of its forms, from network storage to downloads to sharing.</p>
        </div>
        <div>
          <div className='flex'>
            <TiTickOutline  className='mt-1 w-12 mr-3'/>
            <p className='font-bold text-2xl'>Risk Management</p>
          </div>
          <p className='text-xl tracking-wide text-secondary my-4 ml-10'>Part of being a successful cybersecurity service team is informing you, your employees, and your own IT team of potential vulnerabilities. By seeking these out and amending them, we manage and assess not only active risks but also potential risks to keep you covered.</p>
        </div>
      </div>

      <div className='flex items-center justify-center pt-20 max-w-7xl mx-auto flex-col'>
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-7'>
          <div className='mx-11'>
            <h1 className='text-3xl tracking-wide font-bold'>Industries that Benefit from Cybersecurity</h1>

            <p className='mt-5 tracking-wide text-xl text-secondary mb-10'>As more businesses move to the digital landscape, cybercriminals gain more access to different industries. Fortunately, you can protect your business and data with our cybersecurity.</p>
          </div>
          <div className='border border-gray-700 flex mx-11 px-5 flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mt-10'>Solstice Technologies Limited  provides cybersecurity services to the following businesses:</h1>
              <div className='gap-y-3'>
                <div className='flex mt-4'>
                  < TiTickOutline className='mt-1 w-9'/>
                  <p className='ml-3 text-xl text-secondary'>General Contractors</p>
                </div>
                <p className='text-secondary text-xl tracking-wide mt-5 mb-7'>Each service is customized to meet the company’s specific security needs. Experience this for yourself when you get our cybersecurity.</p>
              </div>
          </div>
        </div>
      </div>
      <div className='py-20 flex flex-col justify-center items-center  lg:mx-0'>
        
          <h1 className='text-3xl tracking-wide font-bold mx-4'>Contact Us for a Free Consultation about Activating Our Cybersecurity Services for Your Business</h1>
          <p className='mt-5 text-xl tracking-wide text-secondary lg:w-1/2 mx-5'>Now is the time to act and protect your business from any and all threats. This can be achieved by activating our cybersecurity services today. Contact us for a free consultation. We’re proud to serve and protect from cyberattacks, giving small businesses a stronger opportunity to stay on top of the market.</p>
          <Link to={"/contact"} className='mt-10 text-lg font-bold border border-grade/40 px-4 py-3 text-grade hover:text-white hover:bg-grade hover:scale-105 duration-500 rounded'>Book a Free CyberSecurity Consultation</Link>
      </div>
      </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className='pt-20 flex max-w-7xl mx-auto flex-col mx-3'>
      <h1 className='text-5xl font-bold tracking-wide mx-3'>Cybersecurity Services FAQs</h1>
      <h2 className='my-5 text-3xl font-bold mx-3'>What is cybersecurity?</h2>
      <p className='mb-4 text-secondary text-xl tracking-wide mx-4'>Cybersecurity, by definition, is the act of protecting any system, network, program, or infrastructure from cyberattacks.</p>
      <p className='mb-4 text-secondary text-xl tracking-wide mx-4'>Cyberattacks are digital attacks that aim to retrieve sensitive data, whether personal, business, or confidential. By doing so, attackers can bribe the owner of that information and extort them for money (usually). These attacks are normally so harmful that businesses do not recover, whether that’s due to operational damage or financial damage.</p>
    
      <p className='mb-4 text-secondary text-xl tracking-wide mx-4'>Our cybersecurity services in NJ aim to prevent these attacks and set up a digital barrier around a business so they can perform transactions safely.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 pb-20 mx-3'>
        <div>
          <h2 className='my-5 text-3xl font-bold '>What types of threats are there and do cybersecurity services cover all of them?</h2>
          <p className='mb-4 text-secondary text-xl tracking-wide'>There are many types of cyberthreats. You are most likely familiar with phishing, malware, and ransomware. These involve fraudulent emails that trick the reader into sending payments or sensitive information or downloading malicious software onto your devices.</p>
          <p className='mb-4 text-secondary text-xl tracking-wide'>There are many other types of cyberthreats that target businesses such as DoS attacks, MitM attacks, SQL injection attacks, and more. These are much more complicated and often don’t involve personal interaction or acceptance by mistake.</p>
          <p className='mb-4 text-secondary text-xl tracking-wide'>Our cybersecurity services protect your business against all kinds of attacks, from simple to complex.</p>

          <h2 className='my-5 text-3xl font-bold '>Is there a difference between a cyberattack, threat, or risk?</h2>
          <p className='mb-4 text-secondary text-xl tracking-wide'>These terms are related and often used interchangeably, but there are definite differences. A cyberattack is an action taken against you, a cyberthreat is the possibility of an attack, and a cyber risk relates to probability and vulnerability.</p>
          <p className='mb-4 text-secondary text-xl tracking-wide'>Our cybersecurity team uses these terms by definition to ensure the best possible safety regarding your business and its data</p>

          <h2 className='my-5 text-3xl font-bold '>Do cybersecurity services also fix damage related to cyberattacks?</h2>
          <p className='mb-4 text-secondary text-xl tracking-wide'>Our cybersecurity services aim to prevent even the potential for an attack. If one happens under our protection, then we will act accordingly and seek to remove it. If you’ve already undergone a cyberattack, then let us know during the consultation as we will need to assess the damage before implementing any services.</p>
        </div>
        <div>
          <img
          src={managed3}/>
        </div>
        
      </div>
    </div>
      <Partners />
      {/* <div className='pt-20 pb-10'>
        <Blogs />
      </div> */}
      <Footer />
    </>
    
  )
}

export default Cyber