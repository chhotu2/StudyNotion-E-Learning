import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//  import { Dispatch } from 'react';
// import { useDispatch } from 'react-redux';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {

    const { loading } = useSelector((state) => state.auth);
    const [email, setemail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const dispatch=useDispatch();
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
        // setEmailSent(true);
    }

    return (


        <div className='flex flex-col justify-center items-center    w-11/12 max-w-maxContent mx-auto'>


            <div className='flex justify-center items-center'>

                {
                    loading ? (
                        <div>
                            Loading...
                        </div>
                    ) : (
                        <div className='w-[45%]'>
                            <h1 className='text-white text-2xl'>
                                {
                                    !emailSent ? "Reset Your Password" : "Check Your Email"
                                }
                            </h1>

                            <p className='text-richblack-5 text-sm'>
                                {
                                    !emailSent ? "Have no fear. We will email you instruction to rest your password, if you don't have access to your email we can try account recovery"
                                        : `We have sent you reset email to ${email}`
                                }
                            </p>

                            <form onSubmit={handleOnSubmit} className='flex flex-col text-white  '>
                                {
                                    !emailSent && (
                                        <label>
                                            <p className='text-richblack-5'>Email Address<sup className='text-red-600'>*</sup></p>
                                            <input
                                                className='text-black'
                                                required
                                                name='email'
                                                value={email}
                                                onChange={(e) => setemail(e.target.value)}
                                                placeholder='Enter your Email Addess'
                                            />
                                        </label>
                                    )
                                }

                                <div className='bg-yellow-300 text-richblack-25 text-center text-2xl '>


                                    <button type='submit'>
                                        {
                                            !emailSent ? "Reset Password" : "Resend Email"
                                        }
                                    </button>
                                </div>

                                <div>
                                    <Link to="/login">
                                        <p>Back to Login</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default ForgotPassword
