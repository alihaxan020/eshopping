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
            const result = await fetchBaseQuery({ baseUrl: 'https://4cc7-149-71-34-199.ngrok-free.app/api' })(args, api, extraOptions);
            if (result.error) {
                return { error: result.error };
            }
            return result;
        } catch (error) {

            return { error: { status: 'FETCH_ERROR', error: 'Network request failed' } };
        }
    },
    tagTypes: ["products", "users"],
    endpoints: () => ({})
})