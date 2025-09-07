'use client';
import Banner from '@/component/Banner'
import React from 'react'
import { useGetAllPlacementQuery } from '../../../../redux/features/placement/placementAPi'

export default function page() {

    const { data: place = [], isLoading } = useGetAllPlacementQuery()

    return (
        <>
            {/* Banner Start */}
            <Banner
                title="Placement Gallery"
                breadcrumb="PLACEMENT GALLERY"
            />
            {/* Banner end */}

            <div className='text-center text-3xl font-semibold mt-10 mb-10'>
                <h1>Shining Stars of&nbsp;PN Infosys</h1>
                <p className='text-sky-600 font-medium text-xl pt-3'><span className='text-black'>“</span>Turning dreams into reality with dedication, skills, and guidance.<span className='text-black'>”</span></p>
            </div>

            {/*  */}
            <section className='max-w-[1400px] mx-auto mb-10 mt-5'>
                {place.slice().reverse().map((p, index) => (
                    <div key={index} className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                        {/* Student Image */}
                        <div className="w-full h-56 overflow-hidden">
                            <img
                                src={p.image.url}
                                alt={p.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-700">{p.name}</h3>
                            <p className="text-sky-600 font-medium mt-1">{p.position}</p>
                            <p className="text-gray-600 mt-2 text-sm flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-red-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                {p.company}
                            </p>
                        </div>
                    </div>
                ))}

            </section>

        </>
    )
}
