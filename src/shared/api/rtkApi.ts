import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from 'shared/constants/API_KEY';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/v1.4',
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', API_KEY);

            return headers;
        },
    }),
    endpoints: () => ({}),
});