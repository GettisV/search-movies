import { StateShema } from 'App/Providers/StoreProvider/config/StateSchema';

export const getFilmSelectSortValue = (state: StateShema) => state.filmsFilters.filmSelectSort;
export const getFilmSelectGenreFilterValue = (state: StateShema) => state.filmsFilters.filmSelectGenreFilter;
export const getFilmSelectCountryFilterValue = (state: StateShema) => state.filmsFilters.filmSelectСountriesFilter;
export const getFilmSelectReleaseFilterValue = (state: StateShema) => state.filmsFilters.filmSelectReleasedFilter;

export const getFilmSearchValue = (state: StateShema) => state.filmsFilters.filmSelectSearch;
