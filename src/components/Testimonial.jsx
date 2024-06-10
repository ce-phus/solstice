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
        He is a strategy-oriented thinker with more than a decade worth of experience in offering innovative and technical solutions to a range of corporate environments across Kenya and East Africa.
        </p>
        <p className='text-2xl font-bold tracking-wide md:w-1/2 text-secondary mx-3'>
        He has a solid understanding of networking capabilities, including web application firewalls, network access control, security groups, routing, tracing and D.N.S. resolution. His proven industry experience in providing solutions for mission-critical network systems, leading network infrastructure deployments and enhancements as well as resource mobilization and strategic partnership building.
        </p>
    </div>
  )
}

export default Testimonial