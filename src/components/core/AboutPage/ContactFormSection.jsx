import React from 'react'
import ContactForm from '../../contactUsForm/ContactForm'

const ContactFormSection = () => {
  return (
    <div className='text-richblack-50 w-[30%] mx-auto mt-10'>
      <h1 className='text-center text-white text-4xl font-bold'>Get in Touch</h1>
      <p className='text-center'>We'd love to hear for you. Please fill out this form.</p>
      <ContactForm/>
       
    </div>
  )
}

export default ContactFormSection
