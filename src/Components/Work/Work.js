import React from 'react';
// import WorkImg from '../assets/workImg.jpeg';
import picBg from '../../assets/45.jpg';
import picBg1 from '../../assets/22.jpg';
import picBg3 from '../../assets/55.jpg';

const Work = () => {
    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-4 mt-12  pt-10'>
                    <p className='text-4xl sm:mt-12 font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='mb-2 mt-2'> Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-3 gap-4 mt-6'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${picBg})`, overflow: "hidden" }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN Stack Application
                            </span>

                            <br />
                            <span className='text-1xl mx-auto font-bold text-white tracking-wider'>
                                Bicycle Warehouse Management
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${picBg1})`, overflow: "hidden" }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN Stack Application
                            </span>

                            <br />
                            <span className='text-1xl mx-auto font-bold text-white tracking-wider'>
                                Camera Manufacturer Store
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}

                    {/* Grid Item */}

                    <div
                        style={{ backgroundImage: `url(${picBg3})`, overflow: "hidden" }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;