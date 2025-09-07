'use client'

import React from 'react'

export default function CourseModal({
    isOpen,
    closeModal,
    formData,
    handleChange,
    handleSubmit,
    preview,
    loading
}) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded shadow-lg p-6 relative">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {formData._id ? 'Edit Data' : 'Add New Course'}
                    </h2>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-800 text-xl font-bold"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Date (Start from)</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50"
                        />
                    </div>

                    {preview && (
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Preview:</p>
                            <img
                                src={preview.url}
                                alt="Preview"
                                className="h-32 rounded border object-contain"
                            />
                        </div>
                    )}

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            disabled={loading}
                            className="bg-gray-400 duration-200 cursor-pointer hover:bg-red-500 text-white px-4 py-2 rounded disabled:opacity-60"
                        >
                            Cancel
                        </button>
                       
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-500 duration-200 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                    {formData._id ? 'Updating...' : 'Adding...'}
                                </>
                            ) : (
                                formData._id ? 'Update' : 'Add'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}