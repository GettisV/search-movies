import {
    filmCountriesFilterSelectOptions, filmGenreFilterSelectOptions, filmReleaseFilterSelectOptions, filmSortSelectOptions, filmType,
} from 'entities/Films';

export enum DEFAULT_VALUES_SEARCH_PARAMS {
    limit = 10,
    page = 1,
    sort_type = -1,
    not_null_fields = 'poster.url',
    rating = '5-10',
    votes = '15000-6666666',
    type = filmType.FILMS,
    year = '',
    sort_field = filmSortSelectOptions.ratingBy,
    genres = filmGenreFilterSelectOptions.all,
    countries = filmCountriesFilterSelectOptions.all,
}

export enum FIELDS_SEARCH_PARAMS {
    limit='limit',
    page='page',
    sortType='sortType',
    notNullFields='notNullFields',
    rating = 'rating.kp',
    votes = 'votes.kp',
    year='year',
    type='type',
    sortField='sortField',
    genres = 'genres.name',
    countries = 'countries.name',
}
