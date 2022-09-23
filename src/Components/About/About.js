import React from 'react';
import myImg from '../../assets/2.jpg'
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



                <div className=' text-white text-center py-12'>
                    <p className='sm:text-right text-4xl font-bold text-white py-5'>Hi. I'm Raian Ibn Faiz </p>
                    <p className='text-justify'>I am passionate about building excellent website that improves
                        the lives of those around me. I specialize in creating websites
                        for clients ranging from individuals and small-businesses all the
                        way to large enterprise corporations.I am developing my web development skills everyday and I am hopeful that I have the ability to grow more as a web developer. </p>
                </div>
            </div>
        </div>
    );
};

export default About;