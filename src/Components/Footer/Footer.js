import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-gradient-to-b from-black via-black to-gray-800 text-white pt-12 ">
            <div class="grid grid-flow-col gap-4">
                <Link to='about' class="link link-hover">About</Link>
                <Link to='/' class="link link-hover">Contact</Link>
                <Link to='projects' class="link link-hover">Works</Link>

            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a target="_blank" href="https://www.linkedin.com/in/raian-ibn-faiz/"><FaLinkedinIn size={30} /></a>
                    <a target="_blank" href="https://github.com/raianibnfaiz"><FaGithub size={30} /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Raian Ibn Faiz</p>
            </div>
        </footer>
    );
};

export default Footer;