import React from 'react'
import Information from '../components/core/ContactPage/Information'
import ContactInformation from '../components/core/ContactPage/ContactInformation'


const Contact = () => {
    return (
        <div className='text-white w-11/12  mx-auto flex    justify-evenly mt-16 '>
            <div className='w-[20%]  p-[10px]'>
                <Information />
            </div>

            <div className='w-[35%] border border-richblack-500 p-[30px]'>
                <ContactInformation />
            </div>
        </div>
    )
}

export default Contact
