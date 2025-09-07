import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const PlacementApi = createApi({
    reducerPath: 'PlacementApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['placement'],
    endpoints: (builder) => ({
        getAllPlacement: builder.query({
            query: () => '/placementdisplay',
            providesTags: ['placement'],
        }),
        createPlacement: builder.mutation({
            query: (formData) => ({
                url: '/placementInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['placement'],
            })
        }),
        updateplacement: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/placementupdate/${id}`,
                method: 'PUT',
                body: formData,

            })
        }),
        viewplacement: builder.query({
            query: ({ id, formData }) => ({
                url: `/placementview/${id}`,
                method: 'POST',
                body: formData,

            })
        }),
        deletePlacement: builder.mutation({
            query: (id, formData) => ({
                url: `/placementdelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useCreatePlacementMutation,
    useGetAllPlacementQuery,
    useDeletePlacementMutation,
    useViewplacementQuery,
    useUpdateplacementMutation

} = PlacementApi