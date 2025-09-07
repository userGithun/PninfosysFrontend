import Banner from '@/component/Banner'
import { FaArrowRight } from 'react-icons/fa';
import React from 'react'
import TestimonialsStudentFeedback from '@/component/Tesmonialplacement';

const steps = [
    {
        id: '01',
        // icon: <FaUsers className="text-5xl" />,
        title: 'First Step',
        title2: 'Come to us...!!'
    },
    {
        id: '02',
        // icon: <FaCogs className="text-5xl" />,
        title: 'Second Step',
        title2: 'Learn with us..!!'

    },
    {
        id: '03',
        // icon: <FaChartLine className="text-5xl" />,
        title: 'Third Step',
        title2: 'Be a JOB SEEKER'


    },
];
export default function placementDesk() {
    return (
        <>
            {/* Banner Start */}
            <div>
                <Banner
                    title="Placement Desk"
                    breadcrumb="PLACEMENT DESK"
                />
            </div>
            {/* Banner ENd */}

            {/* Middle Start */}
            <section className="bg-[#f1f7ff] py-16 px-4">
                <div className="text-center mb-26 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome to our Placement Cell</h2>
                    <p className="text-4xl font-bold text-sky-600">We are here for your bright future.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-22 max-w-7xl mx-auto ">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative bg-white shadow-md rounded-xl px-6 p-6 w-1/2 sm:w-[206px] transition-all duration-700 ease-in-out hover:-translate-y-2"
                        >
                            <div className="absolute -top-4 left-3/5 -translate-x-3/1 bg-violet-500 text-white text-xl font-bold px-3 py-2 rounded-xl">
                                {step.id}
                            </div>

                            <p className="text-base pt-3 pb-2 font-bold text-gray-900 whitespace-pre-wrap">
                                {step.title}
                            </p>
                            <p className="text-sm font-normal text-gray-700 whitespace-pre-wrap">
                                {step.title2}
                            </p>
                            {index < steps.length - 1 && (
                                <div className="absolute -right-14 top-1/2 transform -translate-y-1/2 sm:block hidden">
                                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                        {/* &#8250; */}<FaArrowRight />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            {/* Middle End */}

            {/* Manage Desk Start */}
            <section className="bg-gray-50 py-16 px-6 lg:px-62">
                <div className="max-w-7xl mx-auto space-y-20">
                    {/* Chairman Desk */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Image */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/dow1049t2/image/upload/v1728759640/PN_INFOSYS/vj1_wzrqg1.png"
                                alt="Chairman"
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div>
                            <h4 className="text-sky-600 font-semibold uppercase tracking-wide">
                                Message From
                            </h4>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                Chairman's Desk
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Established in the year of 2018, Pninfosys is the software company
                                rapidly growing in last 2 years in Gwalior. Our company is not only a
                                training centre as well it is a product-based company Pninfosys which
                                was a dream few years ago has become a reality and much sought after
                                institutions in and around Gwalior.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                                It gives me a great pleasure to inform you that batch of 2018,19 are
                                fully placed. All students reached in high paid companies in Delhi,
                                Indore, Bhopal. I am happy to have the opportunity to serve in such a
                                magnificent way and look forward to helping pave the way for a bright
                                and successful future.
                            </p>
                        </div>
                    </div>

                    {/* CEO Desk */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Text */}
                        <div className="order-2 md:order-1 ">
                            <h4 className="text-sky-600 font-semibold uppercase tracking-wide">
                                Message From
                            </h4>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                CEO Desk
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                When educating the minds of our youth we must not forget to educate
                                their hearts. We focus on discovering, developing and drawing out the
                                hidden talent and the magic lying dormant inside all of its students.
                                Our future goal is clear.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                                We give good quality training for our students in the next 5 years.
                                Today’s dynamic world demands 360 degree development and grooming. We
                                are creating an environment for future leaders, entrepreneurs and
                                professionals who possess skill and aptitude in an array of functional
                                disciplines.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="order-1 md:order-2">
                            <img
                                src="https://res.cloudinary.com/dow1049t2/image/upload/v1728759639/PN_INFOSYS/neha_1_fkzh0y.jpg"
                                alt="CEO"
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Manage Desk End */}

            <TestimonialsStudentFeedback/>

        </>

    )
}
