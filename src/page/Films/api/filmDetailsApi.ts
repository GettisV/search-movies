import { rtkApi } from 'shared/api/rtkApi';
import { filmDetailsResponseServerType } from '../types/filmDetailsResponseServerType';
import { filmDetailsArg } from '../types/filmDetailsTypes';

export const filmDetailsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFilmDetais: build.query<filmDetailsResponseServerType, filmDetailsArg>({
            query: ({ id }) => ({
                url: `movie/${id && id}`,
            }),
        }),
    }),
});

export const { useGetFilmDetaisQuery } = filmDetailsApi;
