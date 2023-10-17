import React, { useEffect } from 'react'
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillClockCircle } from "react-icons/ai";
import { sendOtp } from '../services/operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../services/operations/authAPI';
import {sendConfiramation}  from '../services/operations/authAPI'

const OTPVerification = () => {
    const { signupData, loading } = useSelector((state) => state.auth)
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, []);

    const handleVerifyAndSignup = (e) => {
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,

        } = signupData



        dispatch(
            signUp(accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
                navigate
            )
        )

        dispatch(sendConfiramation(email,navigate))
    }



    return (


        <div className=' w-11/12 mx-auto flex justify-center items-center h-screen '>


            <form onSubmit={handleVerifyAndSignup}>
                <div className='w-[28%]  mx-auto'>


                    <div className=''>
                        <h1 className='text-white text-bold text-2xl'>Verify Email</h1>
                        <p className='text-richblack-25 mt-2'>A verification code has been sent to you. Enter the code below</p>
                    </div>
                    <div className='w-[100%] mt-10'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span className='text-richblack-900'>-----------</span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>

                </div>
                <button type='submit' className='mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900'>Verify Email</button>

            </form>



            <div className='flex flex-col'>



                <div className='flex justify-between mt-10 text-richblack-25'>
                    <Link to="/login">
                        <p className='flex items-center gap-2'><AiOutlineArrowLeft />Back to Login</p>
                    </Link>
                    <button onClick={() => dispatch(sendOtp(signupData.email))}>
                        <p className='flex items-center gap-2'>Resend it <AiFillClockCircle /></p>
                    </button>
                </div>
            </div>
        </div>

        
    )
}

export default OTPVerification
