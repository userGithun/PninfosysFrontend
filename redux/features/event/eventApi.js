import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EventApi = createApi({
    reducerPath: 'EventApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['Event'],
    endpoints: (builder) => ({
        getAllEvent: builder.query({
            query: () => '/eventdisplay',
            providesTags: ['Event']
        }),
        createEvent: builder.mutation({
            query: (formData) => ({
                url: '/eventInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['Event'],
            })
        }),
        updateEvent: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/eventupdate/${id}`,
                method: 'PUT',
                body: formData,

            })
        }),
        viewEvent: builder.query({
            query: ({ id, formData }) => ({
                url: `/eventview/${id}`,
                method: 'POST',
                body: formData,

            })
        }),
        deleteEvent: builder.mutation({
            query: (id, formData) => ({
                url: `/eventdelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useCreateEventMutation,
    useGetAllEventQuery,
    useViewEventQuery,
    useUpdateEventMutation,
    useDeleteEventMutation
} = EventApi