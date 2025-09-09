"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useGetAllSlidersQuery } from "../../redux/features/sliders/sliderApi";
import heroBanner from '/public/image/home/pnbanner.png';
import { motion } from "framer-motion";
import bnnerLogo from '/public/image/home/bannerLogo.png'

export default function HeroSlider() {
    // const { data: slides = [], isLoading, isError } = useGetAllSlidersQuery();
    // console.log(slides)
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     if (slides.length > 0) {
    //         const interval = setInterval(() => {
    //             setIndex((prev) => (prev + 1) % slides.length);
    //         }, 5000);
    //         return () => clearInterval(interval);
    //     }
    // }, [slides]);

    // if (isLoading) {
    //     return (
    //         <div className="h-[250px] sm:h-[450px] md:h-[600px] flex items-center justify-center bg-gray-100">
    //             <p className="text-gray-600 text-sm">Loading slides...</p>
    //         </div>
    //     );
    // }

    // if (isError || slides.length === 0) {
    //     return (
    //         <div className="h-[250px] sm:h-[450px] md:h-[600px] flex items-center justify-center bg-red-100">
    //             <p className="text-red-600 text-sm">Failed to load slides.</p>
    //         </div>
    //     );
    // }

    // const { title, subtitle, image } = slides[index];

    return (
        <div className="relative w-full h-[500px] sm:h-[605px] md:h-[819px] overflow-hidden">
            {/* Background Image */}
            <div className="">
                <Image
                    src={heroBanner.src}
                    alt="PnBanner"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 z-0" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h4 className="text-xs md:text-xl sm:text-sm text-blue-200 font-semibold tracking-wide uppercase mb-1 pt-44">
                    WHAT ARE YOU WAITING FOR?
                </h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
                    Our PN Infosys
                </h1>
                <p className="text-2xl md:text-5xl sm:text-4xl lg:text-7xl font-medium text-white mt-2 mb-4">We're ready to help you grow!.</p>

                {/* Right Side Image */}
                <motion.div className="justify-center pt-6"
                    animate={{ y: [0, -40, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <img
                        src={bnnerLogo.src}
                        alt="services"
                        className="w-32 h-20 md:w-96 md:h-56"
                    />
                </motion.div>

                {/* <Link
                    href="/apply"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 py-2 rounded-full transition duration-300"
                >
                    Apply for Internship
                </Link> */}
            </div>

            {/* Wave Bottom Effect */}
            <div className="absolute -bottom-1 left-0 right-0 z-0">
                <div className="relative w-full overflow-hidden">
                    <svg
                        className="waves block w-[200%] max-w-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use href="#gentle-wave" x="48" y="4" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="6" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="8" fill="#fff" />
                        </g>
                    </svg>
                </div>

                {/* inline CSS for wave animation */}
                <style jsx>{`
    .waves { height: 125px; }
    .parallax > use {
      animation: move-forever 20s cubic-bezier(0.5, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
    .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
    .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
    .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }

    @keyframes move-forever {
      0%   { transform: translate3d(-90px, 0, 0); }
      100% { transform: translate3d(85px, 0, 0); }
    }

    @media (max-width: 640px) {
      .waves { height: 60px; }
    }
  `}</style>
            </div>

        </div>
    );
}