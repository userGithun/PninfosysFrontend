'use client';
import Banner from '@/component/Banner'
import Image from 'next/image';
import React, { useState } from 'react'

export default function page() {

    const [selectedImage, setSelectedImage] = useState(null);

    // Public folder से images का array
    const images = [
        "/image/birthday/PNbirthday1.jpg",
        "/image/birthday/PNbirthday2.jpg",
        "/image/birthday/PNbirthday3.jpg",
        "/image/birthday/PNbirthday4.png",
        "/image/birthday/PNbirthday5.jpg",
        "/image/birthday/PNbirthday6.jpg",
        "/image/birthday/PNbirthday7.jpg",
        "/image/birthday/PNbirthday8.jpg",
        "/image/birthday/PNbirthday9.jpg",
        "/image/birthday/PNbirthday10.jpg",
        "/image/birthday/PNbirthday11.jpg",
        "/image/birthday/PNbirthday12.jpg",
        "/image/birthday/PNbirthday13.png",
        "/image/birthday/PNbirthday14.jpg",
        "/image/birthday/PNbirthday15.jpg",
        "/image/birthday/PNbirthday16.png",
    ];

    return (
        <>
            {/* Banner Start */}
            <Banner
                title="Birthday Celebration"
                breadcrumb="PNINFOSYS"
            />
            {/* Banner End */}

            <div className='text-center text-xl font-semibold mt-16'>
                <h1 className='text-sky-600 text-sm'>BIRTHDAY CELEBRATIONS</h1>
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
