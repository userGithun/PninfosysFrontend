import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const sliderApi = createApi({
    reducerPath: 'sliderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['Slider'],
    endpoints: (builder) => ({
        getAllSliders: builder.query({
            query: () => '/sliderdisplay',
            providesTags: ['Slider'],
        }),
        createSlider: builder.mutation({
            query: (formData) => ({
                url: '/sliderInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['Slider'],

            })
        }),
        updateSlider: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/sliderupdate/${id}`,
                method: 'PUT',
                body: formData,
            })
        }),
        viewSlider: builder.query({
            query: ({ id, formData }) => ({
                url: `/sliderview/${id}`,
                method: 'POST',
                body: formData,
            })
        }),
        deleteSlider: builder.mutation({
            query: (id, formData) => ({
                url: `/sliderdelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useCreateSliderMutation,
    useGetAllSlidersQuery,
    useViewSliderQuery,
    useUpdateSliderMutation,
    useDeleteSliderMutation
} = sliderApi