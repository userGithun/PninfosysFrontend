"use client";
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useRegisterAdminMutation } from '../../../../redux/features/adminAuth/adminAuthAPi';



export default function AdminRegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const [registerAdmin, { isLoading }] = useRegisterAdminMutation()
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData)
            await registerAdmin(formData).unwrap()

            toast.success('Registration successful!')
            setTimeout(() => router.push('/admin/login'), 1000)
        } catch (err) {
            toast.error(err?.data?.message || err?.error || 'Registration failed')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Toaster position="top-right" />
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Admin Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 text-black py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-2 font-semibold rounded text-white transition-all duration-200 ${isLoading
                            ? 'bg-green-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700'
                            }`}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                                Registering...
                            </div>
                        ) : (
                            'Register'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}