import React, { useRef, useState } from "react";
import {styles} from "../styles"


const Contact = () => {
  const formRef= useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })


  const [loading, setLoading] =useState(false)

  const handleChange = (e) => {
    const {name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "",
      "",
      {
        from_name: form.name,
        to_name: "solstice",
        from_email: form.email,
        to_email: "hello@solstice.co.ke",
        message: form.message,
      },
      ""
    )
    .then(() => {
      setLoading(false);
      alert("Thankyou. I will get back to you as soon as possible.")

      setForm({
        name: "",
        email: "",
        message: "",
      }), (error) => {
        setLoading(false)
        
        console.log(error)

        alert("Something went wrong!")
      }
    })
  }
  return (
    <div className={`${styles.paddingX} bg-white pt-20 pb-10 flex flex-col text-primary`}>
      <h1 className='text-primary font-bold text-5xl'>How can We help you?</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 pb-10 gap-7'>
        <div className='flex flex-col border border-gray-300 shadow rounded-lg gap-y-4 pt-10'>
          <h1 className='text-2xl font-bold ml-5'>Cybersecurity Services</h1>
          <p className='ml-5 text-lg text-blue-700'>Basic Plan: Essential protection for small businesses.</p>
          <p className='ml-5 text-lg text-blue-700'>Standard Plan: Advanced security features for medium-sized businesses.</p>
          <p className='ml-5 text-lg text-blue-700'>Flowbite plans & prices</p>
          <p className='ml-5 text-lg text-blue-700 mb-10'>Premium Plan: Comprehensive security solutions for large enterprises.</p>
        </div>
        <div className='flex flex-col border border-gray-300 shadow rounded-lg gap-y-4 pt-10'>
          <h1 className='text-2xl font-bold ml-5'>Managed IT Services</h1>
          <p className='ml-5 text-lg text-blue-700'>Starter Package: Basic IT support and management.</p>
          <p className='ml-5 text-lg text-blue-700'>Professional Package: Enhanced IT services including proactive monitoring.</p>
          <p className='ml-5 text-lg text-blue-700'>Enterprise Package: Full-scale IT management for large organizations.</p>
        </div>
        <div className='flex flex-col border border-gray-300 shadow rounded-lg gap-y-4 pt-10'>
          <h1 className='text-2xl font-bold ml-5'>Cloud Computing Solutions</h1>
          <p className='ml-5 text-lg text-blue-700'>Basic Cloud Package: Essential cloud storage and computing services.</p>
          <p className='ml-5 text-lg text-blue-700'>Advanced Cloud Package: Enhanced cloud capabilities with additional features.</p>
          <p className='ml-5 text-lg text-blue-700 mb-10'>Enterprise Cloud Package: Comprehensive cloud solutions with full support and maintenance.</p>
        </div>
        <div className='flex flex-col border border-gray-300 shadow rounded-lg gap-y-4 pt-10'>
          <h1 className='text-2xl font-bold ml-5'>IT Consulting Services</h1>
          <p className='ml-5 text-lg text-blue-700'>Consultation Only: Expert advice for your IT projects.</p>
          <p className='ml-5 text-lg text-blue-700'>Project Management: Complete management of IT implementation projects.</p>
          <p className='ml-5 text-lg text-blue-700 mb-10'>Full Consulting Package: End-to-end IT consulting and project support.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold tracking-wide mb-3'>Not what you were looking for ?</h1>
          <p className='text-secondary text-xl'>Browse through tall of our Help Center articles</p>
        </div>
        <button className='md:absolute md:right-10 mt-5 md:mt-0 bg-blue-900 w-1/4 py-2 rounded-lg text-white text-xl'>Get started</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-20'>
        <div className='flex flex-col'>
          <h1 className='font-semibold tracking-wide text-2xl'>Points of contact</h1>
          <p className='text-xl mt-4'>Solstice Tech, Kenya</p>
          <p className='text-xl mt-2 text-secondary ml-3'>ABC Place, Waiyaki Way, The Island</p>
          <p className='text-xl mt-4'>Information & Sales</p>
          <p className='text-lg mt-2 ml-3 text-blue-800'>hello@solstice.co.ke</p>
          <p className='text-xl mt-4'>Verification of Employment</p>
          <p className='text-lg mt-2 ml-3 text-blue-800'>hr@solstice.co.ke</p>
          <h1 className='font-bold tracking-wide text-2xl mt-4'>Our Offices around E.A</h1>
          <p className='text-xl mt-4'>Solstice Tech, Kenya</p>
          <p className='text-xl mt-2 text-secondary ml-3'>ABC Place, Waiyaki Way, The Island</p>
          <p className='text-xl mt-4'>Solstice Tech, Tanzania</p>
          <p className='text-xl mt-2 text-secondary ml-3'>We Coming ...</p>
          <p className='text-xl mt-4'>Solstice Tech, Rwanda</p>
          <p className='text-xl mt-2 text-secondary ml-3'>We Coming ...</p>
        </div>
        <div className="pt-10 md:pt-0">
        <h1 className=" text-4xl font-bold">Get In Touch.</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact