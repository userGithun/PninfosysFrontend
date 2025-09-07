import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const TechnologyApi = createApi({
    reducerPath: 'technologyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['technology'],
    endpoints: (builder) => ({
        getAllTechnology: builder.query({
            query: () => '/technologydisplay',
            providesTags: ['technology'],
        }),
        createTechno: builder.mutation({
            query: (formData) => ({
                url: '/technologyInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['technology'],
            })
        }),
        updateTechno: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/technologyupdate/${id}`,
                method: 'PUT',
                body: formData,
                
            })
        }),
        viewTechno: builder.query({
            query: ({ id, formData }) => ({
                url: `/technologyview/${id}`,
                method: 'POST',
                body: formData,
               
            })
        }),
        deleteTechno: builder.mutation({
            query: (id, formData) => ({
                url: `/technologydelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useGetAllTechnologyQuery,
    useCreateTechnoMutation,
    useDeleteTechnoMutation,
    useUpdateTechnoMutation,
    useViewTechnoQuery
} = TechnologyApi