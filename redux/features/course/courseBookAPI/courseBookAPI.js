import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const CourseBookAPI = createApi({
    reducerPath: 'CourseBookAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['courseBook'],
    endpoints: (builder) => ({
        getAllCourseBook: builder.query({
            query: () => '/courseBookdisplay',
            providesTags: ['courseBook'],
        }),
        createCourseBook: builder.mutation({
            query: (formData) => ({
                url: '/courseBookInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['courseBook'],
            })
        }),
        deleteCourseBook: builder.mutation({
            query: (id, formData) => ({
                url: `/courseBookdelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
  useCreateCourseBookMutation,
  useDeleteCourseBookMutation,
  useGetAllCourseBookQuery
} = CourseBookAPI