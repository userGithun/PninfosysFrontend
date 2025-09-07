import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const PortfolioApi = createApi({
    reducerPath: 'PortfolioApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['Portfolio'],
    endpoints: (builder) => ({
        getAllPortfolio: builder.query({
            query: () => '/portfoliodisplay',
            providesTags: ['Portfolio'],
        }),
        createPortfo: builder.mutation({
            query: (formData) => ({
                url: '/portfolioInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['Portfolio'],
            })
        }),
        updatePortfo: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/portfolioupdate/${id}`,
                method: 'PUT',
                body: formData,

            })
        }),
        viewPortfo: builder.query({
            query: ({ id, formData }) => ({
                url: `/portfolioview/${id}`,
                method: 'POST',
                body: formData,

            })
        }),
        deletePortfo: builder.mutation({
            query: (id, formData) => ({
                url: `/portfoliodelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useGetAllPortfolioQuery,
    useCreatePortfoMutation,
    useDeletePortfoMutation,
    useUpdatePortfoMutation,
    useViewPortfoQuery

} = PortfolioApi