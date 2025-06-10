import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { filmSortSelectOptions } from 'entities/Films';
import { API_KEY } from 'shared/constants/API_KEY';
import { findDuplicates } from 'shared/lib/findDuplicates';
import getFullYear from 'shared/lib/getCurrentYear';
import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';
import { filmDetailsResponseServerType } from '../../model/types/filmDetailsResponseServerType';
import { filmDetailsArg } from '../../model/types/filmDetailsTypes';
import { filmResponseServerType } from '../../model/types/filmsResponseTypes';
import {
    filmArg, filmHomeArg,
} from '../../model/types/filmsTypes';

export const filmApi = createApi({
    reducerPath: 'filmApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        // baseUrl: 'https://api.kinopoisk.dev/v1.4',
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
        getFilmsDetails: build.query<filmDetailsResponseServerType, filmDetailsArg>({
            query: ({ id }) => ({
                url: `movie/${id && id}`,
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

export const { useGetFilmQuery, useGetFilmsHomePageQuery, useGetFilmsDetailsQuery } = filmApi;
