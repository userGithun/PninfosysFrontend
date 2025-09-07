import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const WorkshopApi = createApi({
    reducerPath: 'WorkshopApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['College', 'Workshop'],
    endpoints: (builder) => ({

        // One time insert (college name, banner, header)
        createCollege: builder.mutation({
            query: (formData) => ({
                url: '/college',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['College'],
        }),

        // Get all colleges
        getAllCollege: builder.query({
            query: () => '/collegedisplay',
            providesTags: ['College'],
        }),

        // Get college by slug
        getCollegeBySlug: builder.query({
            query: (slug) => `/collegeview/${slug}`,
            providesTags: (result, error, slug) => [{ type: "College", id: slug }],
        }),

        // Update college by slug
        updateCollege: builder.mutation({
            query: ({ slug, data }) => ({
                url: `/college/${slug}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (result, error, { slug }) => [
                { type: "College", id: slug },
                "College"
            ],
        }),

        // Delete college by slug
        deleteCollege: builder.mutation({
            query: (slug) => ({
                url: `/college/${slug}`,
                method: "DELETE",
            }),
            invalidatesTags: ["College"],
        }),

        // Upload images by slug
        uploadImageBySlug: builder.mutation({
            query: ({ slug, formData }) => ({
                url: `/upload/${slug}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: (result, error, { slug }) => [
                { type: "College", id: slug },
                "Workshop"
            ],
        }),

        // Get workshop data by slug (college + all images)
        getWorkshopBySlug: builder.query({
            query: (slug) => `/collegeview/${slug}`,
            providesTags: (result, error, slug) => [
                { type: "Workshop", id: slug }
            ],
        }),
        deleteImage: builder.mutation({
            query: ({ slug, public_id }) => ({
                url: `/imagedelete/${slug}`,
                method: "DELETE",
                body: { public_id },   // body ke andar bhejna zaruri hai
            }),
            invalidatesTags: ["Workshop"],
        }),



    })
});

export const {
    useGetCollegeBySlugQuery,
    useUpdateCollegeMutation,
    useDeleteCollegeMutation,
    useGetAllCollegeQuery,
    useCreateCollegeMutation,
    useUploadImageBySlugMutation,
    useGetWorkshopBySlugQuery,
    useDeleteImageMutation
} = WorkshopApi;
