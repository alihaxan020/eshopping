import { BaseQueryFn, EndpointBuilder, EndpointDefinitions, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    /**
         * `reducerPath` is optional and will not be required by most users.
         * This is useful if you have multiple API definitions,
         * e.g. where each has a different domain, with no interaction between endpoints.
         * Otherwise, a single API definition should be used in order to support tag invalidation,
         * among other features
         */
    reducerPath: 'splitApi',
    baseQuery: async (args, api, extraOptions) => {
        try {
            const result = await fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' })(args, api, extraOptions);
            if (result.error) {
                console.error('Fetch error:', result.error);
            }
            return result;
        } catch (error) {
            console.error('Network request failed:', error);
            return { error: { status: 'FETCH_ERROR', error: 'Network request failed' } };
        }
    },
    tagTypes: ["products"],
    endpoints: () => ({})
})