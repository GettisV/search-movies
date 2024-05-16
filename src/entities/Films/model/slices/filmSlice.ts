import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { filmResponseServerType } from 'features/GetFilms';
import { filmSchema } from '../types/film';

const initialState: filmSchema = {
    page: 1,
    filmsResponse: undefined,
    filmsResponseSearch: undefined,
    isLoading: true,
    isFetching: true,
};

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setFilmResponse(state, action: PayloadAction<filmResponseServerType | undefined>) {
            state.filmsResponse = action.payload;
        },
        setFilmResponseSearch(state, action: PayloadAction<filmResponseServerType | undefined>) {
            state.filmsResponseSearch = action.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
    },
});

export const filmReducer = filmSlice.reducer;
export const filmActions = filmSlice.actions;
