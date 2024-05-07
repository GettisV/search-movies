import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    filmCountriesFilterSelectOptions,
    filmFiltersSchema,
    filmGenreFilterSelectOptions,
    filmReleaseFilterSelectOptions,
    filmSortSelectOptions,
} from '../../types/filmFiltersTypes';

const initialState: filmFiltersSchema = {
    filmSelectSort: filmSortSelectOptions.dateBy,
    filmSelectGenreFilter: filmGenreFilterSelectOptions.all,
    filmSelectСountriesFilter: filmCountriesFilterSelectOptions.all,
    filmSelectReleasedFilter: filmReleaseFilterSelectOptions.all,
};

export const filmsListSlice = createSlice({
    name: 'filmsList',
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
    },
});

export const filmsListReducer = filmsListSlice.reducer;
export const filmsListActions = filmsListSlice.actions;
