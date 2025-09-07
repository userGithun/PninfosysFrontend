"use client";

import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname()
    const [isAdminRoute, setIsAdminRoute] = useState(false)

    useEffect(() => {
        setIsAdminRoute(pathname.startsWith('/admin'))
    }, [pathname])

    return (
        <>
            {!isAdminRoute && <Header />}
            <main className="flex-grow">{children}
            <ToastContainer position="top-right" autoClose={3000} />
            </main>
            {!isAdminRoute && <Footer />}
        </>
    )
}