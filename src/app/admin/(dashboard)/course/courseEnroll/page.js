'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useDeleteCourseBookMutation, useGetAllCourseBookQuery } from '../../../../../../redux/features/course/courseBookAPI/courseBookAPI'

export default function ContactPage() {

    const { data: data, isLoading } = useGetAllCourseBookQuery()
    const course = data?.data || []

    const [courseDlt] = useDeleteCourseBookMutation()


    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            try {
                await courseDlt(id).unwrap()
                toast.success('Deleted successfully')
            } catch (err) {
                toast.error('Failed to delete')
            }
        }
    }
    // 🔹 Pagination states
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    // total data
    const allData = data?.slice().reverse() || []

    // calculate slice
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentData = allData.slice(startIndex, startIndex + itemsPerPage)

    const totalPages = Math.ceil(allData.length / itemsPerPage)

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-gray-100 text-black">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">📂 Manage CourseEnrollment's</h2>

            </div>

            {/* All Slides */}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border border-gray-200 rounded shadow-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3">#</th>
                                <th className="p-3">StudentName</th>
                                <th className="p-3">CourseName</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Address</th>
                                <th className="p-3">Gender</th>
                                <th className="p-3">College</th>
                                <th className="p-3">Qualification</th>
                                <th className="p-3">Branch</th>
                                <th className="p-3">Semester</th>

                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.slice().reverse().map((item, index) => (
                                <tr key={item._id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-medium">{index + 1}</td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.courseId.title}</td>
                                    <td className="p-3">{item.email}</td>
                                    <td className="p-3">{item.phone}</td>
                                    <td className="p-3">{item.address}</td>
                                    <td className="p-3">{item.gender}</td>
                                    <td className="p-3">{item.college}</td>
                                    <td className="p-3">{item.qualification}</td>
                                    <td className="p-3">{item.branch}</td>
                                    <td className="p-3">{item.semester}</td>

                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination Buttons */}
            <div className="flex justify-center items-center mt-4 space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

        </div>
    )
}