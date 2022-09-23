import React from 'react';
// import WorkImg from '../assets/workImg.jpeg';
import picBg from '../../assets/45.jpg';
import picBg1 from '../../assets/22.jpg';
import picBg3 from '../../assets/55.jpg';
import './Work.css';
const Work = () => {
    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-12'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-4 mt-12  pt-10'>
                    <p className='text-4xl sm:mt-12 font-bold inline border-b-4 text-gray-300 border-gray-500'>
                        Work
                    </p>
                    <p className='mb-2 mt-2'> Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-3 gap-4 mt-6 p-3'>

                    {/* Grid Item */}


                    <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 my-3">
                        <div className="flex flex-col items-center justify-center text-white text-center py-6">

                            <span className='project-title  text-green-200 text-2xl  font-bold text-white tracking-wider '>

                                Bicycle Warehouse Management
                            </span>

                            <span className='app-type py-3 text-orange-200'>
                                MERN Stack Project
                            </span>

                        </div>
                        <img
                            src={picBg}
                            alt=""
                            className="rounded-md "
                        />
                        <div className="flex items-center justify-center">

                            <a href='https://warehouse-management-92018.web.app/' target="_blank">
                                <button className="app-type w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/raianibnfaiz/cycle-warehouse-management-client-side-raianibnfaiz' target="_blank">
                                <button className="app-type w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 my-3">
                        <div className="flex flex-col items-center justify-center text-white text-center py-6">

                            <span className='project-title  text-green-200 text-2xl  font-bold text-white tracking-wider '>

                                Camera Manufacturer Store
                            </span>
                            <span className='app-type py-3 text-orange-200'>
                                MERN Stack Project
                            </span>

                        </div>
                        <img
                            src={picBg1}
                            alt=""
                            className="rounded-md "
                        />
                        <div className="flex items-center justify-center">

                            <a href='https://manufacturer-website-54002.web.app/' target="_blank">
                                <button className="app-type w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/raianibnfaiz/camera-manufacturer-website-client-side-raianibnfaiz' target="_blank">
                                <button className="app-type w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>

                            </a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 my-3">
                        <div className="flex flex-col items-center justify-center text-white text-center py-6 px-2">

                            <span className='project-title  text-green-200 text-2xl  font-bold text-white tracking-wider '>

                                Personal Savings Banking System
                            </span>
                            <span className='app-type py-3 text-orange-200'>
                                Javascript Application
                            </span>

                        </div>
                        <img
                            src={picBg3}
                            alt=""
                            className="rounded-md "
                        />
                        <div className="flex items-center justify-center">

                            <a href='https://solid-personal-bank-webpage.netlify.app/' target="_blank">
                                <button className="app-type w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/raianibnfaiz/solid-personal-bank-money-master-raianibnfaiz-' target="_blank">
                                <button className="app-type w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>

                            </a>
                        </div>
                    </div>







                </div>
            </div>
        </div >
    );
};

export default Work;