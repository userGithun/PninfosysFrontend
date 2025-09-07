'use client';
import React from 'react';
import box1 from '/public/image/service/box1.jpg'
import box2 from '/public/image/service/box2.jpg'
import box3 from '/public/image/service/box3.jpg'
import Pnservice from '/public/image/service/pnservice.png'
import { motion } from 'framer-motion'
import Banner from '@/component/Banner';

function Servicess() {
    return (
        <>
            {/* Banner Start */}
            <Banner
                title="Our Services"
                breadcrumb="Our Services" />
            {/* Banner End */}

            {/* Main start */}
            <section className="mt-14 mb-14 px-4 md:px-16">
                <h2 className="text-base text-justify text-gray-600 mb-7 max-w-5xl mx-auto">
                    "PN INFOSYS is a leading global business consulting and IT service company. We provide a full range of maintenance and compliance services for Government and Commercial facilities both large and small. Whether you need to run your business more efficiently or accelerate revenue growth, PN INFOSYS can get you there. Our team is proficient enough to provide all the IT services a customer needs at affordable rates. We make sure our clients are happy at the end of the day."
                </h2>

                <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 items-center">

                    {/* CARD 1 */}
                    <div className="bg-white shadow-md w-full sm:w-[350px] rounded-xl transition-all duration-500 group">
                        {/* IMAGE WRAPPER with hover */}
                        <div className="relative flex justify-center mt-8 ">
                            <div className="w-32 h-32 rounded-full bg-white shadow-md grid place-items-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-500">
                                <img
                                    src={box1.src}
                                    alt="Innovative Ideas"
                                    className="w-full h-full object-contain rounded-full p-2"
                                />
                            </div>
                        </div>
                        {/* TEXT CONTENT */}
                        <div className="px-4 pb-6 text-center">
                            <h1 className="text-xl font-semibold pt-6 pb-4 leading-snug">Innovative Ideas</h1>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white shadow-md w-full sm:w-[350px] rounded-xl transition-all duration-500 group">
                        {/* IMAGE WRAPPER with hover */}
                        <div className="relative flex justify-center mt-8 ">
                            <div className="w-32 h-32 rounded-full bg-white shadow-md grid place-items-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-500">
                                <img
                                    src={box2.src}
                                    alt="Creative Designing"
                                    className="w-full h-full object-contain rounded-full p-2"
                                />
                            </div>
                        </div>
                        {/* TEXT CONTENT */}
                        <div className="px-4 pb-6 text-center">
                            <h1 className="text-xl font-semibold pt-6 pb-4 leading-snug">Creative Designing</h1>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white shadow-md w-full sm:w-[350px] rounded-xl transition-all duration-500 group">
                        {/* IMAGE WRAPPER with hover */}
                        <div className="relative flex justify-center mt-8 ">
                            <div className="w-32 h-32 rounded-full bg-white shadow-md grid place-items-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-500">
                                <img
                                    src={box3.src}
                                    alt="Client's Happiness"
                                    className="w-full h-full object-contain rounded-full p-2"
                                />
                            </div>
                        </div>
                        {/* TEXT CONTENT */}
                        <div className="px-4 pb-6 text-center">
                            <h1 className="text-xl font-semibold pt-6 pb-4 leading-snug">Client's Happiness</h1>
                        </div>
                    </div>
                </div>

            </section>
            {/* Main end */}

            {/* Middle Start */}
            <section className="bg-[#009df2] text-white py-8 px-9 md:px-30">
                <div className="container mx-auto flex flex-col md:flex-row items-center pt-14 pb-14 gap-10 md:w-[73%] ">

                    {/* Left Side */}
                    <div className="flex-1 space-y-6">
                        <p className="text-4xl md:text-4xl font-bold text-white leading-[1.4]">
                            PN Services
                        </p>

                        <p className='text-xl font-bold'>PN INFOSYS provides the best service possible to its customers because for us, our client’s happiness is important. Whatever we choose to do, we do it an exorbitant manner.</p>

                        {/* Box 1 */}
                        <div className="flex items-start gap-25 pb-4">

                            <p className="text-sm text-white leading-6 text-justify">
                                <br />
                                PN INFOSYS Company provides a full range of maintenance and compliance services for Government and Commercial facilities both large and small.
                                <br />
                                <br />
                                PN INFOSYS brings robust skills and forward looking perspectives to solve customer challenges. We use proven knowledge to make recommendations and provide expert guidance to our customers.
                                <br />
                                <br />
                                PN INFOSYS is driven to meet client needs with determination and grit. We embrace tough challenges and do not rest until the problem is solved, the right way.
                            </p>

                        </div>


                    </div>

                    {/* Right Side Image */}
                    <motion.div className='className="flex-1 flex justify-center mt-10 relative'
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        {/* Main Image */}
                        <img
                            src={Pnservice.src}
                            alt="services"
                            className="w-full max-w-md rounded-xl"
                        />
                    </motion.div>



                </div>
            </section>
            {/* Middle End */}

        </>
    );
}

export default Servicess;
