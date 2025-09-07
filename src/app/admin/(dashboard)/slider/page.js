'use client'

import React, { useState } from 'react'
import { useCreateSliderMutation, useDeleteSliderMutation, useGetAllSlidersQuery, useUpdateSliderMutation } from '../../../../../redux/features/sliders/sliderApi';
import EditModal from '@/component/EditModal'
import { toast } from 'react-toastify';

export default function SliderPage() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        image: null,
        _id: null
    })
    const [preview, setPreview] = useState(null)
    const [editId, setEditId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const { data, isLoading } = useGetAllSlidersQuery()
    // console.log('slider console=',data)
    const slides = data?.data || []
    // console.log(slides)

    const [createSlide] = useCreateSliderMutation()
    const [updateSlide] = useUpdateSliderMutation()
    const [deleteSlide] = useDeleteSliderMutation()



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
        setFormData({ title: '', subtitle: '', image: null, _id: null })
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
        if (formData.image) data.append('image', formData.image)

        try {
            if (editId) {
                await updateSlide({ id: editId, formData: data }).unwrap()
                toast.success('Slide updated')
            } else {
                await createSlide(data).unwrap()
                toast.success('Slide created')
            }
            resetForm()
        } catch (err) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (slide) => {
        setFormData({
            title: slide.title,
            subtitle: slide.subtitle,
            image: null,
            _id:slide._id
        })
        setPreview(slide.image)
        setEditId(slide._id)
        setIsModalOpen(true)
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            try {
                await deleteSlide(id).unwrap()
                toast.success('Deleted successfully')
            } catch (err) {
                toast.error('Failed to delete')
            }
        }
    }

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-gray-100 text-black">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Slides</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                >
                    + Add Slide
                </button>
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
                                <th className="p-3">Image</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Subtitle</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.slice().reverse().map((slide, index) => (
                                <tr key={slide._id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-medium">{index + 1}</td>
                                    <td className="p-3">
                                        <img
                                            src={slide.image?.url || '/placeholder.png'}
                                            alt={slide.title}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                    </td>
                                    <td className="p-3">{slide.title}</td>
                                    <td className="p-3">{slide.subtitle}</td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => handleEdit(slide)}
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(slide._id)}
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

            {/* Add/Edit Modal */}
            <EditModal
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