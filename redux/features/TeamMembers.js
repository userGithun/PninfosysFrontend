import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TeamMembersApi = createApi({
    reducerPath: 'TeamMembersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL_LIVE
    }),
    tagTypes: ['TeamMember'],
    endpoints: (builder) => ({
        getAllTeamMember: builder.query({
            query: () => '/teamdisplay',
            providesTags: ['TeamMember']
        }),
        createTeamMember: builder.mutation({
            query: (formData) => ({
                url: '/teamInsert',
                method: 'POST',
                body: formData,
                invalidatesTags: ['TeamMember'],
            })
        }),
        updateTeamMember: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/teamupdate/${id}`,
                method: 'PUT',
                body: formData,

            })
        }),
        viewTeamMember: builder.query({
            query: ({ id, formData }) => ({
                url: `/teamview/${id}`,
                method: 'POST',
                body: formData,

            })
        }),
        deleteTeamMember: builder.mutation({
            query: (id, formData) => ({
                url: `/teamdelete/${id}`,
                method: 'DELETE',
                body: formData,
            }),
        }),
    }),
})

export const {

    useCreateTeamMemberMutation,
    useGetAllTeamMemberQuery,
    useViewTeamMemberQuery,
    useUpdateTeamMemberMutation,
    useDeleteTeamMemberMutation

} = TeamMembersApi