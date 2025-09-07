'use client'

import React, { useState } from 'react'
import { useCreatePlacementMutation, useDeletePlacementMutation, useGetAllPlacementQuery, useUpdateplacementMutation } from '../../../../../redux/features/placement/placementAPi'
import PlacementModel from '@/component/PlacementModel'
import { toast } from 'react-toastify'

export default function SliderPage() {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        company: '',
        image: null,
        _id: null
    })
    const [preview, setPreview] = useState(null)
    const [editId, setEditId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const { data, isLoading } = useGetAllPlacementQuery()
    console.log(data)
    const place = data?.data || []
    // console.log(slides)

    const [createPlace] = useCreatePlacementMutation()
    const [updatePlace] = useUpdateplacementMutation()
    const [deletePlace] = useDeletePlacementMutation()



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
        setFormData({ name: '', position: '', company: '', image: null, _id: null })
        setPreview(null)
        setEditId(null)
        setIsModalOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.append('name', formData.name)
        data.append('position', formData.position)
        data.append('company', formData.company)
        if (formData.image) data.append('image', formData.image)

        try {
            if (editId) {
                await updatePlace({ id: editId, formData: data }).unwrap()
                toast.success('placement updated')
            } else {
                await createPlace(data).unwrap()
                toast.success('placement created')
            }
            resetForm()
        } catch (err) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (place) => {
        setFormData({
            name: place.name,
            position: place.position,
            company: place.company,
            image: null,
            _id: place._id
        })
        setPreview(place.image)
        setEditId(place._id)
        setIsModalOpen(true)
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            try {
                await deletePlace(id).unwrap()
                toast.success('Deleted successfully')
            } catch (err) {
                toast.error('Failed to delete')
            }
        }
    }

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-gray-100 text-black">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Placement</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                >
                    + Add Placement Info
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
                                <th className="p-3">Name</th>
                                <th className="p-3">position</th>
                                <th className="p-3">Company(Placed in)</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.slice().reverse().map((place, index) => (
                                <tr key={place._id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-medium">{index + 1}</td>
                                    <td className="p-3">
                                        <img
                                            src={place.image.url}
                                            alt={place.name}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                    </td>
                                    <td className="p-3">{place.name}</td>
                                    <td className="p-3">{place.position}</td>
                                    <td className="p-3">{place.company}</td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => handleEdit(place)}
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(place._id)}
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
            <PlacementModel
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