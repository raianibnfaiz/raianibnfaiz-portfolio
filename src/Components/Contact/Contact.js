import React from 'react';
import {
    FiMail,
    FiMapPin,
} from 'react-icons/fi';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import './Contact.css';
const Contact = () => {
    const contact = [
        {
            icon: <FiMail />,
            title: 'Have a question?',

            description: 'Email me at raianibnfaiz@gmail.com',
        },
        {
            icon: <FiMapPin />,
            title: 'Current Location',
            subtitle: 'Dhaka, Bangladesh',
            description: 'Serving clients worldwide',
        },
    ];
    return (
        <div
            name="contact"
            className="pt-12 pb-16 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-white"
        >
            <div className="mt-14   flex flex-col p-5 justify-center max-w-screen-lg  mx-auto h-full">
                <p className='contact text-4xl mt-8 pt-8 pb-1 text-center font-bold text-white inline '>Contact</p>
                <p className='text-center '>Submit the form below or shoot me an email at - <br /><span className='flex items-center justify-center'>  <HiOutlineMail size={30} className=' ' /><span className='p-2'>raianibnfaiz@gmail.com</span> </span> </p>
                <div className="mt-12 mb-12 flex justify-center items-center">
                    <form method='POST' action="https://getform.io/f/79e3b49f-de2d-418d-90e2-cdadd1c38e9f" className='mt-1 mb-10 pb-10  flex flex-col max-w-[600px] w-full'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="6"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>

            </div>

        </div>
        // <div
        //     name="contact"
        //     className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        // >
        //     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        //         <div className="pb-8">
        //             <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>

        //         </div>
        //         <div
        //             className='flex flex-col lg:gap-x-8 lg:flex-row'
        //         >
        //             <div
        //                 className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
        //             >
        // {contact.map((item, index) => {
        //     const { icon, title, subtitle, description } = item;
        //     return (
        //         <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
        //             <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
        //                 {icon}
        //             </div>
        //             <div>
        //                 <h4 className='font-body text-xl mb-1'>{title}</h4>
        //                 <p className='mb-1 text-paragraph'>{subtitle}</p>
        //                 <p className='text-accent font-normal '>{description}</p>
        //             </div>
        //         </div>
        //     );
        // })}
        //             </div>
        //             <form method='POST' action="https://getform.io/f/79e3b49f-de2d-418d-90e2-cdadd1c38e9f" className='flex flex-col max-w-[600px] w-full'>
        //                 <div className='pb-8'>

        //                     <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
        //                 </div>
        //                 <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        //                 <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        //                 <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        //                 <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        //             </form>

        //         </div>
        //     </div>

        // </div>

    );
};

export default Contact;