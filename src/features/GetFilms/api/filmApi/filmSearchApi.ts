import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';
import { API_KEY } from 'shared/constants/API_KEY';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { filmResponseServerType } from '../../model/types/filmsResponseTypes';
import { filmSearchArg } from '../../model/types/filmsTypes';

export const filmSearchApi = createApi({
    reducerPath: 'filmSearchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/v1.4',
        prepareHeaders: (header) => {
            header.set('X-API-KEY', API_KEY);
        },
    }),
    endpoints: (build) => ({
        getSearchFilm: build.query<filmResponseServerType, filmSearchArg>({
            query: ({
                searchText,
            }) => ({
                url: 'movie/search',
                params: removeEmptyValuesInObject({
                    query: searchText,
                }),
            }),
        }),
    }),
});

export const { useLazyGetSearchFilmQuery } = filmSearchApi;
