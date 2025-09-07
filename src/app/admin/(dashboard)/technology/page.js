'use client'

import React, { useState } from 'react'
import { useCreateTechnoMutation, useDeleteTechnoMutation, useGetAllTechnologyQuery, useUpdateTechnoMutation } from '../../../../../redux/features/technology/technologyAPI'
import TechnoModal from '@/component/TecnhoModel'
import { toast } from 'react-toastify'

export default function SliderPage() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        cotegory: '',
        image: null,
        _id: null,
    })
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const [editId, setEditId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { data, isLoading } = useGetAllTechnologyQuery()
    const [createTechno] = useCreateTechnoMutation()
    const [updateTechno] = useUpdateTechnoMutation()
    const [deleteTechno] = useDeleteTechnoMutation()



    const handleChange = (e) => {
        if (e.target.name === 'image') {
            const file = e.target.files[0]
            setFormData({ ...formData, image: file })
            setPreview(URL.createObjectURL(file))
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    const resetForm = () => {
        setFormData({ title: '', subtitle: '', cotegory: '', image: null, _id: null })
        setPreview(null)
        setEditId(null)
        setIsModalOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.append('title', formData.title)
        data.append('subtitle', formData.subtitle)
        data.append('cotegory', formData.cotegory)
        if (formData.image) data.append('image', formData.image)

        try {
            if (editId) {
                await updateTechno({ id: editId, formData: data }).unwrap()
                toast.success('Slide updated')
            } else {
                await createTechno(data).unwrap()
                toast.success('Slide created')
            }
            resetForm()
        } catch (err) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (data) => {
        setFormData({
            title: data.title,
            subtitle: data.subtitle,
            cotegory: data.cotegory,
            image: null,
            _id: data._id
        })
        setPreview(data.image)
        setEditId(data._id)
        setIsModalOpen(true)
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            try {
                await deleteTechno(id).unwrap()
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
                <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Technologies</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                >
                    + Add Technology
                </button>
            </div>

            {/* All Slides */}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border border-gray-200 rounded shadow-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3">#</th>
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Subtitle</th>
                                    <th className="p-3">Cotegory</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((item, index) => (
                                    <tr key={item._id} className="border-t hover:bg-gray-50">
                                        <td className="p-3 font-medium">
                                            {(startIndex) + index + 1}
                                        </td>
                                        <td className="p-3">
                                            <img
                                                src={item.image.url}
                                                alt={item.title}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </td>
                                        <td className="p-3">{item.title}</td>
                                        <td className="p-3">{item.subtitle}</td>
                                        <td className="p-3">{item.cotegory}</td>
                                        <td className="p-3 space-x-2">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                            >
                                                Edit
                                            </button>
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
                </>
            )}

            {/* Add/Edit Modal */}
            <TechnoModal
                isOpen={isModalOpen}
                closeModal={resetForm}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                preview={preview}
                loading={loading}
            />
        </div>
    )
}
