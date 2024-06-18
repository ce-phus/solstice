import React from 'react'
import { boss } from '../assets'

const Testimonial = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <img
        src={boss}
        className='w-[200px] mb-5'/>
        <p className='text-white text-xl tracking-wide'>Michael Bullut</p>
        <h1 className='mt-5 text-white text-4xl font-bold tracking-wide mb-5'>Chief Executive Officer</h1>
        <p className='text-2xl font-bold tracking-wide md:w-1/2 text-secondary mb-3 mx-3'>
        A success-oriented analytical thinker with fifteen (15) years of experience offering innovative and technical solutions to corporate environments (start-ups, medium and large organizations) across Kenya and East Africa. My background includes a solid understanding of networking capabilities, including web application firewalls, network access control, security groups, routing, tracing, and D.N.S. resolution. In addition, I have industry experience in providing solutions for mission-critical network systems, leading network infrastructure deployments and enhancements, resource mobilization, and strategic partnership building.
        </p>
        <p className='text-2xl font-bold tracking-wide md:w-1/2 text-secondary mx-3 mb-3'>
        Throughout my career, I have excelled in motivating people and keeping teams focused while never losing sight of the customer needs and this has made me an asset in the companies I have worked for. As an analytical person, I focus on developing next-generation cloud infrastructure capabilities, building efficient and stable solutions that prevent business downtime, and providing high availability capabilities.
        </p>
        <p className='text-2xl font-bold tracking-wide md:w-1/2 text-secondary mx-3'>
        I can offer clients my strong leadership, organizational, and communication skills and a strong history of successfully managing complex projects and business units across Africa.
        </p>
    </div>
  )
}

export default Testimonial