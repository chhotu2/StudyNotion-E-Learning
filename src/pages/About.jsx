import React from 'react'
import ContactForm from '../components/contactUsForm/ContactForm'
import HighlightText from '../../src/components/core/HomePage/HighlightText';
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from '../components/core/AboutPage/Quote';
import Box from '../components/core/AboutPage/Box';
import StatsComponents from '../components/core/AboutPage/Stats';
import ContactFormSection from '../components/core/AboutPage/ContactFormSection';
import  Footer from '../components/common/Footer' 



const About = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto mt-20  '>
                <header className='text-white w-11/12 mx-auto text-center'>
                    <p className='text-center'>About Us</p>
                    <div className='w-[50%] mx-auto mt-10'>

                        <h1 className='text-3xl'> Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"} /></h1>
                    </div>
                    <div className='w-[50%] mx-auto text-sm text-center'>

                        <p className='text-richblack-100'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                    </div>
                </header>


                <div className='flex justify-center gap-5 mt-8 w-[80%] mx-auto'>
                    <img src={BannerImage1} alt="" />
                    <img src={BannerImage2} alt="" />
                    <img src={BannerImage3} alt="" />
                </div>

                <div className='w-[70%] mx-auto border flex  justify-center items-center text-3xl mt-20'>
                    <Quote />
                </div>
            </div>


            <div className='mt-20 w-11/12  items-center'>

                <Box />

            </div>

            <div className='text-richblack-25 bg-richblack-700 mt-10 p-[30px]'>
                <StatsComponents />
            </div>

            <div className='w-11/12 mx-auto mb-10'>
                <ContactFormSection />
            </div>


             <div>
                <Footer/>
             </div>


        </div>
    )
}

export default About
