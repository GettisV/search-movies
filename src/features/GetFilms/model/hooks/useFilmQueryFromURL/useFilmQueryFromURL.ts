import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { removeEmptyValuesInObject } from 'shared/lib/removeEmptyValuesInObject';
import { DEFAULT_VALUES_SEARCH_PARAMS, FIELDS_SEARCH_PARAMS } from '../../../consts/VALUES_FIELDS_SEARCH_PARAMS';
import { filmArg } from '../../types/filmsTypes';

export function useFilmQueryFromURL() {
    const [searchParams] = useSearchParams();

    const queryArgs = useMemo<filmArg>(() => (removeEmptyValuesInObject<filmArg>({
        [FIELDS_SEARCH_PARAMS.limit]: searchParams.get(FIELDS_SEARCH_PARAMS.limit) || DEFAULT_VALUES_SEARCH_PARAMS.limit,
        [FIELDS_SEARCH_PARAMS.page]: searchParams.get(FIELDS_SEARCH_PARAMS.page) || DEFAULT_VALUES_SEARCH_PARAMS.page,
        [FIELDS_SEARCH_PARAMS.sortType]: searchParams.get(FIELDS_SEARCH_PARAMS.sortType) || DEFAULT_VALUES_SEARCH_PARAMS.sort_type,
        [FIELDS_SEARCH_PARAMS.notNullFields]:
            searchParams.get(FIELDS_SEARCH_PARAMS.notNullFields) || DEFAULT_VALUES_SEARCH_PARAMS.not_null_fields,
        [FIELDS_SEARCH_PARAMS.rating]: searchParams.get(FIELDS_SEARCH_PARAMS.rating) || DEFAULT_VALUES_SEARCH_PARAMS.rating,
        [FIELDS_SEARCH_PARAMS.votes]: searchParams.get(FIELDS_SEARCH_PARAMS.votes) || DEFAULT_VALUES_SEARCH_PARAMS.votes,
        [FIELDS_SEARCH_PARAMS.year]: searchParams.get(FIELDS_SEARCH_PARAMS.year) || DEFAULT_VALUES_SEARCH_PARAMS.year,
        [FIELDS_SEARCH_PARAMS.type]: searchParams.get(FIELDS_SEARCH_PARAMS.type) || DEFAULT_VALUES_SEARCH_PARAMS.type,
        [FIELDS_SEARCH_PARAMS.sortField]: searchParams.get(FIELDS_SEARCH_PARAMS.sortField) || DEFAULT_VALUES_SEARCH_PARAMS.sort_field,
        [FIELDS_SEARCH_PARAMS.genres]: searchParams.get(FIELDS_SEARCH_PARAMS.genres) || DEFAULT_VALUES_SEARCH_PARAMS.genres,
        [FIELDS_SEARCH_PARAMS.countries]: searchParams.get(FIELDS_SEARCH_PARAMS.countries) || DEFAULT_VALUES_SEARCH_PARAMS.countries,

        // eslint-disable-next-line react-hooks/exhaustive-deps
    })), [searchParams]);

    return queryArgs;
}
