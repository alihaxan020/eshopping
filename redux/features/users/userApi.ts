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
            })

        })
    },
    // @ts-ignore
    overrideExisting: true,
})


export const { useLoginMutation, useRegisterMutation } = userApi;

export const {
    endpoints: {
        login,
        register
    }
} = userApi