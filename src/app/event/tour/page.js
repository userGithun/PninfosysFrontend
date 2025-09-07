'use client';
import Banner from '@/component/Banner'
import Image from 'next/image';
import React, { useState } from 'react'

export default function page() {

    const [selectedImage, setSelectedImage] = useState(null);

    // Public folder से images का array
    const images = [
        "/image/tour/PNtour1.jpg",
        "/image/tour/PNtour2.jpg",
        "/image/tour/PNtour3.jpg",
        "/image/tour/PNtour4.jpg",
        "/image/tour/PNtour5.jpg",
        "/image/tour/PNtour6.jpg",
        "/image/tour/PNtour7.jpg",
        "/image/tour/PNtour8.png",
        "/image/tour/PNtour9.jpg",
        "/image/tour/PNtour10.png",
        "/image/tour/PNtour11.jpg",
        "/image/tour/PNtour12.jpg",
        "/image/tour/PNtour13.jpg",
        "/image/tour/PNtour14.jpg",
        "/image/tour/PNtour15.jpg",
        "/image/tour/PNtour16.jpg",
        "/image/tour/PNtour17.jpg",
        "/image/tour/PNtour18.jpg",
        "/image/tour/PNtour19.jpg",
        "/image/tour/PNtour20.jpg",
        "/image/tour/PNtour21.jpg",
        "/image/tour/PNtour22.jpg",
        "/image/tour/PNtour23.jpg",
        "/image/tour/PNtour24.jpg",
        "/image/tour/PNtour25.jpg",
        "/image/tour/PNtour26.jpg",
        "/image/tour/PNtour27.jpg",
        "/image/tour/PNtour28.jpg",
        "/image/tour/PNtour29.jpg",
        "/image/tour/PNtour30.jpg",
        "/image/tour/PNtour31.jpg",
        "/image/tour/PNtour32.jpg",
        "/image/tour/PNtour33.jpg",
        "/image/tour/PNtour34.jpg",
        "/image/tour/PNtour35.jpg",
        "/image/tour/PNtour36.jpg",
        "/image/tour/PNtour37.jpg",
        "/image/tour/PNtour38.jpg",
        "/image/tour/PNtour39.png",
        "/image/tour/PNtour40.png",
    ];

    return (
        <>
            {/* Banner Start */}
            <Banner
                title="Company Tour's"
                breadcrumb="PNINFOSYS"
            />
            {/* Banner End */}
            <div className='text-center text-xl font-semibold mt-16'>
                <h1 className='text-sky-600 text-sm'>CREATING MEMORIES</h1>
                <p className='text-black/80 text-3xl pt-1'>Pninfosys Team</p>
            </div>

            {/* Gallery Start */}
            <div className="max-w-[1300px] mx-auto px-4 py-10 mb-20">

                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="cursor-pointer relative w-full h-60"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`Event ${index + 1}`}
                                fill
                                className="object-cover rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Modal / Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
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
            {/* Gallery End */}
        </>
    )
}
