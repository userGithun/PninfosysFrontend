'use client';
import React, { useState } from 'react'
import { FaUsers, FaCogs, FaChartLine, FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import Link from 'next/link';
import TechnoHome from '@/component/TechnoHome';
import Image from 'next/image';
// import { useGetAllTeamMemberQuery } from '../../../redux/features/teamMembers';
import { useGetAllTeamMemberQuery } from '/redux/features/teamMembers'
import Banner from '@/component/Banner';
import img1 from '/public/image/about/box1.png';
import img2 from '/public/image/about/box2.png';

const steps = [
    {
        id: '01',
        icon: <FaUsers className="text-5xl" />,
        title: 'Consult your idea with us!',
    },
    {
        id: '02',
        icon: <FaCogs className="text-5xl" />,
        title: `We'll Develop your idea`,
    },
    {
        id: '03',
        icon: <FaChartLine className="text-5xl" />,
        title: `We'll Digital Market your idea.`,
    },
    {
        id: '04',
        icon: <BsEmojiSmile className="text-5xl text-yellow-500" />,
        title: `Client's happiness`,
    },
];

function About() {

    const { data: team = [], isLoading } = useGetAllTeamMemberQuery()
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <>
            {/* Banner Start */}
            <Banner
                title="About Us"
                breadcrumb="ABOUT US"
            />
            {/* Banner End */}

            {/* Middle Start */}
            <section className="bg-[#f1f7ff] py-16 px-4">
                <div className="text-center mb-26 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800">We are the best</h2>
                    <p className="text-4xl font-bold text-blue-500">For all your needs</p>
                </div>

                <div className="flex flex-wrap justify-center gap-22 max-w-7xl mx-auto ">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative bg-white shadow-md rounded-xl p-6 w-1/2 sm:w-[185px] text-center transition-all duration-700 ease-in-out hover:-translate-y-2"
                        >
                            <div className="absolute -top-4 left-3/5 -translate-x-5/2 bg-violet-500 text-white text-xl font-bold px-4 py-3 rounded-xl">
                                {step.id}
                            </div>
                            <div className="mb-4 mt-4 flex justify-center text-blue-500">{step.icon}</div>
                            <p className="text-base font-medium text-gray-700 whitespace-pre-wrap">
                                {step.title}
                            </p>
                            {index < steps.length - 1 && (
                                <div className="absolute -right-14 top-1/2 transform -translate-y-1/2 sm:block hidden">
                                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                        {/* &#8250; */}<FaArrowRight />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Middle End */}

            {/* Middle Start */}
            <section className="bg-[#009df2] text-white py-8 px-9 md:px-30 mb-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center pt-14 pb-14 gap-10 md:w-[73%] ">

                    {/* Left Side */}
                    <div className="flex-1 space-y-6">
                        <p className="text-3xl md:text-4xl font-bold text-white leading-[1.4]">
                            Who & We are?
                        </p>
                        {/* Box 1 */}
                        <div className="flex items-start gap-25 pb-4">

                            <p className="text-sm text-white leading-6 text-justify">
                                We are a one-stop destination for all digital solutions, be it website designing, web development, digital marketing, SEO, mobile apps and full maintenance and compliance services for Government and Commercial facilities both large and small. Our elegant group of Developers provide their innovation who transform your idea into an amazing website Design or Mobile App Development while keeping every custom project unique.
                                <br />
                                <br />
                                We are part of this IT industry since 2018, we not only developed products and websites but also provide internship and training to students and make them capable to work in this IT software industry. Our internship and training program is totally based on hands-on practical experience with live projects.
                                <br />
                                <br />
                                Our team of certified IT professionals services Dental Offices, Medical Offices, Restaurants, Bars and all types of businesses throughout the Lowcountry and the world. Our team of certified IT professionals services Hospitals, Colleges, Research Institutes, Schools, Restaurants, Bars and all types of businesses throughout the Lowcountry and the world.
                            </p>

                        </div>


                    </div>

                    {/* Right Side Image */}
                    <div className="flex-1 flex justify-center mt-10 relative">
                        {/* Main Image */}
                        <img
                            src={img1.src}
                            alt="services"
                            className="w-full max-w-md rounded-xl"
                        />

                        {/* Play Button Centered with Zoom on Hover */}
                        <a href="#" className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={img2.src}
                                alt="play button"
                                className="w-16 h-16 sm:w-15 sm:h-15 transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                    </div>



                </div>
            </section>
            {/* Middle End */}

            {/* Technology Start */}
            <TechnoHome />
            {/* Technology End */}


            {/* Team Start */}
            <div className="bg-[#00000008] min-h-screen py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl text-black font-bold mb-10 text-center">
                        Our Team <br />
                        Meet Our Team Members
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {isLoading
                            ? // Skeleton Loader
                            Array.from({ length: 8 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg overflow-hidden text-center p-6 animate-pulse"
                                >
                                    {/* Circle Skeleton */}
                                    <div className="w-48 h-48 mx-auto mb-6 bg-gray-300 rounded-full" />

                                    {/* Name Skeleton */}
                                    <div className="h-6 bg-gray-300 rounded w-32 mx-auto mb-2" />

                                    {/* Designation Skeleton */}
                                    <div className="h-4 bg-gray-300 rounded w-24 mx-auto" />
                                </div>
                            ))
                            : // Actual Team Data
                            team.slice().reverse().map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300"
                                >
                                    <div
                                        className="w-48 h-48 mx-auto mb-6 cursor-pointer relative"
                                        onClick={() => setSelectedImage(item.image.url)}
                                    >
                                        <Image
                                            src={item.image.url}
                                            alt={item.name}
                                            fill
                                            className="object-cover rounded-full border-4 border-white/30 shadow-lg"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                                    <p className="text-sm text-sky-500">{item.desigation}</p>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Modal / Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/85 bg-opacity-70 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-[90vw] h-[80vh]">
                            <Image
                                src={selectedImage}
                                alt="Selected"
                                fill
                                className="object-contain rounded-lg shadow-2xl"
                            />
                            <button
                                className="absolute top-4 right-4 cursor-pointer font-bold text-xl bg-white px-4 py-2 rounded-full shadow-lg z-50"
                                onClick={() => setSelectedImage(null)}
                            >
                                x
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Team End */}


        </>
    )
}

export default About
