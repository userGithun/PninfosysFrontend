import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminAuthApi = createApi({
    reducerPath: 'adminAuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_API_URL_LIVE,
        credentials: 'include'
    }),
    tagTypes: ['AdminAuth'],
    endpoints: (builder) => ({
        // Admin Login
        loginAdmin: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['AdminAuth'],
        }),
        //Admin Register
        registerAdmin: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            })
        }),

        //Get Admin Profile
        getAdminProfile: builder.query({
            query: () => '/profile',
            providesTags: ['AdminAuth']
        }),
        //Logout
        logoutAdmin: builder.mutation({
            query: () => ({
                url: '/admin/logout',
                method: 'POST'
            }),
            invalidatesTags: ['AdminAuth']
        }),
        forgetAdminPass: builder.mutation({
            query:(data) =>({
                url:'/forget-password',
                method:'POST',
                body:data,
            })
        })
    })
})

export const { useRegisterAdminMutation, useLoginAdminMutation, useGetAdminProfileQuery, useLogoutAdminMutation,useForgetAdminPassMutation } = adminAuthApi