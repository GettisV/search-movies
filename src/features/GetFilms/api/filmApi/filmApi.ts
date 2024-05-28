import { API_KEY } from 'shared/constants/API_KEY';
import { findDuplicates } from 'shared/lib/findDuplicates';
import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { filmDetailsResponseServerType } from '../../model/types/filmDetailsResponseServerType';
import { filmDetailsArg } from '../../model/types/filmDetailsTypes';
import { filmResponseServerType } from '../../model/types/filmsResponseTypes';
import { filmArg } from '../../model/types/filmsTypes';

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
                        'rating.kp': '5.5-10',
                        'votes.kp': '10000-6666666',
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
        getFilmDetais: build.query<filmDetailsResponseServerType, filmDetailsArg>({
            query: ({ id }) => ({
                url: `movie/${id && id}`,
            }),
        }),
    }),
});

export const { useGetFilmQuery, useGetFilmDetaisQuery } = filmApi;
