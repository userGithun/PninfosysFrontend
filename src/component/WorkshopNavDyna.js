import React, { useState } from "react";
import { useCreateCollegeMutation, useGetAllCollegeQuery } from "../../redux/features/workshop/workshopApi";

export default function WorkShopNavDyna() {
    const { data: workshops = [], isLoading } = useGetAllCollegeQuery();
    const [addWorkshop] = useCreateCollegeMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        collegename: "",
        name: "",
        heading: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { collegename, name, heading } = formData;

        if (!collegename.trim() || !name.trim() || !heading.trim()) {
            alert("All fields are required");
            return;
        }

        try {
            await addWorkshop(formData).unwrap();
            setFormData({ collegename: "", name: "", heading: "" });
            setIsModalOpen(false);
        } catch (err) {
            console.error("Error adding workshop:", err);
        }
    };

    return (
        <div className="text-white">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl">Workshops</h3>
                <button
                    className="bg-emerald-600 hover:bg-emerald-800 cursor-pointer text-white px-3 py-1 rounded text-sm"
                    onClick={() => setIsModalOpen(true)}
                >
                    Add New
                </button>
            </div>

            {workshops.length > 0 ? (
                <ul>
                    {workshops.slice().reverse().map((item, index) => (
                        <li key={`outer-${item.slug}`}>
                            <ul className="text-white pb-2">
                                <li key={`inner-${item.slug}`}>
                                    <a
                                        className="hover:bg-white/20 p-2 rounded"
                                        href={`/admin/workshop/${item.slug}/add_details`}
                                    >
                                        {index + 1}. {item.collegename}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>

            ) : (
                <p>No workshops yet.</p>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-lg font-bold mb-4 text-gray-800">
                            Add New Workshop
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter college name"
                                name="collegename"
                                value={formData.collegename}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            />
                            <input
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            />
                            <input
                                type="text"
                                placeholder="Enter heading"
                                name="heading"
                                value={formData.heading}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            />

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
