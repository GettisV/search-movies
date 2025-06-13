import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from 'shared/constants/API_KEY';
import { findDuplicates } from 'shared/lib/findDuplicates';
import { filmResponseServerType } from '../../model/types/filmsResponseTypes';
import {
    filmArg, filmHomeArg,
} from '../../model/types/filmsTypes';

export const filmApi = createApi({
    reducerPath: 'filmApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: '',
        baseUrl: 'https://api.kinopoisk.dev/v1.4',
        prepareHeaders: (header) => {
            header.set('X-API-KEY', API_KEY);
        },
    }),
    endpoints: (build) => ({
        getFilm: build.query<filmResponseServerType, filmArg>({
            query: (params) => ({
                url: 'movie',
                params,
            }),
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems, { arg }) => {
                if (
                    currentCache.docs[0]?.type === arg.type
                    && !findDuplicates(currentCache.docs, newItems.docs)
                ) {
                    currentCache.docs.push(...newItems.docs);
                }
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
        getSearch: build.query({
            query: (params) => ({
                url: 'movie/search',
                params,
            }),
        }),
        getFilmsHomePage: build.query<filmResponseServerType, filmHomeArg>({
            query: (params) => ({
                url: 'movie',
                params,
            }),
        }),
    }),
});

export const {
    useGetFilmQuery, useGetFilmsHomePageQuery, useLazyGetSearchQuery,
} = filmApi;
