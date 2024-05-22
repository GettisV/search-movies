import { rtkApi } from 'shared/api/rtkApi';
import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';
import { filmResponseServerType } from '../../model/types/filmsResponseTypes';
import { filmArg } from '../../model/types/filmsTypes';

export const filmApi = rtkApi.injectEndpoints({
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
                if (currentCache.docs[0]?.type === arg.filmType) {
                    currentCache.docs.push(...newItems.docs);
                } else {
                    currentCache.docs = [...newItems.docs];
                }
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),

});

export const { useGetFilmQuery } = filmApi;
