import { SECURE_TOKEN, getValueFor, logoutValue, setValueFor } from '@/utils/scoreStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { router } from 'expo-router';
export const IMAGE_BASE_URL = 'https://59f3-149-71-34-165.ngrok-free.app'
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
            const result = await fetchBaseQuery({
                baseUrl: 'https://59f3-149-71-34-165.ngrok-free.app/api',
                prepareHeaders: async (headers, { getState }) => {
                    // By default, if we have a token in the store, let's use that for authenticated requests
                    const token = await getValueFor(SECURE_TOKEN);
                    if (token) {
                        headers.set('Authorization', `Bearer ${token}`);
                    }
                    return headers;
                }

            })(args, api, extraOptions);
            if (result.error) {

                if (result.error.status === 401) {
                    await setValueFor(SECURE_TOKEN, '')
                    router.replace('/')
                }
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