import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'

const MyProfile = () => {

    const { user } = useSelector((state) => state.profile)

    const navigate = useNavigate();
    return (
        <div className='text-white flex flex-col  border border-white  min-h-[92vh] min-w-[85vw] '>

            <h1 className='text-2xl text-center w-11/12 mx-auto'>My Profile</h1>

            {/* section1 */}

            <div className='flex flex-col  '>

                <div className='flex flex-row bg-richblack-500  justify-between items-center w-11/12 mx-auto p-[15px]'>

                    <div className='flex items-center gap-8 '>
                        <img src={user?.image} alt={`profile-${user?.firstName}`}
                            className='aspect-square w-[78px]  rounded-full object-cover' />
                        <div className='flex flex-col'>
                            <p>{user?.firstName + "" + user?.lastName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>


                    <div className='bg-yellow-25 px-[12px] py-[7px] rounded-md text-black'>

                        <IconBtn
                            text="Edit"
                            onclick={() => {
                                navigate("/dashboard/setting")
                            }}>

                        </IconBtn>
                    </div>

                </div>


                {/* section 2 */}

                <div className='bg-richblack-500 mt-[30px] w-11/12 mx-auto p-[15px]'>
                    <div className='flex justify-between items-center  '>
                        <p>About</p>
                        <div className='bg-yellow-25 px-[12px] py-[7px] rounded-md text-black border '>

                            <IconBtn

                                text="Edit"
                                onclick={() => {
                                    navigate("/dashboard/setting")
                                }} />
                        </div>
                    </div>

                    <p className='mt-4 text-richblack-50'>{user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
                </div>

                {/* section3 */}

                <div className='bg-richblack-500 mt-[30px] w-11/12 mx-auto p-[15px] flex flex-col  '>
                    <div className='  flex justify-between'>
                        <div className='flex items-center justify-center mx-auto text-2xl text-bold'>

                            <p>Personal Details</p>
                        </div>
                        <div className='bg-yellow-25 px-[12px] py-[7px] rounded-md text-black'>

                            <IconBtn
                                text="Edit"
                                onclick={() => {
                                    navigate("/dashboard/setting")
                                }} />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex  '>

                            <div className='flex  '>
                                <p> Name:-  </p>
                                <p>{user?.firstName}</p>
                                <p>{user?.lastName}</p>
                            </div>


                        </div>

                        <div className='flex '>
                            <p className='flex justify-around'>Email :- </p>
                            <p>{user?.email}</p>
                        </div>

                        <div className='flex flex-col'>
                            <p>Gender :-</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                        </div>



                        <div className='flex flex-col '>
                            <p>Phone Number :- </p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                        </div>

                        <div>
                            <p>Date of Birth :-</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                        </div>
                    </div>
                </div>

            </div>



        </div >

    )
}



export default MyProfile
