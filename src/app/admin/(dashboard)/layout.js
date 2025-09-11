"use client"
import React from 'react';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/component/Sidebar'
import AdminNavbar from '@/component/AdminNavbar'
import Footer from '@/component/Footer'
import { useGetAdminProfileQuery } from '../../../../redux/features/adminAuth/adminAuthAPi'

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()

    const { data, error, isLoading } = useGetAdminProfileQuery()

    useEffect(() => {
        if (!isLoading && (!data || !data.user)) {
            router.push('/admin/login')   // Redirect if no admin data
        }
    }, [data, isLoading, router])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600 text-lg">Checking authentication...</p>
            </div>
        )
    }

    if (!data?.user) {
        return null    // Prevent flash of content before redirect
    }

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <Sidebar closeSidebar={() => setSidebarOpen(false)} />

            {/* Main Area */}
            <div className="flex flex-col flex-1 min-h-screen">
                <AdminNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <main className="flex-grow p-4">
                    {React.cloneElement(children, { user: data?.user })}
                </main>
            </div>
        </div>
    )
}
