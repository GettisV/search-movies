import { filmArg, filmResponseServer } from 'features/FilmsList';
import { rtkApi } from 'shared/api/rtkApi';
import { lineSplitting } from 'shared/lib/lineSplitting';
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
        }),
    }),

});

export const { useGetFilmQuery } = filmApi;
