import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import mongoDb from '../../assets/mongo.png';
import nodeJs from '../../assets/node.png';
import tailwind from '../../assets/tailwind.png';
import firebase from '../../assets/firebase.png';

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: mongoDb,
            title: "MongoDb",
            style: "shadow-blue-600",
        },
        {
            id: 6,
            src: nodeJs,
            title: "Node js",
            style: "shadow-blue-600",
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-blue-600",
        },
        {
            id: 8,
            src: firebase,
            title: "Firebase",
            style: "shadow-blue-600",
        },

    ];

    return (
        <div
            name="skills"
            className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen "
        >
            <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="mt-10">
                    <p className="text-4xl font-bold  border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6 text-white">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Skills;