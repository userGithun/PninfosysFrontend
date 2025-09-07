import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const CourseAPI = createApi({
    reducerPath: 'CourseAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['course'],
    endpoints: (builder) => ({
        getAllCourse: builder.query({
            query: () => '/coursedisplay',
            providesTags: ['course'],
        }),
        createCourse: builder.mutation({
            query: (formData) => ({
                url: '/courseInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['course'],
            })
        }),
        updateCourse: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/courseupdate/${id}`,
                method: 'PUT',
                body: formData,

            })
        }),
        viewCourse: builder.query({
            query: (id) => ({
                url: `/courseview/${id}`,

            })
        }),
        deleteCourse: builder.mutation({
            query: (id, formData) => ({
                url: `/coursedelete/${id}`,
                method: 'DELETE',
                body: formData,
            })
        }),
    })
})

export const {
    useCreateCourseMutation,
    useGetAllCourseQuery,
    useDeleteCourseMutation,
    useViewCourseQuery,
    useUpdateCourseMutation
} = CourseAPI