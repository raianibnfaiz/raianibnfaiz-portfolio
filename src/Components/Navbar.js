import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const Slinks = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/raian-ibn-faiz/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/raianibnfaiz",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:raianibnfaiz@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'skills'
        },
        {
            id: 3,
            link: 'about'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
    return (
        <div className='flex px-4 justify-between items-center bg-black w-full h-20 fixed'>
            <div>
                <h1 className='text-4xl font-signature text-white ml-2 text-red-200'>Raian</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => {
                    return (
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-300 duration-300'>
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    )
                })}


            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>

                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className='justify-center flex flex-col items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => {
                        return (
                            <li key={id} className='px-4 capitalize cursor-pointer text-4xl py-6 text-gray-500 hover:scale-105 hover:text-blue-300 duration-300'>
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        )
                    })}


                </ul>
            )}
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {Slinks.map(({ id, child, href, style, download }) => (
                        <li
                            key={id}
                            className={
                                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                                " " +
                                style
                            }
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;