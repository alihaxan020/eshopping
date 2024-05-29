import { api } from "@/redux/api";

const productApi = api.injectEndpoints({
    endpoints: (builder) => {
        return ({
            getProducts: builder.query({
                query: () => ({
                    url: '/products',
                    method: 'GET',

                }),
                providesTags: ["products"],
                transformResponse: (response: any) => {
                    console.log("leooo->", response)
                    return response
                }
            })
        })
    },

    // @ts-ignore
    overrideExisting: true,
})


export const { useGetProductsQuery } = productApi;

export const {
    endpoints: {
        getProducts
    }
} = productApi