import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
    preferredContact: [],
    urgency: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prevForm) => ({
        ...prevForm,
        preferredContact: checked
          ? [...prevForm.preferredContact, value]
          : prevForm.preferredContact.filter((contact) => contact !== value),
      }));
    } else if (type === "radio") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_agjupcw",
      "template_pe5v36g",
      {
        from_firstname: form.firstname,
        from_lastname: form.lastname,
        from_phonenumber: form.phonenumber,
        to_name: "Solstice Technologies Limited",
        from_email: form.email,
        to_email: "hello@solstice.co.ke",
        message: form.message,
        preferred_contact: form.preferredContact.join(", "),
        urgency: form.urgency,
      },
      "5TKVQ_9rDJV810vPd"
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        message: "",
        preferredContact: [],
        urgency: ""
      });
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    });
  };

  return (
    <>
    <div className='flex h-screen justify-center pt-20 overflow-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto'>
        <img
        src={contact}
        className='h-[400px] contain hidden md:block'
        />
        <div className='mx-4'>
          <h1 className='text-secondary text-3xl font-bold mb-3'>Contact Us</h1>
          <p className='text-lg font-medium text-gray-300 mb-4'>Please use this form to get in touch with us. We’ll be happy to assist you with any inquiries or requests.</p>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='flex flex-wrap -mx-3 mb-6 md:mb-2'>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>First Name</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                type="text"
                name="firstname"
                placeholder='Mary'
                value={form.firstname} 
                onChange={handleChange} />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>Last Name</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                type="text"
                name="lastname"
                placeholder='Jane'
                value={form.lastname}
                onChange={handleChange}/>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6 md:mb-2'>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>Email Address</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder='someone@gmail.com'
                type="email"
                name="email"
                value={form.email}
              onChange={handleChange}/>
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2'>
                <label className='font-medium tracking-wide block'>Phone Number</label>
                <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder='0700000000'
                type="tel"
                name="phonenumber"
                value={form.phonenumber}
                onChange={handleChange}/>
              </div>
            </div>
            <div className='mt-2'>
              <label className=' font-medium block tracking-wide'>Subject of Inquiry</label>
              <input
                className='appearance-none bg-secondary text-gray-800 block border border-gray-700 placeholder-gray-300 rounded-lg w-full p-2.5'
                placeholder=''
                name="message"
                value={form.message}
              onChange={handleChange}/>
                <label className='flex flex-col mt-3'>
                  <span className='font-medium mb-4'> Message</span>
                  <textarea
                    rows={7}
                    name='message'
                    
                    placeholder='What you want to say?'
                    className='bg-secondary border border-white shadow py-4 px-6 placeholder:text-white text-primary rounded-lg outline-none border-none font-medium'
                  />
                </label>
            </div>
            
            <div className='flex space-x-5 flex-col md:flex-row'>
              <div className='mt-5 space-y-2'>
                <h1 className='font-medium mb-3'>Preferred Contact</h1>
                <div className='flex space-x-3'>
                  <input
                  name='preferredContact'
                  type='checkbox'
                  value='Email'
                  checked={form.preferredContact.includes("Email")} onChange={handleChange}
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Email</label>
                </div>
                <div className='flex space-x-3'>
                  <input
                  value='Phone Call'
                  checked={form.preferredContact.includes("Phone Call")} onChange={handleChange}
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Phone Call</label>
                </div>
                <div className='flex space-x-3'>
                  <input
                  name='preferredContact'
                  value='Text Message'
                  checked={form.preferredContact.includes("Text Message")} onChange={handleChange} 
                  type='checkbox'
                  className='rounded-full bg-white'/>
                  <label className='font-medium'>Text Message</label>
                </div>
              </div>

              <div className='mt-5 space-y-2 md:pl-20'>
                <h1 className='font-medium mb-3'>Urgency of Inquiry</h1>
                <div className='flex space-x-3'>
                <input type='radio' name='urgency' value='Urgent' checked={form.urgency === "Urgent"} onChange={handleChange} /> 
                  <label className='font-medium'>Urgent</label>
                </div>
                <div className='flex space-x-3'>
                <input type='radio' name='urgency' value='Urgent' checked={form.urgency === "Urgent"} onChange={handleChange} /> 
                  <label className='font-medium'>Normal</label>
                </div>
                <div className='flex space-x-3'>
                <input type='radio' name='urgency' value='Not Urgent' checked={form.urgency === "Not Urgent"} onChange={handleChange} />
                  <label className='font-medium'>Not Urgent</label>
                </div>
              </div>
              
            </div>
            <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-2'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>
        </div>
      </div>
      
    </div>
    <div className='absolute z-[60] w-[30%] h-[35%] top-0 pink__gradient'/>
    <div className='absolute z-[70] w-[20%] h-[80%] top-0 white__gradient'/>
    <div className='absolute z-[50] w-[20%] h-[50%] top-0 blue__gradient'/>
    </>
  )
}

export default Contact