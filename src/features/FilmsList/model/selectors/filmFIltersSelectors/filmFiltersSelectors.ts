import { StateShema } from 'App/Providers/StoreProvider/config/StateSchema';

export const getFilmSelectSortValue = (state: StateShema) => state.filmsList.filmSelectSort;
export const getFilmSelectGenreFilterValue = (state: StateShema) => state.filmsList.filmSelectGenreFilter;
export const getFilmSelectCountryFilterValue = (state: StateShema) => state.filmsList.filmSelectСountriesFilter;
export const getFilmSelectReleaseFilterValue = (state: StateShema) => state.filmsList.filmSelectReleasedFilter;
