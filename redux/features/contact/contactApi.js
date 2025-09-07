import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ContactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['contact'],
    endpoints: (builder) => ({
        getAllContact: builder.query({
            query: () => '/contactdisplay',
            providesTags: ['contact']
        }),
        createContact: builder.mutation({
            query: (formData) => ({
                url: '/contactInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['contact'],
            })
        }),
        deleteContact: builder.mutation({
            query: (id, formData) => ({
                url: `/deleteContact/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useCreateContactMutation,
    useDeleteContactMutation,
    useGetAllContactQuery
} = ContactApi