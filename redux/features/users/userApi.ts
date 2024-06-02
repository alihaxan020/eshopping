import { api } from "@/redux/api";

const userApi = api.injectEndpoints({
    endpoints: (builder) => {
        return ({
            login: builder.mutation({
                query: (body) => ({
                    url: '/login',
                    method: 'POST',
                    body
                }),
                transformResponse: (response: any) => {
                    console.log("response: ", response)
                    return response.data
                }
            }),
            register: builder.mutation({
                query: (body) => ({
                    url: '/signup',
                    method: "POST",
                    body
                }),
                transformResponse: (response: any) => {
                    return response.data
                }
            }),
            profile: builder.query({
                query: () => ({
                    url: "/profile",
                    method: 'GET'
                }),
                transformResponse: (response: any) => {
                    console.log('====================================');
                    console.log(response.data);
                    console.log('====================================');
                    return response.data
                },

            }),
            updateProfile: builder.mutation({
                query: (body) => ({
                    url: 'updateProfile',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body
                }),
                transformResponse: (response: any) => {
                    console.log('====================================');
                    console.log(response.data);
                    console.log('====================================');
                    return response.data
                },

            })

        })
    },
    // @ts-ignore
    overrideExisting: true,
})


export const { useLoginMutation, useRegisterMutation, useProfileQuery, useUpdateProfileMutation } = userApi;

export const {
    endpoints: {
        login,
        register,
        profile,
        updateProfile
    }
} = userApi