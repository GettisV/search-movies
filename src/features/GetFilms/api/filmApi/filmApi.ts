import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { filmSortSelectOptions } from 'entities/Films';
import { API_KEY } from 'shared/constants/API_KEY';
import { findDuplicates } from 'shared/lib/findDuplicates';
import getFullYear from 'shared/lib/getFullYear';
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
        baseUrl: 'https://api.kinopoisk.dev/v1.4',
        prepareHeaders: (header) => {
            header.set('X-API-KEY', API_KEY);
        },
    }),
    endpoints: (build) => ({
        getFilm: build.query<filmResponseServerType, filmArg>({
            query: ({
                limit,
                page,
                filmType,
                filmSort,
                filmFilterGenre,
                filmFilterCountry,
                filmFilterRelease,
            }) => {
                const argsRequest = {
                    url: 'movie',
                    params: removeEmptyValuesInObject({
                        limit,
                        page,
                        sortField: filmSort,
                        sortType: -1,
                        type: filmType,
                        notNullFields: 'poster.url',
                        'genres.name': filmFilterGenre,
                        'countries.name': filmFilterCountry,
                        'rating.imdb': '5-10',
                        'votes.imdb': '20000-6666666',
                        year: filmFilterRelease,
                    }),
                };

                return argsRequest;
            },
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems, { arg }) => {
                if (
                    currentCache.docs[0]?.type === arg.filmType
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
            query: ({
                filmType,
                filmFilterGenre,
            }) => {
                const argsRequest = {
                    url: 'movie',
                    params: removeEmptyValuesInObject({
                        limit: 10,
                        sortField: filmSortSelectOptions.ratingBy,
                        sortType: -1,
                        type: filmType,
                        notNullFields: 'poster.url',
                        'genres.name': filmFilterGenre,
                        'rating.imdb': '6-10',
                        'votes.imdb': '40000-6666666',
                        year: `${getFullYear() - 1}-${getFullYear()}`,
                    }),
                };

                return argsRequest;
            },
        }),
    }),
});

export const { useGetFilmQuery, useGetFilmsHomePageQuery, useGetFilmsDetailsQuery } = filmApi;
