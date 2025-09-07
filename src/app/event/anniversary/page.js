'use client';
import Banner from '@/component/Banner'
import Image from 'next/image';
import React, { useState } from 'react'

export default function page() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Public folder से images का array
    const images = [
        "/image/anniversary/PNanniversary1.jpg",
        "/image/anniversary/PNanniversary2.png",
        "/image/anniversary/PNanniversary3.png",
        "/image/anniversary/PNanniversary4.png",
        "/image/anniversary/PNanniversary5.png",
        "/image/anniversary/PNanniversary6.png",
        "/image/anniversary/PNanniversary7.png",
        "/image/anniversary/PNanniversary8.png",
    ];
    return (
        <>
            <Banner
                title="Aniversary Celebration"
                breadcrumb="PNINFOSYS"
            />

            <div className='text-center text-xl font-semibold mt-16'>
                <h1 className='text-sky-600 text-sm'>CELEBRATING SPECIAL MOMENTS</h1>
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
