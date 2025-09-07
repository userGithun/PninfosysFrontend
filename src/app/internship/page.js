"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useGetAllCourseQuery } from "../../../redux/features/course/courseAPI/courseAPI";
import CourseBookingModal from "@/component/CourseBookingModel";

export default function Courses() {
    const { data: courses = [], isLoading } = useGetAllCourseQuery();
    const [courseModel, setCourseModel] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleApply = (id) => {
        console.log("Opening modal for ID:", id);
        setCourseModel(id);
        setModalOpen(true)
    };

    return (
        <section className="relative min-h-screen py-24 bg-gradient-to-br from-[#000000] via-[#112c3fcc] to-[#000000] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-black to-purple-900/30 -z-10"></div>

            <div className="max-w-7xl mx-auto mt-11 px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r text-sky-400 bg-clip-text">
                        PN Infosys Courses – <span className="text-white/85">Crafted for Success</span>
                    </h2>
                    <p className="text-gray-400 mt-4 font-medium text-lg">
                        Transform your knowledge into a career
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {/* 🔹 Skeleton Loader */}
                    {isLoading &&
                        Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-neutral-900/70 border border-white/10 rounded-md shadow-md p-5"
                            >
                                <div className="w-full h-72 bg-gray-800 animate-pulse mb-6 rounded-md" />
                                <div className="h-5 bg-gray-700 w-3/4 mb-4 rounded animate-pulse" />
                                <div className="h-4 bg-gray-700 w-1/2 mb-6 rounded animate-pulse" />
                                <div className="h-10 bg-gray-700 w-full rounded animate-pulse" />
                            </div>
                        ))}

                    {/* 🔹 Actual Data */}
                    {!isLoading &&
                        courses.slice().reverse().map((course, index) => (
                            <motion.div
                                key={course._id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden backdrop-blur-xl bg-neutral-900/70 
                border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] 
                hover:shadow-[0_12px_40px_rgba(0,200,255,0.4)] 
                transition-all duration-700"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={course.image?.url}
                                        alt={course.title}
                                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute -inset-5 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                                    {/* Floating Price Tag */}
                                    <span className="absolute bottom-4 left-4 bg-gradient-to-r from-sky-500 to-blue-600 
                    text-white font-semibold px-5 py-2 shadow-lg text-sm tracking-wide">
                                        ₹{course.price}/-
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold pb-3 pt-4 text-white/70 group-hover:text-white transition">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium uppercase text-md mb-4">
                                        Recent Batch Started on <br />
                                        {new Date(course.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric",
                                        })}
                                    </p>

                                    <button
                                        onClick={() => handleApply(course._id)}
                                        className="w-full flex items-center justify-center gap-2
                      bg-gradient-to-r from-sky-500 to-blue-600
                      hover:from-blue-600 hover:to-sky-600
                      text-white font-semibold py-3
                      shadow-md hover:shadow-blue-500/40
                      transition-all duration-500
                      cursor-pointer"
                                    >
                                        Apply Now{" "}
                                        <ArrowRight
                                            className="transform group-hover:translate-x-2 transition-transform ease-in"
                                            size={18}
                                        />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>

            {/* 🔹 Modal */}
            {isModalOpen && courseModel && (
                <CourseBookingModal
                    courseId={courseModel}
                    show={isModalOpen}
                    handleClose={() => setModalOpen(false)}
                />
            )}
        </section>
    );
}
