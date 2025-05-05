import {
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions,
    filmSortSelectOptions,
    filmType,
} from 'entities/Films';

export interface filmArg {
    page: number,
    limit: number,
    filmType: filmType | string,
    filmSort: filmSortSelectOptions,
    filmFilterGenre: filmGenreFilterSelectOptions,
    filmFilterCountry: filmCountriesFilterSelectOptions,
    filmFilterRelease: string,
}

export type filmHomeArg = Partial<Pick<filmArg, 'filmFilterGenre' | 'filmType'>>

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
