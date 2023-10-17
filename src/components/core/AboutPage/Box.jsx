import React from 'react'
import FoundingStory from "../../../assets/Images/FoundingStory.png"
const Box = () => {
    return (
        <div className='text-white w-11/12 mx-auto justify-evenly items-center   '>
            <div className='flex w-11/12 mx-auto justify-around  '>
                <div className='flex flex-col w-[25%]'>
                    <h1 className='text-pink-200 '>Our Founding Story </h1>
                    <p className='text-[8px] text-richblack-100'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                        As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                </div>
                <div className='item-center'>
                    <img src={FoundingStory} alt="" width="350px" />
                </div>
            </div>


            <div className='w-11/12 flex justify-around mx-auto mt-20'>
                <div className='flex flex-col w-[25%]'>
                    <h1 className='text-pink-200'>Our Vision</h1>
                    <p className='text-[8px] text-richblack-100 '>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>
                <div className='flex flex-col w-[25%]'>
                    <h1 className='text-pink-200'>Our Mission</h1>
                    <p className='text-[8px]'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default Box
