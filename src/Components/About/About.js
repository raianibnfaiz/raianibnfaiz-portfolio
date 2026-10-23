import React from 'react';
import myImg from '../../assets/2.jpg';
import './About.css';
const About = () => {
    return (
        <div name='about' className='md:h-screen  flex flex-col w-full px-12 py-12 items-center  justify-center text-white bg-gradient-to-b from-black to-gray-800 '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className="mt-10 pb-12">
                    <p className="text-4xl font-bold text-white inline border-b-4 border-gray-500">
                        About
                    </p>

                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                <div className='px-12 '>
                    <img src={myImg} alt="" className=' shadow-md shadow-purple-200 ' srcset="" />
                </div>



                <div className='about-text text-white flex flex-col text-center py-12'>
                    <p className='sm:text-center text-4xl font-bold text-white py-5'> I'm Raian Ibn Faiz </p>
                    <p className='text-justify p-3 about-text'>I am a Computer Science graduate from BRAC University with 3.5+ years
                        of experience as a Software Engineer specializing in full-stack and cross-platform development. I am passionate
                        about solving challenging problems in web and mobile development and building scalable, user-friendly
                        applications that deliver real value. Currently working as a Senior Software Engineer at BJIT Limited, I take
                        ownership of end-to-end feature development across mobile (Android/Flutter), web (React/TypeScript), backend
                        (Node.js/Express), and Microsoft Power Platform/Dataverse solutions. I have delivered multiple production
                        projects spanning IoT platforms, real-time systems, safety applications, and location-based services while
                        collaborating in Agile teams throughout the complete feature lifecycle.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;