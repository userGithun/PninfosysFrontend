import React from 'react'
import { useGetAllEventQuery } from '../../redux/features/event/eventApi'

export default function EventHome() {
    const { data: event = [], isLoading } = useGetAllEventQuery()

    return (
        <>
            {/* EventHome Start*/}
            <section>
                <div className="bg-white mx-auto max-w-7xl py-10 px-6 sm:px-6 md:px-12 lg:px-56 xl:px-32 2xl:px-20">
                    <h2 className="text-3xl font-bold text-gray-700">News</h2>
                    <h3 className="text-5xl font-bold text-[#009df2] mb-10">Events</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {isLoading
                            ? Array.from({ length: event?.length || 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col animate-pulse"
                                >
                                    {/* Image skeleton */}
                                    <div className="w-full h-56 bg-gray-300"></div>

                                    {/* Text skeleton */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
                                        <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                                        <div className="h-3 bg-gray-300 rounded w-5/6 mb-2"></div>
                                        <div className="h-3 bg-gray-300 rounded w-5/6 mb-5"></div>
                                        <div className="h-8 bg-gray-300 rounded w-full mt-auto"></div>
                                    </div>
                                </div>
                            ))
                            : event.slice().reverse().slice(0, 6).map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition duration-300 hover:shadow-xl"
                                >
                                    <img
                                        src={item.image.url}
                                        alt={item.title}
                                        className="w-full h-72 object-cover hover:scale-110 duration-500 ease-in-out"
                                    />
                                    <div className="p-6 flex flex-col flex-grow text-center">
                                        <h4 className="text-lg text-gray-700 font-bold mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-justify text-gray-600 mb-5">
                                            {item.subtitle}
                                        </p>
                                        <button className="bg-[#009df2] hover:bg-blue-500 duration-300 text-white px-4 py-2 rounded-md text-sm mt-auto cursor-pointer">
                                            Read more...
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            {/* EventHome End */}

        </>
    )
}
