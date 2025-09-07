import Link from 'next/link'
import React from 'react'
import { useGetAllPortfolioQuery } from '../../redux/features/portfolio/portfolioAPI'

export default function PortfolioHome() {

    const { data: portfolio = [], isLoading } = useGetAllPortfolioQuery()

    return (
        <div>
            <section className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-80 mb-20 mt-12'>
                <div className="py-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-10">
                        Our <br />
                        <span className="text-sky-500 text-4xl sm:text-5xl">Portfolio</span>
                    </h2>

                    {/* Grid Start */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {/* 🔹 LOADING SKELETON (jab tak data fetch ho raha h) */}
                        {isLoading && Array.from({ length: portfolio.length || 6 }).map((_, index) => (
                            <div key={index} className="relative w-full overflow-hidden rounded-xl shadow-lg">
                                {/* Image Placeholder */}
                                <div className="w-full h-56 sm:h-60 md:h-64 bg-gray-200 animate-pulse" />
                                {/* Text Placeholder */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
                                    <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse" />
                                </div>
                            </div>
                        ))}

                        {/* 🔹 DATA CARDS (jab data aa jaye tab show hoga) */}
                        {!isLoading && portfolio.slice().reverse().map((item, index) => (
                            <div
                                key={index}
                                className="relative w-full overflow-hidden rounded-xl shadow-lg group"
                            >
                                {/* Image */}
                                <img
                                    src={item.image.url}
                                    alt={item.name}
                                    className="w-full h-56 sm:h-60 md:h-64 object-cover"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-sky-500 bg-opacity-0 
                                    group-hover:bg-opacity-90 transition-all duration-500 ease-in-out 
                                    flex items-center justify-center translate-y-full 
                                    group-hover:translate-y-0 opacity-80 hover:opacity-100">

                                    <div className="text-center text-white opacity-0 
                                        group-hover:opacity-100 transition-opacity duration-300">

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 justify-center">
                                            <Link href="#">
                                                <div className="bg-white text-sky-500 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-white">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </Link>

                                            <Link href={item.url}>
                                                <div className="bg-white text-sky-500 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-white">
                                                    <i className="fa-solid fa-link"></i>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Title & Subtitle */}
                                        <h3 className="text-lg sm:text-xl font-bold pt-4">{item.name}</h3>
                                        <p className="text-sm font-medium sm:text-sm">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}
