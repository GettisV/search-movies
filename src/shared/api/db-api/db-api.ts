import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ArgsProps{
    id?: string,
    login: string,
    password: string,
    email?: string,
}

export const DB_API = createApi({
    reducerPath: 'db_api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getUser: builder.query<any, ArgsProps>({
            query: ({ login, password }) => `/users?login=${login}&password=${password}`,
        }),
        addUser: builder.mutation<any, ArgsProps>({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body,
            }),
        }),
        editUser: builder.mutation<any, ArgsProps>({
            query: ({ id, ...patch }) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
});

export const {
    useGetUserQuery, useLazyGetUserQuery, useAddUserMutation, useEditUserMutation,
} = DB_API;
