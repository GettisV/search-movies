import { filmArg, filmResponseServer } from 'features/FilmsList';
import { rtkApi } from 'shared/api/rtkApi';
import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';

export const filmApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFilm: build.query<filmResponseServer, filmArg>({
            query: ({
                limit,
                page,
                filmType,
                filmSort,
                filmFilterGenre,
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
                        'rating.kp': '6.5-10',
                        'votes.kp': '50000-6666666',
                    }),
                };

                return argsRequest;
            },
        }),
    }),

});

export const { useGetFilmQuery } = filmApi;
