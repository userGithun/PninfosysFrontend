"use client";
import { useParams } from "next/navigation";
import { useGetWorkshopBySlugQuery } from "../../../../redux/features/workshop/workshopApi";
import Banner from "@/component/Banner";
import { useState } from "react";
import Image from "next/image";


export default function WorkshopDetails() {
    const { slug } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const { data: workshop, error, isLoading } = useGetWorkshopBySlugQuery(slug, {
        skip: !slug, // jab tak slug na mile tab tak query skip
    });

    if (isLoading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Something went wrong</p>;
    if (!workshop) return <p className="text-center text-red-500">Workshop not found</p>;

    return (
        <>
            <Banner
                title={workshop.name}
                breadcrumb="WORKSHOPS"
            />

            <div className='text-center text-xl font-semibold mt-16'>
                <h1 className='text-sky-600 text-md'>{workshop.heading}</h1>
                <p className='text-black/80 text-sm pt-2'>PNINFOSYS WORKSHOP</p>
            </div>


            {/* Gallery Start */}
            <div className="max-w-[1300px] mx-auto px-4 py-10 mb-20">

                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {workshop?.image?.length > 0 ? (
                        workshop.image.map((img, index) => (
                            <div
                                key={img.public_id}
                                className="cursor-pointer relative w-full h-60"
                                onClick={() => setSelectedImage(img.url)}
                            >
                                <Image
                                    src={img.url}
                                    alt={`Event ${index + 1}`}
                                    fill
                                    className="object-cover rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                                />
                            </div>
                        ))
                    ) : (
                        // Skeleton loader - 8 boxes
                        Array.from({ length: 9 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-60 bg-gray-300 rounded-lg animate-pulse"
                            ></div>
                        ))
                    )}
                </div>


                {/* Modal / Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/85 bg-opacity-70 flex items-center justify-center z-50"
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
    );
}
