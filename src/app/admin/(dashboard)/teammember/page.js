'use client'

import React, { useState } from 'react'
import { useCreateTeamMemberMutation, useDeleteTeamMemberMutation, useGetAllTeamMemberQuery, useUpdateTeamMemberMutation } from '../../../../../redux/features/teamMembers'
import TeamMemModel from '@/component/TeamMemModel'
import { toast } from 'react-toastify'

export default function SliderPage() {
    const [formData, setFormData] = useState({
        name: '',
        desigation: '',
        image: null,
        _id: null
    })
    const [preview, setPreview] = useState(null)
    const [editId, setEditId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const { data, isLoading } = useGetAllTeamMemberQuery()
    const team = data?.data || []
    // console.log(slides)

    const [createTeam] = useCreateTeamMemberMutation()
    const [updateTeam] = useUpdateTeamMemberMutation()
    const [deleteTeam] = useDeleteTeamMemberMutation()



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
        setFormData({ name: '', desigation: '', image: null, _id: null })
        setPreview(null)
        setEditId(null)
        setIsModalOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.append('name', formData.name)
        data.append('desigation', formData.desigation)
        if (formData.image) data.append('image', formData.image)

        try {
            if (editId) {
                await updateTeam({ id: editId, formData: data }).unwrap()
                toast.success('Team Member updated')
            } else {
                await createTeam(data).unwrap()
                toast.success('Team Member Added')
            }
            resetForm()
        } catch (err) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (team) => {
        setFormData({
            name: team.name,
            desigation: team.desigation,
            image: null,
            _id: team._id
        })
        setPreview(team.image)
        setEditId(team._id)
        setIsModalOpen(true)
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            try {
                await deleteTeam(id).unwrap()
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
        <div className="p-4 md:p-6 lg:p-8 bg-gray-100  text-black">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Team Member</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                >
                    + Add Team Member
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
                                <th className="p-3">desigation</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData?.slice().reverse().map((team, index) => (
                                <tr key={team._id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-medium">
                                        {(currentPage - 1) * itemsPerPage + index + 1}
                                    </td>
                                    <td className="p-3">
                                        <img
                                            src={team.image.url}
                                            alt={team.name}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                    </td>
                                    <td className="p-3">{team.name}</td>
                                    <td className="p-3">{team.desigation}</td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => handleEdit(team)}
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(team._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

            )}

            {/* Add/Edit Modal */}
            <TeamMemModel
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