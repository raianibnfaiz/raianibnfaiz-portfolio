import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";
import './Home.css';
const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <p className='tracking-wide intro text-green-800 py-3'>Hi, my name is</p>
                    <h1 className=' text-6xl sm:text-5xl font-bold text-[#ccd6f6]'>
                        Raian Ibn Faiz
                    </h1>
                    <p className="pt-4 text-2xl sm:text-4xl font-bold text-white">
                        I'm a Software Engineer
                    </p>
                    <p className="text-gray-500 py-4 max-w-md">
                    I am specialized in Android app development, developing mobile app with Flutter and web applications using React.js, Tailwind, Bootstrap, MongoDB, and Node.js.
                    </p>

                    <div>
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            My Works
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;