"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetAdminProfileQuery } from '/redux/features/adminAuth/adminAuthAPi';

export default function AdminDashboardPage() {
    const admin = useSelector(state => state.adminAuth.admin);
    const { data, isLoading } = useGetAdminProfileQuery(undefined, {
        skip: !admin?.token // ❌ Skip query agar token nahi hai
    });
    const router = useRouter();

    // Redirect to login if token missing
    useEffect(() => {
        if (!admin?.token) {
            router.push("/admin/login");
        }
    }, [admin, router]);

    // RTK Query to fetch dashboard data

    if (!admin?.token) return null; // redirect hone tak kuch render mat karo
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {admin?.name}!</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-lg font-semibold text-gray-600">Total Enrollments</h2>
                    <p className="text-2xl font-bold text-green-600 mt-2">{data?.totalEnroll}</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-lg font-semibold text-gray-600">New Signups</h2>
                    <p className="text-2xl font-bold text-sky-600 mt-2">15</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-lg font-semibold text-gray-600">Pending Requests</h2>
                    <p className="text-2xl font-bold text-red-600 mt-2">4</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
                <ul className="space-y-2 text-gray-600">
                    <li>User <b>{admin?.name}</b> signed up</li>
                    <li>3 new job applications received</li>
                    <li>1 request pending approval</li>
                    <li>System health: <span className="text-green-600 font-medium">Good</span></li>
                </ul>
            </div>
        </div>
    );
}
