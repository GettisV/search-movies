import {
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import {
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions,
    filmReleaseFilterSelectOptions,
    filmSortSelectOptions,
} from 'entities/Films';
import { filmFiltersSchema } from '../../types/filmsTypes';

const initialState: filmFiltersSchema = {
    filmSelectSort: filmSortSelectOptions.dateBy,
    filmSelectGenreFilter: filmGenreFilterSelectOptions.all,
    filmSelectСountriesFilter: filmCountriesFilterSelectOptions.all,
    filmSelectReleasedFilter: filmReleaseFilterSelectOptions.all,
    filmSelectSearch: '',
};

export const filmsFiltersSlice = createSlice({
    name: 'films filters',
    initialState,
    reducers: {
        sortSelect(state, action: PayloadAction<filmSortSelectOptions>) {
            state.filmSelectSort = action.payload;
        },
        genreFilter(state, action: PayloadAction<filmGenreFilterSelectOptions>) {
            state.filmSelectGenreFilter = action.payload;
        },
        countriesFilter(state, action: PayloadAction<filmCountriesFilterSelectOptions>) {
            state.filmSelectСountriesFilter = action.payload;
        },
        releasedFilter(state, action: PayloadAction<string>) {
            state.filmSelectReleasedFilter = action.payload;
        },
        searchFilm(state, action: PayloadAction<string>) {
            state.filmSelectSearch = action.payload;
        },
    },
});

export const filmsFiltersReducer = filmsFiltersSlice.reducer;
export const filmsFiltersActions = filmsFiltersSlice.actions;
