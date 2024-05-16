import { rtkApi } from 'shared/api/rtkApi';
import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';
import { filmResponseServerType } from '../../model/types/filmsResponseTypes';
import { filmSearchArg } from '../../model/types/filmsTypes';

export const filmSearchApi = rtkApi.injectEndpoints({
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
