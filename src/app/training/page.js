'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import Banner from '@/component/Banner';

import img1 from '/public/image/training/box1.webp';
import img2 from '/public/image/training/box2.webp';
import img3 from '/public/image/training/box3.webp';
import img4 from '/public/image/training/box4.png';
import img5 from '/public/image/training/box5.png';
import img6 from '/public/image/home/box6.png';
import img7 from '/public/image/training/box7.png';


export default function training() {
    return (
        <>
            {/* Banner Start */}
            <Banner
                title="Training"
                breadcrumb="Training" />
            {/* Banner End */}


            {/* Service Start */}
            <section className="bg-[#009df2] text-white py-12 px-4 mb-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:w-[70%] mb-2">
                    {/* Left Side */}
                    <div className="flex-1 space-y-6">
                        {/* Box 1 */}
                        <div className="flex items-start gap-4">

                            <div>
                                <h3 className="font-bold text-3xl mb-5 md:mb-9 md:text-6xl">Helping Hands</h3>
                                <p className="text-md text-white text-justify leading-6">
                                    We have capability to train even novice students, students who don’t have any experience with coding can work efficiently in our training sessions. We need only adamant students who are disciplined enough to pay attention and have that urge in them for learning new things. You will have the experience to work on Live Projects, which will ameliorate your portfolio. Basically through these training sessions, we want to help students to grow, Our training sessions are helping hands for adamant students.                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    < motion.div className="flex-1 flex justify-center"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <img
                            src={img6.src}
                            alt="services"
                            className="w-full max-w-md"
                        />
                    </motion.div>

                </div>
            </section>
            {/* Service End */}

            {/* Learn Start*/}
            <section className="bg-white py-10 px-4 sm:px-6 lg:px-80">
                <h2 className="text-3xl font-bold text-gray-700">What will you</h2>
                <h3 className="text-5xl font-bold text-[#009df2] mb-10">Learn</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300">
                        <Image
                            src={img1.src}
                            alt="HTML Course"
                            width={300}
                            height={200}
                            className="rounded-md object-contain mb-4 transition-all duration-300 ease-in-out hover:scale-105"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Learn HTML, CSS, JAVASCRIPT, BOOTSTRAP, WORDPRESS
                        </h2>
                        <p className="text-sky-500 font-medium">45 Days to Complete</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300">
                        <Image
                            src={img2.src}
                            alt="PHP Course"
                            width={300}
                            height={200}
                            className="rounded-md object-contain mb-4 transition-all duration-300 ease-in-out hover:scale-105"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Learn MYSQL, CORE PHP, OPS, LARAVEL
                        </h2>
                        <p className="text-sky-500 font-medium">60 Days to Complete</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300">
                        <Image
                            src={img3.src}
                            alt="Fullstack Course"
                            width={300}
                            height={200}
                            className="rounded-md object-contain mb-4 transition-all duration-300 ease-in-out hover:scale-105"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Javascript, Angular, React Js, Node Js, React Native, Restful API, Mongo DB, Git, AWS
                        </h2>
                        <p className="text-sky-500 font-medium">90 Days to Complete</p>
                    </div>
                </div>
            </section>
            {/* Learn End */}

            {/* Internship Start*/}
            <section className="bg-white py-10 px-4 sm:px-6 lg:px-80">
                <h2 className="text-3xl font-bold text-gray-700">Internship</h2>
                <h3 className="text-5xl font-bold text-[#009df2] mb-10">Experience</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 1 */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition-all duration-300 group">
                        <div className="py-4 px-4 mt-4 rounded-full shadow-md place-items-center w-32 h-32 mx-auto grid bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-500">
                            <img src={img4.src} alt="Practical Training" className="w-full object-contain" />
                        </div>
                        <h1 className="text-xl leading-7 font-medium pt-6 pb-4">
                            100% Practical Training
                        </h1>
                        <p className="text-[#716f95] text-md">
                            We don't use paper and pencil at all in our training sessions.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition-all duration-300 group">
                        <div className="py-4 px-4 mt-4 rounded-full shadow-md place-items-center w-32 h-32 mx-auto grid bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-500">
                            <img src={img5.src} alt="Live Projects" className="w-full object-contain" />
                        </div>
                        <h1 className="text-xl leading-7 font-medium pt-6 pb-4">
                            Live Projects
                        </h1>
                        <p className="text-[#716f95] text-md">
                            We make you work on Live projects, in order to strengthen your portfolio.
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition-all duration-300 group">
                        <div className="py-4 px-4 mt-4 rounded-full shadow-md place-items-center w-32 h-32 mx-auto grid bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-500">
                            <img src={img7.src} alt="Innovative Ideas" className="w-full object-contain" />
                        </div>
                        <h1 className="text-xl leading-7 font-medium pt-6 pb-4">
                            Innovative Ideas
                        </h1>
                        <p className="text-[#716f95] text-md">
                            We always inbuilt innovation in our training sessions, to learn something new.
                        </p>
                    </div>
                </div>
            </section>
            {/* Internship End*/}

        </>
    )
}
