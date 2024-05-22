import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { filmResponseServerType } from 'features/GetFilms';
import { filmSearchSchema } from '../types/film';

const initialState: filmSearchSchema = {
    filmsSearchResponse: undefined,
    isLoading: true,
    isFetching: true,
    isSuccess: false,
};

export const filmSearchSlice = createSlice({
    name: 'filmSearch',
    initialState,
    reducers: {
        setFilmSearchResponse(state, action: PayloadAction<filmResponseServerType | undefined>) {
            state.filmsSearchResponse = action.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
        setIsSuccess(state, action: PayloadAction<boolean>) {
            state.isSuccess = action.payload;
        },
    },
});

export const filmSearchReducer = filmSearchSlice.reducer;
export const filmSearchActions = filmSearchSlice.actions;
