'use client';
import React, { useState } from 'react';
import { useGetAllTechnologyQuery } from '../../redux/features/technology/technologyAPI';

export default function TechnoHome() {
    const { data: technology = [], isLoading } = useGetAllTechnologyQuery();
    const [filter, setFilter] = useState('all');

    const filteredTechs = technology.filter((tech) =>
        filter === 'all' ? true : tech.cotegory === filter
    );

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto sm:px-6 md:px-12 lg:px-56 xl:px-32 2xl:px-20">
                {/* Heading + Filters */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Technologies <br />
                            <span className="text-5xl text-sky-500">We work on..</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-600">
                        {['all', 'design', 'development'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`cursor-pointer px-4 py-2 border rounded-full hover:border-sky-400 transition duration-300 ${filter === type ? 'text-white bg-sky-500 border-sky-500' : 'bg-white'
                                    }`}
                            >
                                {type === 'all'
                                    ? 'Show All'
                                    : type === 'design'
                                        ? 'Web Designing'
                                        : 'Web Development'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* 🔹 Skeleton Loader */}
                    {isLoading && Array.from({ length: filteredTechs?.length || 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-5 text-center"
                        >
                            {/* Image Skeleton */}
                            <div className="w-full h-40 bg-gray-200 animate-pulse mb-6 rounded-md" />
                            {/* Title Skeleton */}
                            <div className="h-4 bg-gray-300 w-3/4 mx-auto mb-3 rounded animate-pulse" />
                            {/* Subtitle Skeleton */}
                            <div className="h-3 bg-gray-300 w-1/2 mx-auto rounded animate-pulse" />
                        </div>
                    ))}

                    {/* 🔹 Actual Data */}
                    {!isLoading && filteredTechs.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={tech.image.url}
                                alt={tech.title}
                                className="w-full h-40 object-contain mx-auto mb-6 transition-all duration-300 ease-in-out hover:scale-105"
                            />
                            <h3 className="font-semibold text-gray-800 text-lg">{tech.title}</h3>
                            <p className="text-sm text-blue-500 mt-1">{tech.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
