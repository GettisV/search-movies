import {
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions,
    filmSortSelectOptions,
    filmType,
} from 'entities/Films';

export interface filmArg {
    limit: number | string,
    page: number | string,
    sortType: number | string,
    notNullFields: string,
    'rating.kp': string;
    'votes.kp':string,
    type: filmType | string,
    year: number | string,
    sortField: filmSortSelectOptions | string,
    'genres.name': filmGenreFilterSelectOptions | string,
    'countries.name': filmCountriesFilterSelectOptions | string,
}

export type filmHomeArg = Partial<filmArg>

export interface filmSearchArg {
    searchText: string,
}

export interface filmFiltersSchema{
    filmSelectSort: filmSortSelectOptions;
    filmSelectGenreFilter: filmGenreFilterSelectOptions;
    filmSelectСountriesFilter: filmCountriesFilterSelectOptions;
    filmSelectReleasedFilter: string;
    filmSelectSearch: string;
}
