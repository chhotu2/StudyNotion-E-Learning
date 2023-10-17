import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import CountryCode from "../../data/countrycode.json";
import { contactus } from "../../services/operations/authAPI";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async (data) => {
        // console.log(data);

        // const contactData = {
        //     ...FormData,
        // }
        console.log("sending data to db")
        dispatch(contactus(data));
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            })
        }
    }, [reset, isSubmitSuccessful])


    return (



        <form onSubmit={handleSubmit(submitContactForm)}>

            <div className='flex flex-col text-richblack-50'>
                <div className='flex gap-5 mt-5 mb-2'>
                    <div className='flex flex-col'>
                        <label htmlFor='firstName'>First Name</label>

                        <input
                            type='text'
                            name='firstName'
                            id='firstName'
                            placeholder='Enter First Name'
                            {...register("firstName", { required: true })}
                            className='bg-richblack-800
                        p-[10px]'
                        />
                        {
                            errors.firstName && (
                                <span>
                                    Please enter Your  first name
                                </span>
                            )
                        }
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='lastName'>First Name</label>
                        <input
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='Enter Last Name'
                            {...register("lastName", { required: true })}
                            className='bg-richblack-800
                        p-[10px]'
                        />
                        {
                            errors.name && (
                                <span>
                                    Please enter Your  first name
                                </span>
                            )
                        }
                    </div>



                </div>

                {/* Email */}
                <div className='flex flex-col  mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter Your Email'
                        {...register("email", { required: true })}
                        className='bg-richblack-800
                        p-[10px]'
                    />
                    {
                        errors.email && (
                            <span>
                                Please enter Your  Email Id
                            </span>
                        )
                    }
                </div>


                {/* Phone */}

                <div className='mb-2'>
                    <label htmlFor='phone'>Phone Number</label>
                    <div className='flex flex-row gap-5'>
                        {/* dropdown  */}
                        <select className='w-[50px]  bg-richblack-800
                        p-[5px]'
                            name=''
                            id='dropdown'
                            {...register("countrycode", { required: true })}>
                            {
                                CountryCode.map((element, index) => {
                                    return (
                                        <option className='text-black' key={index} value={element.code}>
                                            {element.code}-{element.country}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <input

                            type='tel'
                            name='phone'
                            id='phone'
                            placeholder='12345  67890'
                            className='text-black w-[280px] bg-richblack-800 p-[5px]'
                            required
                            {...register("phone", {
                                required: true, message: "Please Enter your Phone Number",
                                maxLength: { value: 10, message: "Invalid Phone Number" },
                                minLength: { value: 10, message: "Invalid Phone Number" }
                            })}
                        />

                    </div>
                </div>



                {/* //Message */}
                <div className='flex flex-col mb-2'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        type='text'
                        name='message'
                        id='message'
                        cols="30"
                        rows=""
                        placeholder='Enter Message'
                        {...register("message", { required: true })}
                        className='bg-richblack-800
                        p-[10px]'
                    />
                    {
                        errors.name && (
                            <span>
                                Please enter Your  message
                            </span>
                        )
                    }
                </div>


                {/* button */}
                <button type='submit' className='rounded-md bg-yellow-50 text-center px-10 text-[16px] font-bold text-black  mt-5 p-[10px] hover:bg-yellow-200'>
                    Send Message
                </button>
            </div>

        </form>

    )
}

export default ContactForm
