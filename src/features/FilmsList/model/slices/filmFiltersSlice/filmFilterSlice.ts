import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    filmFilterSelectOptions,
    filmFiltersSchema,
    filmSortSelectOptions,
} from '../../types/filmFiltersTypes';

const initialState: filmFiltersSchema = {
    filmSelectSort: filmSortSelectOptions.dateBy,
    filmSelectGenreFilter: filmFilterSelectOptions.all,
    filmSelectСountriesFilter: '',
    filmSelectReleasedFilter: '',
};

export const filmsListSlice = createSlice({
    name: 'filmsList',
    initialState,
    reducers: {
        sortSelect(state, action: PayloadAction<filmSortSelectOptions>) {
            state.filmSelectSort = action.payload;
        },
        genreFilter(state, action: PayloadAction<filmFilterSelectOptions>) {
            state.filmSelectGenreFilter = action.payload;
        },
        // countriesFilter(state, action: PayloadAction<>) {
        //     state.filmSelectСountriesFilter = action.payload;
        // },
        // releasedFilter(state, action: PayloadAction<>) {
        //     state.filmSelectReleasedFilter = action.payload;
        // },
    },
});

export const filmsListReducer = filmsListSlice.reducer;
export const filmsListActions = filmsListSlice.actions;
