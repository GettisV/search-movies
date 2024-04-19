import { getFilmArg, getFilmType } from 'features/FilmsList';
import { rtkApi } from 'shared/api/rtkApi';

export const filmApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFilm: build.query<getFilmType[], getFilmArg>({
            query: ({ limit, page, typeFilm }) => ({
                url: `${typeFilm}`,
                params: {
                    _limit: limit,
                    _page: page,
                },
            }),
        }),
    }),

});

export const { useGetFilmQuery } = filmApi;
